import { useState } from 'react';
import Screen02 from '@/imports/02';
import Screen03 from '@/imports/03';
import Screen04 from '@/imports/04';
import Screen01 from '@/imports/01';
import Screen06 from '@/imports/06';
import Screen05 from '@/imports/05';
import Screen07 from '@/imports/07';

type RecipientStep = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export default function AddRecipientsFlow() {
  const [step, setStep] = useState<RecipientStep>(1);

  const handleNext = () => {
    setStep((prev) => ((prev % 7) + 1) as RecipientStep);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#f9fafa]">
      <div className="w-[390px] h-[844px] relative overflow-hidden shadow-2xl">
        <div onClick={handleNext} className="w-full h-full cursor-pointer overflow-hidden">
          <div className="w-full h-full" style={{ marginTop: '-54px' }}>
            {step === 1 && <Screen02 />}
            {step === 2 && <Screen03 />}
            {step === 3 && <Screen04 />}
            {step === 4 && <Screen01 />}
            {step === 5 && <Screen06 />}
            {step === 6 && <Screen05 />}
            {step === 7 && <Screen07 />}
          </div>
        </div>
      </div>
      
      {/* Navigation helper */}
      <div className="mt-4 flex items-center gap-4">
        <div className="text-sm text-gray-600">
          Screen {step} of 7
        </div>
        <button 
          onClick={handleNext}
          className="px-4 py-2 bg-[#4967ff] text-white rounded-lg text-sm hover:bg-[#3850dd]"
        >
          Next Screen
        </button>
      </div>
    </div>
  );
}