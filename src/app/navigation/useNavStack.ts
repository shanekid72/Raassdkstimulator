import { useCallback, useEffect, useRef, useState } from 'react';

export type Flow = 'home' | 'onboarding' | 'recipient' | 'transaction';

export type NavState = {
  flow: Flow;
  onboardingStep: number;
  recipientStep: number;
  txnStep: number;
  txnAmount: string;
  txnRecipient: string;
};

type SharedTxnData = {
  txnAmount: string;
  txnRecipient: string;
};

const getSharedTxnData = (state: NavState): SharedTxnData => ({
  txnAmount: state.txnAmount,
  txnRecipient: state.txnRecipient,
});

export function useNavStack(initial: NavState): {
  state: NavState;
  push(next: NavState): void;
  replace(next: NavState): void;
  goBack(): void;
  canGoBack: boolean;
} {
  const [stack, setStack] = useState<NavState[]>(() => [initial]);
  const sharedTxnDataRef = useRef<SharedTxnData>(getSharedTxnData(initial));

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.history.replaceState({ nav: initial }, '');
  }, [initial]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handlePopState = () => {
      setStack((prev) => {
        if (prev.length <= 1) return prev;
        const nextStack = prev.slice(0, -1);
        const top = nextStack[nextStack.length - 1];
        // Keep the latest txn values across back navigation (matches prior global state behavior).
        nextStack[nextStack.length - 1] = {
          ...top,
          ...sharedTxnDataRef.current,
        };
        return nextStack;
      });
    };

    const previousHandler = window.onpopstate;
    window.onpopstate = (event) => {
      handlePopState();
      if (typeof previousHandler === 'function') {
        previousHandler.call(window, event);
      }
    };

    return () => {
      window.onpopstate = previousHandler ?? null;
    };
  }, []);

  const push = useCallback((next: NavState) => {
    sharedTxnDataRef.current = getSharedTxnData(next);
    setStack((prev) => [...prev, next]);
    if (typeof window !== 'undefined') {
      window.history.pushState({ nav: next }, '');
    }
  }, []);

  const replace = useCallback((next: NavState) => {
    sharedTxnDataRef.current = getSharedTxnData(next);
    setStack((prev) => {
      if (prev.length === 0) return [next];
      const nextStack = prev.slice(0, -1);
      nextStack.push(next);
      return nextStack;
    });
    if (typeof window !== 'undefined') {
      window.history.replaceState({ nav: next }, '');
    }
  }, []);

  const canGoBack = stack.length > 1;

  const goBack = useCallback(() => {
    if (!canGoBack || typeof window === 'undefined') return;
    window.history.back();
  }, [canGoBack]);

  return {
    state: stack[stack.length - 1],
    push,
    replace,
    goBack,
    canGoBack,
  };
}
