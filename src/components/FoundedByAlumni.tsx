import React from 'react';

export const FoundedByAlumni = () => {
  return (
    <>
      {/* Mobile Version - Updated to match your image */}
      <div className="block md:hidden w-full">
        {/* Yellow Header - Centered */}
        <div className="bg-[#f8b402] py-7 px-5 mb-7 shadow-sm">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[30px] text-center leading-tight">
            Founded by<br />Alumni from
          </h2>
        </div>
        
        {/* Logos Container - With School Names */}
        <div className="bg-white shadow-lg">
          <div className="flex items-center justify-around mb-6">
            {/* MIT Sloan Logo - BIGGER */}
            <div className="flex flex-col items-center">
              <div className="w-[100px] h-[50px] flex items-center justify-center mb-3">
                <img
                  className="w-full h-full object-contain"
                  alt="MIT Sloan"
                  src="https://c.animaapp.com/mjmwrwbp4K97wU/img/mit-management-sloan-school.png"
                />
              </div>
            </div>
            
            {/* Yale University Logo - BIGGER */}
            <div className="flex flex-col items-center">
              <div className="w-[80px] h-[40px] flex items-center justify-center mb-3">
                <img
                  className="w-full h-full object-contain"
                  alt="Yale University"
                  src="https://c.animaapp.com/mjmwrwbp4K97wU/img/yale.png"
                />
              </div>
            </div>
            
            {/* IIT Delhi Logo - BIGGER */}
            <div className="flex flex-col items-center">
              <div className="w-[70px] h-[70px] flex items-center justify-center mb-3">
                <img
                  className="w-full h-full object-contain"
                  alt="IIT Delhi"
                  src="https://c.animaapp.com/mjmwrwbp4K97wU/img/iit-delhi1.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Version - Updated with bigger logos */}
      <div className="hidden md:block lg:hidden w-full max-w-5xl mx-auto px-8 py-14">
        {/* Yellow Header */}
        <div className="bg-[#f8b402] rounded-3xl py-10 px-8 mb-10 shadow-md">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-5xl text-center leading-tight">
            Founded by Alumni from
          </h2>
        </div>
        
        {/* Logos Container */}
        <div className="bg-white rounded-2xl shadow-lg py-12 px-8 flex items-center justify-center gap-16">
          <div className="flex flex-col items-center">
            <div className="w-[140px] h-[70px] flex items-center justify-center mb-4">
              <img
                className="w-full h-full object-contain"
                alt="MIT Sloan"
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/mit-management-sloan-school.png"
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-[110px] h-[55px] flex items-center justify-center mb-4">
              <img
                className="w-full h-full object-contain"
                alt="Yale University"
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/yale.png"
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] flex items-center justify-center mb-4">
              <img
                className="w-full h-full object-contain"
                alt="IIT Delhi"
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/iit-delhi1.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version - Original - NO CHANGES */}
      <div className="hidden lg:block">
        <div className="flex flex-col w-[998px] items-center justify-center gap-6 pt-10 pb-[63px] px-6 absolute top-[671px] left-[206px] bg-[#f8b402] rounded-2xl shadow-md">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Founded by Alumni from
          </div>
        </div>

        <div className="absolute top-[769px] left-[483px] w-[434px] h-[105px] bg-white rounded-[13px_13px_0px_0px] shadow-[0px_4px_4px_#00000040]" />

        <div className="absolute top-[795px] left-[823px] flex flex-col items-center">
          <img
            className="w-[74px] h-[74px] object-cover"
            alt="Iit"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/iit-delhi1.png"
          />
        </div>

        <img
          className="absolute top-[802px] left-[502px] w-[115px] h-[60px] object-cover"
          alt="Mit management sloan"
          src="https://c.animaapp.com/mjmwrwbp4K97wU/img/mit-management-sloan-school.png"
        />

        <img
          className="absolute top-[813px] left-[668px] w-[102px] h-[38px] object-cover"
          alt="Yale"
          src="https://c.animaapp.com/mjmwrwbp4K97wU/img/yale.png"
        />
      </div>
    </>
  );
};