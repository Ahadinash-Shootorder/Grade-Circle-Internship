import React from "react";
import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <section className="w-full">
      {/* Mobile Version */}
      <div className="block md:hidden w-full">
        {/* Program Fee Section */}
        <div className="bg-white px-4 py-8">
          <div className="text-black text-lg mb-2">Program Fee:</div>
          <div className="text-black text-2xl font-bold mb-6">
            INR <span className="text-[#0e416f]">17,500 + 18% GST</span>
          </div>
          
          <div className="text-black text-lg mb-4">Next Cohorts Starting:</div>
          <div className="text-black text-xl mb-6">
            <span className="font-bold">Jan & Feb</span> (Weekends)
          </div>

          {/* Certificate Image */}
          <img
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/image-6-1.png"
            alt="Sample Certificate"
            className="w-full h-auto rounded-lg shadow-lg mb-6"
          />

          {/* Apply Now Button */}
          
        </div>

        {/* Footer */}
        <div className="bg-[#122e6c] py-8 px-4 text-center">
          <p className="text-white text-sm mb-4">
            info@mygradcircle.com | www.mygradcircle.com
          </p>
          
          <div className="text-white text-sm mb-6">
            <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Terms of Use</a>
            <span className="mx-3">|</span>
            <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Privacy Notice</a>
          </div>
          
          <p className="text-white/70 text-xs">
            © Copyright GradCircle, All rights reserved 2025.
          </p>
        </div>
        <a 
            href="#contact-form" 
            className="bg-[#ef7f1a] text-white font-bold text-lg py-4 w-full block text-center hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Apply Now
          </a>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full">
        {/* Program Fee Section */}
        <div className="bg-white px-6 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-black text-2xl mb-3">Program Fee:</div>
            <div className="text-black text-3xl font-bold mb-8">
              INR <span className="text-[#0e416f]">17,500 + 18% GST</span>
            </div>
            
            <div className="text-black text-2xl mb-3">Next Cohorts Starting:</div>
            <div className="text-black text-2xl mb-10">
              <span className="font-bold">Jan & Feb</span> (Weekends)
            </div>

            {/* Certificate Image */}
            <img
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/image-6-1.png"
              alt="Sample Certificate"
              className="w-full max-w-lg mx-auto h-auto rounded-lg shadow-lg mb-10"
            />

            {/* Apply Now Button */}
            <a 
              href="#contact-form" 
              className="bg-[#ef7f1a] text-white font-bold text-2xl py-5 px-16 inline-block rounded-full hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#122e6c] py-10 px-6 text-center">
          <p className="text-white text-lg mb-5">
            info@mygradcircle.com | www.mygradcircle.com
          </p>
          
          <div className="text-white text-base mb-6">
            <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Terms of Use</a>
            <span className="mx-4">|</span>
            <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Privacy Notice</a>
          </div>
          
          <p className="text-white/70 text-sm">
            © Copyright GradCircle, All rights reserved 2025.
          </p>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full">
        <div className="max-w-[1340px] mx-auto px-[50px] py-16">
          <div className="flex gap-12 items-start mb-12">
            {/* Left Side - Fee & Certificate */}
            <div className="flex-1">
              <p className="font-['Inter',Helvetica] text-black text-xl mb-4">
                Program Fee: INR <span className="font-bold text-[#0e416f]">17,500 + 18% GST</span>
              </p>

              <p className="font-['Inter',Helvetica] text-black text-xl mb-8">
                Next Cohorts Starting: <span className="font-bold">Jan</span> & <span className="font-bold">Feb</span> (Weekends)
              </p>

              <img
                className="w-full max-w-[600px] h-auto rounded-lg shadow-lg"
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/image-6-1.png"
                alt="Sample Certificate"
              />
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex-1">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#122e6c] py-12 text-center">
          <p className="text-white text-lg mb-4">
            info@mygradcircle.com | www.mygradcircle.com
          </p>
          
          <div className="text-white text-base mb-6">
            <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Terms of Use</a>
            <span className="mx-4">|</span>
            <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Privacy Notice</a>
          </div>
          
          <p className="text-white/70 text-sm">
            © Copyright GradCircle, All rights reserved 2025.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;