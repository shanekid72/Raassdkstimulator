import svgPaths from "./svg-uin99vhht8";

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

function Add() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Add">
          <path d={svgPaths.p5ba1500} id="Vector" stroke="var(--stroke-0, #4967FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[54px] items-center pl-[15px] pr-[56px] py-[21px] relative rounded-[100px] shrink-0 w-[233px]">
      <div aria-hidden="true" className="absolute border border-[#4967ff] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Add />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#242424] text-[12px] w-[86px] whitespace-pre-wrap">New recipient</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[41px] top-[398px] w-[298px]">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white content-stretch flex h-[54px] items-center justify-center left-[73px] pl-[60px] pr-[56px] py-[21px] rounded-[100px] top-[478px] w-[233px]">
      <div aria-hidden="true" className="absolute border border-[#787878] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#242424] text-[12px] text-center w-[111px] whitespace-pre-wrap">How it works</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[27.24%_0_66.31%_93.2%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.85546 9.81373">
        <g id="Group">
          <path d={svgPaths.p2acd5370} fill="var(--fill-0, #9DD8E4)" id="Vector" />
          <path d={svgPaths.p268bd5f0} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[0_8.2%_2.41%_16.78%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108.781 148.339">
        <g id="Group">
          <path d={svgPaths.p4ab9ef0} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.pd242b00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[1.18%_10.9%_3.38%_14.98%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107.476 145.068">
        <g id="Group">
          <path d={svgPaths.p13d40000} fill="var(--fill-0, #4967FF)" id="Vector" />
          <path d={svgPaths.p1e62c400} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[0_8.2%_2.41%_14.98%]" data-name="Group">
      <Group3 />
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[10.57%_14.55%_8.66%_23.36%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90.0303 122.77">
        <g id="Group">
          <path d={svgPaths.pe476800} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p16d11c00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[11.86%_17.16%_8.18%_22.21%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.9033 121.533">
        <g id="Group">
          <path d={svgPaths.p30a6a900} fill="var(--fill-0, #9DD8E4)" id="Vector" />
          <path d={svgPaths.p3f27df00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[10.57%_14.55%_8.18%_22.21%]" data-name="Group">
      <Group6 />
      <Group7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[12.98%_18.73%_15.21%_19.18%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90.0303 109.149">
        <g id="Group">
          <path d={svgPaths.p3cb5400} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p256e8680} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[14.31%_21.36%_14.73%_18.02%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.9033 107.855">
        <g id="Group">
          <path d={svgPaths.p2f0bbc00} fill="var(--fill-0, #9DD8E4)" id="Vector" />
          <path d={svgPaths.p2c1d5f00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[12.98%_18.73%_14.73%_18.02%]" data-name="Group">
      <Group9 />
      <Group10 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[15.43%_22.93%_12.78%_14.98%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90.0303 109.121">
        <g id="Group">
          <path d={svgPaths.p4fdab00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2cf19980} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[16.74%_25.54%_12.3%_13.84%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.9033 107.855">
        <g id="Group">
          <path d={svgPaths.p2ee0ac00} fill="var(--fill-0, #9DD8E4)" id="Vector" />
          <path d={svgPaths.p2c9c7280} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[15.43%_22.93%_12.3%_13.84%]" data-name="Group">
      <Group12 />
      <Group13 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[11.81%_10.9%_0.32%_1.05%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127.669 133.574">
        <g id="Group">
          <path d={svgPaths.p336ada80} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p3f22a600} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[12.91%_13.94%_0_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124.78 132.38">
        <g id="Group">
          <path d={svgPaths.p2f104b00} fill="var(--fill-0, #4967FF)" id="Vector" />
          <path d={svgPaths.p2969d500} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[11.81%_10.9%_0_0]" data-name="Group">
      <Group15 />
      <Group16 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[82.95%_26.97%_5.58%_60.96%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5019 17.4278">
        <g id="Group">
          <path d={svgPaths.p3f2a3480} fill="var(--fill-0, #9DD8E4)" id="Vector" />
          <path d={svgPaths.p72c2180} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[33.51%_87.5%_57.7%_3.24%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4238 13.367">
        <g id="Group">
          <path d={svgPaths.p21b6ecc0} fill="var(--fill-0, #9DD8E4)" id="Vector" />
          <path d={svgPaths.p8ba9180} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[56.22%_61.01%_40.69%_30.07%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9333 4.70863">
        <g id="Group">
          <path d={svgPaths.pa7a5d00} fill="var(--fill-0, #FDF284)" id="Vector" />
          <path d={svgPaths.p2329ce40} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[40.65%_45.9%_24.75%_36.55%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.4487 52.5941">
        <g id="Group">
          <path d={svgPaths.p3dd219c0} fill="var(--fill-0, #FDF284)" id="Vector" />
          <path d={svgPaths.p36faf600} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[41.93%_48.28%_24.75%_28.54%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.6162 50.642">
        <g id="Group">
          <path d={svgPaths.p395af9c0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p6c96d00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[40.65%_45.9%_24.75%_28.54%]" data-name="Group">
      <Group20 />
      <Group21 />
      <Group22 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group1 />
      <Group2 />
      <Group5 />
      <Group8 />
      <Group11 />
      <Group14 />
      <Group17 />
      <Group18 />
      <Group19 />
    </div>
  );
}

function PersonalData() {
  return (
    <div className="absolute h-[152px] left-[122.5px] overflow-clip top-[158px] w-[145px]" data-name="personal data">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[20px] top-[62px] w-[109px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#242424] text-[0px] text-[16px]">
        <span className="leading-[24px]">Recipients</span>
        <span className="leading-[24px]">{` `}</span>
      </p>
    </div>
  );
}

export default function AddRecipients() {
  return (
    <div className="bg-[#f9fafa] relative size-full" data-name="Add recipients">
      <Frame4 />
      <div className="absolute bg-white h-[515px] left-[20px] rounded-[16px] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.05)] top-[108px] w-[350px]" />
      <Frame3 />
      <Frame2 />
      <PersonalData />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[109px] not-italic text-[#242424] text-[16px] top-[340px]">No recipients here yet</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[-1.5px] not-italic text-[#242424] text-[0px] text-[16px] top-0">
        <span className="leading-[24px]">{`Add `}</span>
        <span className="leading-[24px]">Recipient</span>
        <span className="leading-[24px]">{` `}</span>
      </p>
      <Frame />
    </div>
  );
}