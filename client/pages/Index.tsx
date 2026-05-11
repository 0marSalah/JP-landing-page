import { useState } from "react";

function JpLogoIcon() {
  return (
    <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M22.5 19.8661C24.3752 19.8661 25.9004 21.3913 25.9004 23.2665C25.9003 25.1418 24.3752 26.6659 22.5 26.6659H7.22945C5.35421 26.6659 3.82906 25.1418 3.82906 23.2665C3.82906 21.3913 5.35421 19.8661 7.22945 19.8661H22.5ZM8.09371 1.70108C9.03139 0.078737 11.11 -0.483574 12.7324 0.454012C14.3547 1.39158 14.9178 3.47025 13.9804 5.09268L6.34078 18.3173C5.71305 19.4097 4.57136 20.0213 3.39742 20.0214C2.8186 20.0214 2.2392 19.8751 1.70113 19.5653C0.0786353 18.6277 -0.483562 16.5482 0.454062 14.9257L8.09371 1.70108ZM16.9882 0.461824C18.6107 -0.475751 20.6902 0.0784388 21.6279 1.70889L29.2675 14.9335C30.2052 16.556 29.6501 18.6355 28.0195 19.5732C27.4815 19.8747 26.8947 20.0214 26.3242 20.0214C25.1503 20.0214 24.0087 19.4102 23.3808 18.3261L15.7412 5.10147C14.8036 3.47905 15.3578 1.39951 16.9882 0.461824Z" fill="url(#logo-g)"/>
      <defs>
        <linearGradient id="logo-g" x1="-1.52522e-07" y1="26.6659" x2="33.2996" y2="20.9928" gradientUnits="userSpaceOnUse">
          <stop offset="0.0226" stopColor="#8636F8"/>
          <stop offset="0.3484" stopColor="#F020B3"/>
          <stop offset="0.6742" stopColor="#F8475E"/>
          <stop offset="1" stopColor="#FF9421"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function DiamondGridIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9886 0C5.36841 0 0 5.35673 0 11.9712V11.9827C0.00768001 18.5895 5.36841 23.9424 11.9886 23.9424C18.6087 23.9424 23.9693 18.5895 23.977 11.9827V11.9712C23.977 5.35673 18.6087 0 11.9886 0ZM12.0116 17.5427L6.35532 11.8945L12.0116 6.24252L17.6717 11.8945L12.0116 17.5427Z" fill="url(#dg1)"/>
      <path d="M11.9886 0C5.36841 0 0 5.35673 0 11.9712V11.9827C0.00768001 18.5895 5.36841 23.9424 11.9886 23.9424C18.6087 23.9424 23.9693 18.5895 23.977 11.9827V11.9712C23.977 5.35673 18.6087 0 11.9886 0ZM12.0116 17.5427L6.35532 11.8945L12.0116 6.24252L17.6717 11.8945L12.0116 17.5427Z" fill="url(#dg2)"/>
      <path d="M36.0116 0.11499C29.3914 0.11499 24.023 5.47182 24.023 12.0863V12.0938C24.0307 18.7006 29.3914 24.0574 36.0116 24.0574C42.6318 24.0574 47.9923 18.7006 48 12.0938V12.0863C48 5.47182 42.6318 0.11499 36.0116 0.11499ZM36.2036 17.5427L30.5433 11.8945L36.2036 6.24255L41.8599 11.8945L36.2036 17.5427Z" fill="url(#dg3)"/>
      <path d="M36.0116 0.11499C29.3914 0.11499 24.023 5.47182 24.023 12.0863V12.0938C24.0307 18.7006 29.3914 24.0574 36.0116 24.0574C42.6318 24.0574 47.9923 18.7006 48 12.0938V12.0863C48 5.47182 42.6318 0.11499 36.0116 0.11499ZM36.2036 17.5427L30.5433 11.8945L36.2036 6.24255L41.8599 11.8945L36.2036 17.5427Z" fill="url(#dg4)"/>
      <path d="M11.9886 23.9424C5.36841 23.9424 0 29.2991 0 35.9136V35.9251C0.00768001 42.5319 5.36841 47.8847 11.9886 47.8847C18.6087 47.8847 23.9693 42.5319 23.977 35.9251V35.9136C23.977 29.2991 18.6087 23.9424 11.9886 23.9424ZM12.0116 41.4851L6.35532 35.8369L12.0116 30.1849L17.6717 35.8369L12.0116 41.4851Z" fill="url(#dg5)"/>
      <path d="M11.9886 23.9424C5.36841 23.9424 0 29.2991 0 35.9136V35.9251C0.00768001 42.5319 5.36841 47.8847 11.9886 47.8847C18.6087 47.8847 23.9693 42.5319 23.977 35.9251V35.9136C23.977 29.2991 18.6087 23.9424 11.9886 23.9424ZM12.0116 41.4851L6.35532 35.8369L12.0116 30.1849L17.6717 35.8369L12.0116 41.4851Z" fill="url(#dg6)"/>
      <path d="M36.0116 24.0576C29.3914 24.0576 24.023 29.4144 24.023 36.0288V36.0365C24.0307 42.6433 29.3914 48 36.0116 48C42.6318 48 47.9923 42.6433 48 36.0365V36.0288C48 29.4144 42.6318 24.0576 36.0116 24.0576ZM36.2036 41.4852L30.5433 35.8371L36.2036 30.1851L41.8599 35.8371L36.2036 41.4852Z" fill="url(#dg7)"/>
      <path d="M36.0116 24.0576C29.3914 24.0576 24.023 29.4144 24.023 36.0288V36.0365C24.0307 42.6433 29.3914 48 36.0116 48C42.6318 48 47.9923 42.6433 48 36.0365V36.0288C48 29.4144 42.6318 24.0576 36.0116 24.0576ZM36.2036 41.4852L30.5433 35.8371L36.2036 30.1851L41.8599 35.8371L36.2036 41.4852Z" fill="url(#dg8)"/>
      <defs>
        <linearGradient id="dg1" x1="0" y1="11.9712" x2="23.977" y2="11.9712" gradientUnits="userSpaceOnUse"><stop stopColor="#FFB800"/><stop offset="1" stopColor="#F8367C"/></linearGradient>
        <linearGradient id="dg2" x1="11.9885" y1="23.9424" x2="11.9885" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="white" stopOpacity="0.32"/><stop offset="0.775" stopColor="white" stopOpacity="0"/></linearGradient>
        <linearGradient id="dg3" x1="24.023" y1="12.0862" x2="48" y2="12.0862" gradientUnits="userSpaceOnUse"><stop stopColor="#FFB800"/><stop offset="1" stopColor="#F8367C"/></linearGradient>
        <linearGradient id="dg4" x1="36.0115" y1="24.0574" x2="36.0115" y2="0.11499" gradientUnits="userSpaceOnUse"><stop stopColor="white" stopOpacity="0.32"/><stop offset="0.775" stopColor="white" stopOpacity="0"/></linearGradient>
        <linearGradient id="dg5" x1="0" y1="35.9136" x2="23.977" y2="35.9136" gradientUnits="userSpaceOnUse"><stop stopColor="#FFB800"/><stop offset="1" stopColor="#F8367C"/></linearGradient>
        <linearGradient id="dg6" x1="11.9885" y1="47.8847" x2="11.9885" y2="23.9424" gradientUnits="userSpaceOnUse"><stop stopColor="white" stopOpacity="0.32"/><stop offset="0.775" stopColor="white" stopOpacity="0"/></linearGradient>
        <linearGradient id="dg7" x1="24.023" y1="36.0288" x2="48" y2="36.0288" gradientUnits="userSpaceOnUse"><stop stopColor="#FFB800"/><stop offset="1" stopColor="#F8367C"/></linearGradient>
        <linearGradient id="dg8" x1="36.0115" y1="48" x2="36.0115" y2="24.0576" gradientUnits="userSpaceOnUse"><stop stopColor="white" stopOpacity="0.32"/><stop offset="0.775" stopColor="white" stopOpacity="0"/></linearGradient>
      </defs>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M39.4534 15.3258C37.2112 15.3258 33.4334 17.2373 30.0816 19.2439C30.0739 19.2477 30.0661 19.2515 30.0546 19.2591C29.1063 19.8265 28.0083 18.7375 28.5804 17.797C28.5842 17.7894 28.5919 17.7817 28.5957 17.7703C30.6191 14.4462 32.5465 10.6995 32.5465 8.47584C32.5465 3.79624 28.7224 0 23.9999 0C19.2775 0 15.4573 3.79243 15.4573 8.47584C15.4573 10.6995 17.3847 14.4462 19.408 17.7703C19.4119 17.7779 19.4157 17.7894 19.4234 17.797C19.9916 18.7375 18.8935 19.8265 17.9452 19.263C17.9375 19.2553 17.9299 19.2515 17.9184 19.2477C14.5666 17.2411 10.7886 15.3296 8.54638 15.3296C3.82778 15.3296 0 19.122 0 23.8017C0 28.4813 3.82394 32.2775 8.54638 32.2775C10.7886 32.2775 14.5666 30.366 17.9184 28.3594C17.9261 28.3518 17.9375 28.348 17.9452 28.3442C18.8935 27.7806 19.9916 28.8658 19.4234 29.8063C19.4157 29.8139 19.4119 29.8254 19.408 29.833C17.3847 33.1571 15.4573 36.9076 15.4573 39.1275C15.4573 43.8071 19.2813 47.6033 23.9999 47.6033C28.7185 47.6033 32.5465 43.8071 32.5465 39.1275C32.5465 36.9038 30.6191 33.1571 28.5957 29.833C28.5919 29.8254 28.5842 29.8178 28.5804 29.8063C28.0121 28.8658 29.1063 27.7768 30.0546 28.3442C30.0623 28.348 30.0739 28.3556 30.0816 28.3594C33.4334 30.366 37.2151 32.2775 39.4534 32.2775C44.172 32.2775 48 28.4851 48 23.8017C48 19.1182 44.172 15.3296 39.4534 15.3296V15.3258ZM28.7148 24.3842C26.5954 24.7231 24.9368 26.3718 24.5951 28.4737L24.0038 32.0985L23.4126 28.4737C23.0709 26.3718 21.4083 24.7269 19.289 24.3842L15.6339 23.7978L19.289 23.2114C21.4083 22.8726 23.067 21.2239 23.4126 19.122L24.0038 15.4971L24.5951 19.122C24.9368 21.2239 26.5993 22.8688 28.7148 23.2114L32.3699 23.7978L28.7148 24.3842Z" fill="url(#star1)"/>
      <path d="M39.4534 15.3258C37.2112 15.3258 33.4334 17.2373 30.0816 19.2439C30.0739 19.2477 30.0661 19.2515 30.0546 19.2591C29.1063 19.8265 28.0083 18.7375 28.5804 17.797C28.5842 17.7894 28.5919 17.7817 28.5957 17.7703C30.6191 14.4462 32.5465 10.6995 32.5465 8.47584C32.5465 3.79624 28.7224 0 23.9999 0C19.2775 0 15.4573 3.79243 15.4573 8.47584C15.4573 10.6995 17.3847 14.4462 19.408 17.7703C19.4119 17.7779 19.4157 17.7894 19.4234 17.797C19.9916 18.7375 18.8935 19.8265 17.9452 19.263C17.9375 19.2553 17.9299 19.2515 17.9184 19.2477C14.5666 17.2411 10.7886 15.3296 8.54638 15.3296C3.82778 15.3296 0 19.122 0 23.8017C0 28.4813 3.82394 32.2775 8.54638 32.2775C10.7886 32.2775 14.5666 30.366 17.9184 28.3594C17.9261 28.3518 17.9375 28.348 17.9452 28.3442C18.8935 27.7806 19.9916 28.8658 19.4234 29.8063C19.4157 29.8139 19.4119 29.8254 19.408 29.833C17.3847 33.1571 15.4573 36.9076 15.4573 39.1275C15.4573 43.8071 19.2813 47.6033 23.9999 47.6033C28.7185 47.6033 32.5465 43.8071 32.5465 39.1275C32.5465 36.9038 30.6191 33.1571 28.5957 29.833C28.5919 29.8254 28.5842 29.8178 28.5804 29.8063C28.0121 28.8658 29.1063 27.7768 30.0546 28.3442C30.0623 28.348 30.0739 28.3556 30.0816 28.3594C33.4334 30.366 37.2151 32.2775 39.4534 32.2775C44.172 32.2775 48 28.4851 48 23.8017C48 19.1182 44.172 15.3296 39.4534 15.3296V15.3258ZM28.7148 24.3842C26.5954 24.7231 24.9368 26.3718 24.5951 28.4737L24.0038 32.0985L23.4126 28.4737C23.0709 26.3718 21.4083 24.7269 19.289 24.3842L15.6339 23.7978L19.289 23.2114C21.4083 22.8726 23.067 21.2239 23.4126 19.122L24.0038 15.4971L24.5951 19.122C24.9368 21.2239 26.5993 22.8688 28.7148 23.2114L32.3699 23.7978L28.7148 24.3842Z" fill="url(#star2)"/>
      <defs>
        <linearGradient id="star1" x1="0" y1="23.8017" x2="48" y2="23.8017" gradientUnits="userSpaceOnUse"><stop stopColor="#FFB800"/><stop offset="1" stopColor="#F8367C"/></linearGradient>
        <linearGradient id="star2" x1="24" y1="47.6033" x2="24" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="white" stopOpacity="0.32"/><stop offset="0.1085" stopColor="white" stopOpacity="0.243"/><stop offset="0.4332" stopColor="white" stopOpacity="0.114"/><stop offset="0.6639" stopColor="white" stopOpacity="0.03"/><stop offset="0.775" stopColor="white" stopOpacity="0"/></linearGradient>
      </defs>
    </svg>
  );
}

function HourglassIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.6971 23.803C23.6971 36.9508 34.3521 47.6059 47.5 47.6059V31.9615C42.9932 31.9615 39.3415 28.3097 39.3415 23.803C39.3415 19.2962 42.9932 15.6445 47.5 15.6445V0C34.3521 0 23.6971 10.6589 23.6971 23.803Z" fill="url(#hg1)"/>
      <path d="M23.6971 23.803C23.6971 36.9508 34.3521 47.6059 47.5 47.6059V31.9615C42.9932 31.9615 39.3415 28.3097 39.3415 23.803C39.3415 19.2962 42.9932 15.6445 47.5 15.6445V0C34.3521 0 23.6971 10.6589 23.6971 23.803Z" fill="url(#hg2)"/>
      <path d="M23.803 23.803C23.803 36.9508 13.1479 47.6059 0 47.6059V31.9615C4.50675 31.9615 8.1585 28.3097 8.1585 23.803C8.1585 19.2962 4.50675 15.6445 0 15.6445V0C13.1479 0 23.803 10.6589 23.803 23.803Z" fill="url(#hg3)"/>
      <path d="M23.803 23.803C23.803 36.9508 13.1479 47.6059 0 47.6059V31.9615C4.50675 31.9615 8.1585 28.3097 8.1585 23.803C8.1585 19.2962 4.50675 15.6445 0 15.6445V0C13.1479 0 23.803 10.6589 23.803 23.803Z" fill="url(#hg4)"/>
      <defs>
        <linearGradient id="hg1" x1="23.6971" y1="23.8029" x2="47.5" y2="23.8029" gradientUnits="userSpaceOnUse"><stop stopColor="#FFB800"/><stop offset="1" stopColor="#F8367C"/></linearGradient>
        <linearGradient id="hg2" x1="35.5985" y1="47.6059" x2="35.5985" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="white" stopOpacity="0.32"/><stop offset="0.775" stopColor="white" stopOpacity="0"/></linearGradient>
        <linearGradient id="hg3" x1="0" y1="23.8029" x2="23.803" y2="23.8029" gradientUnits="userSpaceOnUse"><stop stopColor="#FFB800"/><stop offset="1" stopColor="#F8367C"/></linearGradient>
        <linearGradient id="hg4" x1="11.9015" y1="47.6059" x2="11.9015" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="white" stopOpacity="0.32"/><stop offset="0.775" stopColor="white" stopOpacity="0"/></linearGradient>
      </defs>
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.60001 7.2002L14.4 12.0002L9.60001 16.8002" stroke="#0D0D12" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LearnMoreButton() {
  return (
    <button className="p-[1px] rounded-full grad-bg inline-flex shrink-0">
      <div className="flex items-center gap-1 bg-white rounded-full px-7 py-3 leading-6">
        <span className="text-[#0D0D12] text-base tracking-[-0.2px]">Learn More</span>
        <ChevronRightIcon />
      </div>
    </button>
  );
}

function LabelPill({ text, color }: { text: string; color: "purple" | "orange" }) {
  if (color === "purple") {
    return (
      <div className="inline-flex items-center border border-[#E9DFFF] rounded-full px-3 py-[5px]">
        <span className="text-[#7F4AFD] text-[12px] font-normal leading-[16px] tracking-[1.44px] uppercase">{text}</span>
      </div>
    );
  }
  return (
    <div className="inline-flex items-center border border-[#FFE1D3] rounded-full px-3 py-[5px]">
      <span className="text-[#FC834C] text-[12px] font-normal leading-[16px] tracking-[1.44px] uppercase">{text}</span>
    </div>
  );
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-[200px] sm:w-[240px] lg:w-[266px] rounded-[30px] phone-shadow object-cover"
    />
  );
}

function ProductInfoCard({
  icon,
  titleLine1,
  titleLine1Gradient,
  titleLine2,
  titleLine2Gradient,
  description,
}: {
  icon: React.ReactNode;
  titleLine1: string;
  titleLine1Gradient?: boolean;
  titleLine2: string;
  titleLine2Gradient?: boolean;
  description: string;
}) {
  return (
    <div className="bg-white rounded-none p-8 flex flex-col gap-8 w-full max-w-[420px]">
      <div className="w-12 h-12 shrink-0">{icon}</div>
      <div className="flex flex-col" style={{ gap: '-1.5px' }}>
        <div className={`text-[clamp(2rem,4vw,48px)] leading-[1.17] tracking-[-0.2px] ${titleLine1Gradient ? 'grad-text-alt' : 'text-[#0D0D12]'}`}>
          {titleLine1}
        </div>
        <div className={`text-[clamp(2rem,4vw,48px)] leading-[1.17] tracking-[-0.2px] ${titleLine2Gradient ? 'grad-text-alt' : 'text-[#0D0D12]'}`}>
          {titleLine2}
        </div>
      </div>
      <p className="text-[#0D0D12] text-base leading-6 tracking-[-0.2px] max-w-[324px]">{description}</p>
    </div>
  );
}

function ProductRow({
  phoneLeft,
  phoneSrc,
  phoneAlt,
  infoCard,
}: {
  phoneLeft: boolean;
  phoneSrc: string;
  phoneAlt: string;
  infoCard: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col ${phoneLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-0 w-full`}>
      <div className={`flex items-center justify-center lg:w-1/2 py-8`}>
        <PhoneMockup src={phoneSrc} alt={phoneAlt} />
      </div>
      <div className="flex items-center justify-center lg:w-1/2">
        {infoCard}
      </div>
    </div>
  );
}

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white text-[#0D0D12] overflow-x-hidden">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1425px] mx-auto px-6 lg:px-8 h-[100px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <JpLogoIcon />
            <span className="font-bold text-[27px] text-[#0D0D12] leading-none tracking-[-0.033em]">JP</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#partnership" className="text-[#0D0D12] text-sm leading-5 tracking-[-0.14px] hover:opacity-70 transition-opacity">Our Partnership</a>
            <a href="#ecosystem" className="text-[#0D0D12] text-sm leading-5 tracking-[-0.14px] hover:opacity-70 transition-opacity">What We're Building</a>
            <a href="#serving" className="text-[#0D0D12] text-sm leading-5 tracking-[-0.14px] hover:opacity-70 transition-opacity">The Ecosystem</a>
            <a href="#foundation" className="text-[#0D0D12] text-sm leading-5 tracking-[-0.14px] hover:opacity-70 transition-opacity">Technical Foundation</a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="flex items-center justify-center bg-[#0D0D12] text-[#EDEDEC] text-sm rounded-full px-5 py-2 leading-5 tracking-[-0.2px] hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Contact Us
            </a>
            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-[#0D0D12] p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                {mobileMenuOpen ? (
                  <path d="M4 4L18 18M4 18L18 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            <a href="#partnership" className="text-[#0D0D12] text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Our Partnership</a>
            <a href="#ecosystem" className="text-[#0D0D12] text-sm py-2" onClick={() => setMobileMenuOpen(false)}>What We're Building</a>
            <a href="#serving" className="text-[#0D0D12] text-sm py-2" onClick={() => setMobileMenuOpen(false)}>The Ecosystem</a>
            <a href="#foundation" className="text-[#0D0D12] text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Technical Foundation</a>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-20 lg:pb-28">
        {/* Background color blob */}
        <div className="absolute right-0 top-0 w-[70%] h-full pointer-events-none overflow-hidden">
          <div className="absolute w-[800px] h-[800px] rounded-[88px] right-[-280px] top-[-160px] overflow-hidden">
            <div className="absolute inset-0 bg-[#D3004C] opacity-40 blur-[100px]" />
            <div className="absolute inset-0 translate-x-[15%] translate-y-[8%] bg-[#FFB800] opacity-50 blur-[100px]" />
            <div className="absolute inset-0 bg-[#F6045B] opacity-40 blur-[100px]" />
          </div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <div className="mb-6">
            <h1 className="font-bold tracking-[-0.04em] leading-[1.1]">
              <span className="grad-text text-[clamp(2.5rem,6vw,80px)]">Credential Infrastructure </span>
              <span className="text-[#0D0D12] text-[clamp(2.5rem,6vw,80px)]">for</span>
              <br />
              <span className="text-[#0D0D12] text-[clamp(2.5rem,6vw,80px)]">Every Californian</span>
            </h1>
          </div>
          <p className="text-[#0D0D12] text-[clamp(1rem,2vw,20px)] leading-[1.8] tracking-[-0.2px] max-w-[860px] mx-auto mb-8">
            A multi-wallet, open-standards ecosystem that makes every Californian's skills, credentials, and experience visible, portable, and valued.
          </p>
          <a
            href="#ecosystem"
            className="inline-flex items-center justify-center bg-[#0D0D12] text-white rounded-full px-8 py-3 text-base leading-6 tracking-[-0.2px] hover:opacity-80 transition-opacity"
          >
            Choose Your Wallet
          </a>
        </div>
      </section>

      {/* ── One Ecosystem, Three Ways In ── */}
      <section id="ecosystem" className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <LabelPill text="What We're Building" color="orange" />
            <div>
              <h2 className="font-bold tracking-[-0.04em] leading-[1.11] text-[clamp(2rem,5vw,72px)] text-[#0D0D12]">One Ecosystem</h2>
              <h2 className="font-bold tracking-[-0.04em] leading-[1.11] text-[clamp(2rem,5vw,72px)] grad-text">Three Ways In</h2>
            </div>
            <p className="text-[#0D0D12] text-[clamp(1rem,1.5vw,20px)] leading-[1.8] tracking-[-0.2px] max-w-[600px]">
              Each built for different needs, all speaking the same language so your credentials move freely between them.
            </p>
          </div>

          {/* Product rows */}
          <div className="flex flex-col gap-0 divide-y divide-gray-100">
            {/* Row 1: TalentPass — INFO left, PHONE right */}
            <ProductRow
              phoneLeft={false}
              phoneSrc="https://api.builder.io/api/v1/image/assets/TEMP/fa099ad1d22f67f2e93122f61c06595cf66117e6?width=532"
              phoneAlt="TalentPass app"
              infoCard={
                <ProductInfoCard
                  icon={<StarIcon />}
                  titleLine1="TalentPass"
                  titleLine2="by Gobekli"
                  titleLine2Gradient
                  description="TalentPass meets users where they are — with conversational AI, mobile-first design, and a profile that grows with them over time."
                />
              }
            />

            {/* Row 2: California Career Passport — PHONE left, INFO right */}
            <ProductRow
              phoneLeft={true}
              phoneSrc="https://api.builder.io/api/v1/image/assets/TEMP/00af65ec53db89bb4ee8fd350773f6582be62960?width=532"
              phoneAlt="California Career Passport app"
              infoCard={
                <ProductInfoCard
                  icon={<DiamondGridIcon />}
                  titleLine1="California"
                  titleLine1Gradient
                  titleLine2="Career Passport"
                  description="An open-source wallet with deep roots in academia — enabling verified credential exchange between universities, colleges, and workforce systems."
                />
              }
            />

            {/* Row 3: Browser-based FreeWallet — INFO left, PHONE right */}
            <ProductRow
              phoneLeft={false}
              phoneSrc="https://api.builder.io/api/v1/image/assets/TEMP/93e357e73194c5d3acde832a36c1d708cdff6d09?width=510"
              phoneAlt="FreeWallet browser app"
              infoCard={
                <ProductInfoCard
                  icon={<HourglassIcon />}
                  titleLine1="Browser-based"
                  titleLine2="FreeWallet"
                  titleLine2Gradient
                  description="Store your credentials entirely in your browser, no need to download an app and no restrictions."
                />
              }
            />

            {/* Row 4: Full Interoperability — PHONE left, INFO right */}
            <ProductRow
              phoneLeft={true}
              phoneSrc="https://api.builder.io/api/v1/image/assets/TEMP/dc028eead58dbff86957d139e17d055cc358c489?width=510"
              phoneAlt="Full interoperability wallet"
              infoCard={
                <ProductInfoCard
                  icon={<HourglassIcon />}
                  titleLine1="Full"
                  titleLine2="Interoperability"
                  titleLine2Gradient
                  description="Three complementary wallets that exchange credentials freely and have full interoperability with other wallets like: MIT's DCC, ASU's Pocket, MySkills Pocket, and T3's DCW."
                />
              }
            />
          </div>
        </div>
      </section>

      {/* ── Three Organizations, One Shared Mission ── */}
      <section id="partnership" className="relative py-20 lg:py-28 bg-white overflow-hidden">
        {/* Background blob */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[768px] h-[768px] rounded-[61px] overflow-hidden opacity-40">
            <div className="absolute inset-0 bg-[#D3004C] opacity-40 blur-[80px]" />
            <div className="absolute inset-0 translate-x-[10%] translate-y-[10%] bg-[#FFB800] opacity-60 blur-[80px]" />
            <div className="absolute inset-0 bg-[#F6045B] opacity-50 blur-[80px]" />
          </div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <LabelPill text="Our Partnership" color="purple" />
            <div>
              <h2 className="font-bold tracking-[-0.04em] leading-[1.11] text-[clamp(2rem,5vw,72px)] text-[#0D0D12]">Three Organizations</h2>
              <h2 className="font-bold tracking-[-0.04em] leading-[1.11] text-[clamp(2rem,5vw,72px)] grad-text">One Shared Mission</h2>
            </div>
            <p className="text-[#0D0D12] text-[clamp(1rem,1.5vw,20px)] leading-[1.8] tracking-[-0.2px] max-w-[800px]">
              <strong>Interop Alliance</strong>, <strong>Infosys Public Services</strong>, and <strong>Gobekli</strong> are joining forces in a joint project (JP) built on open standards, genuine interoperability, and deep equity intent. Together we bring technical depth in verifiable credentials, the scale of enterprise public-sector delivery, and a purpose-built wallet trusted by learners across the country.
            </p>
          </div>

          {/* Partner cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Gobekli */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 flex flex-col gap-10">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8400f87b670b5cb6264270cdf716af27fa1f1d64?width=440"
                alt="Gobekli"
                className="h-14 object-contain object-left"
              />
              <p className="text-black text-base leading-6 tracking-[-0.2px] grow">
                Building TalentPass — a learner-controlled credential wallet with AI-guided profile building, designed from the ground up for equity and accessibility.
              </p>
              <LearnMoreButton />
            </div>

            {/* Infosys Public Services */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 flex flex-col gap-10">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/796ab123c28f36f00d07cd638380bc6210edfd2b?width=426"
                alt="Infosys Public Services"
                className="h-[60px] object-contain object-left"
              />
              <p className="text-black text-base leading-6 tracking-[-0.2px] grow">
                Bringing enterprise-scale delivery, government implementation expertise, and the operational depth to deploy across California's complex public-sector landscape.
              </p>
              <LearnMoreButton />
            </div>

            {/* Interop Alliance */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 flex flex-col gap-10">
              <div className="flex items-center gap-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2ee0234c0658ee8349b43bed0e36ea2d0abaea64?width=110"
                  alt="Interop Alliance icon"
                  className="w-[55px] h-[65px] object-contain shrink-0"
                />
                <span className="font-['IBM_Plex_Mono'] font-medium text-[27px] leading-[40px] tracking-[-0.334px] text-black">Interop Alliance</span>
              </div>
              <p className="text-black text-base leading-6 tracking-[-0.2px] grow">
                Leading the standards architecture and cross-wallet interoperability framework, ensuring every credential can move freely across the ecosystem.
              </p>
              <LearnMoreButton />
            </div>
          </div>
        </div>
      </section>

      {/* ── Designed for Every Path ── */}
      <section id="serving" className="relative py-20 lg:py-28 bg-white overflow-hidden">
        {/* Background blob — left side */}
        <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 pointer-events-none w-[700px] h-[700px]">
          <div className="w-full h-full rounded-[61px] overflow-hidden opacity-30">
            <div className="absolute inset-0 bg-[#D3004C] opacity-40 blur-[80px]" />
            <div className="absolute inset-0 translate-x-[10%] translate-y-[10%] bg-[#FFB800] opacity-60 blur-[80px]" />
            <div className="absolute inset-0 bg-[#F6045B] opacity-50 blur-[80px]" />
          </div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <LabelPill text="Who We Serve" color="purple" />
            <div>
              <h2 className="font-bold tracking-[-0.04em] leading-[1.11] text-[clamp(2rem,5vw,72px)]">
                <span className="text-[#0D0D12]">Designed for </span>
                <span className="grad-text">Every Path</span>
              </h2>
              <h2 className="font-bold tracking-[-0.04em] leading-[1.11] text-[clamp(2rem,5vw,72px)] text-[#0D0D12]">
                Not Just the Traditional One
              </h2>
            </div>
            <p className="text-[#0D0D12] text-[clamp(1rem,1.5vw,20px)] leading-[1.8] tracking-[-0.2px] max-w-[780px]">
              The needs of underserved populations aren't edge cases, they're the foundational design requirements of this system. Because a credential ecosystem that only works for people who already have access isn't infrastructure of the future. It's more of the same.
            </p>
          </div>

          {/* Audience cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Non-Degree Learners */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden p-6 flex flex-col gap-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d99732e7f4a61f394ee2f97ef9a390e7a22b791a?width=602"
                alt="Non-Degree Learners"
                className="w-full h-44 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-[#0C0C11] text-[clamp(1.5rem,3vw,42px)] font-normal leading-[1.33] tracking-[-0.2px] mt-2">Non-Degree Learners</h3>
                <p className="text-[#0D0D12] text-base leading-6 tracking-[-0.2px] mt-2">Working adults without four-year degrees whose skills far exceed what a resume can capture.</p>
              </div>
            </div>

            {/* Veterans */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden p-6 flex flex-col gap-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/149a3c9d473077339a1b7e32153783d2fee81c8c?width=602"
                alt="Veterans"
                className="w-full h-44 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-[#0C0C11] text-[clamp(1.5rem,3vw,42px)] font-normal leading-[1.33] tracking-[-0.2px] mt-2">Veterans</h3>
                <p className="text-[#0D0D12] text-base leading-6 tracking-[-0.2px] mt-2">Service members with deep leadership, logistics, and technical expertise that doesn't map cleanly to civilian job descriptions.</p>
              </div>
            </div>

            {/* Career Changers */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden p-6 flex flex-col gap-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9262da7d16b28bceb1886e193cc49c2bcb11c2dc?width=602"
                alt="Career Changers"
                className="w-full h-44 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-[#0C0C11] text-[clamp(1.5rem,3vw,42px)] font-normal leading-[1.33] tracking-[-0.2px] mt-2">Career Changers</h3>
                <p className="text-[#0D0D12] text-base leading-6 tracking-[-0.2px] mt-2">Workers reskilling through noncredit programs or building capabilities outside traditional institutional frameworks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="contact" className="bg-[#0D0D12] py-32 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-8">
          {/* Headline */}
          <div>
            <h2 className="font-bold text-[clamp(2.5rem,6vw,72px)] leading-[1.11] tracking-[-0.2px] text-white">Let's Build This</h2>
            <h2 className="font-bold text-[clamp(2.5rem,6vw,72px)] leading-[1.11] tracking-[-0.2px] grad-text">Together</h2>
          </div>

          {/* Subtext */}
          <p className="text-[#ECECF4] text-[clamp(1rem,1.5vw,20px)] leading-[1.8] tracking-[-0.2px] max-w-[650px]">
            We'd love to connect with you about our vision for interoperable credentials and how our partnership can deliver on its promise.
          </p>

          {/* CTA */}
          <a
            href="mailto:contact@jointproject.io"
            className="inline-flex items-center justify-center bg-white text-[#1B1B18] rounded-full px-10 py-3 text-base leading-6 tracking-[-0.2px] hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>

        {/* Bottom bar */}
        <div className="max-w-[1200px] mx-auto mt-24 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs leading-4">Copyright © 2026 Joint Project. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="text-white/50 text-xs leading-4 hover:text-white/70 transition-colors">Terms &amp; Conditions</a>
            <span className="text-white/50 text-xs">·</span>
            <a href="#" className="text-white/50 text-xs leading-4 hover:text-white/70 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
