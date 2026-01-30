import svgPaths from "./svg-1prsl8akhy";
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

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0 w-[393px]">
      <IOsStatusBar />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[45px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
          <circle cx="22.5" cy="22.5" fill="var(--fill-0, #F1F3FF)" id="Ellipse 1" r="22" stroke="var(--stroke-0, #F1F3FF)" />
        </svg>
      </div>
      <p className="col-1 font-['Inter:Regular',sans-serif] font-normal h-[19px] leading-[24px] ml-[17px] mt-[12px] not-italic relative row-1 text-[#4967ff] text-[16px] w-[11px] whitespace-pre-wrap">A</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <p className="col-1 font-['Roboto:Medium',sans-serif] font-medium leading-[20px] ml-0 mt-0 relative row-1 text-[#242424] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add myself
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[25px] items-center justify-center leading-[0] left-0 top-[-17px]">
      <Group />
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="relative shrink-0 size-[45px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="Group 1402">
          <circle cx="22.5" cy="22.5" fill="var(--fill-0, #F1F3FF)" id="Ellipse 10" r="22.5" />
          <g clipPath="url(#clip0_1_2003)" id="person_add">
            <rect fill="#F1F3FF" height="19.2857" transform="translate(12.8571 12.8571)" width="19.2857" />
            <g id="Vector" />
            <path d={svgPaths.pcabd80} fill="var(--fill-0, #4967FF)" id="Vector_2" />
            <path d={svgPaths.p34f36c00} fill="var(--fill-0, #4967FF)" id="Vector_3" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2003">
            <rect fill="white" height="19.2857" transform="translate(12.8571 12.8571)" width="19.2857" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[25px] items-center justify-center left-0 top-[54px]">
      <Group2 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#242424] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add someone else
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[114px] left-[51px] top-[432px] w-[270px]">
      <Frame1 />
      <Frame />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="absolute left-[316px] size-[24px] top-[496px]" data-name="Arrow Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow Right">
          <path d={svgPaths.p1fd191c0} id="Vector 106" stroke="var(--stroke-0, #242424)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="absolute left-[316px] size-[24px] top-[426px]" data-name="Arrow Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow Right">
          <path d={svgPaths.p1fd191c0} id="Vector 106" stroke="var(--stroke-0, #242424)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[22px] top-[62px] w-[107px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#242424] text-[0px] text-[16px]">
        <span className="leading-[24px]">{`Add `}</span>
        <span className="leading-[24px]">Recipient</span>
        <span className="leading-[24px]">{` `}</span>
      </p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f9fafa] relative size-full" data-name="03">
      <Frame4 />
      <div className="absolute bg-white h-[478px] left-[20px] rounded-[16px] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.05)] top-[97px] w-[350px]" />
      <div className="absolute h-[172px] left-[80px] top-[127px] w-[204px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 204 172">
          <path d={svgPaths.pc47f040} fill="var(--fill-0, #E4E9FF)" id="Ellipse 675" />
        </svg>
      </div>
      <div className="absolute h-[189px] left-[88px] top-[110px] w-[226px]" data-name="image 30">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[119.46%] left-0 max-w-none top-0 w-full" src={imgImage30} />
        </div>
      </div>
      <Frame2 />
      <ArrowRight />
      <ArrowRight1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[188.5px] not-italic text-[#242424] text-[24px] text-center top-[352px] w-[237px]">
        <p className="leading-[normal] whitespace-pre-wrap">Who would you like to send money to?</p>
      </div>
      <Frame3 />
    </div>
  );
}