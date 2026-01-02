import React from 'react';

export const ProgramDeliverables = () => {
  const deliverables = [
    { text: "8 -10 hours of virtual live sessions" },
    { text: "8 -10 hours of teamwork and assignments" },
    { text: "Simulated project-based internship" },
    { text: "Project evaluation & comprehensive Skills Report" },
    { text: "Internship Certificate signed by the mentor" },
    { text: "Merit-based Letter of Recommendation" },
  ];

  return (
    <>
      {/* Mobile Version */}
      <div className="block md:hidden w-full px-5 py-10 bg-[#f7f7f7]">
        {/* Title */}
        <div className="mb-10">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[36px] leading-tight">
            Program
          </h2>
          <div className="[-webkit-text-stroke:1.2px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-[52px] leading-tight">
            Deliverables
          </div>
        </div>

        {/* Deliverables List */}
        <div className="space-y-5 mb-10">
          {deliverables.map((item, index) => (
            <div key={index} className="flex items-start gap-3.5">
              <div className="w-5 h-5 bg-[#ec9950] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-[17px]  leading-tight">
                {item.text}
              </p>
            </div>
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
      <div className="hidden md:block lg:hidden w-full px-8 py-16 bg-[#f7f7f7]">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-6xl leading-tight">
            Program
          </h2>
          <div className="[-webkit-text-stroke:3px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-7xl">
            Deliverables
          </div>
        </div>

        {/* Deliverables Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-7 mb-14">
            {deliverables.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-5">
                  <div className="w-9 h-9 bg-[#ef7f1a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-xl leading-tight">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Apply Now Button */}
          <div className="flex justify-center">
            <a href="#contact-form" className="bg-[#ef7f1a] text-white font-bold text-2xl py-6 px-16 rounded-full hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center">
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Version - Original */}
      <div className="hidden lg:block">
        <div className="top-[5304px] left-[39px] absolute [font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[74px] text-center tracking-[0] leading-[normal]">
          Program
        </div>

        <div className="absolute top-[5391px] left-[42px] [-webkit-text-stroke:3px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-9xl text-center tracking-[0] leading-[normal]">
          Deliverables
        </div>

        <div className="absolute top-[5601px] left-[35px] w-80 h-[179px] bg-[#133b93] rounded-[19px]" />
        <div className="absolute top-[5601px] left-[375px] w-80 h-[179px] bg-[#133b93] rounded-[19px]" />
        <div className="absolute top-[5822px] left-[375px] w-80 h-[179px] bg-[#133b93] rounded-[19px]" />
        <div className="absolute top-[5601px] left-[715px] w-80 h-[179px] bg-[#133b93] rounded-[19px]" />
        <div className="absolute top-[5822px] left-[715px] w-80 h-[179px] bg-[#133b93] rounded-[19px]" />
        <div className="absolute top-[5601px] left-[1055px] w-80 h-[179px] bg-[#133b93] rounded-[19px]" />

        <p className="absolute top-[5860px] left-[488px] w-[204px] [font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
          Internship Certificate<br />signed by the mentor
        </p>

        <div className="absolute top-[5872px] left-[833px] w-[181px] [font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
          Merit-based Letter of<br />Recommendation
        </div>

        <p className="absolute top-[5658px] left-[151px] w-[193px] [font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
          8 -10 hours of<br />virtual live sessions
        </p>

        <p className="absolute top-[5658px] left-[491px] [font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
          8 -10 hours of<br />teamwork and<br />assignments
        </p>

        <div className="absolute top-[5658px] left-[831px] [font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
          Simulated<br />project-based<br />internship
        </div>

        <div className="absolute top-[5658px] left-[1170px] [font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
          Project evaluation<br />&amp; comprehensive<br />Skills Report
        </div>

        <img className="top-[5587px] left-0 w-[184px] absolute h-[195px] object-cover" alt="Pg icon" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-1.png" />
        <img className="top-[5587px] left-[329px] w-[195px] absolute h-[195px] object-cover" alt="Pg icon" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-2.png" />
        <img className="top-[5587px] left-[670px] w-[194px] absolute h-[195px] object-cover" alt="Pg icon" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-3.png" />
        <img className="top-[5587px] left-[1008px] w-[195px] absolute h-[195px] object-cover" alt="Pg icon" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-4.png" />
        <img className="top-[5813px] left-[329px] w-[195px] absolute h-[195px] object-cover" alt="Pg icon" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-5.png" />
        <img className="top-[5813px] left-[670px] w-[194px] absolute h-[195px] object-cover" alt="Pg icon" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-6.png" />

        <a href="#contact-form" className="absolute top-[6055px] left-[535px] w-[345px] h-[86px] bg-[#ef7f1a] rounded-[50px] flex items-center justify-center hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200" />
        <a href="#contact-form" className="top-[6084px] left-[645px] absolute [font-family:'Inter',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal] pointer-events-none">
          Apply Now
        </a>
      </div>
    </>
  );
};
