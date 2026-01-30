import svgPaths from "./svg-29h2jz5s5x";
import imgCurrencyIcon from "@/assets/placeholder.svg";

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
    <div className="bg-[#f9fafa] h-[54px] relative shrink-0 w-[390px]" data-name="iOS status bar">
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

function UnitedArabEmirates() {
  return (
    <div className="absolute h-[18.875px] left-[286.5px] top-[207.75px] w-[25.167px]" data-name="United Arab Emirates">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.1672 18.8754">
        <g clipPath="url(#clip0_1_1970)" id="United Arab Emirates">
          <path d="M0 0H25.1672V6.29179H0V0Z" fill="var(--fill-0, #00732F)" id="Vector" />
          <path d={svgPaths.p1a383a00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pd3eb600} fill="var(--fill-0, black)" id="Vector_3" />
          <path d="M0 0H8.65121V18.8754H0V0Z" fill="var(--fill-0, #FF0000)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_1970">
            <rect fill="white" height="18.8754" width="25.1672" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CurrencyContainer() {
  return (
    <div className="absolute contents left-[286.5px] top-[207.75px]" data-name="Currency container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[20.973px] justify-center leading-[0] left-[320.06px] text-[16px] text-black top-[219.29px] w-[32.508px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">AED</p>
      </div>
      <UnitedArabEmirates />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[36.67%_40%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.03343 5.03343">
        <g id="Group">
          <path d={svgPaths.p1ba59a80} fill="var(--fill-0, #000088)" id="Vector" />
          <path d={svgPaths.p35881200} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p117f8000} fill="var(--fill-0, #000088)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[18.875px] left-[276.5px] overflow-clip top-[344.32px] w-[25.167px]" data-name="Frame">
      <div className="absolute inset-[0_0_66.67%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.1672 6.29179">
          <path d="M0 0H25.1672V6.29179H0V0Z" fill="var(--fill-0, #FF9933)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.33%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.1672 6.29179">
          <path d="M0 0H25.1672V6.29179H0V0Z" fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[66.67%_0_0_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.1672 6.29179">
          <path d="M0 0H25.1672V6.29179H0V0Z" fill="var(--fill-0, #128807)" id="Vector" />
        </svg>
      </div>
      <Group />
      <div className="absolute inset-[3.62%_-5.3%_1.01%_-1.98%] pointer-events-none" data-name="Currency icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgCurrencyIcon} />
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px]" />
      </div>
    </div>
  );
}

function CurrencyContainer1() {
  return (
    <div className="absolute contents left-[276.5px] top-[344.32px]" data-name="Currency container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] left-[307px] text-[#242424] text-[16px] top-[355.5px] w-[33px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">PHP</p>
      </div>
      <div className="absolute flex inset-[42.19%_10.43%_57.31%_87.43%] items-center justify-center">
        <div className="flex-none h-[8.389px] rotate-90 w-[4.195px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-8.94%_-17.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.69453 9.88906">
                <path d={svgPaths.p36ac8680} id="Vector" stroke="var(--stroke-0, #242424)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame />
    </div>
  );
}

function ExchangeRateContainer() {
  return (
    <div className="absolute contents left-[136.79px] top-[266px]" data-name="Exchange rate container">
      <div className="absolute inset-[31.63%_29.44%_65.13%_34.81%]" data-name="Mask">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.517 27.2644">
          <path d={svgPaths.p3f9ef00} fill="var(--fill-0, #EBF3FF)" id="Mask" />
        </svg>
      </div>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[20.973px] leading-[20px] left-[147.28px] text-[#3251ee] text-[14px] top-[269.15px] w-[119.544px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1 AED = 15.33 PHP
      </p>
    </div>
  );
}

function ExchangeDetails() {
  return (
    <div className="absolute contents left-[37px] top-[180px]" data-name="Exchange details">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[29.362px] justify-center leading-[0] left-[37px] text-[#242424] text-[24px] top-[219.29px] w-[219.164px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">1000.00</p>
      </div>
      <CurrencyContainer />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[29.362px] justify-center leading-[0] left-[37px] text-[#242424] text-[24px] top-[355.85px] w-[219.164px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">15,333.43</p>
      </div>
      <CurrencyContainer1 />
      <div className="absolute border border-[#e8e8e8] border-solid h-[1.049px] left-[40px] top-[278.58px] w-[310.395px]" data-name="Divider" />
      <ExchangeRateContainer />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[18px] leading-[17px] left-[37px] text-[#787878] text-[12px] top-[180px] w-[95px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Send Amount
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[17px] leading-[17px] left-[37px] text-[#878787] text-[12px] top-[317px] w-[111px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Receive Amount
      </p>
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Add" />
      </svg>
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
      <Add />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-[16px] text-center text-white">
        <span className="leading-[24px]">{`Send `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px]">1000.00 AED</span>
      </p>
      <ChevronRight />
    </div>
  );
}

function ButtonsCta() {
  return (
    <div className="bg-[#4967ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[200px]" data-name="Buttons / CTA">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[15px] relative w-full">
          <BtnContent />
        </div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%-1.5px)] top-[411px] w-[316px]" data-name="CTA">
      <ButtonsCta />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[23px] top-[148px]">
      <div className="absolute bg-white h-[351px] left-[23px] rounded-[10px] shadow-[1px_0px_5px_0px_rgba(49,50,51,0.09)] top-[148px] w-[350px]" data-name="Service Background" />
      <ExchangeDetails />
      <Cta />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[11.41%_78.84%_86.92%_16.03%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1581 14">
        <g id="Group">
          <path d={svgPaths.p2bcfec00} fill="var(--fill-0, #4967FF)" id="Vector" />
          <path d={svgPaths.p25a9a5c0} fill="var(--fill-0, #4967FF)" id="Vector_2" />
          <path d={svgPaths.p17a24c70} fill="var(--fill-0, #4967FF)" id="Vector_3" />
          <path d={svgPaths.p3b330af2} fill="var(--fill-0, #4967FF)" id="Vector_4" />
          <path d={svgPaths.p107af4f0} fill="var(--fill-0, #4967FF)" id="Vector_5" />
          <path d={svgPaths.p27f81980} fill="var(--fill-0, #4967FF)" id="Vector_6" />
          <path d={svgPaths.p2e26a480} fill="var(--fill-0, #4967FF)" id="Vector_7" />
          <path d={svgPaths.p1aa42940} fill="var(--fill-0, #4967FF)" id="Vector_8" />
          <path d={svgPaths.p3718e900} fill="var(--fill-0, #4967FF)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[11.41%_78.84%_86.92%_16.03%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[63px] top-[91px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[210px] not-italic text-[#4967ff] text-[0px] text-[14px] text-center top-[91px]">
        <span className="leading-[24px]">{`We Promise `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px]">Lowest Rate Guarantee</span>
      </p>
      <Group1 />
    </div>
  );
}

export default function IPhone1415Pro() {
  return (
    <div className="bg-[#f9fafa] relative size-full" data-name="iPhone 14 & 15 Pro - 91">
      <Frame1 />
      <div className="absolute bg-[#f9fafa] h-[480px] left-0 top-[54px] w-[393px]" />
      <Group3 />
      <div className="absolute bg-white h-[38px] left-[22px] rounded-[6px] top-[84px] w-[350px]" />
      <Group4 />
      <div className="absolute h-[35px] left-[22px] rounded-[14px] top-[288px] w-[351px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[190px] not-italic text-[12px] text-black text-center top-[791px]">Powered By LuLu Exchange</p>
    </div>
  );
}