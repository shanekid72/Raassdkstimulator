import { useEffect, useState } from 'react';
import { MobileLayout } from './layout/MobileLayout';
import { DynamicAlertState } from './ui/DynamicAlert';
import { ButtonStyleProvider } from './ui/ButtonStyleContext';
import HomeScreen from './features/home/HomeScreen';

// Placeholder flow components (will be implemented next)
// Onboarding Flow Components
import LandingScreen from './features/onboarding/LandingScreen';
import VerificationIntroScreen from './features/onboarding/VerificationIntroScreen';
import DocumentUploadScreen from './features/onboarding/DocumentUploadScreen';
import SelfieLivenessCheckScreen from './features/onboarding/SelfieLivenessCheckScreen';
import EmploymentInfoScreen from './features/onboarding/EmploymentInfoScreen';
import ProcessingScreen from './features/onboarding/ProcessingScreen';
import OnboardingContinueScreen from './features/onboarding/OnboardingContinueScreen';

// UAE PASS Flow Components
import {
  UAEPassSplashScreen,
  UAEPassWelcomeScreen,
  LoginRequestAlertScreen,
  EnterPinScreen,
  UAEPassPendingScreen,
} from './features/onboarding/uaepass';

// Removed legacy PersonalInfo/Success screens as they are replaced by the new flow
// import PersonalInfoScreen from './features/onboarding/PersonalInfoScreen';
// import OnboardingSuccessScreen from './features/onboarding/OnboardingSuccessScreen';

import PersonalDetailsScreen from './features/recipient/PersonalDetailsScreen';
import RecipientSuccessScreen from './features/recipient/RecipientSuccessScreen';

import RecipientListScreen from './features/recipient/RecipientListScreen';
import RecipientDetailsScreen from './features/recipient/RecipientDetailsScreen';
import AddRecipientScreen from './features/recipient/AddRecipientScreen';
import SelectCountryCurrencyScreen from './features/recipient/SelectCountryCurrencyScreen';

import TransactionHomeScreen from './features/transaction/TransactionHomeScreen';
import RecipientSelectScreen from './features/transaction/RecipientSelectScreen';
import ReviewTransferScreen from './features/transaction/ReviewTransferScreen';
import TransferPurposeScreen from './features/transaction/TransferPurposeScreen';
import PayPalRedirectScreen from './features/transaction/PayPalRedirectScreen';
import PaymentDetailsScreen from './features/transaction/PaymentDetailsScreen';
import PaymentVerificationScreen from './features/transaction/PaymentVerificationScreen';
import TransferSuccessReceiptScreen from './features/transaction/TransferSuccessReceiptScreen';
import { AnimatePresence, motion } from 'framer-motion';
import { NavState, useNavStack } from './navigation/useNavStack';
import { RecipientDraft, useSimulator } from './simulator/SimulatorStore';
import { EdgeSwipeBack } from './gestures/EdgeSwipeBack';

const initialNavState: NavState = {
  flow: 'home',
  onboardingStep: 0,
  recipientStep: 1,
  txnStep: 1,
  txnAmount: '1000.00',
  txnRecipient: 'Lara Khan',
};

const RECIPIENT_DRAFT_DEFAULTS: RecipientDraft = {
  firstName: '',
  lastName: '',
  mobile: '788977899',
  nationality: 'India',
  relationship: 'Brother',
  country: 'Philippines',
  currencyCode: 'PHP',
  accountNumber: '0000123456',
  ifsc: 'IDFB0080172',
};

const TXN_RATE_VALUE = 15.33343;

interface AppProps {
  /** When true, renders without phone frame for embedding in parent app */
  embedded?: boolean;
}

