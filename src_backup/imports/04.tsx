import svgPaths from "./svg-2neren83kn";

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

function TabBar() {
  return <div className="-translate-x-1/2 absolute h-[25px] left-[calc(50%+5px)] top-[31px] w-[336px]" data-name="Tab Bar" />;
}

function FormFieldLabelContainer() {
  return (
    <div className="absolute contents left-[9px] top-[1128px]" data-name="Form field label container">
      <div className="absolute h-[56px] left-[9px] top-[1137px] w-[335px]">
        <div className="absolute inset-[-0.89%_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 336 57">
            <path d={svgPaths.p3b477d00} id="Rectangle 5" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[25px] text-[14px] text-white top-[1128px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        UPI
      </p>
    </div>
  );
}

function FormField() {
  return (
    <div className="absolute contents left-[9px] top-[1128px]" data-name="Form field">
      <FormFieldLabelContainer />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[25px] text-[#b3b3b3] text-[14px] top-[1155px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Enter UPI number
      </p>
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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white">Save</p>
      <ChevronRight />
    </div>
  );
}

function ButtonsCta() {
  return (
    <div className="bg-[#ff9500] flex-[1_0_0] min-h-px min-w-px relative rounded-[200px]" data-name="Buttons / CTA">
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
    <div className="absolute content-stretch flex items-center justify-center left-[16px] top-[1231px] w-[310px]" data-name="Buttons">
      <ButtonsCta />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="absolute contents left-[16px] top-[1231px]" data-name="Button Container">
      <Buttons />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[166.5px] not-italic text-[#ff9500] text-[14px] text-center top-[1299px]">Cancel</p>
    </div>
  );
}

function SearchLg() {
  return (
    <div className="absolute left-[21px] size-[24px] top-[23px]" data-name="search-lg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search-lg">
          <path d={svgPaths.p21545500} id="Icon" stroke="var(--stroke-0, #787878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start py-[7px] relative shrink-0 w-[326px]" data-name="Input">
      <div className="h-[56px] relative rounded-[100px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[#787878] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[62px] not-italic text-[#787878] text-[16px] top-[25px] w-[281px] whitespace-pre-wrap">Search</p>
      <SearchLg />
    </div>
  );
}

function SearchField() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[11.5px] top-[24px] w-[326px]" data-name="Search Field">
      <Input />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[18px] relative shrink-0 w-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18">
        <g clipPath="url(#clip0_1_1981)" id="Frame">
          <path d="M0 0H24V9H0V0Z" fill="var(--fill-0, #0038A8)" id="Vector" />
          <path d="M0 9H24V18H0V9Z" fill="var(--fill-0, #CE1126)" id="Vector_2" />
          <path d="M15.5887 9L0 18V0" fill="var(--fill-0, white)" id="Vector_3" />
          <g id="Group">
            <path d={svgPaths.p371a8800} fill="var(--fill-0, #FCD116)" id="Vector_4" />
            <path d={svgPaths.p2a2830f2} fill="var(--fill-0, #FCD116)" id="Vector_5" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1981">
            <rect fill="white" height="18" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CountryFlag() {
  return (
    <div className="content-stretch flex flex-col items-start py-[3px] relative shrink-0" data-name="Country Flag">
      <Frame />
    </div>
  );
}

function CountryText() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[4px] items-start leading-[0] relative shrink-0 whitespace-nowrap" data-name="Country Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#242424] text-[16px]">
        <p className="leading-[20px]">Philippines</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0 text-[#787878] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Philippine Peso</p>
      </div>
    </div>
  );
}

function CountryInfo() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Country Info">
      <CountryFlag />
      <CountryText />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Arrow Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow Right" />
      </svg>
    </div>
  );
}

function CountryItem() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[324px]" data-name="Country Item">
      <CountryInfo />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">PHP</p>
      </div>
      <ArrowRight />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[38px] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[16px] text-right w-[43px]">
        <p className="leading-[20px] whitespace-pre-wrap">PHP</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[18px] relative shrink-0 w-[27px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 18">
        <g id="Group">
          <path clipRule="evenodd" d="M0 0H27V18H0V0Z" fill="var(--fill-0, #E10011)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1f828300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function CountryText1() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[4px] items-start leading-[0] relative shrink-0 whitespace-nowrap" data-name="Country Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#242424] text-[16px]">
        <p className="leading-[20px]">Bahrain</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0 text-[#787878] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Bahraini Dinar</p>
      </div>
    </div>
  );
}

