import React from 'react';

export const StudentExperiences = () => {
  return (
    <>
      {/* Mobile Layout */}
      <section className="block md:hidden px-6 py-12 bg-white">
        <h2 className="font-bold text-[#122e6c] text-2xl text-center mb-6">Student Experiences</h2>
        
        <div className="rounded-xl border-2 border-[#122e6c] p-4">
          <img
            className="w-full h-auto rounded-lg object-cover"
            alt="Student Experience Video"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-44.png"
          />
        </div>
      </section>

      {/* Tablet Layout */}
      <section className="hidden md:block lg:hidden px-6 py-12 bg-white max-w-4xl mx-auto">
        <h2 className="font-bold text-[#122e6c] text-4xl text-center mb-8">Student Experiences</h2>
        
        <div className="rounded-2xl border-4 border-[#122e6c] p-6">
          <img
            className="w-full h-auto rounded-xl object-cover"
            alt="Student Experience Video"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-44.png"
          />
        </div>
      </section>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <img
          className="absolute top-[4578px] left-[215px] w-[960px] h-[540px] object-cover"
          alt="Rectangle"
          src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-44.png"
        />

        <div className="absolute top-[4529px] left-[50px] w-[1340px] h-[631px] rounded-[20px] border border-solid border-[#122e6c]" />

        <div className="absolute top-[4497px] left-[457px] w-[536px] h-[59px] bg-white" />

        <div className="absolute top-[4497px] left-[484px] [font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-5xl text-center tracking-[0] leading-[normal]">
          Student Experiences
        </div>

        <img
          className="absolute top-[10058px] left-[166px] w-[542px] h-[413px]"
          alt="Image"
          src="https://c.animaapp.com/mjmwrwbp4K97wU/img/image-6-1.png"
        />
      </div>
    </>
  );
};
