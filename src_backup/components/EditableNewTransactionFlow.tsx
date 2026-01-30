import { useState } from 'react';
import IPhone1415Pro9147357 from '@/imports/IPhone1415Pro91-4-7357';
import IPhone1415Pro9247482 from '@/imports/IPhone1415Pro92-4-7482';
import Transaction47664 from '@/imports/Transaction-4-7664';
import Transaction47899 from '@/imports/Transaction-4-7899';
import Transaction47954 from '@/imports/Transaction-4-7954';
import Transaction48017 from '@/imports/Transaction-4-8017';
import Transaction48075 from '@/imports/Transaction-4-8075';
import Transaction48159 from '@/imports/Transaction-4-8159';

interface PaymentData {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  securityCode: string;
  verificationCode: string;
  sendAmount: string;
}

export default function EditableNewTransactionFlow() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    securityCode: '',
    verificationCode: '',
    sendAmount: '1000.00',
  });

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

  const handleInputChange = (field: keyof PaymentData, value: string) => {
    setPaymentData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return (
          <div className="relative size-full">
            <IPhone1415Pro9147357 />
            {/* Overlay editable amount input */}
            <input
              type="text"
              value={paymentData.sendAmount}
              onChange={(e) => handleInputChange('sendAmount', e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="absolute left-[38px] top-[272px] w-[150px] h-[60px] bg-transparent text-[48px] font-['Manrope:Bold',sans-serif] font-bold text-[#242424] border-none outline-none"
              placeholder="1000.00"
            />
          </div>
        );
      case 2:
        return <IPhone1415Pro9247482 />;
      case 3:
        return <Transaction47664 />;
      case 4:
        return <Transaction47899 />;
      case 5:
        return <Transaction47954 />;
      case 6:
        return (
          <div className="relative size-full">
            <Transaction48017 />
            {/* Overlay editable payment form fields */}
            <div className="absolute left-[38px] top-[231px] w-[317px] flex flex-col gap-0 pointer-events-auto z-10">
              {/* Cardholder name */}
              <input
                type="text"
                value={paymentData.cardholderName}
                onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                onClick={(e) => e.stopPropagation()}
                placeholder="John Doe"
                className="h-[50px] px-[12px] rounded-[4px] border border-[#787878] bg-white text-[#242424] text-[14px] font-['Inter:Regular',sans-serif] mb-[7px]"
              />
              
              {/* Card Number */}
              <input
                type="text"
                value={paymentData.cardNumber}
                onChange={(e) => {
                  // Format card number with spaces
                  const value = e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
                  handleInputChange('cardNumber', value);
                }}
                onClick={(e) => e.stopPropagation()}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="h-[50px] px-[12px] rounded-[4px] border border-[#787878] bg-white text-[#242424] text-[14px] font-['Inter:Regular',sans-serif] mt-[40px] mb-[7px]"
              />
              
              {/* Expiry date */}
              <input
                type="text"
                value={paymentData.expiryDate}
                onChange={(e) => {
                  // Format as MM/YY
                  let value = e.target.value.replace(/\D/g, '');
                  if (value.length >= 2) {
                    value = value.slice(0, 2) + '/' + value.slice(2, 4);
                  }
                  handleInputChange('expiryDate', value);
                }}
                onClick={(e) => e.stopPropagation()}
                placeholder="MM/YY"
                maxLength={5}
                className="h-[50px] px-[12px] rounded-[4px] border border-[#787878] bg-white text-[#242424] text-[14px] font-['Manrope:Regular',sans-serif] mt-[71px] mb-[7px]"
              />
              
              {/* Security code */}
              <input
                type="text"
                value={paymentData.securityCode}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                  handleInputChange('securityCode', value);
                }}
                onClick={(e) => e.stopPropagation()}
                placeholder="123"
                maxLength={4}
                className="h-[50px] px-[12px] rounded-[4px] border border-[#787878] bg-white text-[#242424] text-[14px] font-['Inter:Regular',sans-serif] mt-[69px]"
              />
            </div>
          </div>
        );
      case 7:
        return (
          <div className="relative size-full">
            <Transaction48075 />
            {/* Overlay editable verification code input */}
            <input
              type="text"
              value={paymentData.verificationCode}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 5);
                handleInputChange('verificationCode', value);
              }}
              onClick={(e) => e.stopPropagation()}
              placeholder="11111"
              maxLength={5}
              className="absolute left-[38px] top-[399px] w-[317px] h-[48px] px-[16px] rounded-[8px] border border-[#787878] bg-white text-[#242424] text-[16px] font-['Inter:Regular',sans-serif] pointer-events-auto"
            />
          </div>
        );
      case 8:
        return <Transaction48159 />;
      default:
        return <IPhone1415Pro9147357 />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      {/* Screen container - iPhone 14/15 Pro dimensions */}
      <div 
        className="relative bg-white shadow-2xl overflow-hidden rounded-[55px] border-[3px] border-[#1d1d1f]"
        style={{
          width: '393px',
          height: '852px',
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
          className="px-6 py-2 bg-white text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors shadow-md"
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
          className="px-6 py-2 bg-[#4967ff] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3851df] transition-colors shadow-md"
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

      {/* Device info */}
      <p className="mt-2 text-xs text-gray-400">
        iPhone 14/15 Pro (393 × 852) • Click to navigate
      </p>
    </div>
  );
}