function CountryInfo1() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="Country Info">
      <Group />
      <CountryText1 />
    </div>
  );
}

function CountryItem1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[324px]" data-name="Country Item">
      <CountryInfo1 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">BHD</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[38px] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[16px] text-right w-[43px]">
        <p className="leading-[20px] whitespace-pre-wrap">BHD</p>
      </div>
    </div>
  );
}

function CountryFlag1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[24px]" data-name="Country Flag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18">
        <g id="Country Flag">
          <path d="M0 0H24V18H0V0Z" fill="var(--fill-0, #006A4E)" id="Vector" />
          <path d={svgPaths.p21e68700} fill="var(--fill-0, #F42A41)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function CountryText2() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[4px] items-start leading-[0] relative shrink-0 whitespace-nowrap" data-name="Country Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#242424] text-[16px]">
        <p className="leading-[20px]">Bangladesh</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0 text-[#787878] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Bangladeshi taka</p>
      </div>
    </div>
  );
}

function CountryInfo2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Country Info">
      <CountryFlag1 />
      <CountryText2 />
    </div>
  );
}

function CountryItem2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[324px]" data-name="Country Item">
      <CountryInfo2 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">BDT</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[38px] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[16px] text-right w-[43px]">
        <p className="leading-[20px] whitespace-pre-wrap">BDT</p>
      </div>
    </div>
  );
}

function CountryFlag2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[24px]" data-name="Country Flag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18">
        <g id="Country Flag">
          <path d="M0 12H24V18H0V12Z" fill="var(--fill-0, #242424)" id="Vector" />
          <path d="M0 6H24V12H0V6Z" fill="var(--fill-0, white)" id="Vector_2" />
          <path d="M0 0H24V6H0V0Z" fill="var(--fill-0, #CE1126)" id="Vector_3" />
          <g id="Group">
            <path d={svgPaths.p1b314d00} fill="var(--fill-0, white)" id="Vector_4" stroke="var(--stroke-0, #C09300)" strokeLinejoin="round" strokeWidth="1.04" />
            <path d={svgPaths.p1ad74c80} fill="var(--fill-0, #C09300)" id="a" />
            <path d={svgPaths.p3b946980} fill="var(--fill-0, #C09300)" id="Vector_5" stroke="var(--stroke-0, #C09300)" strokeWidth="0.88" />
            <g id="b">
              <path d={svgPaths.p3246e400} fill="var(--fill-0, white)" id="Vector_6" stroke="var(--stroke-0, #C09300)" strokeLinejoin="round" strokeWidth="0.96" />
              <path d={svgPaths.p2187bd40} id="Vector_7" stroke="var(--stroke-0, #C09300)" strokeLinejoin="round" strokeWidth="1.04" />
              <path d={svgPaths.pb63c00} id="Vector_8" stroke="var(--stroke-0, #C09300)" strokeLinejoin="round" strokeWidth="1.04" />
              <path d={svgPaths.p13f8ab00} id="Vector_9" stroke="var(--stroke-0, #C09300)" strokeLinejoin="round" strokeWidth="1.04" />
            </g>
            <g id="Group_2">
              <path d={svgPaths.p3ae3f00} fill="var(--fill-0, white)" id="Vector_10" stroke="var(--stroke-0, #C09300)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.92" />
              <path d={svgPaths.p26951180} fill="var(--fill-0, white)" id="Vector_11" stroke="var(--stroke-0, #C09300)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04" />
              <path d={svgPaths.p18017740} fill="var(--fill-0, white)" id="Vector_12" stroke="var(--stroke-0, #C09300)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04" />
              <path d={svgPaths.p2a5a6e00} fill="var(--fill-0, white)" id="Vector_13" stroke="var(--stroke-0, #C09300)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.72" />
              <g id="Group_3">
                <path d={svgPaths.p18091f00} fill="var(--fill-0, #C09300)" id="Vector_14" />
                <path d={svgPaths.pe300} fill="var(--fill-0, #C09300)" id="Vector_15" />
              </g>
            </g>
            <path d={svgPaths.p31473e80} fill="var(--fill-0, white)" id="Vector_16" stroke="var(--stroke-0, #C09300)" strokeWidth="0.88" />
            <path d={svgPaths.p1be3a980} fill="var(--fill-0, white)" id="Vector_17" stroke="var(--stroke-0, #C09300)" strokeWidth="0.72" />
            <path d={svgPaths.pab283f0} fill="var(--fill-0, #C09300)" id="Vector_18" />
            <g id="Group_4">
              <path d={svgPaths.p1dd45400} fill="var(--fill-0, white)" id="Vector_19" stroke="var(--stroke-0, #C09300)" strokeWidth="0.96" />
              <path d={svgPaths.p2227d300} id="Vector_20" stroke="var(--stroke-0, #C09300)" strokeWidth="1.04" />
              <path d={svgPaths.p202c2000} fill="var(--fill-0, #C09300)" id="Vector_21" stroke="var(--stroke-0, #C09300)" strokeWidth="0.24" />
              <path d={svgPaths.p6814c00} fill="var(--fill-0, #C09300)" id="Vector_22" stroke="var(--stroke-0, #C09300)" strokeWidth="0.24" />
              <path d={svgPaths.p2de26000} fill="var(--fill-0, white)" id="Vector_23" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function CountryText3() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[4px] items-start leading-[0] relative shrink-0 whitespace-nowrap" data-name="Country Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#242424] text-[16px]">
        <p className="leading-[20px]">Egypt</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0 text-[#787878] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Egyptian Pound</p>
      </div>
    </div>
  );
}

