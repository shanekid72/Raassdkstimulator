import svgPaths from "./svg-0edxwr1t5s";
import imgCurrencyIcon from "@/assets/placeholder.svg";
import imgEllipse1 from "@/assets/placeholder.svg";
import img36 from "@/assets/placeholder.svg";

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

function StatusBar() {
  return (
    <div className="absolute bg-[#f1f3ff] content-stretch flex flex-col items-center left-0 top-0 w-[393px]" data-name="Status bar">
      <IOsStatusBar />
    </div>
  );
}

function UnitedArabEmirates() {
  return (
    <div className="absolute h-[18.875px] left-[286.5px] top-[179.75px] w-[25.167px]" data-name="United Arab Emirates">
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
    <div className="absolute contents left-[286.5px] top-[179.75px]" data-name="Currency container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[20.973px] justify-center leading-[0] left-[320.06px] text-[16px] text-black top-[191.29px] w-[32.508px]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
    <div className="absolute h-[18.875px] left-[276.5px] overflow-clip top-[316.32px] w-[25.167px]" data-name="Frame">
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
    <div className="absolute contents left-[276.5px] top-[316.32px]" data-name="Currency container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] left-[307px] text-[16px] text-black top-[327.5px] w-[33px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">PHP</p>
      </div>
      <div className="absolute flex inset-[26.27%_10.43%_73.39%_87.43%] items-center justify-center">
        <div className="flex-none h-[8.389px] rotate-90 w-[4.195px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-8.94%_-17.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.69453 9.88906">
                <path d={svgPaths.p36ac8680} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
    <div className="absolute contents left-[136.79px] top-[238px]" data-name="Exchange rate container">
      <div className="absolute inset-[19.13%_29.44%_78.68%_34.81%]" data-name="Mask">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.517 27.2644">
          <path d={svgPaths.p3f9ef00} fill="var(--fill-0, #F1F3FF)" id="Mask" />
        </svg>
      </div>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[20.973px] leading-[20px] left-[147.28px] text-[#4967ff] text-[14px] top-[241.15px] w-[119.544px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1 AED = 15.33 PHP
      </p>
    </div>
  );
}

function ExchangeDetails() {
  return (
    <div className="absolute contents left-[37px] top-[152px]" data-name="Exchange details">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[29.362px] justify-center leading-[0] left-[37px] text-[#242424] text-[24px] top-[191.29px] w-[219.164px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">1000.00</p>
      </div>
      <CurrencyContainer />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[29.362px] justify-center leading-[0] left-[37px] text-[#242424] text-[24px] top-[327.85px] w-[219.164px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">15,333.43</p>
      </div>
      <CurrencyContainer1 />
      <div className="absolute border border-[#f1f3ff] border-solid h-[1.049px] left-[40px] top-[250.58px] w-[310.395px]" data-name="Divider" />
      <ExchangeRateContainer />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[18px] leading-[17px] left-[37px] text-[#787878] text-[12px] top-[152px] w-[95px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Send Amount
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[17px] leading-[17px] left-[37px] text-[#787878] text-[12px] top-[289px] w-[111px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
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
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%-1.5px)] top-[383px] w-[316px]" data-name="CTA">
      <ButtonsCta />
    </div>
  );
}

function ExchangeDetailsContainer() {
  return (
    <div className="absolute contents left-[23px] top-[120px]" data-name="Exchange details container">
      <div className="absolute bg-white h-[351px] left-[23px] rounded-[10px] shadow-[1px_0px_37px_0px_rgba(49,50,51,0.05)] top-[120px] w-[350px]" data-name="Service Background" />
      <ExchangeDetails />
      <Cta />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[5.95%_79.09%_92.93%_15.78%]" data-name="Group">
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
    <div className="absolute contents inset-[5.95%_79.09%_92.93%_15.78%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function LowestRateGuaranteeContainer() {
  return (
    <div className="absolute contents left-[62px] top-[69px]" data-name="Lowest rate guarantee container">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[209px] not-italic text-[#4967ff] text-[0px] text-[14px] text-center top-[69px]">
        <span className="leading-[24px]">{`We Promise `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px]">Lowest Rate Guarantee</span>
      </p>
      <Group1 />
    </div>
  );
}

function HistoryHeader() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[22px] not-italic top-[524px] w-[350px]" data-name="History header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#242424] text-[16px]">Recipients</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4967ff] text-[12px] text-right">See all</p>
    </div>
  );
}

function HistoryHeader1() {
  return (
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 w-full" data-name="History header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#242424] text-[16px]">History</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4967ff] text-[12px] text-right">See all</p>
    </div>
  );
}

function TransactionImageContainer() {
  return (
    <div className="absolute contents left-0 top-[8px]" data-name="Transaction image container">
      <div className="absolute left-0 size-[45px] top-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
          <circle cx="22.5" cy="22.5" fill="var(--fill-0, #FAFBFC)" id="Ellipse 1" r="22.5" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[18px] not-italic text-[#515252] text-[16px] top-[22px]">F</p>
    </div>
  );
}

function TransactionStatusContainer() {
  return (
    <div className="absolute bg-[#dbf8ed] content-stretch flex items-center justify-center left-[235px] px-[8px] py-[4px] rounded-[24px] top-[46px]" data-name="Transaction status container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-right">Completed</p>
    </div>
  );
}

function TransactionImageContainer1() {
  return (
    <div className="absolute contents left-0 top-[8px]" data-name="Transaction image container">
      <div className="absolute left-0 size-[45px] top-[8px]">
        <img alt="" className="block max-w-none size-full" height="45" src={imgEllipse1} width="45" />
      </div>
      <div className="absolute left-0 size-[45px] top-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
          <circle cx="22.5" cy="22.5" fill="var(--fill-0, #E4FFE1)" id="Ellipse 676" r="22.5" />
        </svg>
      </div>
      <div className="absolute h-[12px] left-[13.5px] pointer-events-none top-[46px] w-[18px]" data-name="Transaction flag">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgCurrencyIcon} />
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px]" />
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[12px] not-italic text-[#66c05b] text-[16px] top-[21px] w-[27px] whitespace-pre-wrap">MJ</p>
    </div>
  );
}

function Transaction() {
  return (
    <div className="absolute h-[69px] left-[17px] top-[160px] w-[315px]" data-name="Transaction">
      <TransactionImageContainer />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[60px] not-italic text-[#242424] text-[12px] top-0">Jordan Lee</p>
      <p className="-translate-x-full absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[314px] not-italic text-[#242424] text-[12px] text-right top-0">{`95.50 AED `}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[60px] not-italic text-[#787878] text-[12px] top-[23px]">Mandy Ahmad</p>
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[314px] not-italic text-[#787878] text-[12px] text-right top-[23px]">2,000.00 INR</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[60px] not-italic text-[#4967ff] text-[12px] top-[46px]">Repeat</p>
      <TransactionStatusContainer />
      <TransactionImageContainer1 />
    </div>
  );
}

function TransactionImageContainer2() {
  return (
    <div className="absolute contents left-0 top-[8px]" data-name="Transaction image container">
      <div className="absolute left-0 size-[45px] top-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
          <circle cx="22.5" cy="22.5" fill="var(--fill-0, #FAFBFC)" id="Ellipse 1" r="22.5" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[18px] not-italic text-[#515252] text-[16px] top-[22px]">LKF</p>
    </div>
  );
}

function TransactionStatusContainer1() {
  return (
    <div className="absolute bg-[#dbf8ed] content-stretch flex items-center justify-center left-[235px] px-[8px] py-[4px] rounded-[24px] top-[46px]" data-name="Transaction status container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-right">Completed</p>
    </div>
  );
}

function Transaction1() {
  return (
    <div className="col-1 h-[69px] ml-0 mt-[39px] relative row-1 w-[315px]" data-name="Transaction">
      <TransactionImageContainer2 />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[60px] not-italic text-[#242424] text-[12px] top-0">Lara Khan</p>
      <p className="-translate-x-full absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[314px] not-italic text-[#242424] text-[12px] text-right top-0">{`95.50 AED `}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[60px] not-italic text-[#787878] text-[12px] top-[23px]">Mandy Ahmad</p>
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[314px] not-italic text-[#787878] text-[12px] text-right top-[23px]">2,000.00 INR</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[60px] not-italic text-[#4967ff] text-[12px] top-[46px]">Repeat</p>
      <TransactionStatusContainer1 />
    </div>
  );
}

function TransactionImageContainer3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-[47px] relative row-1" data-name="Transaction image container">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[46px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <ellipse cx="23" cy="23" fill="var(--fill-0, #FFDBDB)" id="Ellipse 676" rx="23" ry="23" />
        </svg>
      </div>
      <div className="col-1 h-[12px] ml-[13.5px] mt-[38px] pointer-events-none relative row-1 w-[18px]" data-name="Transaction flag">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgCurrencyIcon} />
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px]" />
      </div>
      <p className="col-1 font-['Inter:Bold',sans-serif] font-bold leading-[normal] ml-[13px] mt-[14px] not-italic relative row-1 text-[#d83c3c] text-[16px] w-[21px] whitespace-pre-wrap">LK</p>
    </div>
  );
}

function TransactionDetailsContainer1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0 w-full" data-name="Transaction details container">
      <p className="col-1 font-['Inter:Bold',sans-serif] font-bold leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[#242424] text-[12px] w-[98.324px] whitespace-pre-wrap">Today, 23rd Jan</p>
      <Transaction1 />
      <div className="col-1 ml-0 mt-[47px] relative rounded-[64px] row-1 size-[45px]" data-name="36">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[64px] size-full" src={img36} />
      </div>
      <TransactionImageContainer3 />
      <div className="col-1 h-0 ml-[14px] mt-[124px] relative row-1 w-[286.777px]">
        <div className="absolute inset-[-0.5px_-0.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 287.777 1">
            <path d="M0.5 0.5H287.277" id="Vector 222" stroke="var(--stroke-0, #E5E5E6)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TransactionDetailsContainer() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-0.5px)] top-[19px] w-[315px]" data-name="Transaction details container">
      <TransactionDetailsContainer1 />
    </div>
  );
}

function TransactionContainer() {
  return (
    <div className="bg-white h-[264px] overflow-clip relative rounded-[24px] shadow-[0px_4px_37px_0px_rgba(0,0,0,0.05)] shrink-0 w-[350px]" data-name="Transaction container">
      <Transaction />
      <TransactionDetailsContainer />
    </div>
  );
}

function HistoryContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[23px] top-[724px]" data-name="History container">
      <HistoryHeader1 />
      <TransactionContainer />
    </div>
  );
}

function TrackTransactionContainer() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] top-0" data-name="Track transaction container">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[31px] leading-[24px] not-italic relative shrink-0 text-[16px] text-black w-[177px] whitespace-pre-wrap">Track your transaction</p>
    </div>
  );
}

