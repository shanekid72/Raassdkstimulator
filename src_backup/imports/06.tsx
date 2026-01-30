import svgPaths from "./svg-6ycur9hckz";

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

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0 w-[393px]">
      <IOsStatusBar />
    </div>
  );
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

function NameLabelContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name Label Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#242424] text-[14px]">Name</p>
    </div>
  );
}

function FirstNameFieldContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0" data-name="First Name Field Container">
      <div className="col-1 h-[56px] ml-0 mt-[9px] relative row-1 w-[330px]">
        <div className="absolute inset-[-0.89%_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 57">
            <path d={svgPaths.p3f6a6580} id="Rectangle 5" stroke="var(--stroke-0, #787878)" />
          </svg>
        </div>
      </div>
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal h-[17px] leading-[normal] ml-[14.5px] mt-0 relative row-1 text-[#242424] text-[14px] w-[156px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recipient First Name
      </p>
    </div>
  );
}

function LastNameFieldContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0" data-name="Last Name Field Container">
      <div className="col-1 h-[56px] ml-0 mt-[9px] relative row-1 w-[330px]">
        <div className="absolute inset-[-0.89%_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 57">
            <path d={svgPaths.p3b42a220} id="Rectangle 5" stroke="var(--stroke-0, #787878)" />
          </svg>
        </div>
      </div>
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[normal] ml-[16px] mt-0 relative row-1 text-[#242424] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recipient Last name
      </p>
    </div>
  );
}

function NameFieldsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] relative shrink-0" data-name="Name Fields Container">
      <FirstNameFieldContainer />
      <LastNameFieldContainer />
    </div>
  );
}

function NameSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Name Section">
      <NameLabelContainer />
      <NameFieldsContainer />
    </div>
  );
}

function OtherDetailsLabelContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Other Details Label Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#242424] text-[14px]">Contact Information</p>
    </div>
  );
}

function NationalityInputContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Nationality Input Container">
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center ml-[16px] mt-[37px] relative row-1 text-[#242424] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">788977899</p>
      </div>
      <div className="col-1 h-[56px] ml-0 mt-[9px] relative row-1 w-[330px]">
        <div className="absolute inset-[-0.89%_-0.14%_-0.89%_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330.955 57">
            <path d={svgPaths.p321ffd00} id="Rectangle 1318" stroke="var(--stroke-0, #787878)" />
          </svg>
        </div>
      </div>
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[normal] ml-[16px] mt-0 relative row-1 text-[#242424] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recipient Mobile Number
      </p>
    </div>
  );
}

function NationalityFieldContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Nationality Field Container">
      <NationalityInputContainer />
    </div>
  );
}

function ArrowDropDown() {
  return (
    <div className="col-1 ml-[301px] mt-[27px] relative row-1 size-[24px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_1912)" id="arrow_drop_down">
          <g id="Vector" />
          <path d="M9 10L13 14L17 10" id="Vector_2" stroke="var(--stroke-0, #787878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1912">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NationalityInputContainer1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Nationality Input Container">
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center ml-[16px] mt-[37px] relative row-1 text-[#242424] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">India</p>
      </div>
      <div className="col-1 h-[56px] ml-0 mt-[9px] relative row-1 w-[330px]">
        <div className="absolute inset-[-0.89%_-0.14%_-0.89%_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330.955 57">
            <path d={svgPaths.p29d37980} id="Rectangle 1318" stroke="var(--stroke-0, #787878)" />
          </svg>
        </div>
      </div>
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[normal] ml-[16px] mt-0 relative row-1 text-[#242424] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recipient Nationality
      </p>
      <ArrowDropDown />
    </div>
  );
}

function NationalityFieldContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Nationality Field Container">
      <NationalityInputContainer1 />
    </div>
  );
}

function RelationshipInputContainer() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1" data-name="Relationship Input Container">
      <div className="col-1 h-[56px] ml-0 mt-[9px] relative row-1 w-[330px]">
        <div className="absolute inset-[-0.89%_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 57">
            <path d={svgPaths.p15955500} id="Rectangle 5" stroke="var(--stroke-0, #787878)" />
          </svg>
        </div>
      </div>
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[normal] ml-[16px] mt-0 relative row-1 text-[#242424] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Relationship with Recipient
      </p>
    </div>
  );
}

function ArrowDropDown1() {
  return (
    <div className="col-1 ml-[301px] mt-[25px] relative row-1 size-[24px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_1912)" id="arrow_drop_down">
          <g id="Vector" />
          <path d="M9 10L13 14L17 10" id="Vector_2" stroke="var(--stroke-0, #787878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1912">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RelationshipFieldContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Relationship Field Container">
      <RelationshipInputContainer />
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center ml-[16px] mt-[37px] relative row-1 text-[#242424] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Brother</p>
      </div>
      <ArrowDropDown1 />
    </div>
  );
}

function OtherDetailsFieldsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Other Details Fields Container">
      <NationalityFieldContainer />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#242424] text-[14px]">Other details</p>
      <NationalityFieldContainer1 />
      <RelationshipFieldContainer />
    </div>
  );
}

function OtherDetailsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Other Details Section">
      <OtherDetailsLabelContainer />
      <OtherDetailsFieldsContainer />
    </div>
  );
}

function FavoriteSection() {
  return <div className="h-[53px] shrink-0 w-[329px]" data-name="Favorite Section" />;
}

function FormContainer1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[24px] items-center justify-center left-1/2 top-[14px] w-[328px]" data-name="Form Container">
      <NameSection />
      <OtherDetailsSection />
      <FavoriteSection />
    </div>
  );
}

function ChevronRight1() {
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

function BtnContent1() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0" data-name="btn content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white">Submit</p>
      <ChevronRight1 />
    </div>
  );
}

function ButtonsCta1() {
  return (
    <div className="bg-[#4967ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[200px]" data-name="Buttons / CTA">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative w-full">
          <BtnContent1 />
        </div>
      </div>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 top-[629px] w-[330px]" data-name="Buttons">
      <ButtonsCta1 />
    </div>
  );
}

function FormContainer() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-[11px] h-[723px] left-[calc(50%+3px)] rounded-[16px] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.05)] w-[350px]" data-name="Form Container">
      <FormField />
      <ButtonContainer />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[176.5px] not-italic text-[16px] text-center text-white top-[116px] w-[359px] whitespace-pre-wrap">Which country to send?</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[177.5px] not-italic text-[16px] text-center text-white top-[69px] w-[359px] whitespace-pre-wrap">Tell us more about them</p>
      <FormContainer1 />
      <Buttons1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[21px] top-[65px] w-[205px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#242424] text-[16px]">Recipient Personal Details</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f9fafa] relative size-full" data-name="06">
      <Frame1 />
      <FormContainer />
      <Frame />
    </div>
  );
}