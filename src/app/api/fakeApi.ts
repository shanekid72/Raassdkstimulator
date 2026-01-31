export type Recipient = {
  id: string;
  firstName: string;
  lastName: string;
  mobile: string;
  nationality: string;
  relationship: string;
  country: string;
  currencyCode: string;
  payoutMethod: "bank";
  accountNumber: string;
  ifsc: string;
  createdAt: string;
};

export type Transaction = {
  id: string;
  amountAED: number;
  receiveAmount: number;
  receiveCurrencyCode: string;
  rate: number;
  recipientId: string;
  recipientName: string;
  status: "completed";
  createdAt: string;
};

const RECIPIENTS_KEY = "raas_sim_recipients_v1";
const TRANSACTIONS_KEY = "raas_sim_transactions_v1";

export const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

const getRandomDelay = () => 200 + Math.floor(Math.random() * 1001);

export const withLatency = async <T,>(fn: () => T | Promise<T>): Promise<T> => {
  await sleep(getRandomDelay());
  return await fn();
};

const storageAvailable = () => typeof window !== "undefined" && typeof window.localStorage !== "undefined";

const parseArray = <T,>(raw: string | null): T[] => {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
};

const readArray = <T,>(key: string): T[] => {
  if (!storageAvailable()) return [];
  return parseArray<T>(window.localStorage.getItem(key));
};

const writeArray = <T,>(key: string, value: T[]) => {
  if (!storageAvailable()) return;
  window.localStorage.setItem(key, JSON.stringify(value));
};

const generateId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `id_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
};

const sortByNewest = <T extends { createdAt: string }>(items: T[]) =>
  items.slice().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

export const getRecipients = (): Promise<Recipient[]> =>
  withLatency(() => readArray<Recipient>(RECIPIENTS_KEY));

export const addRecipient = (recipient: Omit<Recipient, "id" | "createdAt">): Promise<Recipient> =>
  withLatency(() => {
    const next: Recipient = {
      ...recipient,
      id: generateId(),
      createdAt: new Date().toISOString(),
    };
    const updated = [next, ...readArray<Recipient>(RECIPIENTS_KEY)];
    writeArray(RECIPIENTS_KEY, updated);
    return next;
  });

export const getTransactions = (): Promise<Transaction[]> =>
  withLatency(() => sortByNewest(readArray<Transaction>(TRANSACTIONS_KEY)));

export const addTransaction = (
  tx: Omit<Transaction, "id" | "createdAt" | "status">
): Promise<Transaction> =>
  withLatency(() => {
    const next: Transaction = {
      ...tx,
      id: generateId(),
      status: "completed",
      createdAt: new Date().toISOString(),
    };
    const updated = sortByNewest([next, ...readArray<Transaction>(TRANSACTIONS_KEY)]);
    writeArray(TRANSACTIONS_KEY, updated);
    return next;
  });

export const clearAll = (): Promise<void> =>
  withLatency(() => {
    if (!storageAvailable()) return;
    window.localStorage.removeItem(RECIPIENTS_KEY);
    window.localStorage.removeItem(TRANSACTIONS_KEY);
  });
