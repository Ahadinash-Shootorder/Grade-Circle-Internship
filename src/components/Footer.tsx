import React from "react";
import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <>
      {/* Mobile Layout */}
      <section id="mobile-footer" className="block md:hidden">
        {/* Program Fee Section */}
        <div className="bg-white px-6 py-10">
          <div className="text-black text-xl mb-2">Program Fee:</div>
          <div className="text-black text-2xl font-bold mb-6">
            INR <span className="text-[#0e416f]">17,500 + 18% GST</span>
          </div>
          
          <div className="text-black text-xl mb-6">Next Cohorts Starting:</div>
          <div className="text-black text-xl mb-8">
            <span className="font-bold">Jan & Feb</span> (Weekends)
          </div>

          {/* Apply Now Button */}
          
        </div>

        {/* Certificate Image */}
        <div className="bg-white px-6 pb-10">
          <img
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/image-6-1.png"
            alt="Sample Certificate"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Footer */}
        <div className="bg-[#122e6c] py-8 px-6 text-center">
          <p className="text-white text-sm mb-4">
            info@mygradcircle.com | www.mygradcircle.com
          </p>
          
          <div className="text-white text-sm">
            <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Terms of Use</a>
            <span className="mx-3">|</span>
            <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Privacy Notice</a>
          </div>
          
          <p className="text-white/70 text-xs mt-6">
            © Copyright GradCircle, All rights reserved 2025.
          </p>

          
        </div>
        <div className="flex justify-center">
            <a href="#contact-form" className="bg-[#ef7f1a] text-white font-bold text-xl py-4 w-full text-center hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg">
              Apply Now
            </a>
          </div>
      </section>

      {/* Tablet Layout */}
      <section className="hidden md:block lg:hidden">
        {/* Program Fee Section */}
        <div className="bg-white px-6 py-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-black text-2xl mb-4">Program Fee:</div>
            <div className="text-black text-3xl font-bold mb-8">
              INR <span className="text-[#0e416f]">17,500 + 18% GST</span>
            </div>
            
            <div className="text-black text-2xl mb-4">Next Cohorts Starting:</div>
            <div className="text-black text-2xl">
              <span className="font-bold">Jan & Feb</span> (Weekends)
            </div>
          </div>
        </div>

        {/* Certificate Image */}
        <div className="bg-white px-6 py-12 flex justify-center">
          <img
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/image-6-1.png"
            alt="Sample Certificate"
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Footer */}
        <div className="bg-[#122e6c] py-12 px-6 text-center">
          <p className="text-white text-lg mb-6">
            info@mygradcircle.com | www.mygradcircle.com
          </p>
          
          <div className="text-white text-lg mb-6">
            <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Terms of Use</a>
            <span className="mx-4">|</span>
            <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Privacy Notice</a>
          </div>
          
          <p className="text-white/70 text-sm">
            © Copyright GradCircle, All rights reserved 2025.
          </p>
        </div>
      </section>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative">
        <div className="absolute top-[10600px] left-0 w-full h-[200px] bg-[#122e6c]">
          <p className="absolute top-[50px] left-1/2 transform -translate-x-1/2 text-white text-lg text-center">
            info@mygradcircle.com | www.mygradcircle.com
          </p>
          
          <div className="absolute top-[90px] left-1/2 transform -translate-x-1/2 text-white text-base text-center">
            <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Terms of Use</a>
            <span className="mx-4">|</span>
            <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Privacy Notice</a>
          </div>
          
          <p className="absolute top-[140px] left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center">
            © Copyright GradCircle, All rights reserved 2025.
          </p>
        </div>

        

        <p className="absolute top-[9960px] left-[105px] [font-family:'Inter',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[normal]">
          Program Fee: INR <span className="font-bold">17,500 + 18% GST</span>
        </p>

        <p className="absolute top-[10020px] left-[105px] [font-family:'Inter',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[normal]">
          Next Cohorts Starting: <span className="font-bold">Jan</span> & <span className="font-bold">Feb</span> (Weekends)
        </p>
        <img
          className="absolute top-[10060px] left-[105px] w-[600px] h-auto rounded-lg shadow-lg"
          src="https://c.animaapp.com/mjmwrwbp4K97wU/img/image-6-1.png"
          alt="Sample Certificate"
        />
        <div className="absolute top-[9950px] left-[835px]"><ContactForm /></div>
      </div>
    </>
  );
};
