import React from "react";

export const CareerStreams = () => {
  // const careerData = [
  //   {
  //     title: "Business & Consulting",
  //     logos: [
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/mc-kinsey-logo-1.png",
  //         alt: "McKinsey",
  //       },
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/bcg-logo-1.png",
  //         alt: "BCG",
  //       },
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/pwc-logo-1.png",
  //         alt: "PWC",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Technology",
  //     logos: [
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/amazon-logo.png",
  //         alt: "Amazon",
  //       },
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/google-logo.png",
  //         alt: "Google",
  //       },
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/oracle-logo.png",
  //         alt: "Oracle",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Finance",
  //     logos: [
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/jp-morgan-logo.png",
  //         alt: "JP Morgan",
  //       },
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/kpmg-logo.png",
  //         alt: "KPMG",
  //       },
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/barclays-logo.png",
  //         alt: "Barclays",
  //       },
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ey-logo.png",
  //         alt: "EY",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Pharma/Healthcare",
  //     logos: [
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/novartis-logo-1.png",
  //         alt: "Novartis",
  //       },
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ag-logo-1.png",
  //         alt: "AG",
  //       },
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/bristol-myers-logo-1.png",
  //         alt: "Bristol Myers",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Legal",
  //     logos: [
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/acm-logo.png",
  //         alt: "ACM",
  //       },
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/fox-mandal-logo.png",
  //         alt: "Fox Mandal",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Media and Journalism",
  //     logos: [
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/indian-express-logo.png",
  //         alt: "Indian Express",
  //       },
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/adsfactor-pr-logo.png",
  //         alt: "Adsfactor PR",
  //       },
  //       {
  //         src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/cnn-news-18-logo.png",
  //         alt: "CNN News",
  //       },
  //     ],
  //   },
  // ];

  const careerData = [
  {
    title: "Business & Consulting",
    description: "Strategy Consultant,\nBusiness Analyst",
    logos: [
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/mc-kinsey-logo-1.png", alt: "McKinsey" },
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/bcg-logo-1.png", alt: "BCG" },
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/pwc-logo-1.png", alt: "PWC" },
    ],
  },
  {
    title: "Technology",
    description: "Product Manager, AI Researcher,\nSoftware Architect",
    logos: [
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/amazon-logo.png", alt: "Amazon" },
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/google-logo.png", alt: "Google" },
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/oracle-logo.png", alt: "Oracle" },
    ],
  },
  {
    title: "Finance",
    description: "Investment Banker,\nFinancial Analyst, Auditor",
    logos: [
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/jp-morgan-logo.png", alt: "JP Morgan" },
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/kpmg-logo.png", alt: "KPMG" },
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/barclays-logo.png", alt: "Barclays" },
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ey-logo.png", alt: "EY" },
    ],
  },
  {
    title: "Pharma/Healthcare",
    description: "Strategy Consultant,\nBusiness Analyst",
    logos: [
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/novartis-logo-1.png", alt: "Novartis" },
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ag-logo-1.png", alt: "AG" },
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/bristol-myers-logo-1.png", alt: "Bristol Myers" },
    ],
  },
  {
    title: "Legal",
    description: "Product Manager, AI Researcher,\nSoftware Architect",
    logos: [
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/acm-logo.png", alt: "ACM" },
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/fox-mandal-logo.png", alt: "Fox Mandal" },
    ],
  },
  {
    title: "Media and Journalism",
    description: "Investment Banker,\nFinancial Analyst, Auditor",
    logos: [
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/indian-express-logo.png", alt: "Indian Express" },
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/adsfactor-pr-logo.png", alt: "Adsfactor PR" },
      { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/cnn-news-18-logo.png", alt: "CNN News" },
    ],
  },
];

  return (
    <>
      {/* Mobile Version */}
      <div className="block md:hidden w-full bg-[#f7f7f7] py-8">
        {/* Title */}
        <div className="px-4 mb-8">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-3xl text-center leading-tight">
            Sample Career Streams &<br />
            Mentor Backgrounds
          </h2>
        </div>

        {/* Career Streams */}
        <div className="space-y-0">
          {careerData.map((stream, index) => (
            <div key={index}>
              {/* Category Header */}
              <div className="bg-[#122e6c] py-3 px-4">
                <span className="[font-family:'Inter',Helvetica] font-bold text-white text-base">
                  {stream.title}
                </span>
              </div>

              {/* Logos */}
              <div className="bg-white py-2 px-1 flex items-center justify-around flex-wrap gap-4">
                {stream.logos.map((logo, logoIndex) => (
                  <img
                    key={logoIndex}
                    className="h-20 w-auto object-contain max-w-[80px]"
                    alt={logo.alt}
                    src={logo.src}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full bg-[#f7f7f7] py-12">
        {/* Title */}
        <div className="px-6 mb-12">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-4xl text-center leading-tight">
            Sample Career Streams & Mentor Backgrounds
          </h2>
        </div>

        {/* Career Streams */}
        <div className="space-y-0 max-w-6xl mx-auto">
          {careerData.map((stream, index) => (
            <div key={index}>
              {/* Category Header */}
              <div className="bg-[#122e6c] py-4 px-6 border-l-4 border-[#ef7f1a]">
                <span className="[font-family:'Inter',Helvetica] font-bold text-white text-xl">
                  {stream.title}
                </span>
              </div>

              {/* Logos */}
              <div className="bg-white py-8 px-6 flex items-center justify-center flex-wrap gap-6">
                {stream.logos.map((logo, logoIndex) => (
                  <img
                    key={logoIndex}
                    className="h-12 w-auto object-contain max-w-[100px]"
                    alt={logo.alt}
                    src={logo.src}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Version - Original */}
      {/* ================== CAREER STREAMS ================== */}
     {/* ================= DESKTOP VERSION ================= */}
<div className="hidden lg:block bg-[#f7f7f7] py-12 -translate-y-32">
  <div className="max-w-[1340px] mx-auto px-12">

    {/* TITLE */}
    <h2 className="font-bold text-[#122e6c] text-5xl text-center mb-20">
      Sample Career Streams &<br />
      Mentor Backgrounds
    </h2>

    {/* TABLE */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden">

      {careerData.map((stream, index) => (
        <div
          key={index}
          className="flex items-stretch border-b last:border-b-0 border-[#122e6c]"
        >

          {/* LEFT TITLE */}
          <div className="bg-[#122e6c] w-[230px] border-b last:border-b-0 border-white flex items-center justify-center text-center p-6">
            <span className="font-bold text-white text-2xl leading-tight">
              {stream.title}
            </span>
          </div>

          {/* MIDDLE DESCRIPTION */}
          <div className="bg-[#e8e8e8] w-[360px] flex items-center p-6">
            <p className="text-black text-xl">
  {stream.description}
</p>

          </div>

          {/* RIGHT LOGOS */}
          <div className="flex-1 bg-white flex items-center justify-center gap-10 p-6 flex-wrap">
            {stream.logos.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-[90px] max-w-[140px] object-contain"
              />
            ))}
          </div>

        </div>
      ))}

    </div>

    {/* FOOTER STATS */}
    <p className="font-bold text-[#ef7f1a] text-3xl text-center mt-16">
      100+ Mentors | 20+ Career Pathways
    </p>

    {/* QUOTE CARD */}
    <div className="relative mt-20 max-w-[780px] mx-auto bg-white border border-[#ef7f1a] rounded-[20px] p-12 shadow-lg">

      <img
        src="./Blue_quote.jpg"
        alt="quote"
        className="absolute -top-6 -left-6 w-[60px] h-[60px]"
      />

      <p className="font-semibold italic text-[#f36a1e] text-2xl leading-relaxed mb-6">
        We were pushed to go into every detail. The accountability and depth made
        it stand out from any school project
      </p>

      <p className="text-[#122e6c] text-xl">
        <span className="font-bold">– Riva,</span>{" "}
        <span className="text-black">
          Kanakia International School, Mumbai
        </span>
      </p>
    </div>
  </div>
</div>

    </>
  );
};
