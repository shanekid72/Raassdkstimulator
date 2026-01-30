import svgPaths from "./svg-lp93s86bbg";

function Time() {
  return (
    <div className="-translate-y-1/2 absolute h-[54px] left-0 right-[64.25%] top-1/2" data-name="Time">
      <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] inset-[29.63%_57.17%_29.63%_16.5%] leading-[22px] text-[17px] text-black text-center whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Battery() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[33.33%] contents left-[calc(50%+36.95px)] top-[42.59%]" data-name="Battery">
      <div className="-translate-x-1/2 absolute border border-black border-solid bottom-[33.33%] left-[calc(50%+35.79px)] opacity-35 rounded-[4.3px] top-[42.59%] w-[25px]" data-name="Border" />
      <div className="-translate-x-1/2 absolute bottom-[41.01%] left-[calc(50%+49.95px)] top-[51.45%] w-[1.328px]" data-name="Cap">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32804 4.07547">
          <path d={svgPaths.p193f1400} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute bg-black bottom-[37.04%] left-[calc(50%+35.79px)] rounded-[2.5px] top-[46.3%] w-[21px]" data-name="Capacity" />
    </div>
  );
}

function Levels() {
  return (
    <div className="-translate-y-1/2 absolute h-[54px] left-[64.25%] right-0 top-1/2" data-name="Levels">
      <Battery />
      <div className="-translate-x-1/2 absolute bottom-[33.4%] left-[calc(50%+7.56px)] top-[43.77%] w-[17.142px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
          <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[33.77%] left-[calc(50%-18.11px)] top-[43.59%] w-[19.2px]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
          <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
    </div>
  );
}

function IOsStatusBar() {
  return (
    <div className="bg-[#fbfcfc] h-[54px] relative shrink-0 w-[390px]" data-name="iOS status bar">
      <Time />
      <Levels />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0">
      <IOsStatusBar />
    </div>
  );
}

function Tags() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Tags">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-right text-white whitespace-nowrap">
          <p className="leading-[20px]">I want to create an account</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Tags1() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Tags">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-right text-white whitespace-nowrap">
          <p className="leading-[20px]">Check exchange rates</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Tags2() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Tags">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-right text-white whitespace-nowrap">
          <p className="leading-[20px]">Track a transaction</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Tags3() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Tags">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-right text-white whitespace-nowrap">
          <p className="leading-[20px]">Log in to my account</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Tags4() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Tags">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-right text-white whitespace-nowrap">
          <p className="leading-[20px]">About Lulu</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Tags5() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Tags">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-right text-white whitespace-nowrap">
          <p className="leading-[20px]">What can Lulu offer to me?</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[11px_12px] items-start left-[54px] top-[1604px] w-[287px]">
      <Tags />
      <Tags1 />
      <Tags2 />
      <Tags3 />
      <Tags4 />
      <Tags5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0 w-[350px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[32px] text-center w-[275px]">
        <p className="leading-[normal] whitespace-pre-wrap">Help us get to know you better!</p>
      </div>
    </div>
  );
}

function InputText() {
  return <div className="content-stretch flex items-center shrink-0" data-name="input-text" />;
}

function LabelText() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-0 px-[8px] top-[-8px]" data-name="label-text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#242424] text-[12px]">Employment Sector</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[16px] relative" data-name="content">
      <InputText />
      <LabelText />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="state-layer">
      <Content />
    </div>
  );
}

function TextField() {
  return (
    <div className="h-[52px] relative rounded-[8px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border-[#787878] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start px-[20px] relative size-full">
        <StateLayer />
      </div>
    </div>
  );
}

function Inputs() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="inputs">
      <TextField />
    </div>
  );
}

function InputText1() {
  return <div className="content-stretch flex items-center shrink-0" data-name="input-text" />;
}

function LabelText1() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-0 px-[8px] top-[-8px]" data-name="label-text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#242424] text-[12px]">Employer Name</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[16px] relative" data-name="content">
      <InputText1 />
      <LabelText1 />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="state-layer">
      <Content1 />
    </div>
  );
}

function TextField1() {
  return (
    <div className="h-[52px] relative rounded-[8px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border-[#787878] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start px-[20px] relative size-full">
        <StateLayer1 />
      </div>
    </div>
  );
}

