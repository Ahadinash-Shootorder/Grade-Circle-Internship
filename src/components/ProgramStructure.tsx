import React from 'react';

export function ProgramStructure() {
  const coreComponents = [
    "Live mentor sessions every week",
    "Small group format (5–7 students)",
    "Deep-dive into specific career streams",
    "Project-based learning",
    "Personalized career pathway mapping",
  ];

  return (
    <>
      {/* Mobile Version */}
      <section className="block md:hidden w-full bg-white py-8 px-4">
        <div>
          {/* Title */}
          <h2 className="font-['Inter',Helvetica] font-bold text-[#0e416f] text-4xl leading-tight">
            Program
          </h2>
          <h2 className="[-webkit-text-stroke:2px_#ef7f1a] font-['Inter',Helvetica] font-bold text-transparent text-5xl leading-tight">
            Structure
          </h2>

          {/* Core Components Badge */}
          <div className="mt-6">
            <span className="inline-block bg-[#183b73] text-white px-6 py-2 rounded-full text-base font-semibold">
              Core Components
            </span>
          </div>

          {/* List */}
          <ul className="mt-6 space-y-3 text-base text-gray-800">
            {coreComponents.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-5 h-5 bg-[#f37b21] text-white flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Quote Box */}
          <div className="mt-10 border-2 border-[#dbe3f0] rounded-xl p-4 relative">
            <div className="relative -translate-y-8">
              <img
                src="./quote.png"
                alt="Quote"
                className="w-[42px] h-[42px] object-contain bg-white"
              />
            </div>
            <p className="text-[#f37b21] text-base leading-relaxed">
              We were pushed to go into every detail. The accountability and depth made it stand out from any school project
            </p>
            <p className="mt-3 font-semibold text-[#183b73] text-sm">
              — Riva, Kanakia International School, Mumbai
            </p>
          </div>
        </div>
      </section>

      {/* Tablet Version */}
      <section className="hidden md:block lg:hidden w-full bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="font-['Inter',Helvetica] font-bold text-[#0e416f] text-5xl leading-tight">
              Program
            </h2>
            <h2 className="[-webkit-text-stroke:2px_#ef7f1a] font-['Inter',Helvetica] font-bold text-transparent text-6xl leading-tight">
              Structure
            </h2>
          </div>

          {/* Core Components Badge */}
          <div className="text-center mb-8">
            <span className="inline-block bg-[#183b73] text-white px-8 py-3 rounded-full text-lg font-semibold">
              Core Components
            </span>
          </div>

          {/* List */}
          <ul className="mb-10 space-y-4 text-lg text-gray-800 max-w-2xl mx-auto">
            {coreComponents.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-[#f37b21] text-white flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Quote Box */}
          <div className="border-2 border-[#dbe3f0] rounded-xl p-6 relative max-w-2xl mx-auto">
            <span className="absolute -top-7 left-3 font-['Kannada_Sangam_MN-Regular',Helvetica] text-[#183b73] text-7xl">
              "
            </span>
            <p className="text-[#f37b21] text-lg leading-relaxed">
              We were pushed to go into every detail. The accountability and depth made it stand out from any school project
            </p>
            <p className="mt-4 font-semibold text-[#183b73] text-base">
              — Riva, Kanakia International School, Mumbai
            </p>
          </div>
        </div>
      </section>

      {/* Desktop Version */}
      <section className="hidden lg:block w-full bg-white -translate-y-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <h2 className="font-['Inter',Helvetica] font-bold text-[#0e416f] text-7xl leading-tight">
              Program
            </h2>
            <h2 className="[-webkit-text-stroke:2px_#ef7f1a] font-['Inter',Helvetica] font-bold text-transparent text-8xl text-left tracking-[0] leading-[normal]">
              Structure
            </h2>

            <div className="mt-8">
              <span className="inline-block bg-[#183b73] text-white px-8 py-3 rounded-full text-lg font-semibold">
                Core Components
              </span>
            </div>

            <ul className="mt-8 space-y-4 text-lg text-gray-800">
              {coreComponents.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-[#f37b21] text-white flex items-center justify-center rounded-full text-sm">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* QUOTE BOX */}
            <div className="mt-12 border-2 border-[#dbe3f0] rounded-xl p-6 relative">
              <img
                src="./Blue_quote.jpg"
                alt="quote"
                className="absolute -top-8 -translate-x-8 w-[60px] h-[60px]"
              />

              <p className="text-[#f37b21] text-lg leading-relaxed">
                We were pushed to go into every detail. The accountability and depth made it stand out from any school project
              </p>
              <p className="mt-4 font-semibold text-[#183b73] text-base">
                — Riva, Kanakia International School, Mumbai
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* CIRCLE IMAGE */}
            <div className="absolute right-[-120px] xl:right-[-180px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] xl:w-[680px] xl:h-[680px] rounded-full overflow-hidden">
              <img
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-3.png"
                alt="Program Structure"
                className="w-full h-full object-cover"
              />
            </div>

            {/* ORANGE ARC */}
            <div className="absolute right-[-150px] xl:right-[-220px] top-1/2 -translate-y-1/2 w-[580px] h-[580px] xl:w-[740px] xl:h-[740px] rounded-full border-[14px] border-[#ef7f1a] border-t-transparent border-l-transparent" />
          </div>
        </div>
      </section>
    </>
  );
}