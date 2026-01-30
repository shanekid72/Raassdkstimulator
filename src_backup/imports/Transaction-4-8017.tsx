import svgPaths from "./svg-gpxx9io0n6";
import imgImage3 from "@/assets/placeholder.svg";

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

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0">
      <IOsStatusBar />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[350px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#242424] text-[16px] top-0">Payment Details</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[28px] left-[20px] top-[68px] w-[350px]">
      <Frame1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[38px] top-[191px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[44px] left-[40px] not-italic text-[#242424] text-[14px] top-[191px]">Cardholder name</p>
      <div className="absolute bg-white border border-[#787878] border-solid h-[50px] left-[38px] rounded-[4px] top-[231px] w-[317px]" />
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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white">Pay</p>
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
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+1.5px)] top-[648px] w-[317px]" data-name="Buttons">
      <ButtonsCta />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[21px] top-[106px]">
      <div className="-translate-x-1/2 absolute bg-white h-[661px] left-[calc(50%+1px)] rounded-[16px] top-[106px] w-[350px]" />
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[44px] left-[308px] text-[#787878] text-[12px] top-[191px]">Optional</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[44px] left-[38px] not-italic text-[#242424] text-[12px] top-[112px]">Accepted card:</p>
      <div className="absolute h-[35px] left-[27px] top-[145px] w-[313px]" data-name="image 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[2422.17%] left-[-3.83%] max-w-none top-[-406.35%] w-[142.81%]" src={imgImage3} />
        </div>
      </div>
      <Group />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[44px] left-[40px] not-italic text-[#242424] text-[14px] top-[288px]">Card Number</p>
      <div className="absolute bg-white border border-[#787878] border-solid h-[50px] left-[38px] rounded-[4px] top-[328px] w-[317px]" />
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[44px] left-[39px] text-[#242424] text-[14px] top-[385px]">Expiry date</p>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[44px] left-[38px] text-[#242424] text-[14px] top-[498px]">Security code</p>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[44px] left-[39px] text-[#787878] text-[12px] top-[405px] w-[92px] whitespace-pre-wrap">Format is MM/YY</p>
      <div className="absolute bg-white border border-[#787878] border-solid h-[50px] left-[39px] rounded-[4px] top-[440px] w-[316px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[44px] left-[39px] not-italic text-[#787878] text-[12px] top-[520px]">3 - 4 digit code on your card</p>
      <div className="absolute bg-white border border-[#787878] border-solid h-[50px] left-[38px] rounded-[4px] top-[556px] w-[317px]" />
      <Buttons />
    </div>
  );
}

function Frame() {
  return <div className="-translate-x-1/2 absolute h-[19px] left-[calc(50%-1px)] top-[429px] w-[126px]" />;
}

export default function Transaction() {
  return (
    <div className="bg-[#fafbfc] relative size-full" data-name="Transaction">
      <Frame3 />
      <Frame2 />
      <Group1 />
      <Frame />
    </div>
  );
}