function Inputs1() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="inputs">
      <TextField1 />
    </div>
  );
}

function InputText2() {
  return <div className="content-stretch flex items-center shrink-0" data-name="input-text" />;
}

function LabelText2() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-0 px-[8px] top-[-8px]" data-name="label-text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#242424] text-[12px]">Employer Address</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px py-[16px] relative" data-name="content">
      <InputText2 />
      <LabelText2 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="state-layer">
      <Content2 />
    </div>
  );
}

function TextField2() {
  return (
    <div className="h-[52px] relative rounded-[8px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border-[#c1c2c2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start px-[20px] relative size-full">
        <StateLayer2 />
      </div>
    </div>
  );
}

function Inputs2() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="inputs">
      <TextField2 />
    </div>
  );
}

function InputText3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Select</p>
      </div>
    </div>
  );
}

function LabelText3() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-0 px-[8px] top-[-8px]" data-name="label-text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#242424] text-[12px]">Profession</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[16px] relative" data-name="content">
      <InputText3 />
      <LabelText3 />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="state-layer">
      <Content3 />
    </div>
  );
}

function TextField3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52px] items-start left-0 px-[20px] rounded-[8px] top-0 w-[334px]" data-name="text field">
      <div aria-hidden="true" className="absolute border-[#787878] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <StateLayer3 />
    </div>
  );
}

function ArrowDropDown() {
  return (
    <div className="absolute h-[24px] left-[302px] top-[12px] w-[23.14px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.1405 24">
        <g clipPath="url(#clip0_1_932)" id="arrow_drop_down">
          <g id="Vector" />
          <path d={svgPaths.p3f481940} id="Vector_2" stroke="var(--stroke-0, #242424)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_932">
            <rect fill="white" height="24" width="23.1405" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Inputs3() {
  return (
    <div className="h-[52px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="inputs">
      <TextField3 />
      <ArrowDropDown />
    </div>
  );
}

function InputText4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">0-1000</p>
      </div>
    </div>
  );
}

function LabelText4() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-0 px-[8px] top-[-8px]" data-name="label-text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#242424] text-[12px]">{`Txn Volume/Month `}</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[16px] relative" data-name="content">
      <InputText4 />
      <LabelText4 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="state-layer">
      <Content4 />
    </div>
  );
}

function TextField4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52px] items-start left-0 px-[20px] rounded-[8px] top-0 w-[334px]" data-name="text field">
      <div aria-hidden="true" className="absolute border-[#787878] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <StateLayer4 />
    </div>
  );
}

function ArrowDropDown1() {
  return (
    <div className="absolute h-[24px] left-[301px] top-[12px] w-[23.14px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.1405 24">
        <g clipPath="url(#clip0_1_932)" id="arrow_drop_down">
          <g id="Vector" />
          <path d={svgPaths.p3f481940} id="Vector_2" stroke="var(--stroke-0, #242424)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_932">
            <rect fill="white" height="24" width="23.1405" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Inputs4() {
  return (
    <div className="h-[52px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="inputs">
      <TextField4 />
      <ArrowDropDown1 />
    </div>
  );
}

function InputText5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">5-10</p>
      </div>
    </div>
  );
}

function LabelText5() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-0 px-[8px] top-[-8px]" data-name="label-text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#242424] text-[12px]">Txn Count/Month</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[16px] relative" data-name="content">
      <InputText5 />
      <LabelText5 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="state-layer">
      <Content5 />
    </div>
  );
}

function TextField5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52px] items-start left-0 px-[20px] rounded-[8px] top-0 w-[334px]" data-name="text field">
      <div aria-hidden="true" className="absolute border-[#787878] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <StateLayer5 />
    </div>
  );
}

function ArrowDropDown2() {
  return (
    <div className="absolute h-[24px] left-[300px] top-[12px] w-[23.14px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.1405 24">
        <g clipPath="url(#clip0_1_932)" id="arrow_drop_down">
          <g id="Vector" />
          <path d={svgPaths.p3f481940} id="Vector_2" stroke="var(--stroke-0, #242424)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_932">
            <rect fill="white" height="24" width="23.1405" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Inputs5() {
  return (
    <div className="h-[52px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="inputs">
      <TextField5 />
      <ArrowDropDown2 />
    </div>
  );
}

function InputText6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">0-4999 SGD</p>
      </div>
    </div>
  );
}

