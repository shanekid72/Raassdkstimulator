import { useEffect, useState } from 'react';
import { MobileLayout } from './layout/MobileLayout';
import { DynamicAlertState } from './ui/DynamicAlert';
import { Button } from './ui/Button';

// Placeholder flow components (will be implemented next)
// Onboarding Flow Components
import LandingScreen from './features/onboarding/LandingScreen';
import VerificationIntroScreen from './features/onboarding/VerificationIntroScreen';
import DocumentUploadScreen from './features/onboarding/DocumentUploadScreen';
import EmploymentInfoScreen from './features/onboarding/EmploymentInfoScreen';
import ProcessingScreen from './features/onboarding/ProcessingScreen';
import OnboardingContinueScreen from './features/onboarding/OnboardingContinueScreen';

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

type Flow = 'home' | 'onboarding' | 'recipient' | 'transaction';

export default function App() {
  const [currentFlow, setCurrentFlow] = useState<Flow>('home');
  const [onboardingStep, setOnboardingStep] = useState(0); // Start at Landing (0)
  const [recipientStep, setRecipientStep] = useState(1);
  const [txnStep, setTxnStep] = useState(1);
  const [txnAmount, setTxnAmount] = useState('1000.00');
  const [txnRecipient, setTxnRecipient] = useState('Lara Khan');
  const [alertQueue, setAlertQueue] = useState<{ state: DynamicAlertState; message: string }[]>([]);
  const [activeAlert, setActiveAlert] = useState<{ state: DynamicAlertState; message: string } | null>(null);

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

  // Safety net: ensure processing/continue steps advance even if a screen re-render interrupts timers.
  useEffect(() => {
    if (currentFlow !== 'onboarding') return;
    if (onboardingStep === 4) {
      const timeout = setTimeout(() => setOnboardingStep(5), 2200);
      return () => clearTimeout(timeout);
    }
    if (onboardingStep === 5) {
      const timeout = setTimeout(() => setOnboardingStep(6), 6000);
      return () => clearTimeout(timeout);
    }
  }, [currentFlow, onboardingStep]);

  const renderContent = () => {
    switch (currentFlow) {
      case 'onboarding':
        // Step 0: Landing / Splash with Rate
        if (onboardingStep === 0) return <LandingScreen onStart={() => setOnboardingStep(1)} />;

        // Step 1: Verification Intro
        if (onboardingStep === 1) return <VerificationIntroScreen
          onNext={() => setOnboardingStep(2)}
          onLogin={() => alert("UAE PASS Login Mock")}
        />;

        // Step 2: Document Front
        if (onboardingStep === 2) return <DocumentUploadScreen
          side="front"
          onBack={() => setOnboardingStep(1)}
          onNext={() => setOnboardingStep(3)}
          onCaptured={() => triggerAlert('loading', 'Document under review')}
        />;

        // Step 3: Document Back
        if (onboardingStep === 3) return <DocumentUploadScreen
          side="back"
          onBack={() => setOnboardingStep(2)}
          onNext={() => setOnboardingStep(4)}
          onCaptured={() => triggerAlert('loading', 'Document under review')}
        />;

        // Step 4: Almost There / Processing
        if (onboardingStep === 4) return <ProcessingScreen
          onComplete={() => setOnboardingStep(5)}
          onNotify={(state, message) => triggerAlert(state, message)}
        />;

        // Step 5: Continue screen
        if (onboardingStep === 5) return <OnboardingContinueScreen
          onContinue={() => setOnboardingStep(6)}
        />;

        // Step 6: Additional Info (Employment)
        if (onboardingStep === 6) return <EmploymentInfoScreen
          onBack={() => setOnboardingStep(5)}
          onNext={() => {
            setCurrentFlow('home');
            setOnboardingStep(0); // Reset for next time
            triggerAlert('success', 'Onboarded');
          }}
        />;

        return null;
      case 'recipient':
        if (recipientStep === 1) return <RecipientListScreen
          onBack={() => setCurrentFlow('home')}
          onAdd={() => setRecipientStep(2)}
        />;
        if (recipientStep === 2) return <AddRecipientScreen
          onBack={() => setRecipientStep(1)}
          onAddMyself={() => setRecipientStep(3)}
          onAddSomeoneElse={() => setRecipientStep(3)}
        />;
        if (recipientStep === 3) return <SelectCountryCurrencyScreen
          onBack={() => setRecipientStep(2)}
          onSelect={() => setRecipientStep(4)}
        />;
        if (recipientStep === 4) return <PersonalDetailsScreen
          onBack={() => setRecipientStep(3)}
          onNext={() => setRecipientStep(5)}
        />;
        if (recipientStep === 5) return <RecipientDetailsScreen
          onBack={() => setRecipientStep(4)}
          onNext={() => { triggerAlert('success', 'Recipient Added'); setRecipientStep(6); }}
        />;
        if (recipientStep === 6) return <RecipientSuccessScreen
          onAddAnother={() => setRecipientStep(2)}
          onDashboard={() => {
            setCurrentFlow('home');
            setRecipientStep(1);
          }}
        />;
        return null;
      case 'transaction':
        if (txnStep === 1) return <TransactionHomeScreen
          amount={txnAmount}
          onAmountChange={setTxnAmount}
          onBack={() => setCurrentFlow('home')}
          onStart={() => { setTxnStep(2); }}
        />;
        if (txnStep === 2) return <RecipientSelectScreen
          onBack={() => setTxnStep(1)}
          onSelect={(name) => { setTxnRecipient(name); setTxnStep(3); }}
        />;
        if (txnStep === 3) return <ReviewTransferScreen
          amount={txnAmount}
          recipientName={txnRecipient}
          onBack={() => setTxnStep(2)}
          onNext={() => { triggerAlert('loading', 'Processing'); setTxnStep(4); }}
        />;
        if (txnStep === 4) return <TransferPurposeScreen
          onBack={() => setTxnStep(3)}
          onConfirm={() => setTxnStep(5)}
        />;
        if (txnStep === 5) return <PayPalRedirectScreen
          onBack={() => setTxnStep(4)}
          onProceed={() => setTxnStep(6)}
        />;
        if (txnStep === 6) return <PaymentDetailsScreen
          onBack={() => setTxnStep(5)}
          onPay={() => setTxnStep(7)}
        />;
        if (txnStep === 7) return <PaymentVerificationScreen
          onBack={() => setTxnStep(6)}
          onSubmit={() => setTxnStep(8)}
        />;
        if (txnStep === 8) return <TransferSuccessReceiptScreen
          onHome={() => { triggerAlert('success', 'Transfer Complete'); setCurrentFlow('home'); setTxnStep(1); setTxnAmount('1000.00'); }}
        />;
        return null;
      case 'home':
        return (
          <div className="flex flex-col items-center justify-center h-full p-6 space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold tracking-tight text-foreground">RaaS Simulator</h1>
              <p className="text-muted-foreground text-sm">Select a flow to start</p>
            </div>

            <div className="w-full space-y-4">
              <Button className="w-full" size="lg" onClick={() => { setCurrentFlow('onboarding'); setOnboardingStep(0); }}>
                Start Onboarding (KYC)
              </Button>
              <Button className="w-full" size="lg" variant="secondary" onClick={() => setCurrentFlow('recipient')}>
                Add Recipient
              </Button>
              <Button className="w-full" size="lg" variant="secondary" onClick={() => setCurrentFlow('transaction')}>
                New Transaction
              </Button>
            </div>

            <div className="pt-8 w-full">
              <p className="text-xs text-center text-muted-foreground mb-4">Test Animations</p>
              <div className="grid grid-cols-2 gap-2">
                <Button size="sm" variant="ghost" onClick={() => triggerAlert('loading', 'Syncing...')}>Test Loading</Button>
                <Button size="sm" variant="ghost" onClick={() => triggerAlert('success', 'Verified')}>Test Success</Button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const contentKey = `${currentFlow}-${onboardingStep}-${recipientStep}-${txnStep}`;

  return (
    <MobileLayout
      alertState={activeAlert ? activeAlert.state : 'idle'}
      alertMessage={activeAlert ? activeAlert.message : ''}
      onAlertClose={() => setActiveAlert(null)}
    >
      <AnimatePresence mode="wait">
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
      </AnimatePresence>
    </MobileLayout>
  );
}
