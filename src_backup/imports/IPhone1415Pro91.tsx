import svgPaths from "./svg-lu84majsoh";

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
    <div className="absolute content-stretch flex flex-col gap-[11px] items-center leading-[0] left-[19px] not-italic text-center top-[24px] w-[310px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#242424] text-[32px] w-[275px]">
        <p className="leading-[normal] whitespace-pre-wrap">Scan the front of ID Proof</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px] text-black w-[311px]">
        <p className="leading-[20px] whitespace-pre-wrap">Step 1 of 2</p>
      </div>
    </div>
  );
}

function CameraFrame() {
  return (
    <div className="col-1 h-[320px] ml-0 mt-0 relative row-1 w-[319px]" data-name="Camera Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 320">
        <g id="Camera Frame">
          <rect fill="var(--fill-0, #F1F3FF)" height="320" id="Camera Overlay" rx="10" width="319" />
          <g id="Frame">
            <g id="Vector" />
            <path d={svgPaths.p707b600} fill="var(--fill-0, #4967FF)" id="Vector_2" />
          </g>
          <path d={svgPaths.p1bba2700} fill="var(--fill-0, #4967FF)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <CameraFrame />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col h-[298px] items-center relative shrink-0" data-name="Input Field">
      <Group1 />
    </div>
  );
}

function InputFieldContainer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[284px] items-center left-[15px] top-[177px]" data-name="Input Field Container">
      <InputField />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[15px] top-[177px]">
      <InputFieldContainer />
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[617px] left-1/2 rounded-[10px] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.05)] top-[72px] w-[351px]">
      <Frame3 />
      <Group />
    </div>
  );
}

export default function IPhone1415Pro() {
  return (
    <div className="bg-[#f9fafa] relative size-full" data-name="iPhone 14 & 15 Pro - 91">
      <Frame1 />
      <Frame />
      <Frame2 />
      <div className="absolute h-[950px] left-[-289px] top-[587px] w-[1024px]" data-name="verify your account vector image for mobile app signup page" />
    </div>
  );
}