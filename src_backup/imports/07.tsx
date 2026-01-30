import svgPaths from "./svg-ftgpwexcox";
import imgImage30 from "@/assets/placeholder.svg";

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
    <div className="bg-[#fafbfc] h-[54px] relative shrink-0 w-[390px]" data-name="iOS status bar">
      <Time />
      <Levels />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0 w-[393px]">
      <IOsStatusBar />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] top-[325px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#242424] text-[24px] text-center w-[213px] whitespace-pre-wrap">Recipient added successfully</p>
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Add">
          <path d={svgPaths.p5ba1500} id="Vector" stroke="var(--stroke-0, #4967FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[12px] items-center left-[21px] pl-[14px] pr-[56px] py-[21px] rounded-[16px] top-[405px] w-[350px]">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Add />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#4967ff] text-[12px] w-[98px] whitespace-pre-wrap">Add another one</p>
    </div>
  );
}

function Add1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Add">
          <path d={svgPaths.p5ba1500} id="Vector" stroke="var(--stroke-0, #242424)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[12px] items-center left-[21px] pl-[14px] pr-[56px] py-[21px] rounded-[16px] top-[485px] w-[350px]">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Add1 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#242424] text-[12px] w-[162px] whitespace-pre-wrap">Back to Dashboard</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[70px] top-[95px]">
      <div className="absolute h-[197.309px] left-[70px] top-[95px] w-[233px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 233 197.309">
          <path d={svgPaths.pee3c6f0} fill="var(--fill-0, #E4E9FF)" id="Ellipse 675" />
        </svg>
      </div>
      <div className="absolute h-[189px] left-[88px] top-[103px] w-[226px]" data-name="image 30">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[119.46%] left-0 max-w-none top-0 w-full" src={imgImage30} />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fafbfc] relative size-full" data-name="07">
      <Frame3 />
      <Frame />
      <Frame1 />
      <Frame2 />
      <Group />
    </div>
  );
}