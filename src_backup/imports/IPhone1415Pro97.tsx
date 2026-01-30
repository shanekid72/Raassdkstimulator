import svgPaths from "./svg-tnew9ac8ky";
import imgImage31 from "@/assets/placeholder.svg";

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

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0">
      <IOsStatusBar />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] h-[106px] items-start leading-[0] left-[41.95px] not-italic text-[#242424] text-center top-[389px] w-[307.12px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px] whitespace-nowrap">
        <p className="leading-[normal]">Verify your Account</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px] w-[308px]">
        <p className="leading-[20px] whitespace-pre-wrap">It’s take a couple of minutes,Once you Verified you can send the around</p>
      </div>
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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white">Get Verified</p>
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
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-[39.95px] top-[509px] w-[309.114px]" data-name="Buttons">
      <ButtonsCta />
    </div>
  );
}

function UaePass() {
  return (
    <div className="absolute h-[24px] left-[106.76px] top-[20px] w-[23.931px]" data-name="UAE_Pass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9314 24">
        <g clipPath="url(#clip0_1_872)" id="UAE_Pass">
          <path d={svgPaths.pfb79e00} fill="url(#paint0_linear_1_872)" id="Vector" />
          <path d={svgPaths.pd345ba0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_872" x1="6.73999" x2="17.74" y1="2" y2="22.5">
            <stop stopColor="#51D3A8" />
            <stop offset="1" stopColor="#44C1AA" />
          </linearGradient>
          <clipPath id="clip0_1_872">
            <rect fill="white" height="24" width="23.9314" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[23px] top-[20px]">
      <div className="absolute bg-white h-[639px] left-[23px] rounded-[10px] shadow-[1px_0px_8px_1px_rgba(16,16,17,0.09)] top-[72px] w-[349px]" data-name="Service Background" />
      <div className="absolute left-[40.72px] size-[314.55px] top-[80.23px]" data-name="image 31">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage31} />
      </div>
      <Frame1 />
      <Buttons />
      <UaePass />
    </div>
  );
}

function UaePass1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="UAE_Pass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_876)" id="UAE_Pass">
          <path d={svgPaths.p289972c0} fill="url(#paint0_linear_1_876)" id="Vector" />
          <path d={svgPaths.p2b71c680} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_876" x1="6.5" x2="17.5" y1="2" y2="22.5">
            <stop stopColor="#51D3A8" />
            <stop offset="1" stopColor="#44C1AA" />
          </linearGradient>
          <clipPath id="clip0_1_876">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
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
      <UaePass1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white">Login with UAE PASS</p>
      <ChevronRight1 />
    </div>
  );
}

function ButtonsCta1() {
  return (
    <div className="bg-[#242424] flex-[1_0_0] min-h-px min-w-px relative rounded-[200px]" data-name="Buttons / CTA">
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
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-[40px] top-[584px] w-[310px]" data-name="Buttons">
      <ButtonsCta1 />
    </div>
  );
}

export default function IPhone1415Pro() {
  return (
    <div className="bg-[#f9fafa] relative size-full" data-name="iPhone 14 & 15 Pro - 97">
      <Frame />
      <Group />
      <Buttons1 />
    </div>
  );
}