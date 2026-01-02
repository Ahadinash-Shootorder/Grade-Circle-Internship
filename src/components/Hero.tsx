import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';

export const Hero = () => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const formSection = document.getElementById('contact-form');
      const footerSection = document.getElementById('mobile-footer');
      
      if (formSection && footerSection) {
        const formRect = formSection.getBoundingClientRect();
        const footerRect = footerSection.getBoundingClientRect();
        
        const isFormVisible = formRect.top < window.innerHeight && formRect.bottom > 0;
        const isFooterVisible = footerRect.top < window.innerHeight && footerRect.bottom > 0;
        
        setShowFloatingButton(!isFormVisible && !isFooterVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section id="contact-form">
      {/* Desktop Background Images */}
      <img
        className="hidden lg:block absolute top-0 left-0 w-full h-[740px] object-cover"
        alt="Rectangle"
        src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-1.svg"
      />
      <img
        className="hidden lg:block absolute top-[514px] left-0 w-full h-[266px]"
        alt="Vector"
        src="https://c.animaapp.com/mjmwrwbp4K97wU/img/vector-1.svg"
      />
      {/* Main Title - Added for Desktop */}
      <h1 className="hidden lg:block absolute top-[130px] left-[50px] [font-family:'Inter',Helvetica] font-bold text-white text-6xl leading-tight">
        Professional Immersion<br />Internship
      </h1>

      {/* Tablet Background */}
      <div className="hidden md:block lg:hidden relative">
        <div className="w-full min-h-[700px] bg-gradient-to-b from-[#ef7f1a] to-[#d66a0a] relative overflow-hidden py-12">
          <div className="absolute inset-0 bg-[url('https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-1.svg')] bg-cover bg-center opacity-60"></div>
          
          {/* Tablet Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[700px] px-8 text-center">
            {/* Title */}
            <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-5xl italic leading-tight mb-6">
              Professional Immersion<br className="hidden md:inline xl:hidden" /> Internship
            </h1>
            {/* Subtitle */}
            <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl mb-8 underline decoration-1 underline-offset-4">
              Industry Mentors | Professional Projects | Hands-on Learning
            </p>
            {/* Program Fee */}
            <div className="mb-6">
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl mb-2">
                Program Fee:
              </p>
              <p className="[font-family:'Inter',Helvetica] font-bold text-white text-3xl">
                INR <span className="text-4xl">17,500 + 18% GST</span>
              </p>
            </div>
            {/* Next Cohorts */}
            <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl mb-10">
              Next Cohorts Starting: <span className="font-bold">Jan & Feb</span> (Weekends)
            </p>
            {/* Contact Form */}
            <div className="w-full max-w-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Background - Layered images */}
      <div className="block md:hidden absolute top-0 left-0 w-full min-h-[400px] z-10">
        {/* Bottom layer - Vector 10.png */}
        <img
          className="absolute bottom-0  left-0 w-full h-1/2 object-cover"
          alt="Bottom Background"
          src="/Vector 10.png"
        />
        {/* Top layer - Rectangle overlay */}
       
      </div>
      
      <div className="block md:hidden absolute left-0 w-full min-h-[400px] z-0">
         <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Top Background"
          src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-1.svg"
        />
      </div>

      {/* Mobile Content */}
      <div className="block md:hidden relative z-10 pt-20 px-5 pb-8">
        
        {/* Title */}
        <h1 className="text-center [font-family:'Inter',Helvetica] font-bold text-white text-[32px] leading-[1.15] mb-5">
          Professional Immersion<br />Internship
        </h1>

        {/* Subtitle with underline */}
        <p className="text-center [font-family:'Inter',Helvetica] font-normal text-white text-[16px] leading-[1.4] mb-6  ">
          Industry Mentors | Professional<br />Projects | Hands-on Learning
        </p>

        {/* Program Fee */}
        <div className="text-center mb-5">
          <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[18px] mb-1">
            Program Fee:
          </p>
          <p className="[font-family:'Inter',Helvetica] font-bold text-white text-[18px]">
            INR <span className="text-[20px]">17,500 + 18% GST</span>
          </p>
        </div>

        {/* Form Background Image - Full Width */}
        <img
          className="absolute left-0 right-0 w-full h-[620px] z-0"
          alt="Form Background"
          src="/Rectangle 57.png"
          style={{ top: '68%', transform: 'translateY(-50%)' }}
        />

        {/* Contact Form */}
        <div className="mt-6 relative z-10 -mx-5">
          <ContactForm />
        </div>
      </div>

      {/* Desktop Content - Improved positioning */}
      <p className="hidden lg:block absolute top-[290px] left-[52px] [font-family:'Inter',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal] underline decoration-1 underline-offset-2">
        Industry Mentors | Professional Projects | Hands-on Learning
      </p>
      
      <p className="hidden lg:block absolute top-[335px] left-[50px] [font-family:'Inter',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal]">
        <span className="font-bold">4-week</span>
        <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[22px] tracking-[0]">
          , mentor-led virtual internship with <br />
          Industry-Inspired projects and practical career insights
        </span>
      </p>
      
      <p className="hidden lg:block absolute top-[412px] left-[52px] [font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
        <span className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0]">
          Program Fee: INR{" "}
        </span>
        <span className="font-bold">17,500 + 18% GST</span>
      </p>
      
      <p className="hidden lg:block absolute top-[466px] left-[52px] [font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
        <span className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0]">
          Next Cohorts Starting:{" "}
        </span>
        <span className="font-bold">Jan</span>
        <span className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0]">
          &nbsp;
        </span>
        <span className="font-bold">&amp; Feb</span>
        <span className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0]">
          {" "}
          (Weekends)
        </span>
      </p>
      
      <div className="hidden lg:block absolute top-[102px] left-[890px]">
        <ContactForm />
      </div>

      {/* Floating Apply Now Button - Mobile Only */}
      {showFloatingButton && (
        <a
          href="#contact-form"
          className="block md:hidden fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 bg-[#ef7f1a] text-white font-bold text-lg py-4 w-full text-center shadow-lg hover:bg-[#d66f15] active:bg-[#c06312]"
        >
          Apply Now
        </a>
      )}
    </section>
  );
};