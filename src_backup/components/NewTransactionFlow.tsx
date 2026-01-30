import { useState } from 'react';
import IPhone1415Pro9147357 from '@/imports/IPhone1415Pro91-4-7357';
import IPhone1415Pro9247482 from '@/imports/IPhone1415Pro92-4-7482';
import Transaction47664 from '@/imports/Transaction-4-7664';
import Transaction47899 from '@/imports/Transaction-4-7899';
import Transaction47954 from '@/imports/Transaction-4-7954';
import Transaction48017 from '@/imports/Transaction-4-8017';
import Transaction48075 from '@/imports/Transaction-4-8075';
import Transaction48159 from '@/imports/Transaction-4-8159';

export default function NewTransactionFlow() {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleNext = () => {
    if (currentScreen < 8) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const handleBack = () => {
    if (currentScreen > 1) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <IPhone1415Pro9147357 />;
      case 2:
        return <IPhone1415Pro9247482 />;
      case 3:
        return <Transaction47664 />;
      case 4:
        return <Transaction47899 />;
      case 5:
        return <Transaction47954 />;
      case 6:
        return <Transaction48017 />;
      case 7:
        return <Transaction48075 />;
      case 8:
        return <Transaction48159 />;
      default:
        return <IPhone1415Pro9147357 />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      {/* Screen container */}
      <div 
        className="relative bg-white shadow-2xl overflow-hidden"
        style={{
          width: '375px',
          height: '812px',
        }}
        onClick={handleNext}
      >
        {/* Hide status bar elements */}
        <style>{`
          [class*="time"],
          [class*="Time"],
          [class*="battery"],
          [class*="Battery"],
          [class*="signal"],
          [class*="Signal"],
          [class*="carrier"],
          [class*="Carrier"],
          [class*="wifi"],
          [class*="Wifi"],
          [class*="statusBar"],
          [class*="StatusBar"] {
            opacity: 0 !important;
            visibility: hidden !important;
          }
        `}</style>
        
        {renderScreen()}
      </div>

      {/* Navigation controls */}
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleBack();
          }}
          disabled={currentScreen === 1}
          className="px-6 py-2 bg-white text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        >
          ← Previous
        </button>
        <span className="text-sm font-medium text-gray-600">
          Screen {currentScreen} of 8
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          disabled={currentScreen === 8}
          className="px-6 py-2 bg-[#4967ff] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3851df] transition-colors"
        >
          Next →
        </button>
      </div>

      {/* Screen labels */}
      <div className="mt-4 text-center text-sm text-gray-500">
        {currentScreen === 1 && 'Main Transaction Screen'}
        {currentScreen === 2 && 'Select Recipient'}
        {currentScreen === 3 && 'Review Transfer'}
        {currentScreen === 4 && 'Select Purpose of Transfer'}
        {currentScreen === 5 && 'Redirecting to PayPal'}
        {currentScreen === 6 && 'Payment Details'}
        {currentScreen === 7 && 'Transaction Verification'}
        {currentScreen === 8 && 'Transaction Success'}
      </div>

      {/* Click hint */}
      <p className="mt-2 text-xs text-gray-400">
        Click on screen or use buttons to navigate
      </p>
    </div>
  );
}