function ReferenceCodeContainer() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[13px] overflow-clip px-[3px] top-0" data-name="Reference code container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#393a3a] text-[12px]">Reference code</p>
    </div>
  );
}

function InputContainer() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Input container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#c1c2c2] text-[12px] top-[24px] w-[281px] whitespace-pre-wrap">Enter Reference No</p>
      <div className="absolute h-[47px] left-0 top-[7px] w-[302px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 302 47">
          <path d={svgPaths.p2017a100} id="Rectangle 91" stroke="var(--stroke-0, #C1C2C2)" strokeWidth="0.5" />
        </svg>
      </div>
      <ReferenceCodeContainer />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute h-[54px] left-[24px] top-[37px] w-[278px]" data-name="Input">
      <InputContainer />
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Search icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Search icon">
          <circle cx="10" cy="10" id="Ellipse 93" r="6" stroke="var(--stroke-0, #393A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M14.5 14.5L19 19" id="Vector 88" stroke="var(--stroke-0, #393A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SearchContainer() {
  return (
    <div className="absolute content-stretch flex items-start left-[290px] top-[57px]" data-name="Search container">
      <SearchIcon />
    </div>
  );
}

function TransactionContainer2() {
  return (
    <div className="absolute h-[139px] left-[6px] top-[18px] w-[326px]" data-name="Transaction container">
      <TrackTransactionContainer />
      <Input />
      <SearchContainer />
    </div>
  );
}

