import React from 'react';

export const Testimonials = () => {
  return (
    <>
      {/* Mobile Version */}
      <div className="block md:hidden w-full bg-white py-8 px-4">
        {/* 100+ Mentors Text */}
        <p className="[font-family:'Inter',Helvetica] font-bold text-[#ef7f1a] text-xl text-center mb-8">
          100+ Mentors | 20+ Career Pathways
        </p>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Quote Mark */}
          <div className="absolute -top-6 bg-white h-[40px] -left-4 text-[#122e6c] text-[130px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-bold leading-none  ml-1">
             “
          </div>
          
          {/* Testimonial Box */}
          <div className="border-2 border-[#122e6c] rounded-2xl p-6 shadow-sm bg-white">
            <p className="[font-family:'Montserrat',Helvetica] font-normal text-xl leading-relaxed">
              <span className="font-semibold italic text-[#f36a1e]">
                Instead of just theory, we worked on realistic case studies, applying our learnings like in real life.
              </span>
              <span className="font-bold text-[#122e6c] text-lg"> – Sara,</span>
              <span className="text-black text-lg"> Prometheus School, Noida</span>
            </p>
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full bg-white py-12 px-6">
        {/* 100+ Mentors Text */}
        <p className="[font-family:'Inter',Helvetica] font-bold text-[#ef7f1a] text-3xl text-center mb-12">
          100+ Mentors | 20+ Career Pathways
        </p>

        {/* Testimonial Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Quote Mark */}
            <div className="text-[#122e6c] text-[140px] [font-family:'Georgia',serif] font-bold leading-none -mb-14 ml-2">
              “
            </div>
            
            {/* Testimonial Box */}
            <div className="border-2 border-[#122e6c] rounded-3xl p-8 ml-8 bg-white shadow-md">
              <p className="[font-family:'Montserrat',Helvetica] font-normal text-2xl leading-relaxed">
                <span className="font-semibold italic text-[#f36a1e]">
                  Instead of just theory, we worked on realistic case studies, applying our learnings like in real life.
                </span>
                <span className="font-bold text-[#122e6c] text-xl"> – Sara,</span>
                <span className="text-black text-xl"> Prometheus School, Noida</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version - Original */}
      <div className="hidden lg:block relative">
        {/* <div className="absolute top-[2089px] left-[50px] w-[1340px] h-[961px] rounded-[20px] border border-solid border-[#122e6c]" /> */}
        {/* <div className="absolute top-[3009px] left-[50px] w-[1340px] h-[162px] rounded-[20px] border border-solid border-[#122e6c]" /> */}
        {/* <p className="absolute top-[3035px] left-[188px] w-[1148px] [font-family:'Montserrat',Helvetica] font-normal text-transparent text-4xl tracking-[0] leading-[normal]">
          <span className="font-semibold italic text-[#f36a1e]">
            Instead of just theory, we worked on realistic case studies,
            <br />
            applying our learnings like in real life.{" "}
          </span>
          <span className="font-bold text-[#122e6c] text-2xl">– Sara,</span>
          <span className="text-black text-2xl"> Prometheus School, Noida</span>
        </p> */}
        {/* <p className="absolute top-[4223px] left-[203px] w-[745px] [font-family:'Montserrat',Helvetica] font-normal text-transparent text-4xl tracking-[0] leading-[normal]">
          <span className="font-semibold italic text-[#f36a1e]">
            We were pushed to go into every detail The accountability and depth
            made it stand out from any school project <br />
          </span>
          <span className="font-bold text-[#122e6c] text-2xl">– Riva,</span>
          <span className="text-black text-2xl">
            {" "}
            Kanakia International School, Mumbai
          </span>
        </p> */}
        {/* <div className="absolute top-[2954px] left-[30px] w-[127px] h-40 bg-[#f7f7f7]" /> */}
        {/* <div className="top-[2900px] left-[26px] w-[140px] text-[#122e6c] text-[400px] absolute [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-normal text-center tracking-[0] leading-[normal] whitespace-nowrap">
          “
        </div> */}
        {/* <div className="absolute top-[7422px] left-[47px] w-[1340px] h-[162px] rounded-[20px] border border-solid border-[#122e6c]" /> */}
        {/* <p className="top-[7448px] left-[185px] w-[1148px] text-4xl leading-[normal] absolute [font-family:'Montserrat',Helvetica] font-normal text-transparent tracking-[0]">
          <span className="font-semibold text-[#f36a1e]">
            The continuity with one mentor for four weeks made it far

            more engaging than any other program I've attended.{" "}
          </span>
          <span className="font-bold text-[#122e6c] text-2xl">– Aahana,</span>
          <span className="text-black text-2xl"> Lotus Valley International School, Noida</span>
        </p>
        <div className="top-[7313px] left-[23px] w-[140px] h-[220px] bg-white text-[#122e6c] text-[400px] absolute [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-normal text-center tracking-[0] leading-[normal] whitespace-nowrap">
          “
        </div> */}
        {/* <div className="absolute top-[9163px] left-[50px] w-[1340px] h-[162px] rounded-[20px] border border-solid border-[#122e6c]" /> */}
        {/* <div className="absolute top-[9413px] left-[50px] w-[1340px] h-[474px] rounded-[20px] border border-solid border-[#122e6c]" /> */}
        {/* <p className="top-[9189px] left-[188px] w-[1148px] text-4xl leading-[normal] absolute [font-family:'Montserrat',Helvetica] font-normal text-transparent tracking-[0]">
          <span className="font-semibold  text-[#f36a1e]">
            I loved building our own brand and creating a detailed
            <br />
           investor pitch- it felt like the real world.{" "}
           <br />
          </span>
          <span className="font-bold text-[#122e6c] text-2xl">– Laavanya,</span>
          <span className="text-black text-2xl"> The British Co-Ed High School, Patiala</span>
        </p>
        <div className="top-[9054px] left-[16px] w-[140px] h-[220px] bg-white text-[#122e6c] text-[400px] absolute [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-normal text-center tracking-[0] leading-[normal] whitespace-nowrap">
          “
        </div> */}
        {/* <div className="absolute top-[4214px] left-[78px] w-[896px] h-[215px] rounded-[20px] border border-solid border-[#122e6c]" />
        <div className="top-[4100px] left-[40px] w-[140px] h-[220px] text-[#122e6c] text-[400px] absolute [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-normal text-center tracking-[0] leading-[normal] whitespace-nowrap bg-white">
          “
        </div> */}

        {/* 5 ORANGE CARDS */}
        {/* <div className="absolute top-[7797px] left-[46px] w-[650px] h-[179px] rounded-[20px] border border-solid border-[#ef7f1a]" />
        <img className="absolute top-[7749px] left-[0px] w-[401px] h-[124px]" alt="Vector" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/vector-8.svg" />
        <div className="absolute top-[7791px] left-[23px] w-[102px] h-[185px] flex items-center justify-center text-[#ef7f1a] text-[300px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-normal text-center tracking-[0] leading-[normal] whitespace-nowrap">“</div>
        <div className="absolute top-[7776px] left-[143px] w-[228px] h-[29px] flex items-center justify-center [font-family:'Montserrat',Helvetica] font-normal text-black text-2xl text-center tracking-[0] leading-[normal]">Learning by Doing</div>
        <p className="absolute top-[7830px] left-[151px] w-[538px] text-2xl leading-6 [font-family:'Montserrat',Helvetica] font-normal text-transparent tracking-[0]">
          <span className="font-semibold italic text-[#122e6c] leading-[30px]">It gave me hands-on experience in consulting– from research to pitching – something we don't get to do in a classroom.</span>
          <br />
          <span className="font-bold text-[#ef7f1a]">– Devansh,</span>
          <span className="text-[#ef7f1a]"> Overseas Family School, Singapore</span>
        </p> */}

        {/* <div className="absolute top-[7797px] left-[735px] w-[650px] h-[179px] rounded-[20px] border border-solid border-[#ef7f1a]" />
        <img className="absolute top-[7749px] left-[689px] w-[401px] h-[124px]" alt="Vector" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/vector-8.svg" />
        <div className="absolute top-[7791px] left-[712px] w-[102px] h-[185px] flex items-center justify-center text-[#ef7f1a] text-[300px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-normal text-center tracking-[0] leading-[normal] whitespace-nowrap">“</div>
        <div className="absolute top-[7776px] left-[800px] w-[328px] h-[29px] flex items-center justify-center [font-family:'Montserrat',Helvetica] bg-white font-normal text-black text-2xl text-center tracking-[0] leading-[normal]">Future-Ready Skillset</div>
        <p className="absolute top-[7830px] left-[840px] w-[538px] text-2xl leading-6 [font-family:'Montserrat',Helvetica] font-normal text-transparent tracking-[0]">
          <span className="font-semibold italic text-[#122e6c] leading-[30px]">I improved critical skills – research, teamwork, and professional presentations – that apply to any career.</span>
          <br />
          <span className="font-bold text-[#ef7f1a]">– Diya,</span>
          <span className="text-[#ef7f1a]"> Indus International School, Pune</span>
        </p> */}

        {/* <div className="absolute top-[8049px] left-[46px] w-[650px] h-[179px] rounded-[20px] border border-solid border-[#ef7f1a]" />
        <img className="absolute top-[8001px] left-[0px] w-[401px] h-[124px]" alt="Vector" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/vector-8.svg" />
        <div className="absolute top-[8043px] left-[23px] w-[102px] h-[185px] flex items-center justify-center text-[#ef7f1a] text-[300px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-normal text-center tracking-[0] leading-[normal] whitespace-nowrap">“</div>
        <div className="absolute top-[8028px] left-[143px] w-[328px] h-[29px] flex items-center justify-center [font-family:'Montserrat',Helvetica] bg-white font-normal text-black text-2xl text-center tracking-[0] leading-[normal]">Prepared for the Real World</div>
        <p className="absolute top-[8082px] left-[151px] w-[538px] text-2xl leading-6 [font-family:'Montserrat',Helvetica] font-normal text-transparent tracking-[0]">
          <span className="font-semibold italic text-[#122e6c] leading-[30px]">This internship gave me life skills I can use beyond school– a lot of which can be implemented in real life.</span>
          <br />
          <span className="font-bold text-[#ef7f1a]">– Jaskirat,</span>
          <span className="text-[#ef7f1a]"> The British Co-Ed High School, Patiala</span>
        </p> */}

        {/* <div className="absolute top-[8049px] left-[735px] w-[650px] h-[179px] rounded-[20px] border border-solid border-[#ef7f1a]" />
        <img className="absolute top-[8001px] left-[689px] w-[401px] h-[124px]" alt="Vector" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/vector-8.svg" />
        <div className="absolute top-[8043px] left-[712px] w-[102px] h-[185px] flex items-center justify-center text-[#ef7f1a] text-[300px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-normal text-center tracking-[0] leading-[normal] whitespace-nowrap">“</div>
        <div className="absolute top-[8028px] left-[832px] w-[328px] h-[29px] flex items-center justify-center [font-family:'Montserrat',Helvetica] font-normal text-black text-2xl bg-white text-center tracking-[0] leading-[normal]">Career Exploration & Clarity</div>
        <p className="absolute top-[8082px] left-[840px] w-[538px] text-2xl leading-6 [font-family:'Montserrat',Helvetica] font-normal text-transparent tracking-[0]">
          <span className="font-semibold italic text-[#122e6c] leading-[30px]">GradCircle helped me clear my doubts about career options. You think something isn't for you, but after trying it, you realize it is.</span>
          <br />
          <span className="font-bold text-[#ef7f1a]">– Avni,</span>
          <span className="text-[#ef7f1a]"> St Constantine's International School, Tanzania</span>
        </p> */}

        {/* <div className="absolute top-[8301px] left-[424px] w-[650px] h-[179px] rounded-[20px] border border-solid border-[#ef7f1a]" />
        <img className="absolute top-[8253px] left-[378px] w-[401px] h-[124px]" alt="Vector" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/vector-8.svg" />
        <div className="absolute top-[8295px] left-[401px] w-[102px] h-[185px] flex items-center justify-center text-[#ef7f1a] text-[300px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-normal text-center tracking-[0] leading-[normal] whitespace-nowrap">“</div>
        <div className="absolute top-[8280px] left-[521px] w-[328px] h-[29px] flex items-center justify-center [font-family:'Montserrat',Helvetica] font-normal bg-white text-black text-2xl text-center tracking-[0] leading-[normal]">Real Industry Exposure</div>
        <p className="absolute top-[8334px] left-[529px] w-[538px] text-2xl leading-6 [font-family:'Montserrat',Helvetica] font-normal text-transparent tracking-[0]">
          <span className="font-semibold italic text-[#122e6c] leading-[30px]">Corporate and international law now excite me far more than I imagined before starting this program.</span>
          <br />
          <span className="font-bold text-[#ef7f1a]">– Aviraj,</span>
          <span className="text-[#ef7f1a]"> Mahindra United World College, Pune</span>
        </p> */}
      </div>
    </>
  );
};
