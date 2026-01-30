import svgPaths from "./svg-gbsilp328m";
import imgRectangle31 from "@/assets/placeholder.svg";

function Time() {
  return (
    <div className="-translate-y-1/2 absolute h-[54px] left-0 right-[64.25%] top-1/2" data-name="Time">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal inset-[29.63%_57.17%_29.63%_16.5%] leading-[22px] text-[17px] text-black text-center whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
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

function Frame27() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[673px] top-[2408px] w-[393px]">
      <IOsStatusBar />
    </div>
  );
}

function Time1() {
  return (
    <div className="-translate-y-1/2 absolute h-[54px] left-0 right-[64.25%] top-1/2" data-name="Time">
      <p className="absolute font-['SF_Pro:Regular',sans-serif] font-normal inset-[29.63%_57.17%_29.63%_16.5%] leading-[22px] text-[17px] text-black text-center whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Battery1() {
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

function Levels1() {
  return (
    <div className="-translate-y-1/2 absolute h-[54px] left-[64.25%] right-0 top-1/2" data-name="Levels">
      <Battery1 />
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

function IOsStatusBar1() {
  return (
    <div className="bg-[#fafbfc] h-[54px] relative shrink-0 w-[390px]" data-name="iOS status bar">
      <Time1 />
      <Levels1 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0 w-[393px]">
      <IOsStatusBar1 />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="absolute left-[-6px] size-[30px] top-[-1px]" data-name="arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="arrow-left">
          <path d="M23.75 15H6.25" id="Vector" stroke="var(--stroke-0, #242424)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15 23.75L6.25 15L15 6.25" id="Vector_2" stroke="var(--stroke-0, #242424)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[30px] not-italic text-[#242424] text-[16px] top-0">Review Transfer</p>
      <ArrowLeft />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[60px] top-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#242424] text-[14px]">Lara Khan</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute h-[51px] left-[16px] top-[11px] w-[173px]">
      <Frame3 />
      <div className="absolute left-0 size-[48px] top-[2px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <circle cx="24" cy="24" fill="var(--fill-0, #FFDBDB)" id="Ellipse 676" r="24" />
        </svg>
      </div>
      <div className="absolute h-[12px] left-[13px] pointer-events-none top-[44px] w-[18px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRectangle31} />
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px]" />
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[13px] not-italic text-[#d83c3c] text-[16px] top-[16px] w-[21px] whitespace-pre-wrap">LK</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[60px] not-italic text-[#787878] text-[12px] top-[21px] whitespace-nowrap">
        <p className="mb-0">IDFC First Bank Ltd.</p>
        <p>0000123456</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[4.17%_8.33%_8.33%_8.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 14">
        <g id="Group">
          <path d={svgPaths.p365af000} fill="var(--fill-0, #4967FF)" id="Vector" />
          <path d={svgPaths.p768b500} fill="var(--fill-0, #4967FF)" id="Vector_2" />
          <path d="M13.3333 12H0V14H13.3333V12Z" fill="var(--fill-0, #4967FF)" id="Vector_3" />
          <path d="M12 6H10V10.6667H12V6Z" fill="var(--fill-0, #4967FF)" id="Vector_4" />
          <path d={svgPaths.pc348f00} fill="var(--fill-0, #4967FF)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[4.17%_8.33%_8.33%_8.33%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function AccountBalance() {
  return (
    <div className="absolute bg-[#f1f3ff] left-[307px] overflow-clip rounded-[5px] size-[16px] top-[35px]" data-name="account_balance">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Vector" />
        </g>
      </svg>
      <Group />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[307px] top-[35px]">
      <AccountBalance />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[307px] top-[35px]">
      <Group9 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[299px] top-[28px]">
      <div className="absolute bg-[#f1f3ff] left-[299px] rounded-[5px] size-[31px] top-[28px]" />
      <Group10 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[299px] top-[28px]">
      <Group16 />
    </div>
  );
}

function RecipientCardsWeb() {
  return (
    <div className="absolute bg-white h-[82px] left-0 rounded-[24px] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.05)] top-[51px] w-[350px]" data-name="recipient cards Web">
      <Frame26 />
      <Group14 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[133px] left-[20px] top-[68px] w-[350px]">
      <Frame4 />
      <RecipientCardsWeb />
    </div>
  );
}

function UnitedArabEmirates() {
  return (
    <div className="col-1 h-[18px] ml-0 mt-0 relative row-1 w-[24px]" data-name="United Arab Emirates">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18">
        <g clipPath="url(#clip0_1_3144)" id="United Arab Emirates">
          <path d={svgPaths.p20523600} fill="var(--fill-0, #00732F)" id="Vector" />
          <path d={svgPaths.p3aaaeb70} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p28805000} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p13dbffc0} fill="var(--fill-0, #FF0000)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_3144">
            <rect fill="white" height="18" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[257px] mt-[36px] relative row-1">
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center ml-[32px] mt-[11px] relative row-1 text-[#242424] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">AED</p>
      </div>
      <UnitedArabEmirates />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[52.57%_40%_20.76%_40%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.8 4.8">
        <g id="Group">
          <path d={svgPaths.p8570dc0} fill="var(--fill-0, #000088)" id="Vector" />
          <path d={svgPaths.p2d9b0300} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p37e59080} fill="var(--fill-0, #000088)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[36.67%_40%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.4 5.33333">
        <g id="Group">
          <path d={svgPaths.p2f8b3500} fill="var(--fill-0, #000088)" id="Vector" />
          <path d={svgPaths.p10aab200} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p3ee12900} fill="var(--fill-0, #000088)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute inset-[10.35%_-8.33%_-21.47%_-4.17%] overflow-clip" data-name="Frame">
      <div className="absolute inset-[0_0_66.67%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 6.66667">
          <path d="M0 0H27V6.66667H0V0Z" fill="var(--fill-0, #FF9933)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.33%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 6.66667">
          <path d="M0 0H27V6.66667H0V0Z" fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[66.67%_0_0_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 6.66667">
          <path d="M0 0H27V6.66667H0V0Z" fill="var(--fill-0, #128807)" id="Vector" />
        </svg>
      </div>
      <Group3 />
      <div className="absolute inset-[3.62%_-5.3%_1.01%_-1.98%] pointer-events-none" data-name="Currency icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRectangle31} />
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px]" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 h-[18px] ml-0 mt-0 overflow-clip relative row-1 w-[24px]" data-name="Frame">
      <div className="absolute inset-[15.91%_0_50.76%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 6">
          <path d="M0 0H24V6H0V0Z" fill="var(--fill-0, #FF9933)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[49.24%_0_17.42%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 6">
          <path d="M0 0H24V6H0V0Z" fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[82.58%_0_-15.91%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 6">
          <path d="M0 0H24V6H0V0Z" fill="var(--fill-0, #128807)" id="Vector" />
        </svg>
      </div>
      <Group2 />
      <Frame1 />
    </div>
  );
}

function Group8() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[256px] mt-[171px] relative row-1">
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center ml-[27px] mt-[11px] relative row-1 text-[#242424] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">PHP</p>
      </div>
      <div className="col-1 flex h-[4px] items-center justify-center ml-[65px] mt-[10px] relative row-1 w-[8px]">
        <div className="flex-none h-[8px] rotate-90 w-[4px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-9.38%_-18.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 9.5">
                <path d={svgPaths.p265cdb80} id="Vector" stroke="var(--stroke-0, #242424)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame />
    </div>
  );
}

function Group7() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[95px] mt-[85px] relative row-1">
      <div className="col-1 h-[26px] ml-0 mt-0 relative row-1 w-[134px]" data-name="Mask">
        <div className="absolute inset-[-1.92%_-0.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 27">
            <path d={svgPaths.p25f95880} fill="var(--fill-0, #F1F3FF)" id="Mask" stroke="var(--stroke-0, #F1F3FF)" />
          </svg>
        </div>
      </div>
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[20px] ml-[10px] mt-[3px] relative row-1 text-[#787878] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        1 AED = 20.35 PHP
      </p>
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center ml-0 mt-[47px] relative row-1 text-[#242424] text-[24px] w-[209px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">1000.00</p>
      </div>
      <Group6 />
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center ml-0 mt-[182px] relative row-1 text-[#242424] text-[24px] w-[209px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">15,333.43</p>
      </div>
      <Group8 />
      <div className="border border-[#f1f3ff] border-solid col-1 h-px ml-[17px] mt-[97px] row-1 w-[296px]" />
      <Group7 />
      <p className="-translate-x-1/2 col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[17px] ml-[29px] mt-0 relative row-1 text-[#787878] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        You send
      </p>
      <p className="-translate-x-1/2 col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[17px] ml-[39px] mt-[135px] relative row-1 text-[#787878] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        They receive
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex font-['Roboto:Medium',sans-serif] font-medium gap-[6px] items-end leading-[20px] relative shrink-0 text-[#242424] text-right">
      <p className="relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        5.00
      </p>
      <p className="relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AED
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#787878] text-[14px]">Taxes</p>
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex font-['Roboto:Medium',sans-serif] font-medium gap-[6px] items-end leading-[20px] relative shrink-0 text-[#242424] text-right">
      <p className="relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.00
      </p>
      <p className="relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AED
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#787878] text-[14px]">Fee</p>
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex font-['Roboto:Medium',sans-serif] font-medium gap-[6px] items-end leading-[20px] relative shrink-0 text-[#242424] text-right">
      <p className="relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        5.00
      </p>
      <p className="relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AED
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#787878] text-[14px]">Payment Charges</p>
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex font-['Roboto:Medium',sans-serif] font-medium gap-[6px] items-end leading-[20px] relative shrink-0 text-[#242424] text-right">
      <p className="relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.00
      </p>
      <p className="relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AED
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#787878] text-[14px]">Discount</p>
      <Frame14 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-center relative shrink-0 text-right">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px]">1010.00</p>
      <p className="font-['Roboto:Medium',sans-serif] font-medium h-[14px] leading-[20px] relative shrink-0 text-[12px] w-[23px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        AED
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 text-[#242424] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px]">Total to pay</p>
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-center justify-center relative shrink-0 w-[329px]">
      <Frame19 />
      <div className="h-0 relative shrink-0 w-[329px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 329 1">
            <line id="Line 22" stroke="var(--stroke-0, #E7E7E7)" x2="329" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame21 />
      <div className="h-0 relative shrink-0 w-[329px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 329 1">
            <line id="Line 22" stroke="var(--stroke-0, #E7E7E7)" x2="329" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="col-1 content-stretch flex items-start justify-between leading-[normal] ml-[16px] mt-[18px] relative row-1 text-[#787878] text-[16px] w-[296px] whitespace-pre-wrap">
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 w-[135px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Enter Promo Code
      </p>
      <p className="font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 w-[42.767px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Apply
      </p>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 h-[56px] ml-0 mt-0 relative rounded-[5px] row-1 w-[330px]">
        <div aria-hidden="true" className="absolute border border-[#787878] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      </div>
      <Frame23 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#242424] text-[16px]">Promo Code</p>
      <Group4 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#242424] text-[14px] w-[291px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        View all promo codes
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[523.302px] items-end left-[31px] top-[381.14px]">
      <Group11 />
      <Frame22 />
      <Frame24 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[21px] top-[359px]">
      <div className="-translate-x-1/2 absolute bg-white h-[773px] left-[calc(50%-0.5px)] rounded-[16px] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.05)] top-[359px] w-[350px]" />
      <Frame25 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[31px] text-[14px] top-[966px]">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[0] left-[57px] text-[#787878] top-[994px] w-[291px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[20px]">{`I accept `}</span>
        <span className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Terms of services
        </span>
        <span className="leading-[20px]">{` and `}</span>
        <span className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Privacy Policy
        </span>
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[31px] text-[#242424] top-[966px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Terms & Conditions`}</p>
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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white">Send 1010 AED</p>
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
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%-0.5px)] top-[1039px] w-[330px]" data-name="Buttons">
      <ButtonsCta />
    </div>
  );
}

function Frame2() {
  return <div className="-translate-x-1/2 absolute h-[19px] left-[calc(50%-2.5px)] top-[429px] w-[126px]" />;
}

function Frame5() {
  return (
    <div className="absolute h-[17px] left-0 top-[6px] w-[342px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-0 not-italic text-[#242424] text-[14px] top-0">Payment method</p>
    </div>
  );
}

function CreditCard() {
  return (
    <div className="col-1 ml-[5px] mt-[4.5px] relative row-1 size-[21px]" data-name="credit_card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="credit_card">
          <g clipPath="url(#clip0_1_3112)">
            <rect fill="var(--fill-0, #F1F3FF)" height="21" rx="5" width="21" />
            <g id="Vector" />
            <g id="Group 34003">
              <path clipRule="evenodd" d={svgPaths.p5853c00} fill="var(--fill-0, #4967FF)" fillRule="evenodd" id="Vector_2" />
              <path d={svgPaths.p23011b00} fill="var(--fill-0, #4967FF)" id="Vector 1" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_3112">
            <rect fill="white" height="21" rx="5" width="21" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <div className="bg-[#f1f3ff] col-1 ml-0 mt-0 rounded-[5px] row-1 size-[31px]" />
      <CreditCard />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-center leading-[0] relative shrink-0">
      <Group15 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#242424] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Debit Cards</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[19px] top-[13.5px]">
      <Frame9 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-white border border-[#e7e7e7] border-solid h-[60px] left-0 rounded-[16px] top-[33px] w-[332px]">
      <Frame8 />
      <p className="-translate-x-full absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[315px] not-italic text-[#4967ff] text-[12px] text-right top-[21px]">Change</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-white h-[93px] left-[29px] top-[227px] w-[335px]">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[21px] top-[220px]">
      <div className="-translate-x-1/2 absolute bg-white h-[119px] left-[calc(50%-0.5px)] rounded-[16px] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.05)] top-[220px] w-[350px]" />
      <Frame7 />
    </div>
  );
}

export default function Transaction() {
  return (
    <div className="bg-[#f9fafa] relative size-full" data-name="Transaction">
      <Frame27 />
      <Frame28 />
      <Frame10 />
      <Group12 />
      <Group5 />
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-[188px] text-[#787878] text-[12px] text-center top-[1100px] w-[342px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`* Rates are indicative and may vary `}</p>
      <Buttons />
      <Frame2 />
      <Group13 />
      <div className="absolute bg-white border border-[#787878] border-solid left-[31px] rounded-[4px] size-[17px] top-[996px]" />
    </div>
  );
}