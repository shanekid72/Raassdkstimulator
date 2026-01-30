import svgPaths from "./svg-mpd88ui3oc";
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
    <div className="bg-[#f9fafa] h-[54px] relative shrink-0 w-[390px]" data-name="iOS status bar">
      <Time />
      <Levels />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0 w-[393px]">
      <IOsStatusBar />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[28px] left-[22px] top-[64px] w-[312px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#242424] text-[16px] top-[2px] w-[354px] whitespace-pre-wrap">Select a Recipient</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[46px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <ellipse cx="23" cy="23" fill="var(--fill-0, #FFDBDB)" id="Ellipse 676" rx="23" ry="23" />
        </svg>
      </div>
      <p className="col-1 font-['Inter:Bold',sans-serif] font-bold leading-[normal] ml-[13px] mt-[14px] not-italic relative row-1 text-[#d83c3c] text-[16px] w-[21px] whitespace-pre-wrap">LK</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#242424] text-[16px]">Lara Khan</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#787878] text-[12px] whitespace-nowrap">
        <p className="mb-0">IDFC First Bank Ltd.</p>
        <p>0000123456</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0">
      <Group6 />
      <Frame />
      <div className="absolute h-[12px] left-[14px] pointer-events-none top-[38px] w-[18px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRectangle31} />
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px]" />
      </div>
    </div>
  );
}

function Heart() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Heart">
          <path d={svgPaths.p2ef65d80} fill="var(--fill-0, #FE9BA6)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Heart />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[329px]">
      <Frame1 />
      <Group />
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[46px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <ellipse cx="23" cy="23" fill="var(--fill-0, #E4FFE1)" id="Ellipse 676" rx="23" ry="23" />
        </svg>
      </div>
      <p className="col-1 font-['Inter:Bold',sans-serif] font-bold leading-[normal] ml-[13px] mt-[14px] not-italic relative row-1 text-[#76c76c] text-[16px] w-[21px] whitespace-pre-wrap">Mj</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#242424] text-[16px] w-[88px] whitespace-pre-wrap">Meri Jhone</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#787878] text-[12px] whitespace-nowrap">
        <p className="mb-0">IDFC First Bank Ltd.</p>
        <p>0000123456</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0">
      <Group7 />
      <Frame5 />
      <div className="absolute h-[12px] left-[14px] pointer-events-none top-[38px] w-[18px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRectangle31} />
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px]" />
      </div>
    </div>
  );
}

function Heart1() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Heart">
          <path d={svgPaths.p2ef65d80} fill="var(--fill-0, #FE9BA6)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Heart1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[329px]">
      <Frame4 />
      <Group1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#787878] text-[16px]">Favourites</p>
      <Frame23 />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[46px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <ellipse cx="23" cy="23" fill="var(--fill-0, #D7F6FF)" id="Ellipse 676" rx="23" ry="23" />
        </svg>
      </div>
      <p className="col-1 font-['Inter:Bold',sans-serif] font-bold leading-[normal] ml-[13px] mt-[14px] not-italic relative row-1 text-[#216c82] text-[16px] w-[21px] whitespace-pre-wrap">JL</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#242424] text-[16px]">Jordan Lee</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#787878] text-[12px] whitespace-nowrap">
        <p className="mb-0">IDFC First Bank Ltd.</p>
        <p>0000123456</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0">
      <Group8 />
      <Frame8 />
      <div className="absolute h-[12px] left-[14px] pointer-events-none top-[38px] w-[18px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRectangle31} />
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px]" />
      </div>
    </div>
  );
}

function Heart2() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Heart">
          <path d={svgPaths.p2ef65d80} id="Union" stroke="var(--stroke-0, #ADAEAE)" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Heart2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[329px]">
      <Frame7 />
      <Group2 />
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[46px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <ellipse cx="23" cy="23" fill="var(--fill-0, #FEDDC0)" id="Ellipse 676" rx="23" ry="23" />
        </svg>
      </div>
      <p className="col-1 font-['Inter:Bold',sans-serif] font-bold leading-[normal] ml-[13.5px] mt-[14px] not-italic relative row-1 text-[#dd7b24] text-[16px] w-[33px] whitespace-pre-wrap">ST</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#242424] text-[16px]">Sophia Turner</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#787878] text-[12px] whitespace-nowrap">
        <p className="mb-0">IDFC First Bank Ltd.</p>
        <p>0000123456</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0">
      <Group9 />
      <Frame12 />
      <div className="absolute h-[12px] left-[14px] pointer-events-none top-[38px] w-[18px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRectangle31} />
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px]" />
      </div>
    </div>
  );
}

