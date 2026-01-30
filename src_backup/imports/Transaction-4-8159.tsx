import svgPaths from "./svg-gp3j6ab3gl";

function Time() {
  return (
    <div className="-translate-y-1/2 absolute h-[54px] left-0 right-[64.25%] top-1/2" data-name="Time">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal inset-[29.63%_57.17%_29.63%_16.5%] leading-[22px] text-[17px] text-center text-white whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Battery() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[33.33%] contents left-[calc(50%+36.95px)] top-[42.59%]" data-name="Battery">
      <div className="-translate-x-1/2 absolute border border-solid border-white bottom-[33.33%] left-[calc(50%+35.79px)] opacity-35 rounded-[4.3px] top-[42.59%] w-[25px]" data-name="Border" />
      <div className="-translate-x-1/2 absolute bottom-[41.01%] left-[calc(50%+49.95px)] top-[51.45%] w-[1.328px]" data-name="Cap">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32804 4.07547">
          <path d={svgPaths.p193f1400} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute bg-white bottom-[37.04%] left-[calc(50%+35.79px)] rounded-[2.5px] top-[46.3%] w-[21px]" data-name="Capacity" />
    </div>
  );
}

function Levels() {
  return (
    <div className="-translate-y-1/2 absolute h-[54px] left-[64.25%] right-0 top-1/2" data-name="Levels">
      <Battery />
      <div className="-translate-x-1/2 absolute bottom-[33.4%] left-[calc(50%+7.56px)] top-[43.77%] w-[17.142px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
          <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[33.77%] left-[calc(50%-18.11px)] top-[43.59%] w-[19.2px]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
          <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
    </div>
  );
}

function IOsStatusBar() {
  return (
    <div className="bg-[#4967ff] h-[54px] relative shrink-0 w-[390px]" data-name="iOS status bar">
      <Time />
      <Levels />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0">
      <IOsStatusBar />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[84.59%_46.75%_12.04%_46.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6864 30.0001">
        <g id="Group">
          <path d={svgPaths.p1af3a580} fill="var(--fill-0, #242424)" id="Vector" />
          <path d={svgPaths.p17d68740} fill="var(--fill-0, #242424)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[34px] top-[731px]">
      <div className="absolute bg-white h-[72px] left-[34px] rounded-[9px] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.05)] top-[731px] w-[74px]" />
      <div className="absolute h-[36px] left-[56px] top-[749px] w-[29px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 36">
          <path d={svgPaths.p2b700c00} fill="var(--fill-0, #242424)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bg-white h-[72px] left-[157px] rounded-[9px] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.05)] top-[731px] w-[74px]" />
      <div className="absolute bg-white h-[72px] left-[275px] rounded-[9px] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.05)] top-[731px] w-[74px]" />
      <Group />
      <div className="absolute left-[298px] size-[28px] top-[753px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <path clipRule="evenodd" d={svgPaths.p11596280} fill="var(--fill-0, #242424)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[74px] not-italic text-[#242424] text-[12px] text-center top-[813px] w-[68px] whitespace-pre-wrap">
        <p className="mb-0">{`Repeat `}</p>
        <p>transaction</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[198px] not-italic text-[#242424] text-[12px] text-center top-[813px] w-[68px] whitespace-pre-wrap">Download receipt</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[316px] not-italic text-[#242424] text-[12px] text-center top-[813px] w-[68px] whitespace-pre-wrap">Go to dashboard</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-white h-[93px] left-[21px] not-italic rounded-[24px] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.05)] text-[#242424] top-[308px] w-[349px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[61px] text-[30px] top-[18px]">{` 15,333.43 PHP`}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[112px] text-[14px] top-[58px]">Recipient Receives</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[21px] top-[308px]">
      <Frame5 />
    </div>
  );
}

function Tag() {
  return (
    <div className="absolute bg-[#4967ff] content-stretch flex gap-[6px] h-[32px] items-center justify-center left-[138px] px-[12px] py-[5px] rounded-[40px] top-[241px] w-[110px]" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white">Track status</p>
    </div>
  );
}

function PlusCircle() {
  return (
    <div className="absolute left-[122px] size-[141px] top-[61px]" data-name="plus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 141 141">
        <g id="plus-circle">
          <path d={svgPaths.p749f000} fill="var(--fill-0, #3AD91A)" id="Vector" opacity="0.3" />
          <path d={svgPaths.p1a093380} fill="var(--fill-0, #3AD91A)" id="Vector_2" />
          <path d={svgPaths.p3c171300} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Copy() {
  return (
    <div className="absolute left-[325px] size-[24px] top-[522px]" data-name="copy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="copy">
          <path d={svgPaths.p19372c00} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3b0bb100} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#242424] text-[16px]">Debit Cards</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#787878] text-[14px]">Payment method</p>
      <Frame7 />
    </div>
  );
}

function Copy1() {
  return (
    <div className="absolute left-[115px] size-[24px] top-0" data-name="copy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="copy">
          <path d={svgPaths.p19372c00} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3b0bb100} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[133px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[-9px] not-italic text-[#242424] text-[16px] top-0 w-[133px] whitespace-pre-wrap">{`025315015528 `}</p>
      <Copy1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#787878] text-[14px]">Reference ID</p>
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#242424] text-[0px] text-[16px]">
        <span className="leading-[24px]">1010.00</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">{` AED`}</span>
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#787878] text-[14px]">Send Amount</p>
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#242424] text-[16px]">Sumit Balakrishna</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#787878] text-[14px]">Fund to</p>
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <div className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#242424] text-[16px] whitespace-nowrap">
        <p className="mb-0">IDFC Bank Ltd.</p>
        <p>0000123456</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#787878] text-[14px]">Bank and Details</p>
      <Frame11 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[15px] items-start left-[20px] px-[20px] py-[32px] rounded-[24px] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.05)] top-[432px] w-[350px]">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

export default function Transaction() {
  return (
    <div className="bg-[#fafbfc] relative size-full" data-name="Transaction">
      <Frame12 />
      <div className="absolute bg-[#4967ff] h-[296px] left-0 rounded-bl-[26px] rounded-br-[32px] top-[54px] w-[390px]" />
      <Group2 />
      <Group1 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[calc(50%-0.5px)] not-italic text-[16px] text-center text-white top-[204px]">The money is on the way</p>
      <Tag />
      <PlusCircle />
      <Copy />
      <Frame6 />
    </div>
  );
}