function CountryInfo3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Country Info">
      <CountryFlag2 />
      <CountryText3 />
    </div>
  );
}

function CountryItem3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[324px]" data-name="Country Item">
      <CountryInfo3 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">EGP</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[38px] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[16px] text-right w-[43px]">
        <p className="leading-[20px] whitespace-pre-wrap">EGP</p>
      </div>
    </div>
  );
}

function A() {
  return (
    <div className="absolute inset-[50.85%_40.82%_38.34%_49.7%]" data-name="a">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.27519 1.94594">
        <g id="a">
          <path d={svgPaths.p1830ba80} fill="var(--fill-0, #000088)" id="Vector" />
          <path d={svgPaths.paf93700} fill="var(--fill-0, #000088)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function B() {
  return (
    <div className="absolute contents inset-[50.85%_40.82%_38.34%_49.7%]" data-name="b">
      <A />
    </div>
  );
}

function C() {
  return (
    <div className="absolute contents inset-[50.85%_40.82%_38.34%_49.7%]" data-name="c">
      <B />
    </div>
  );
}

function D() {
  return (
    <div className="absolute contents inset-[50.85%_40.82%_38.34%_49.7%]" data-name="d">
      <C />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[36.66%_40%_36.67%_40%]" data-name="Group">
      <div className="absolute inset-[36.66%_40%_36.67%_40%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.8 4.8">
          <path d={svgPaths.p8570dc0} fill="var(--fill-0, #000088)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.34%_41.25%_38.33%_41.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.2 4.2">
          <path d={svgPaths.p26cd3c80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.67%_48.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.840005 0.840006">
          <path d={svgPaths.p274b1d00} fill="var(--fill-0, #000088)" id="Vector" />
        </svg>
      </div>
      <D />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[24px]" data-name="Frame">
      <div className="absolute inset-[0_0_66.67%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 6">
          <path d="M0 0H24V6H0V0Z" fill="var(--fill-0, #FF9933)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.33%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 6">
          <path d="M0 0H24V6H0V0Z" fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[66.67%_0_0_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 6">
          <path d="M0 0H24V6H0V0Z" fill="var(--fill-0, #128807)" id="Vector" />
        </svg>
      </div>
      <Group1 />
    </div>
  );
}

function CountryText4() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[4px] items-start leading-[0] relative shrink-0 whitespace-nowrap" data-name="Country Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#242424] text-[16px]">
        <p className="leading-[20px]">India</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0 text-[#787878] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Indian Rupee</p>
      </div>
    </div>
  );
}

function CountryInfo4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Country Info">
      <Frame1 />
      <CountryText4 />
    </div>
  );
}

