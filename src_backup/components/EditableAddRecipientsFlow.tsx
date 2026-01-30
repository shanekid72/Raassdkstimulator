import { useState } from 'react';
import Screen02 from '@/imports/02';
import Screen03 from '@/imports/03';
import Screen04 from '@/imports/04';
import Screen01 from '@/imports/01';
import Screen06 from '@/imports/06';
import Screen05 from '@/imports/05';
import Screen07 from '@/imports/07';

interface RecipientData {
  searchQuery: string;
}

type RecipientStep = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export default function EditableAddRecipientsFlow() {
  const [step, setStep] = useState<RecipientStep>(1);
  const [recipientData, setRecipientData] = useState<RecipientData>({
    searchQuery: '',
  });

  const handleNext = () => {
    setStep((prev) => ((prev % 7) + 1) as RecipientStep);
  };

  const handleBack = () => {
    setStep((prev) => (prev === 1 ? 7 : (prev - 1)) as RecipientStep);
  };

  const handleInputChange = (field: keyof RecipientData, value: string) => {
    setRecipientData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const renderScreen = () => {
    switch (step) {
      case 1:
        return <Screen02 />;
      case 2:
        return <Screen03 />;
      case 3:
        return (
          <div className="relative size-full">
            <Screen04 />
            {/* Overlay editable search input */}
            <input
              type="text"
              value={recipientData.searchQuery}
              onChange={(e) => handleInputChange('searchQuery', e.target.value)}
              onClick={(e) => e.stopPropagation()}
              placeholder="Search"
              className="absolute left-[62px] top-[79px] w-[281px] h-[24px] bg-transparent border-none outline-none text-[#787878] text-[16px] font-['Inter:Regular',sans-serif] pointer-events-auto"
            />
          </div>
        );
      case 4:
        return <Screen01 />;
      case 5:
        return <Screen06 />;
      case 6:
        return <Screen05 />;
      case 7:
        return <Screen07 />;
      default:
        return <Screen02 />;
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#f9fafa]">
      {/* Screen container - iPhone 14/15 Pro dimensions */}
      <div className="w-[393px] h-[852px] relative overflow-hidden shadow-2xl bg-white rounded-[55px] border-[3px] border-[#1d1d1f]">
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

        <div onClick={handleNext} className="w-full h-full cursor-pointer overflow-hidden">
          <div className="w-full h-full" style={{ marginTop: '-54px' }}>
            {renderScreen()}
          </div>
        </div>

        {/* No editable fields in Add Recipients flow - it's mostly selection screens */}
      </div>
      
      {/* Navigation controls */}
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleBack();
          }}
          className="px-6 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-md"
        >
          ← Previous
        </button>
        <span className="text-sm font-medium text-gray-600">
          Screen {step} of 7
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="px-6 py-2 bg-[#4967ff] text-white rounded-lg hover:bg-[#3850dd] transition-colors shadow-md"
        >
          Next →
        </button>
      </div>

      {/* Screen labels */}
      <div className="mt-4 text-center text-sm text-gray-500">
        {step === 1 && 'Select Currency'}
        {step === 2 && 'Add Myself or Someone Else'}
        {step === 3 && 'Mobile Number Entry'}
        {step === 4 && 'Country Selection'}
        {step === 5 && 'Recipient Success'}
        {step === 6 && 'OTP Verification'}
        {step === 7 && 'Recipient Added'}
      </div>

      {/* Device info */}
      <p className="mt-2 text-xs text-gray-400">
        iPhone 14/15 Pro (393 × 852) • Click to navigate
      </p>
    </div>
  );
}