function TransactionContainer1() {
  return (
    <div className="bg-white h-[143px] overflow-clip relative rounded-[24px] shadow-[0px_4px_37px_0px_rgba(0,0,0,0.05)] shrink-0 w-[350px]" data-name="Transaction container">
      <TransactionContainer2 />
    </div>
  );
}

function HistoryContainer1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[143px] items-start left-[23px] top-[1053px]" data-name="History container">
      <TransactionContainer1 />
    </div>
  );
}

function AddIcon() {
  return (
    <div className="absolute left-[36px] size-[44px] top-[595px]" data-name="Add icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Add">
          <path d={svgPaths.p1e6ccc00} id="Vector" stroke="var(--stroke-0, #4967FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function RecipientContainer() {
  return (
    <div className="absolute contents left-[45px] top-[576px]" data-name="Recipient container">
      <div className="absolute bg-[#ffdbdb] h-[82px] left-[111px] rounded-[10px] top-[576px] w-[71px]" data-name="Recipient background" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[128px] not-italic text-[#d83c3c] text-[24px] top-[602px] w-[36px] whitespace-pre-wrap">LK</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[119px] not-italic text-[#242424] text-[12px] top-[662px]">Lara Khan</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[45px] not-italic text-[#242424] text-[12px] top-[662px]">Add</p>
    </div>
  );
}

function RecipientContainer1() {
  return (
    <div className="absolute contents left-[200px] top-[576px]" data-name="Recipient container">
      <div className="absolute bg-[#e4ffe1] h-[82px] left-[200px] rounded-[10px] top-[576px] w-[71px]" data-name="Recipient background" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[215px] not-italic text-[#76c76c] text-[24px] top-[602px] w-[36px] whitespace-pre-wrap">MJ</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[203px] not-italic text-[#242424] text-[12px] top-[662px]">Meri Jhone</p>
    </div>
  );
}

function RecipientContainer2() {
  return (
    <div className="absolute contents left-[289px] top-[576px]" data-name="Recipient container">
      <div className="absolute bg-[#def6fe] h-[82px] left-[289px] rounded-[10px] top-[576px] w-[71px]" data-name="Recipient background" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[306px] not-italic text-[#216c82] text-[24px] top-[602px] w-[36px] whitespace-pre-wrap">NK</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[292px] not-italic text-[#242424] text-[12px] top-[662px]">Jordan Lee</p>
    </div>
  );
}

function RecipientContainer3() {
  return (
    <div className="absolute contents left-[378px] top-[576px]" data-name="Recipient container">
      <div className="absolute bg-[#efe7ff] h-[82px] left-[378px] rounded-[10px] top-[576px] w-[71px]" data-name="Recipient background" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[397px] not-italic text-[#216c82] text-[24px] top-[602px] w-[36px] whitespace-pre-wrap">NK</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[380px] not-italic text-[#242424] text-[12px] top-[662px]">Jordan Lee</p>
    </div>
  );
}

export default function IPhone1415Pro() {
  return (
    <div className="bg-[#f9fafa] relative size-full" data-name="iPhone 14 & 15 Pro - 91">
      <StatusBar />
      <div className="absolute bg-[#f9fafa] h-[445px] left-0 top-[54px] w-[393px]" data-name="Service background" />
      <ExchangeDetailsContainer />
      <div className="absolute bg-white h-[38px] left-[21px] rounded-[6px] top-[62px] w-[350px]" data-name="Lowest rate guarantee background" />
      <LowestRateGuaranteeContainer />
      <div className="absolute h-[35px] left-[22px] rounded-[14px] top-[288px] w-[351px]" data-name="Transaction background" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[12.5px] not-italic text-[#d83c3c] text-[16px] top-[14px] w-[21px] whitespace-pre-wrap">LK</p>
      <HistoryHeader />
      <HistoryContainer />
      <HistoryContainer1 />
      <div className="absolute border border-[#4967ff] border-dashed h-[82px] left-[22px] rounded-[10px] top-[576px] w-[71px]" data-name="Recipient background" />
      <AddIcon />
      <RecipientContainer />
      <RecipientContainer1 />
      <RecipientContainer2 />
      <RecipientContainer3 />
    </div>
  );
}