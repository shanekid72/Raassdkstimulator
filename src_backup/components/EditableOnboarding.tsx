import { useState } from 'react';
import IPhone1415Pro96 from '@/imports/IPhone1415Pro96';
import IPhone1415Pro91 from '@/imports/IPhone1415Pro91';
import IPhone1415Pro92 from '@/imports/IPhone1415Pro92';
import IPhone1415Pro93 from '@/imports/IPhone1415Pro93';
import IPhone1415Pro94 from '@/imports/IPhone1415Pro94';
import IPhone1415Pro95 from '@/imports/IPhone1415Pro95';
import IPhone1415Pro97 from '@/imports/IPhone1415Pro97';
import IPhone1415Pro98 from '@/imports/IPhone1415Pro98';

interface OnboardingData {
  employmentSector: string;
  employerName: string;
  employerAddress: string;
  profession: string;
  txnVolume: string;
  txnCount: string;
  income: string;
  incomeType: string;
}

type OnboardingStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export default function EditableOnboarding() {
  const [currentScreen, setCurrentScreen] = useState<OnboardingStep>(1);
  const [formData, setFormData] = useState<OnboardingData>({
    employmentSector: '',
    employerName: '',
    employerAddress: '',
    profession: 'Select',
    txnVolume: '0-1000',
    txnCount: '5-10',
    income: '0-4999 SGD',
    incomeType: 'Salary',
  });

  const handleNext = () => {
    if (currentScreen < 8) {
      setCurrentScreen((currentScreen + 1) as OnboardingStep);
    }
  };

  const handleBack = () => {
    if (currentScreen > 1) {
      setCurrentScreen((currentScreen - 1) as OnboardingStep);
    }
  };

  const handleInputChange = (field: keyof OnboardingData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <IPhone1415Pro96 />;
      case 2:
        return <IPhone1415Pro91 />;
      case 3:
        return <IPhone1415Pro92 />;
      case 4:
        return <IPhone1415Pro93 />;
      case 5:
        return (
          <div className="relative size-full">
            <IPhone1415Pro94 />
            {/* Overlay editable inputs on top of static design */}
            <div className="absolute left-[29.5px] top-[189px] w-[334px] flex flex-col gap-[40px] pointer-events-auto z-10">
              {/* Employment Sector */}
              <input
                type="text"
                value={formData.employmentSector}
                onChange={(e) => handleInputChange('employmentSector', e.target.value)}
                onClick={(e) => e.stopPropagation()}
                placeholder=""
                className="h-[52px] px-[20px] py-[16px] rounded-[8px] border border-[#787878] bg-white text-[#242424] text-[14px] font-['Inter:Regular',sans-serif]"
              />
              
              {/* Employer Name */}
              <input
                type="text"
                value={formData.employerName}
                onChange={(e) => handleInputChange('employerName', e.target.value)}
                onClick={(e) => e.stopPropagation()}
                placeholder=""
                className="h-[52px] px-[20px] py-[16px] rounded-[8px] border border-[#787878] bg-white text-[#242424] text-[14px] font-['Inter:Regular',sans-serif]"
              />
              
              {/* Employer Address */}
              <input
                type="text"
                value={formData.employerAddress}
                onChange={(e) => handleInputChange('employerAddress', e.target.value)}
                onClick={(e) => e.stopPropagation()}
                placeholder=""
                className="h-[52px] px-[20px] py-[16px] rounded-[8px] border border-[#c1c2c2] bg-white text-[#242424] text-[14px] font-['Inter:Regular',sans-serif]"
              />
              
              {/* Profession */}
              <select
                value={formData.profession}
                onChange={(e) => handleInputChange('profession', e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="h-[52px] px-[20px] py-[16px] rounded-[8px] border border-[#787878] bg-white text-[#242424] text-[14px] font-['Inter:Regular',sans-serif] appearance-none cursor-pointer"
              >
                <option value="Select">Select</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Teacher">Teacher</option>
                <option value="Doctor">Doctor</option>
                <option value="Business Owner">Business Owner</option>
                <option value="Other">Other</option>
              </select>
              
              {/* Txn Volume/Month */}
              <select
                value={formData.txnVolume}
                onChange={(e) => handleInputChange('txnVolume', e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="h-[52px] px-[20px] py-[16px] rounded-[8px] border border-[#787878] bg-white text-[#242424] text-[14px] font-['Inter:Regular',sans-serif] appearance-none cursor-pointer"
              >
                <option value="0-1000">0-1000</option>
                <option value="1000-5000">1000-5000</option>
                <option value="5000-10000">5000-10000</option>
                <option value="10000+">10000+</option>
              </select>
              
              {/* Txn Count/Month */}
              <select
                value={formData.txnCount}
                onChange={(e) => handleInputChange('txnCount', e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="h-[52px] px-[20px] py-[16px] rounded-[8px] border border-[#787878] bg-white text-[#242424] text-[14px] font-['Inter:Regular',sans-serif] appearance-none cursor-pointer"
              >
                <option value="5-10">5-10</option>
                <option value="10-20">10-20</option>
                <option value="20-50">20-50</option>
                <option value="50+">50+</option>
              </select>
              
              {/* Income */}
              <select
                value={formData.income}
                onChange={(e) => handleInputChange('income', e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="h-[52px] px-[20px] py-[16px] rounded-[8px] border border-[#787878] bg-white text-[#242424] text-[14px] font-['Inter:Regular',sans-serif] appearance-none cursor-pointer"
              >
                <option value="0-4999 SGD">0-4999 SGD</option>
                <option value="5000-9999 SGD">5000-9999 SGD</option>
                <option value="10000-19999 SGD">10000-19999 SGD</option>
                <option value="20000+ SGD">20000+ SGD</option>
              </select>
              
              {/* Income Type */}
              <select
                value={formData.incomeType}
                onChange={(e) => handleInputChange('incomeType', e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="h-[52px] px-[20px] py-[16px] rounded-[8px] border border-[#787878] bg-white text-[#242424] text-[14px] font-['Inter:Regular',sans-serif] appearance-none cursor-pointer"
              >
                <option value="Salary">Salary</option>
                <option value="Business Income">Business Income</option>
                <option value="Investment">Investment</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        );
      case 6:
        return <IPhone1415Pro95 />;
      case 7:
        return <IPhone1415Pro97 />;
      case 8:
        return <IPhone1415Pro98 />;
      default:
        return <IPhone1415Pro96 />;
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
        {currentScreen === 1 && 'Welcome Screen'}
        {currentScreen === 2 && 'Create Account'}
        {currentScreen === 3 && 'Scan ID - Front'}
        {currentScreen === 4 && 'ID Preview - Front'}
        {currentScreen === 5 && 'Employment & Income Details'}
        {currentScreen === 6 && 'Scan ID - Back'}
        {currentScreen === 7 && 'Verify Your Account'}
        {currentScreen === 8 && 'Account Created Successfully'}
      </div>

      {/* Device info */}
      <p className="mt-2 text-xs text-gray-400">
        iPhone 14/15 Pro (393 × 852) • Click to navigate
      </p>
    </div>
  );
}