export default function App({ embedded = false }: AppProps) {
  const { state, push, replace, goBack, canGoBack } = useNavStack(initialNavState);
  const [alertQueue, setAlertQueue] = useState<{ state: DynamicAlertState; message: string }[]>([]);
  const [activeAlert, setActiveAlert] = useState<{ state: DynamicAlertState; message: string } | null>(null);
  const {
    recipients,
    recipientDraft,
    setRecipientDraft,
    clearRecipientDraft,
    createRecipient,
    recordTransaction,
    isBootstrapping,
  } = useSimulator();

  // Helper to trigger alert demo
  const triggerAlert = (state: DynamicAlertState, msg: string) => {
    setAlertQueue((queue) => [...queue, { state, message: msg }]);
  };

  useEffect(() => {
    if (!activeAlert && alertQueue.length > 0) {
      const [next, ...rest] = alertQueue;
      setActiveAlert(next);
      setAlertQueue(rest);
    }
  }, [alertQueue, activeAlert]);

  useEffect(() => {
    if (!activeAlert) return;
    const timeout = setTimeout(() => setActiveAlert(null), 2200);
    return () => clearTimeout(timeout);
  }, [activeAlert]);

  const resolveRecipientDraft = (partial?: Partial<RecipientDraft>) => ({
    ...RECIPIENT_DRAFT_DEFAULTS,
    ...recipientDraft,
    ...partial,
  });

  const getRecipientDisplayName = (firstName: string, lastName: string, mobile: string) => {
    const fullName = `${firstName} ${lastName}`.trim();
    return fullName || mobile || 'Recipient';
  };

  // Safety net: ensure processing/continue steps advance even if a screen re-render interrupts timers.
  useEffect(() => {
    if (state.flow !== 'onboarding') return;
    if (state.onboardingStep === 5) {
      const timeout = setTimeout(() => replace({ ...state, flow: 'onboarding', onboardingStep: 6 }), 2200);
      return () => clearTimeout(timeout);
    }
    if (state.onboardingStep === 6) {
      const timeout = setTimeout(() => replace({ ...state, flow: 'onboarding', onboardingStep: 7 }), 6000);
      return () => clearTimeout(timeout);
    }
  }, [replace, state.flow, state.onboardingStep]);

  const renderContent = () => {
    switch (state.flow) {
      case 'onboarding':
        // Step 0: Landing / Splash with Rate
        if (state.onboardingStep === 0) return <LandingScreen onStart={() => push({ ...state, flow: 'onboarding', onboardingStep: 1 })} />;

        // Step 1: Verification Intro
        if (state.onboardingStep === 1) return <VerificationIntroScreen
          onNext={() => push({ ...state, flow: 'onboarding', onboardingStep: 2 })}
          onLogin={() => push({ ...state, flow: 'onboarding', onboardingStep: 10 })}
        />;

        // Step 2: Document Front
        if (state.onboardingStep === 2) return <DocumentUploadScreen
          side="front"
          onBack={goBack}
          onNext={() => push({ ...state, flow: 'onboarding', onboardingStep: 3 })}
          onCaptured={() => triggerAlert('loading', 'Document under review')}
        />;

        // Step 3: Document Back
        if (state.onboardingStep === 3) return <DocumentUploadScreen
          side="back"
          onBack={goBack}
          onNext={() => push({ ...state, flow: 'onboarding', onboardingStep: 4 })}
          onCaptured={() => triggerAlert('loading', 'Document under review')}
        />;

        // Step 4: Selfie Liveness Check
        if (state.onboardingStep === 4) return <SelfieLivenessCheckScreen
          onBack={goBack}
          onComplete={() => push({ ...state, flow: 'onboarding', onboardingStep: 5 })}
        />;

        // Step 5: Almost There / Processing
        if (state.onboardingStep === 5) return <ProcessingScreen
          onComplete={() => push({ ...state, flow: 'onboarding', onboardingStep: 6 })}
          onNotify={(state, message) => triggerAlert(state, message)}
        />;

        // Step 6: Continue screen
        if (state.onboardingStep === 6) return <OnboardingContinueScreen
          onContinue={() => push({ ...state, flow: 'onboarding', onboardingStep: 7 })}
        />;

        // Step 7: Additional Info (Employment)
        if (state.onboardingStep === 7) return <EmploymentInfoScreen
          onBack={goBack}
          onNext={() => {
            push({ ...state, flow: 'home', onboardingStep: 0 }); // Reset for next time
            triggerAlert('success', 'Onboarded');
          }}
        />;

        // ========================================
        // UAE PASS Flow (Steps 10-14)
        // ========================================

        // Step 10: UAE PASS Splash Screen (Frame 001)
        if (state.onboardingStep === 10) return <UAEPassSplashScreen
          onNext={() => replace({ ...state, flow: 'onboarding', onboardingStep: 11 })}
        />;

        // Step 11: UAE PASS Welcome Screen with Validating modal (Frame 002)
        if (state.onboardingStep === 11) return <UAEPassWelcomeScreen
          onNext={() => replace({ ...state, flow: 'onboarding', onboardingStep: 12 })}
        />;

        // Step 12: Login Request Alert Screen (Frame 003)
        if (state.onboardingStep === 12) return <LoginRequestAlertScreen
          onConfirm={() => push({ ...state, flow: 'onboarding', onboardingStep: 13 })}
          onDecline={() => goBack()}
        />;

        // Step 13: Enter PIN Screen (Frames 004/005)
        if (state.onboardingStep === 13) return <EnterPinScreen
          onSubmit={() => push({ ...state, flow: 'onboarding', onboardingStep: 14 })}
          onExit={() => goBack()}
        />;

        // Step 14: UAE PASS Pending Verification Screen (Frame 006)
        if (state.onboardingStep === 14) return <UAEPassPendingScreen
          onComplete={() => {
            push({ ...state, flow: 'home', onboardingStep: 0 }); // Navigate to home
            triggerAlert('success', 'Verified'); // Show verified dynamic island notification
          }}
          onCancel={() => goBack()}
        />;

        return null;
      case 'recipient':
        if (state.recipientStep === 1) return <RecipientListScreen
          onBack={goBack}
          onAdd={() => push({ ...state, flow: 'recipient', recipientStep: 2 })}
          isLoading={isBootstrapping}
        />;
        if (state.recipientStep === 2) return <AddRecipientScreen
          onBack={goBack}
          onAddMyself={() => push({ ...state, flow: 'recipient', recipientStep: 3 })}
          onAddSomeoneElse={() => push({ ...state, flow: 'recipient', recipientStep: 3 })}
        />;
        if (state.recipientStep === 3) return <SelectCountryCurrencyScreen
          onBack={goBack}
          onSelect={() => push({ ...state, flow: 'recipient', recipientStep: 4 })}
          onSelectCountryCurrency={(country, currencyCode) => setRecipientDraft({ country, currencyCode })}
        />;
        if (state.recipientStep === 4) return <PersonalDetailsScreen
          onBack={goBack}
          onNext={() => push({ ...state, flow: 'recipient', recipientStep: 5 })}
          onSubmitDraft={(partial) => setRecipientDraft(partial)}
        />;
        if (state.recipientStep === 5) return <RecipientDetailsScreen
          onBack={goBack}
          onSubmitDraft={async (partial) => {
            const resolvedDraft = resolveRecipientDraft(partial);
            setRecipientDraft(partial);
            triggerAlert('loading', 'Saving recipient...');
            try {
              await createRecipient({
                firstName: resolvedDraft.firstName,
                lastName: resolvedDraft.lastName,
                mobile: resolvedDraft.mobile,
                nationality: resolvedDraft.nationality,
                relationship: resolvedDraft.relationship,
                country: resolvedDraft.country,
                currencyCode: resolvedDraft.currencyCode,
                payoutMethod: 'bank',
                accountNumber: resolvedDraft.accountNumber,
                ifsc: resolvedDraft.ifsc,
              });
              clearRecipientDraft();
            } catch (error) {
              triggerAlert('error', 'Couldn’t save recipient');
              throw error;
            }
          }}
          onNext={() => { triggerAlert('success', 'Recipient Added'); push({ ...state, flow: 'recipient', recipientStep: 6 }); }}
        />;
        if (state.recipientStep === 6) return <RecipientSuccessScreen
          onAddAnother={() => push({ ...state, flow: 'recipient', recipientStep: 2 })}
          onDashboard={() => {
            push({ ...state, flow: 'home', recipientStep: 1 });
          }}
        />;
        return null;
      case 'transaction':
        if (state.txnStep === 1) return <TransactionHomeScreen
          amount={state.txnAmount}
          onAmountChange={(amount) => replace({ ...state, txnAmount: amount })}
          onBack={goBack}
          onStart={() => { push({ ...state, flow: 'transaction', txnStep: 2 }); }}
          onSelectRecipient={(name) => { push({ ...state, flow: 'transaction', txnRecipient: name, txnStep: 3 }); }}
        />;
        if (state.txnStep === 2) return <RecipientSelectScreen
          onBack={goBack}
          onSelect={(name) => { push({ ...state, flow: 'transaction', txnRecipient: name, txnStep: 3 }); }}
        />;
        if (state.txnStep === 3) return <ReviewTransferScreen
          amount={state.txnAmount}
          recipientName={state.txnRecipient}
          onBack={goBack}
          onNext={() => { push({ ...state, flow: 'transaction', txnStep: 4 }); }}
        />;
        if (state.txnStep === 4) return <TransferPurposeScreen
          onBack={goBack}
          onConfirm={() => push({ ...state, flow: 'transaction', txnStep: 5 })}
        />;
        if (state.txnStep === 5) return <PayPalRedirectScreen
          onBack={goBack}
          onProceed={() => push({ ...state, flow: 'transaction', txnStep: 6 })}
        />;
        if (state.txnStep === 6) return <PaymentDetailsScreen
          onBack={goBack}
          onPay={() => push({ ...state, flow: 'transaction', txnStep: 7 })}
        />;
        if (state.txnStep === 7) return <PaymentVerificationScreen
          onBack={goBack}
          onSubmit={() => push({ ...state, flow: 'transaction', txnStep: 8 })}
        />;
        if (state.txnStep === 8) return <TransferSuccessReceiptScreen
          onHome={() => {
            const numericAmount = parseFloat(state.txnAmount);
            const amountAED = Number.isFinite(numericAmount) ? numericAmount : 0;
            const receiveAmount = Math.round(amountAED * TXN_RATE_VALUE * 100) / 100;
            const matchedRecipient = recipients.find((recipient) =>
              getRecipientDisplayName(recipient.firstName, recipient.lastName, recipient.mobile) === state.txnRecipient
            );
            const fallbackRecipientId = `temp_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
            const recipientName = matchedRecipient
              ? getRecipientDisplayName(matchedRecipient.firstName, matchedRecipient.lastName, matchedRecipient.mobile)
              : state.txnRecipient;
            triggerAlert('loading', 'Processing transfer...');
            void recordTransaction({
              amountAED,
              receiveAmount,
              receiveCurrencyCode: 'PHP',
              rate: TXN_RATE_VALUE,
              recipientId: matchedRecipient ? matchedRecipient.id : fallbackRecipientId,
              recipientName: recipientName || 'Recipient',
            }).then(() => {
              triggerAlert('success', 'Transfer Complete');
            }).catch(() => {
              triggerAlert('error', 'Transfer failed');
            });
            push({ ...state, flow: 'home', txnStep: 1, txnAmount: '1000.00' });
          }}
        />;
        return null;
      case 'home':
        return (
          <HomeScreen
            onStartOnboarding={() => { push({ ...state, flow: 'onboarding', onboardingStep: 0 }); }}
            onStartRecipient={() => { push({ ...state, flow: 'recipient', recipientStep: 1 }); }}
            onStartTransaction={() => { push({ ...state, flow: 'transaction', txnStep: 1 }); }}
            onTestLoading={() => triggerAlert('loading', 'Syncing...')}
            onTestSuccess={() => triggerAlert('success', 'Verified')}
          />
        );
      default:
        return null;
    }
  };

  const contentKey = `${state.flow}-${state.onboardingStep}-${state.recipientStep}-${state.txnStep}`;

  return (
    <ButtonStyleProvider skeuomorphic={state.flow !== 'home'}>
      <MobileLayout
        embedded={embedded}
        alertState={activeAlert ? activeAlert.state : 'idle'}
        alertMessage={activeAlert ? activeAlert.message : ''}
        onAlertClose={() => setActiveAlert(null)}
        className={state.flow === 'home' ? 'bg-[#f7f7f8]' : undefined}
      >
        <AnimatePresence mode="wait">
          <EdgeSwipeBack key={contentKey} enabled={canGoBack} onBack={goBack}>
            <motion.div
              key={contentKey}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="h-full"
            >
              {renderContent()}
            </motion.div>
          </EdgeSwipeBack>
        </AnimatePresence>
      </MobileLayout>
    </ButtonStyleProvider>
  );
}
