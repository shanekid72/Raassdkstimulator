import { useState } from 'react';
import IPhone1415Pro96 from '@/imports/IPhone1415Pro96';
import IPhone1415Pro91 from '@/imports/IPhone1415Pro91';
import IPhone1415Pro92 from '@/imports/IPhone1415Pro92';
import IPhone1415Pro93 from '@/imports/IPhone1415Pro93';
import IPhone1415Pro94 from '@/imports/IPhone1415Pro94';
import IPhone1415Pro95 from '@/imports/IPhone1415Pro95';
import IPhone1415Pro97 from '@/imports/IPhone1415Pro97';
import IPhone1415Pro98 from '@/imports/IPhone1415Pro98';

type OnboardingStep = 'home' | 'verify' | 'scan-front' | 'scan-front-preview' | 'scan-back' | 'scan-back-preview' | 'almost-there' | 'form';

export default function OnboardingFlow() {
  const [step, setStep] = useState<OnboardingStep>('home');

  const handleNext = () => {
    // Advance to next screen
    const steps: OnboardingStep[] = ['home', 'verify', 'scan-front', 'scan-front-preview', 'scan-back', 'scan-back-preview', 'almost-there', 'form'];
    const currentIndex = steps.indexOf(step);
    const nextIndex = (currentIndex + 1) % steps.length;
    setStep(steps[nextIndex]);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#f9fafa]">
      <div className="w-[390px] h-[844px] relative overflow-hidden shadow-2xl">
        <div onClick={handleNext} className="w-full h-full cursor-pointer overflow-hidden">
          <div className="w-full h-full" style={{ marginTop: '-54px' }}>
            {step === 'home' && <IPhone1415Pro96 />}
            {step === 'verify' && <IPhone1415Pro91 />}
            {step === 'scan-front' && <IPhone1415Pro92 />}
            {step === 'scan-front-preview' && <IPhone1415Pro93 />}
            {step === 'scan-back' && <IPhone1415Pro94 />}
            {step === 'scan-back-preview' && <IPhone1415Pro95 />}
            {step === 'almost-there' && <IPhone1415Pro97 />}
            {step === 'form' && <IPhone1415Pro98 />}
          </div>
        </div>
      </div>
      
      {/* Navigation helper */}
      <div className="mt-4 flex items-center gap-4">
        <div className="text-sm text-gray-600">
          Screen {['home', 'verify', 'scan-front', 'scan-front-preview', 'scan-back', 'scan-back-preview', 'almost-there', 'form'].indexOf(step) + 1} of 8
        </div>
        <button 
          onClick={handleNext}
          className="px-4 py-2 bg-[#4967ff] text-white rounded-lg text-sm hover:bg-[#3850dd]"
        >
          {step === 'form' ? 'Submit' : 'Next Screen'}
        </button>
      </div>
    </div>
  );
}