import React from "react";

export const TrustedSchools = () => {
  const schoolsRow1 = [
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/images--5-.png",
      alt: "UWC Mahindra",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/chirec.png",
      alt: "Chirec",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/aditya-birla-world-academy.png",
      alt: "Aditya Birla",
    },
  ];

  const schoolsRow2 = [
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/gd-geonka-gurugram-school.png",
      alt: "GD Goenka",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/calcutta-international-school-.png",
      alt: "Calcutta International",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/carmel-convent-chandigarh.png",
      alt: "Carmel Convent",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/sri-ram-school.png",
      alt: "Sri Ram School",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/indus-international-school-logo.png",
      alt: "Indus International",
    },
  ];

  const schoolsRow3 = [
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/images--5-.png",
      alt: "UWC Mahindra",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/chirec.png",
      alt: "Chirec",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/aditya-birla-world-academy.png",
      alt: "Aditya Birla",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ardee-school.png",
      alt: "Ardee School",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/brighton-college-abu-dhabi-.png",
      alt: "Brighton College Abu Dhabi",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/daily-college-indore-.png",
      alt: "Daily College Indore",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/dps-bopal-ahmedabad-logo.png",
      alt: "DPS Bopal",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/euro-school.png",
      alt: "Euro School",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/western-academy-of-beijing-logo.png",
      alt: "Western Academy of Beijing",
    },
  ];

  const schoolsRow4 = [
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/gd-geonka-gurugram-school.png",
      alt: "GD Goenka",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/calcutta-international-school-.png",
      alt: "Calcutta International",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/carmel-convent-chandigarh.png",
      alt: "Carmel Convent Chandigarh",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/sri-ram-school.png",
      alt: "Sri Ram School",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/indus-international-school-logo.png",
      alt: "Indus International",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/oakridge-international-school.png",
      alt: "Oakridge International",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/oberoi.png",
      alt: "Oberoi International School",
    },
    {
      src: "https://c.animaapp.com/mjmwrwbp4K97wU/img/prometheus-school.png",
      alt: "Prometheus School",
    },
  ];

  return (
    <section className="w-full">
      {/* Mobile Version */}
      <div className="block md:hidden w-full bg-white">
        <div className="px-4 py-8">
          <h2 className="font-['Inter',Helvetica] font-extrabold text-[#0e416f] text-2xl text-center mb-8 leading-tight">
            Trusted by Students from
            <br />
            100+ Schools Globally
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {schoolsRow1.concat(schoolsRow2).map((school, index) => (
              <img
                key={index}
                src={school.src}
                alt={school.alt}
                className="w-16 h-16 object-contain"
              />
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="#contact-form"
              className="bg-[#ef7f1a] text-white font-bold text-lg py-3 px-10 rounded-full hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full bg-white">
        <div className="px-6 py-12">
          <h2 className="font-['Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center mb-12 leading-tight">
            Trusted by Students from 100+ Schools Globally
          </h2>

          <div className="flex flex-wrap justify-center gap-8 mb-10 max-w-3xl mx-auto">
            {schoolsRow1.concat(schoolsRow2).map((school, index) => (
              <img
                key={index}
                src={school.src}
                alt={school.alt}
                className="w-20 h-20 object-contain"
              />
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="#contact-form"
              className="bg-[#ef7f1a] text-white font-bold text-2xl py-5 px-14 rounded-full hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full bg-white">
        <div className="max-w-[1340px] mx-auto px-[50px] py-16">
          <h2 className="font-['Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center mb-12 leading-tight">
            Trusted by Students from
            <br />
            100+ Schools Globally
          </h2>

          {/* First Row */}
          <div className="flex items-center justify-center gap-16 mb-8">
            {schoolsRow3.map((school, index) => (
              <img
                key={index}
                src={school.src}
                alt={school.alt}
                className="w-[87px] h-[87px] object-contain"
              />
            ))}
          </div>

          {/* Second Row */}
          <div className="flex items-center justify-center gap-12 mb-12">
            {schoolsRow4.map((school, index) => (
              <img
                key={index}
                src={school.src}
                alt={school.alt}
                className="w-[89px] h-[89px] object-contain"
              />
            ))}
          </div>

          {/* Apply Now Button */}
          <div className="flex justify-center">
            <a
              href="#contact-form"
              className="bg-[#ef7f1a] text-white font-bold text-2xl py-5 px-16 rounded-full hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center"
            >
              Apply Now
            </a>
          </div>
        </div>
        <div className="relative mx-auto mt-12 w-full max-w-[745px] border border-[#ef7f1a] rounded-[20px] p-10 bg-white">
          <img
            src="./Blue_quote.jpg"
            alt="quote"
            className="absolute -top-6 -left-6 w-[60px] h-[60px]"
          />

          <p className="font-['Montserrat',Helvetica] font-semibold italic text-[#f36a1e] text-2xl leading-relaxed mb-4">
            I loved building our own brand and creating a detailed investor
            pitch- it felt like the real world.
          </p>

          <p className="text-[#122e6c] text-xl">
            <span className="font-bold">– Laavanya,</span>{" "}
            <span className="text-black">
              The British Co-Ed High School, Patiala
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedSchools;
