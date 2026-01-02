import React from 'react';

export const ProgramOverview = () => {
  return (
    <>
      {/* Mobile Version */}
      <div className="block md:hidden w-full bg-white">
        {/* Program Overview Title */}
        <div className="px-5 pt-10 pb-6">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[38px] leading-[1.1]">
            Program
          </h2>
          <div className="[-webkit-text-stroke:1.2px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-[52px] leading-[1.1]">
            Overview
          </div>
        </div>

        {/* Orange Background Section with Description */}
        <div className="bg-[#ef7f1a] px-6 py-8">
          <p className="[font-family:'Inter',Helvetica] text-white text-[18px] leading-[1.5]">
            Students from Grades 9-12 work with "active industry professionals" on simulated industry-focused projects.
          </p>
        </div>

        {/* Student Image - Circular with orange overlay */}
        <div className="flex justify-center -mt-4 relative z-10">
          <div className="w-full max-w-[450px] aspect-[3/4] rounded-b-[50%] overflow-hidden shadow-xl relative">
            {/* Orange overlay on top */}
            <div className="absolute top-0 left-0 right-0 h-60 w-full bg-gradient-to-b from-[#ef7f1a] to-transparent z-10"></div>
            <img
              className="w-full h-full object-cover"
              alt="Pg image"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-image-1.png"
            />
          </div>
        </div>

        {/* Features List */}
        <div className="px-4 py-6 space-y-3 bg-white">
          <div className="flex items-start gap-4">
            <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-white">
              <img
                className="w-full h-full object-contain"
                alt="Pg real world"
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-real-world.png"
              />
            </div>
            <p className="[font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-[16px] leading-[1.4] flex-1 pt-6">
              Real-world simulated projects to build your skills profile
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-white">
              <img
                className="w-full h-full object-contain"
                alt="Mentors"
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-certificate.png"
              />
            </div>
            <p className="[font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-[16px] leading-[1.4] flex-1 pt-6">
              Live engagement with mentors from Fortune-500 companies
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-white">
              <img
                className="w-full h-full object-contain"
                alt="Pg certificate"
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-certificate.png"
              />
            </div>
            <p className="[font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-[16px] leading-[1.4] flex-1 pt-6">
              Certificate & Letter of Recommendation from industry mentors
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-white">
              <img
                className="w-full h-full object-contain"
                alt="Pg clarity on job"
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-clarity-on-job.png"
              />
            </div>
            <p className="[font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-[16px] leading-[1.4] flex-1 pt-6">
              Clarity on job roles and responsibilities
            </p>
          </div>

          {/* Apply Now Button */}
          <div className="flex justify-center pt-6">
            <a href="#contact-form" className="bg-[#ef7f1a] rounded-full px-16 py-4 hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-lg inline-flex items-center justify-center">
              <span className="[font-family:'Inter',Helvetica] font-bold text-white text-[20px]">
                Apply Now
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full max-w-6xl mx-auto px-6">
        {/* Program Overview Title */}
        <div className="py-14 text-center">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-6xl leading-tight">
            Program
          </h2>
          <div className="[-webkit-text-stroke:3px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-7xl">
            Overview
          </div>
        </div>

        {/* Content Grid */}
        <div className="px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Description and Features */}
            <div className="space-y-8">
              {/* Orange Background Section with Description */}
              <div className="bg-[#ef7f1a] p-8 rounded-lg">
                <p className="[font-family:'Inter',Helvetica] font-bold text-white text-xl leading-relaxed">
                  Students from Grades 9-12 work with "active industry professionals" on simulated industry-focused projects.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    className="w-16 h-16 object-cover"
                    alt="Pg real world"
                    src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-real-world.png"
                  />
                  <p className="[font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-lg leading-tight flex-1">
                    Real-world simulated projects to build your skills profile
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    className="w-16 h-16 object-cover"
                    alt="Mentors"
                    src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-certificate.png"
                  />
                  <p className="[font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-lg leading-tight flex-1">
                    Live engagement with mentors from Fortune-500 companies
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    className="w-16 h-16 object-cover"
                    alt="Pg certificate"
                    src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-certificate.png"
                  />
                  <p className="[font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-lg leading-tight flex-1">
                    Certificate & Letter of Recommendation from industry mentors
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    className="w-16 h-16 object-cover"
                    alt="Pg clarity on job"
                    src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-clarity-on-job.png"
                  />
                  <p className="[font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-lg leading-tight flex-1">
                    Clarity on job roles and responsibilities
                  </p>
                </div>

                {/* Apply Now Button */}
                <div className="flex justify-center pt-6">
                  <a href="#contact-form" className="bg-[#ef7f1a] rounded-full px-16 py-4 hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center">
                    <span className="[font-family:'Inter',Helvetica] font-bold text-white text-xl">
                      Apply Now
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Student Image */}
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-b-full overflow-hidden border-4 shadow-lg">
                <img
                  className="w-full h-full object-cover"
                  alt="Pg image"
                  src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-image-1.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version - Original */}
      <div className="hidden lg:block">
        <img
          className="absolute top-[973px] left-[62px] w-[557px] h-[890px] rounded-[0px_0px_300px_300px] object-cover"
          alt="Pg image"
          src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-image-1.png"
        />

        <img
          className="absolute top-[1185px] left-[580px] w-[707px] h-36"
          alt="Vector"
          src="https://c.animaapp.com/mjmwrwbp4K97wU/img/vector-2.svg"
        />

        <p className="absolute top-[1213px] left-[648px] [font-family:'Inter',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
          Students from Grades 9-12 work with
          <br />
          "active industry professionals" on simulated
          <br />
          industry-focused projects.
        </p>

        <div className="absolute top-[949px] left-[627px] [font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[74px] text-center tracking-[0] leading-[normal]">
          Program
        </div>

        <div className="absolute top-[1018px] left-[624px] [-webkit-text-stroke:3px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-9xl text-center tracking-[0] leading-[normal]">
          Overview
        </div>

        <div className="inline-flex items-center justify-center absolute top-[1370px] left-[673px]">
          <img
            className="relative w-[73px] h-[73px] object-cover"
            alt="Pg real world"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-real-world.png"
          />
          <p className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-2xl tracking-[0] leading-[normal]">
            Real-world simulated projects to build
            <br />
            your skills profile
          </p>
        </div>

        <div className="inline-flex items-center justify-center absolute top-[1450px] left-[673px]">
          <img
            className="relative w-[73px] h-[73px] object-cover"
            alt="Pg certificate"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-certificate.png"
          />
          <p className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-2xl tracking-[0] leading-[normal]">
            Live engagement with mentors from
            <br />
            Fortune-500 companies
          </p>
        </div>

        <div className="inline-flex items-end absolute top-[1530px] left-[673px]">
          <img
            className="relative w-[73px] h-[73px] object-cover"
            alt="Pg certificate"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-certificate.png"
          />
          <p className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-2xl tracking-[0] leading-[normal]">
            Certificate & Letter of Recommendation
            <br />
            from industry mentors
          </p>
        </div>

        <div className="inline-flex items-center justify-center absolute top-[1610px] left-[673px]">
          <img
            className="relative w-[73px] h-[73px] object-cover"
            alt="Pg clarity on job"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-2-clarity-on-job.png"
          />
          <p className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-2xl tracking-[0] leading-[normal]">
            Clarity on job roles and responsibilities
          </p>
        </div>

        <a href="#contact-form" className="absolute top-[1746px] left-[683px] w-[291px] h-[86px] bg-[#ef7f1a] rounded-[50px] flex items-center justify-center hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200" />

        <a href="#contact-form" className="absolute top-[1774px] left-[766px] [font-family:'Inter',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal] pointer-events-none">
          Apply Now
        </a>
      </div>
    </>
  );
};