function CountryItem4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[324px]" data-name="Country Item">
      <CountryInfo4 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">INR</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[38px] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[16px] text-right w-[43px]">
        <p className="leading-[20px] whitespace-pre-wrap">INR</p>
      </div>
    </div>
  );
}

function CountryFlag3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[24px]" data-name="Country Flag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18">
        <g id="Country Flag">
          <path d="M0 0H24V9H0V0Z" fill="var(--fill-0, #0038A8)" id="Vector" />
          <path d="M0 9H24V18H0V9Z" fill="var(--fill-0, #CE1126)" id="Vector_2" />
          <path d="M15.5887 9L0 18V0" fill="var(--fill-0, white)" id="Vector_3" />
          <g id="Group">
            <path d={svgPaths.p1382f800} fill="var(--fill-0, #FCD116)" id="Vector_4" />
            <path d={svgPaths.pec3a380} fill="var(--fill-0, #FCD116)" id="Vector_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CountryText5() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[4px] items-start leading-[0] relative shrink-0 whitespace-nowrap" data-name="Country Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#242424] text-[16px]">
        <p className="leading-[20px]">Philippines</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0 text-[#787878] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">US Dollar</p>
      </div>
    </div>
  );
}

function CountryInfo5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Country Info">
      <CountryFlag3 />
      <CountryText5 />
    </div>
  );
}

function CountryItem5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[324px]" data-name="Country Item">
      <CountryInfo5 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">USD</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[35px] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[16px] text-right w-[43px]">
        <p className="leading-[20px] whitespace-pre-wrap">PHP</p>
      </div>
    </div>
  );
}

function CountryFlag4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[24px]" data-name="Country Flag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18">
        <g id="Country Flag">
          <path d="M0 0H24V9H0V0Z" fill="var(--fill-0, #0038A8)" id="Vector" />
          <path d="M0 9H24V18H0V9Z" fill="var(--fill-0, #CE1126)" id="Vector_2" />
          <path d="M15.5887 9L0 18V0" fill="var(--fill-0, white)" id="Vector_3" />
          <g id="Group">
            <path d={svgPaths.p1382f800} fill="var(--fill-0, #FCD116)" id="Vector_4" />
            <path d={svgPaths.pec3a380} fill="var(--fill-0, #FCD116)" id="Vector_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CountryText6() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[4px] items-start leading-[0] relative shrink-0 whitespace-nowrap" data-name="Country Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#242424] text-[16px]">
        <p className="leading-[20px]">Philippines</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0 text-[#616161] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Philippine Peso</p>
      </div>
    </div>
  );
}

function CountryInfo6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Country Info">
      <CountryFlag4 />
      <CountryText6 />
    </div>
  );
}

function CountryItem6() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[324px]" data-name="Country Item">
      <CountryInfo6 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-right text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">USD</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[35px] justify-center leading-[0] not-italic relative shrink-0 text-[#242424] text-[16px] text-right w-[43px]">
        <p className="leading-[20px] whitespace-pre-wrap">USD</p>
      </div>
    </div>
  );
}

function CountryList() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[32px] items-start left-[calc(50%+1px)] top-[115px]" data-name="Country List">
      <CountryItem />
      <CountryItem1 />
      <CountryItem2 />
      <CountryItem3 />
      <CountryItem4 />
      <CountryItem5 />
      <CountryItem6 />
    </div>
  );
}

function FormContainer() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-[16px] h-[723px] left-[calc(50%+1px)] rounded-[16px] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.05)] w-[350px]" data-name="Form Container">
      <TabBar />
      <FormField />
      <ButtonContainer />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[176.5px] not-italic text-[16px] text-center text-white top-[116px] w-[359px] whitespace-pre-wrap">Which country to send?</p>
      <SearchField />
      <CountryList />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[20px] top-[65px] w-[226px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#242424] text-[16px]">Select Country and Currency</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fafbfc] relative size-full" data-name="04">
      <Frame3 />
      <FormContainer />
      <Frame2 />
    </div>
  );
}