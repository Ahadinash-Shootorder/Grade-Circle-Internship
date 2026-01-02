import React, { useState, useEffect } from 'react';

export const FoundingTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const teamMembers = [
    {
      name: "Prashant Tibrewal",
      title: "MIT (USA) Alum & Experience Career Coach",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/prashant-tibrewal.png"
    },
    {
      name: "Aditi Arya Kotak",
      title: "Yale University Alum & Miss India 2015",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/aditi-arya-kotak.png"
    },
    {
      name: "Neelabh Prabhat",
      title: "IIT Delhi Alum & Ex-Citibank",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/neelabh-prabhat.png"
    }
  ];

  // Auto-slide every 3 seconds for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <>
      {/* Mobile Version */}
      <div className="block md:hidden w-full px-4 py-8 bg-slate-100">
        {/* Title */}
        <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-3xl text-center mb-6">
          Founding Team
        </h2>

        {/* Team Member Card */}
        <div className="p-4 mb-4 overflow-hidden">
          <div className="relative w-full h-[300px]">
            {teamMembers.map((member, index) => (
              <img
                key={index}
                src={member.image}
                alt={member.name}
                className={`absolute inset-0 w-full h-full object-contain mx-auto transition-all duration-500 ease-in-out ${
                  index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
                style={{
                  transform: index === activeIndex ? 'translateX(0)' : index < activeIndex ? 'translateX(-100%)' : 'translateX(100%)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Member Info */}
        <div className="text-center mb-4 transition-all duration-500 ease-in-out">
          <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-xl">
            {teamMembers[activeIndex].name}
          </h3>
          <p className="[font-family:'Inter',Helvetica] font-normal text-black text-base mt-1">
            {teamMembers[activeIndex].title}
          </p>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-[#122e6c]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full px-6 py-12 bg-white">
        {/* Title */}
        <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-5xl text-center mb-12">
          Founding Team
        </h2>

        {/* Team Members Grid */}
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 object-cover rounded-full mx-auto border-4 border-[#122e6c]"
                />
              </div>
              <h3 className="[font-family:'Inter',Helvetica] font-bold text-black text-2xl mb-2">
                {member.name}
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-black text-lg leading-tight">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Version - Original */}
      <div className="hidden lg:block">
        <p className="absolute top-[6189px] left-[525px] w-[293px] [font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center tracking-[0] leading-[normal]">
          Founding Team
        </p>

        <div className="absolute top-[6450px] left-[50px] w-[1340px] h-[290px] bg-[#f7f7f7] rounded-[10px] shadow-[0px_4px_4px_#00000040]" />
        <div className="absolute top-[6567px] left-20 w-[1182px] h-[113px] bg-[#f7f7f7] shadow-[0px_-1px_1px_#00000040]" />

        <div className="absolute top-[6590px] left-[105px] [font-family:'Inter',Helvetica] font-bold text-black text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Prashant Tibrewal
        </div>
        <p className="absolute top-[6624px] left-[74px] [font-family:'Inter',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[normal]">
          MIT (USA) Alum &amp;<br />Experience Career Coach
        </p>

        <div className="absolute top-[6590px] left-[545px] w-[178px] [font-family:'Inter',Helvetica] font-bold text-black text-xl text-center tracking-[0] leading-[normal]">
          Aditi Arya Kotak
        </div>
        <p className="absolute top-[6624px] left-[523px] w-[223px] [font-family:'Inter',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[normal]">
          Yale University Alum<br />&amp; Miss India 2015
        </p>

        <div className="absolute top-[6590px] left-[1011px] w-[178px] [font-family:'Inter',Helvetica] font-bold text-black text-xl text-center tracking-[0] leading-[normal]">
          Neelabh Prabhat
        </div>
        <div className="absolute top-[6624px] left-[990px] w-[223px] [font-family:'Inter',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[normal]">
          IIT Delhi Alum &amp;<br />Ex-Citibank
        </div>

        <img className="absolute top-[6211px] left-[27px] w-[358px] h-[358px] object-cover" alt="Prashant tibrewal" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/prashant-tibrewal.png" />
        <img className="absolute top-[6210px] left-[491px] w-[358px] h-[358px] object-cover" alt="Aditi arya kotak" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/aditi-arya-kotak.png" />
        <img className="absolute top-[6210px] left-[897px] w-[358px] h-[358px] object-cover" alt="Neelabh prabhat" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/neelabh-prabhat.png" />
      </div>
    </>
  );
};
