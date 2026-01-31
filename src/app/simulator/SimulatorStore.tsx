import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  addRecipient,
  addTransaction,
  getRecipients,
  getTransactions,
  Recipient,
  Transaction,
} from "@/app/api/fakeApi";

export type RecipientDraft = {
  firstName: string;
  lastName: string;
  mobile: string;
  nationality: string;
  relationship: string;
  country: string;
  currencyCode: string;
  accountNumber: string;
  ifsc: string;
};

type SimulatorContextValue = {
  recipients: Recipient[];
  transactions: Transaction[];
  isBootstrapping: boolean;
  recipientDraft: RecipientDraft;
  setRecipientDraft: (partial: Partial<RecipientDraft>) => void;
  clearRecipientDraft: () => void;
  createRecipient: (draft: Omit<Recipient, "id" | "createdAt">) => Promise<Recipient>;
  recordTransaction: (params: Omit<Transaction, "id" | "createdAt" | "status">) => Promise<Transaction>;
};

const EMPTY_DRAFT: RecipientDraft = {
  firstName: "",
  lastName: "",
  mobile: "",
  nationality: "",
  relationship: "",
  country: "",
  currencyCode: "",
  accountNumber: "",
  ifsc: "",
};

const sortByNewest = (items: Transaction[]) =>
  items.slice().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

const SimulatorContext = createContext<SimulatorContextValue | undefined>(undefined);

export function SimulatorProvider({ children }: { children: ReactNode }) {
  const [recipients, setRecipients] = useState<Recipient[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [recipientDraft, setRecipientDraftState] = useState<RecipientDraft>(EMPTY_DRAFT);
  const [isBootstrapping, setIsBootstrapping] = useState(true);

  useEffect(() => {
    let mounted = true;
    const bootstrap = async () => {
      try {
        const [loadedRecipients, loadedTransactions] = await Promise.all([
          getRecipients(),
          getTransactions(),
        ]);
        if (!mounted) return;
        setRecipients(loadedRecipients);
        setTransactions(loadedTransactions);
      } catch {
        if (!mounted) return;
        setRecipients([]);
        setTransactions([]);
      } finally {
        if (mounted) setIsBootstrapping(false);
      }
    };

    bootstrap();
    return () => {
      mounted = false;
    };
  }, []);

  const createRecipient = async (draft: Omit<Recipient, "id" | "createdAt">) => {
    const created = await addRecipient(draft);
    setRecipients((prev) => [created, ...prev]);
    return created;
  };

  const recordTransaction = async (params: Omit<Transaction, "id" | "createdAt" | "status">) => {
    const created = await addTransaction(params);
    setTransactions((prev) => sortByNewest([created, ...prev]));
    return created;
  };

  const setRecipientDraft = (partial: Partial<RecipientDraft>) => {
    setRecipientDraftState((prev) => ({ ...prev, ...partial }));
  };

  const clearRecipientDraft = () => setRecipientDraftState(EMPTY_DRAFT);

  const value = useMemo(
    () => ({
      recipients,
      transactions,
      isBootstrapping,
      recipientDraft,
      setRecipientDraft,
      clearRecipientDraft,
      createRecipient,
      recordTransaction,
    }),
    [recipients, transactions, isBootstrapping, recipientDraft]
  );

  return <SimulatorContext.Provider value={value}>{children}</SimulatorContext.Provider>;
}

export function useSimulator() {
  const context = useContext(SimulatorContext);
  if (!context) {
    throw new Error("useSimulator must be used within a SimulatorProvider");
  }
  return context;
}