function Heart3() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Heart">
          <path d={svgPaths.p2ef65d80} id="Union" stroke="var(--stroke-0, #ADAEAE)" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Heart3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[329px]">
      <Frame11 />
      <Group3 />
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[46px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <ellipse cx="23" cy="23" fill="var(--fill-0, #EFE7FF)" id="Ellipse 676" rx="23" ry="23" />
        </svg>
      </div>
      <p className="col-1 font-['Inter:Bold',sans-serif] font-bold leading-[normal] ml-[13px] mt-[14px] not-italic relative row-1 text-[#7d3ff7] text-[16px] w-[21px] whitespace-pre-wrap">EP</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#242424] text-[16px]">Ethan Parker</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#787878] text-[12px] whitespace-nowrap">
        <p className="mb-0">IDFC First Bank Ltd.</p>
        <p>0000123456</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0">
      <Group10 />
      <Frame17 />
      <div className="absolute h-[12px] left-[14px] pointer-events-none top-[38px] w-[18px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRectangle31} />
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px]" />
      </div>
    </div>
  );
}

function Heart4() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Heart">
          <path d={svgPaths.p2ef65d80} id="Union" stroke="var(--stroke-0, #ADAEAE)" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Heart4 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[329px]">
      <Frame16 />
      <Group4 />
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[46px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <ellipse cx="23" cy="23" fill="var(--fill-0, #FFFAC8)" id="Ellipse 676" rx="23" ry="23" />
        </svg>
      </div>
      <p className="col-1 font-['Inter:Bold',sans-serif] font-bold leading-[normal] ml-[13.5px] mt-[14px] not-italic relative row-1 text-[#938607] text-[16px] w-[28px] whitespace-pre-wrap">NK</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#242424] text-[16px]">Noah Kim</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#787878] text-[12px] whitespace-nowrap">
        <p className="mb-0">IDFC First Bank Ltd.</p>
        <p>0000123456</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0">
      <Group11 />
      <Frame20 />
      <div className="absolute h-[12px] left-[14px] pointer-events-none top-[38px] w-[18px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRectangle31} />
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px]" />
      </div>
    </div>
  );
}

function Heart5() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[22px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Heart">
          <path d={svgPaths.p33d9fe80} id="Union" stroke="var(--stroke-0, #ADAEAE)" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Heart5 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[329px]">
      <Frame19 />
      <Group5 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame6 />
      <Frame10 />
      <Frame13 />
      <Frame18 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#878787] text-[16px]">All recipients</p>
      <Frame21 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0">
      <Frame24 />
      <Frame22 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-px px-[10px] py-[20px] rounded-[24px] shadow-[0px_0px_37px_0px_rgba(0,0,0,0.05)] top-0">
      <Frame25 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-[636px] left-[26px] top-[115px] w-[350px]">
      <Frame14 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute left-[300px] size-[72px] top-[724px]">
      <div className="absolute inset-[0_-11.11%_-22.22%_-11.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
          <g id="Group 1171275311">
            <g filter="url(#filter0_d_1_3045)" id="Ellipse 677">
              <circle cx="44" cy="36" fill="var(--fill-0, #4967FF)" r="36" />
            </g>
            <g id="Add">
              <rect fill="#4967FF" height="44" transform="translate(23 14)" width="44" />
              <path d={svgPaths.p9fb1ae0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="88" id="filter0_d_1_3045" width="88" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.286275 0 0 0 0 0.403922 0 0 0 0 1 0 0 0 0.35 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3045" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3045" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function IPhone1415Pro() {
  return (
    <div className="bg-[#f9fafa] relative size-full" data-name="iPhone 14 & 15 Pro - 92">
      <Frame26 />
      <div className="absolute h-[35px] left-[22px] rounded-[14px] top-[288px] w-[351px]" />
      <Frame9 />
      <Frame15 />
      <Group12 />
    </div>
  );
}