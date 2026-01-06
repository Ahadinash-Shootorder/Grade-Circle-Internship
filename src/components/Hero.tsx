import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { Header } from './Header';

export const Hero = () => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const formSection = document.getElementById('contact-form');
      
      if (formSection) {
        const formRect = formSection.getBoundingClientRect();
        const isFormVisible = formRect.top < window.innerHeight && formRect.bottom > 0;
        
        // Show button when form is NOT visible and user has scrolled down
        const shouldShow = !isFormVisible && window.scrollY > 300;
        setShowFloatingButton(shouldShow);
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="contact-form" className="relative w-full">
      {/* Mobile Layout */}
      <div className="block md:hidden absolute top-0 left-0 w-full min-h-[400px] z-10">
        {/* Bottom layer - Vector 10.png */}
        <img
          className="absolute bottom-0 left-0 w-full h-1/2 object-cover"
          alt="Bottom Background"
          src="./Vector 10.png"
        />
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
        <h1 className="text-center [font-family:'Inter',Helvetica] font-bold text-white text-[32px] italic leading-[1.15] mb-5">
          Professional Immersion<br />Internship
        </h1>

        {/* Subtitle with underline */}
        <p className="text-center [font-family:'Inter',Helvetica] font-normal text-white text-[16px] leading-[1.4] mb-6 underline decoration-1 underline-offset-2">
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
          src="./Rectangle 57.png"
          style={{ top: '68%', transform: 'translateY(-50%)' }}
        />

        {/* Contact Form */}
        <div className="mt-6 relative z-10 -mx-5">
          <ContactForm />
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden relative">
        <div className="w-full min-h-[700px] bg-gradient-to-b from-[#ef7f1a] to-[#d66a0a] relative overflow-hidden py-12">
          <div className="absolute inset-0 bg-[url('https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-1.svg')] bg-cover bg-center opacity-60"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[700px] px-8 text-center">
            {/* Logo */}
            <div className="mb-8">
              <img
                className="w-[250px] h-auto object-contain"
                alt="Gradcircle"
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/gradcircle--white-orange-logo--png-1.png"
              />
            </div>
            
            {/* Title */}
            <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-5xl italic leading-tight mb-6">
              Professional Immersion<br /> Internship
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

      {/* Desktop Layout */}
      <div className="hidden lg:block relative">
        {/* Background */}
        <div className="relative w-full h-[740px]">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Background"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-1.svg"
          />
          <img
            className="absolute bottom-0 top-[500px] left-0 w-full h-[266px]"
            alt="Vector"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/vector-1.svg"
          />
          
          {/* Content Container */}
          <div className="relative z-10 container mx-auto px-[50px] pt-[27px]">
            {/* Logo */}
            <img
              className="w-[310px] h-[54px] object-cover mb-12"
              alt="Gradcircle"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/gradcircle--white-orange-logo--png-1.png"
            />
            
            <div className="flex justify-between items-start">
              {/* Left Content */}
              <div className="max-w-[700px]">
                <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-5xl leading-tight mb-6">
                  Professional Immersion<br />Internship
                </h1>
                
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[18px] underline decoration-1 underline-offset-2 mb-6">
                  Industry Mentors | Professional Projects | Hands-on Learning
                </p>
                
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[22px] mb-6">
                  <span className="font-bold">4-week</span>, mentor-led virtual internship with <br />
                  Industry-Inspired projects and practical career insights
                </p>
                
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl mb-4">
                  Program Fee: INR <span className="font-bold">17,500 + 18% GST</span>
                </p>
                
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl">
                  Next Cohorts Starting: <span className="font-bold">Jan & Feb</span> (Weekends)
                </p>
              </div>
              
              {/* Right Form */}
              <div className="w-[500px] relative -top-16">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Apply Now Button - Mobile Only */}
      <a
          href="#contact-form"
          className="block md:hidden fixed bottom-0  z-50 bg-[#ef7f1a] w-full text-center h-16 text-white font-bold text-lg py-4 px-8 shadow-lg hover:bg-[#d66f15] active:bg-[#c06312]"
        >
          Apply Now
        </a>
    </section>
  );
};