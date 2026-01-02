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
      <div className="hidden lg:block">
        <div className="absolute top-[1969px] left-0 w-[1440px] h-[1373px] bg-[#f7f7f7]" />

        <p className="absolute top-[2010px] left-[422px] z-20 [font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-5xl text-center tracking-[0] leading-[normal] bg-[#f7f7f7]">
          Sample Career Streams &
          <br />
          <span>Mentor Backgrounds</span>
        </p>

        <div className="absolute top-[2080px] left-[457px] w-[536px] h-[59px] bg-[#f7f7f7]" />

        <div className="top-[2153px] h-[118px] absolute left-20 w-[1270px]">
          <div className="absolute top-0 left-0 w-[1266px] h-[118px] bg-[#ffffff33] rounded-[10px] shadow-[0px_4px_4px_#00000040]" />
          <div className="absolute top-[11px] left-[111px] w-[572px] h-[94px] bg-[#d9d9d9] rounded-[10px]" />
          <div className="absolute top-[11px] left-[13px] w-[209px] h-[94px] bg-[#122e6c] rounded-[10px]" />
          <div className="absolute top-7 left-11 [font-family:'Inter',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal]">
            Business &
            <br />
            Consulting
          </div>
          <div className="absolute top-[29px] left-[254px] [font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
            Strategy Consultant,
            <br />
            Business Analyst
          </div>
        </div>

        <div className="top-[2137px] h-[265px] absolute left-20 w-[1270px]">
          <div className="absolute top-[147px] left-0 w-[1266px] h-[118px] bg-[#ffffff33] rounded-[10px] shadow-[0px_4px_4px_#00000040]" />
          <img
            className="absolute top-0 left-[763px] w-[150px] h-[150px] object-cover"
            alt="Mc kinsey logo"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/mc-kinsey-logo-1.png"
          />
          <img
            className="absolute top-[27px] left-[953px] w-[106px] h-[106px] object-cover"
            alt="Bcg logo"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/bcg-logo-1.png"
          />
          <img
            className="absolute top-[27px] left-[1111px] w-24 h-24 object-cover"
            alt="Pwc logo"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pwc-logo-1.png"
          />
          <div className="absolute top-[158px] left-[111px] w-[572px] h-[94px] bg-[#d9d9d9] rounded-[10px]" />
          <div className="absolute top-[158px] left-[13px] w-[209px] h-[94px] bg-[#122e6c] rounded-[10px]" />
          <div className="absolute top-[188px] left-[39px] [font-family:'Inter',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal]">
            Technology
          </div>
          <p className="absolute top-44 left-[254px] [font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
            Product Manager, AI Researcher,
            <br />
            Software Architect
          </p>
        </div>

        <div className="top-[2404px] h-[118px] absolute left-20 w-[1270px]">
          <div className="absolute top-0 left-0 w-[1266px] h-[118px] bg-[#ffffff33] rounded-[10px] shadow-[0px_4px_4px_#00000040]" />
          <div className="absolute top-[11px] left-[111px] w-[572px] h-[94px] bg-[#d9d9d9] rounded-[10px]" />
          <div className="absolute top-[11px] left-[13px] w-[209px] h-[94px] bg-[#122e6c] rounded-[10px]" />
          <div className="absolute top-11 left-11 [font-family:'Inter',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal]">
            Finance
          </div>
          <div className="absolute top-[29px] left-[254px] [font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
            Investment Banker,
            <br />
            Financial Analyst, Auditor
          </div>
        </div>

        <div className="top-[2540px] h-[118px] absolute left-20 w-[1270px]">
          <div className="absolute top-0 left-0 w-[1266px] h-[118px] bg-[#ffffff33] rounded-[10px] shadow-[0px_4px_4px_#00000040]" />
          <div className="absolute top-[11px] left-[111px] w-[572px] h-[94px] bg-[#d9d9d9] rounded-[10px]" />
          <div className="absolute top-[11px] left-[13px] w-[209px] h-[94px] bg-[#122e6c] rounded-[10px]" />
          <div className="absolute top-7 left-11 [font-family:'Inter',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal]">
            Pharma/
            <br />
            Healthcare
          </div>
          <div className="absolute top-[29px] left-[254px] [font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
            Strategy Consultant,
            <br />
            Business Analyst
          </div>
        </div>

        <div className="top-[2671px] h-[118px] absolute left-20 w-[1270px]">
          <div className="absolute top-0 left-0 w-[1266px] h-[118px] bg-[#ffffff33] rounded-[10px] shadow-[0px_4px_4px_#00000040]" />
          <div className="absolute top-[11px] left-[111px] w-[572px] h-[94px] bg-[#d9d9d9] rounded-[10px]" />
          <div className="absolute top-[11px] left-[13px] w-[209px] h-[94px] bg-[#122e6c] rounded-[10px]" />
          <div className="absolute top-11 left-[47px] [font-family:'Inter',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
            Legal
          </div>
          <p className="absolute top-[29px] left-[254px] [font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
            Product Manager, AI Researcher,
            <br />
            Software Architect
          </p>
        </div>

        <div className="top-[2791px] h-[118px] absolute left-20 w-[1270px]">
          <div className="absolute top-0 left-0 w-[1266px] h-[118px] bg-[#ffffff33] rounded-[10px] shadow-[0px_4px_4px_#00000040]" />
          <div className="absolute top-[11px] left-[111px] w-[572px] h-[94px] bg-[#d9d9d9] rounded-[10px]" />
          <div className="absolute top-[11px] left-[13px] w-[209px] h-[94px] bg-[#122e6c] rounded-[10px]" />
          <div className="absolute top-[29px] left-11 [font-family:'Inter',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal]">
            Media and
            <br />
            Journalism
          </div>
          <div className="absolute top-[29px] left-[254px] [font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
            Investment Banker,
            <br />
            Financial Analyst, Auditor
          </div>
        </div>

        <div className="inline-flex items-center gap-[34px] absolute top-[2285px] left-[843px]">
          <img className="relative w-[131px] h-[131px] object-cover" alt="Amazon logo" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/amazon-logo.png" />
          <img className="relative w-[131px] h-[131px] object-cover" alt="Google logo" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/google-logo.png" />
          <img className="relative w-[131px] h-[131px] object-cover" alt="Oracle logo" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/oracle-logo.png" />
        </div>

        <img className="absolute top-[2428px] left-[1080px] w-[80px] h-[80px] object-cover" alt="Barclays logo" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/barclays-logo.png" />
        <img className="absolute top-[2428px] left-[1212px] w-[80px] h-[80px] object-cover" alt="Ey logo" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/ey-logo.png" />
        <img className="absolute top-[2428px] left-[844px] w-[80px] h-[80px] object-cover" alt="Jp morgan logo" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/jp-morgan-logo.png" />
        <img className="absolute top-[2428px] left-[962px] w-[80px] h-[80px] object-cover" alt="Kpmg logo" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/kpmg-logo.png" />
        <img className="absolute top-[2544px] left-[1007px] w-[109px] h-[109px] object-cover" alt="Ag logo" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/ag-logo-1.png" />
        <img className="absolute top-[2544px] left-[1175px] w-[109px] h-[109px] object-cover" alt="Bristol myers logo" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/bristol-myers-logo-1.png" />
        <img className="absolute top-[2532px] left-[839px] w-[109px] h-[109px] object-cover" alt="Novartis logo" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/novartis-logo-1.png" />
        <img className="absolute top-[2671px] left-[895px] w-[152px] h-[117px] object-cover" alt="Acm logo" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/acm-logo.png" />
        <img className="absolute top-[2671px] left-[1060px] w-[152px] h-[117px] object-cover" alt="Fox mandal logo" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/fox-mandal-logo.png" />
        <img className="absolute top-[2788px] left-[1034px] w-[124px] h-[124px] object-cover" alt="Adsfactor pr logo" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/adsfactor-pr-logo.png" />
        <img className="absolute top-[2788px] left-[1171px] w-[124px] h-[124px] object-cover" alt="Cnn news logo" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/cnn-news-18-logo.png" />
        <img className="absolute top-[2788px] left-[900px] w-[124px] h-[124px] object-cover" alt="Indian express logo" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/indian-express-logo.png" />
      </div>
    </>
  );
};