function LabelText6() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-0 px-[8px] top-[-8px]" data-name="label-text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#242424] text-[12px]">Income</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[16px] relative" data-name="content">
      <InputText6 />
      <LabelText6 />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex h-[52px] items-center left-[5.99%] right-[5.99%] rounded-tl-[8px] rounded-tr-[8px] top-1/2" data-name="state-layer">
      <Content6 />
    </div>
  );
}

function ArrowDropDown3() {
  return (
    <div className="absolute h-[24px] left-[299px] top-[16px] w-[23.14px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.1405 24">
        <g clipPath="url(#clip0_1_932)" id="arrow_drop_down">
          <g id="Vector" />
          <path d={svgPaths.p3f481940} id="Vector_2" stroke="var(--stroke-0, #242424)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_932">
            <rect fill="white" height="24" width="23.1405" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TextField6() {
  return (
    <div className="h-[52px] relative rounded-[8px] shrink-0 w-full" data-name="text field">
      <div aria-hidden="true" className="absolute border-[#787878] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <StateLayer6 />
      <ArrowDropDown3 />
    </div>
  );
}

function Inputs6() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="inputs">
      <TextField6 />
    </div>
  );
}

function InputText7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input-text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Salary</p>
      </div>
    </div>
  );
}

function LabelText7() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-0 px-[8px] top-[-8px]" data-name="label-text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#242424] text-[12px]">Income Type</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[16px] relative" data-name="content">
      <InputText7 />
      <LabelText7 />
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex items-center relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="state-layer">
      <Content7 />
    </div>
  );
}

function TextField7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52px] items-start left-0 px-[20px] rounded-[8px] top-0 w-[334px]" data-name="text field">
      <div aria-hidden="true" className="absolute border-[#787878] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <StateLayer7 />
    </div>
  );
}

function ArrowDropDown4() {
  return (
    <div className="absolute h-[24px] left-[302px] top-[14px] w-[23.14px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.1405 24">
        <g clipPath="url(#clip0_1_932)" id="arrow_drop_down">
          <g id="Vector" />
          <path d={svgPaths.p3f481940} id="Vector_2" stroke="var(--stroke-0, #242424)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_932">
            <rect fill="white" height="24" width="23.1405" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Inputs7() {
  return (
    <div className="h-[52px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="inputs">
      <TextField7 />
      <ArrowDropDown4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-0 top-0 w-[334px]">
      <Inputs />
      <Inputs1 />
      <Inputs2 />
      <Inputs3 />
      <Inputs4 />
      <Inputs5 />
      <Inputs6 />
      <Inputs7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[696px] left-[7px] top-[118px] w-[334px]">
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-x-1/2 absolute h-[814px] left-[calc(50%-0.5px)] top-[22px] w-[350px]">
      <Frame3 />
      <Frame5 />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron Right">
          <path d={svgPaths.p39321180} id="Vector 108" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BtnContent() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0" data-name="btn content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white">Submit</p>
      <ChevronRight />
    </div>
  );
}

function ButtonsCta() {
  return (
    <div className="bg-[#4967ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[200px]" data-name="Buttons / CTA">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative w-full">
          <BtnContent />
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[21px] top-[872px] w-[310px]" data-name="Buttons">
      <ButtonsCta />
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[951px] left-1/2 rounded-[10px] shadow-[1px_0px_35px_0px_rgba(0,0,0,0.05)] top-[72px] w-[351px]">
      <Frame6 />
      <Buttons />
    </div>
  );
}

export default function IPhone1415Pro() {
  return (
    <div className="bg-[#f9fafa] relative size-full" data-name="iPhone 14 & 15 Pro - 94">
      <Frame1 />
      <Frame />
      <Frame2 />
      <div className="absolute h-[950px] left-[-289px] top-[587px] w-[1024px]" data-name="verify your account vector image for mobile app signup page" />
    </div>
  );
}