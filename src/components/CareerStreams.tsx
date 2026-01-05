import React from 'react';

export const CareerStreams = () => {
  const careerData = [
    {
      title: "Business & Consulting",
      logos: [
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/mc-kinsey-logo-1.png", alt: "McKinsey" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/bcg-logo-1.png", alt: "BCG" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/pwc-logo-1.png", alt: "PWC" }
      ]
    },
    {
      title: "Technology",
      logos: [
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/amazon-logo.png", alt: "Amazon" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/google-logo.png", alt: "Google" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/oracle-logo.png", alt: "Oracle" }
      ]
    },
    {
      title: "Finance",
      logos: [
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/jp-morgan-logo.png", alt: "JP Morgan" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/kpmg-logo.png", alt: "KPMG" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/barclays-logo.png", alt: "Barclays" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ey-logo.png", alt: "EY" }
      ]
    },
    {
      title: "Pharma/Healthcare",
      logos: [
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/novartis-logo-1.png", alt: "Novartis" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ag-logo-1.png", alt: "AG" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/bristol-myers-logo-1.png", alt: "Bristol Myers" }
      ]
    },
    {
      title: "Legal",
      logos: [
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/acm-logo.png", alt: "ACM" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/fox-mandal-logo.png", alt: "Fox Mandal" }
      ]
    },
    {
      title: "Media and Journalism",
      logos: [
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/indian-express-logo.png", alt: "Indian Express" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/adsfactor-pr-logo.png", alt: "Adsfactor PR" },
        { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/cnn-news-18-logo.png", alt: "CNN News" }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Version */}
      <div className="block md:hidden w-full bg-[#f7f7f7] py-8">
        {/* Title */}
        <div className="px-4 mb-8">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-3xl text-center leading-tight">
            Sample Career Streams &<br />Mentor Backgrounds
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
<div className="hidden lg:flex justify-center w-full relative">
  <div className="relative w-[1440px] origin-top scale-[0.88] xl:scale-[0.95] 2xl:scale-100 transition-transform duration-300">

{/* ================== CAREER STREAMS ================== */}
<div className="w-full py-12 bg-white relative -top-[170px]">
  <div className="max-w-[1340px] mx-auto px-[50px] border border-[#122e6c] rounded-md py-4">

    <h2 className="font-bold text-[#122e6c] text-4xl text-center mb-10 relative -top-16 bg-white">
      Sample Career Streams &<br />Mentor Backgrounds
    </h2>

    <div className="border border-[#122e6c] rounded-[10px] overflow-hidden">
      {careerData.map((stream, index) => (
        <div key={index} className="flex items-stretch border-b border-[#122e6c] last:border-b-0">

          <div className="bg-[#122e6c] py-5 px-6 w-[200px] flex items-center">
            <span className="font-bold text-white text-lg">
              {stream.title}
            </span>
          </div>

          <div className="bg-[#e8e8e8] py-5 px-6 w-[350px] flex items-center">
            <p className="text-black text-lg">
              {stream.description}
            </p>
          </div>

          <div className="bg-white flex items-center gap-6 flex-1 justify-center py-4 px-6">
            {stream.logos.map((logo, i) => (
              <img key={i} className="h-16 max-w-[100px] object-contain" src={logo.src} alt={logo.alt} />
            ))}
          </div>

        </div>
      ))}
    </div>

    <p className="font-bold text-[#ef7f1a] text-3xl text-center mt-10 py-3">
      100+ Mentors | 20+ Career Pathways
    </p>
  </div>
</div>


{/* ================== QUOTE SECTION ================== */}
<div className="flex justify-center w-full py-23 pt-20 bg-white relative">

  <div className="relative w-[1440px]">

    {/* <div className="absolute left-[30px] -top-[270px] w-[127px] h-40 bg-[#f7f7f7] z-10" /> */}

    <img
  src="./Blue_quote.jpg"
  alt="quote"
  className="absolute left-[26px] top-[-250px] w-[60px] h-[60px] z-20"
/>


    <div className="absolute top-[-230px] left-[50px] w-[1340px] h-[162px] rounded-[20px] border border-[#122e6c]" />

    <p className="absolute top-[-205px] left-[188px] w-[1148px] text-4xl leading-normal">
      <span className="font-semibold italic text-[#f36a1e]">
        Instead of just theory, we worked on realistic case studies,<br />
        applying our learnings like in real life.{" "}
      </span>
      <span className="font-bold text-[#122e6c] text-2xl">– Sara,</span>
      <span className="text-black text-2xl"> Prometheus School, Noida</span>
    </p>

  </div>
</div>

  </div>
</div>


    </>
  );
};
