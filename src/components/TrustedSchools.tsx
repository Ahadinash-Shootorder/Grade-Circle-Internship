import React from 'react';

export const TrustedSchools = () => {
  const schoolsRow1 = [
    { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/images--5-.png", alt: "UWC Mahindra" },
    { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/chirec.png", alt: "Chirec" },
    { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/aditya-birla-world-academy.png", alt: "Aditya Birla" },
  ];

  const schoolsRow2 = [
    { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/gd-geonka-gurugram-school.png", alt: "GD Goenka" },
    { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/calcutta-international-school-.png", alt: "Calcutta International" },
    { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/carmel-convent-chandigarh.png", alt: "Carmel Convent" },
    { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/sri-ram-school.png", alt: "Sri Ram School" },
    { src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/indus-international-school-logo.png", alt: "Indus International" },
  ];

  return (
    <>
      {/* Mobile Version */}
      <div className="block md:hidden w-full px-4 py-8 bg-white">
        {/* Title */}
        <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-2xl text-center mb-8 leading-tight">
          Trusted by Students from<br />100+ Schools Globally
        </h2>

        {/* Schools Logos Grid - Row 1 */}
        <div className="flex justify-center items-center gap-6 mb-6">
          {schoolsRow1.map((school, index) => (
            <img
              key={index}
              src={school.src}
              alt={school.alt}
              className="w-16 h-16 object-contain"
            />
          ))}
        </div>

        {/* Schools Logos Grid - Row 2 */}
        <div className="flex justify-center items-center flex-wrap gap-4 mb-8">
          {schoolsRow2.map((school, index) => (
            <img
              key={index}
              src={school.src}
              alt={school.alt}
              className="w-14 h-14 object-contain"
            />
          ))}
        </div>

        {/* Apply Now Button */}
        <div className="flex justify-center">
          <a href="#contact-form" className="bg-[#ef7f1a] text-white font-bold text-xl py-4 px-12 rounded-full hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center">
            Apply Now
          </a>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full px-6 py-12 bg-white">
        {/* Title */}
        <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center mb-12 leading-tight">
          Trusted by Students from 100+ Schools Globally
        </h2>

        {/* Schools Logos Grid - Row 1 */}
        <div className="flex justify-center items-center gap-8 mb-8">
          {schoolsRow1.map((school, index) => (
            <img
              key={index}
              src={school.src}
              alt={school.alt}
              className="w-20 h-20 object-contain"
            />
          ))}
        </div>

        {/* Schools Logos Grid - Row 2 */}
        <div className="flex justify-center items-center flex-wrap gap-6 mb-12">
          {schoolsRow2.map((school, index) => (
            <img
              key={index}
              src={school.src}
              alt={school.alt}
              className="w-18 h-18 object-contain"
            />
          ))}
        </div>

        {/* Apply Now Button */}
        <div className="flex justify-center">
          <a href="#contact-form" className="bg-[#ef7f1a] text-white font-bold text-2xl py-6 px-16 rounded-full hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center">
            Apply Now
          </a>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block relative">

  <p className="absolute top-[8553px] left-[489px] [font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center">
    Trusted by Students from<br />100+ Schools Globally
  </p>

  <div className="flex w-[1276px] h-[87px] items-center justify-between absolute top-[8747px] left-[89px]">
    <img className="relative w-[87px] h-[87px] object-cover" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/images--5-.png" />
    <img className="relative w-[121px] h-[87px] object-cover" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/chirec.png" />
    <img className="relative w-[86px] h-[85px] object-cover" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/aditya-birla-world-academy.png" />
    <img className="relative w-[87px] h-[86px] object-cover" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/ardee-school.png" />
    <img className="relative w-[185px] h-[87px] object-cover" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/brighton-college-abu-dhabi-.png" />
    <img className="relative w-[85px] h-[85px] object-cover" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/daily-college-indore-.png" />
    <img className="relative w-[86px] h-[86px] object-cover" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/dps-bopal-ahmedabad-logo.png" />
    <img className="relative w-[86px] h-[86px] object-cover" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/euro-school.png" />
    <img className="relative w-[98px] h-[86px] object-cover" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/western-academy-of-beijing-logo.png" />
  </div>

  <div className="flex w-[1262px] items-center justify-between absolute top-[8857px] left-24">
    <img className="relative w-[89px] h-[89px] object-cover" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/gd-geonka-gurugram-school.png" />
    <img className="relative w-[88px] h-[88px] object-cover" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/calcutta-international-school-.png" />
    <img className="relative w-[88px] h-[88px] object-cover" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/carmel-convent-chandigarh.png" />
    <img className="relative w-[82px] h-[89px] object-cover" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/sri-ram-school.png" />
    <img className="relative w-[88px] h-[88px] object-cover" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/indus-international-school-logo.png" />
    <img className="relative w-[352px] h-[88px] object-cover" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/oakridge-international-school.png" />
    <img className="relative w-[88px] h-[88px] object-cover" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/oberoi.png" />
    <img className="relative w-[234px] h-[88px] object-cover" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/prometheus-school.png" />
  </div>

  <div className="absolute top-[9020px] left-0 right-0 flex justify-center">
    <a href="#contact-form" className="bg-[#ef7f1a] text-white font-bold text-xl py-4 px-14 rounded-full hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center">
      Apply Now
    </a>
  </div>

</div>

    </>
  );
};
