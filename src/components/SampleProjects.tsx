import React from 'react';

export const SampleProjects = () => {
  const projects = [
    { title: "Market Expansion:", description: "Develop a strategy for an Indian electric scooter brand to enter Southeast Asia." },
    { title: "Equity Research:", description: "Analyze a listed company and recommend a buy, hold, or sell rating with supporting valuation." },
    { title: "Healthcare Innovation:", description: "Create a market-entry plan for a next-gen prenatal screening test in India." },
    { title: "UX Redesign:", description: "Design a courtroom advocacy plan for a public interest case." },
    { title: "Litigation Strategy:", description: "Improve user experience for a wearable fitness device through interface and feature innovation." },
    { title: "AI for Social Good:", description: "Build a fake news detection and sentiment analysis system for social media." },
    { title: "Investigative Journalism:", description: "Uncover the truth behind \"healthy\" food labels through data and regulatory analysis." },
    { title: "Policy Review:", description: "Evaluate the effectiveness of a government employment scheme introduced 5 years ago." },
  ];

  return (
    <>
      {/* Mobile Layout */}
      <section className="block md:hidden px-6 py-12 mb-3 bg-white">
        {/* Testimonial Quote */}
        <div className="relative">
          {/* Quote Mark */}
          <div className="absolute -top-6 bg-white h-[40px] -left-4 text-[#122e6c] text-[130px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-bold leading-none  ml-1">
             “
          </div>
          
          {/* Testimonial Box */}
          <div className="border-2 border-[#122e6c] rounded-2xl p-6 shadow-sm bg-white">
            <p className="[font-family:'Montserrat',Helvetica] font-normal text-xl leading-relaxed">
              <span className="font-semibold italic text-[#f36a1e]">
                I loved building our own brand and creating a detailed investor pitch- it felt like the real world.
              </span>
              <span className="font-bold text-[#122e6c] text-lg"> – Laavanya,</span>
              <span className="text-black text-lg"> The British Co-Ed High School, Patiala</span>
            </p>
          </div>
        </div>

        {/* Sample Projects Title */}
        <h2 className="font-bold text-[#0e416f] text-4xl mt-8 mb-4">Sample Projects</h2>
        
        <p className="text-black text-lg mb-6 leading-relaxed">
          Below are examples of real-world problem statements students have tackled, fostering creativity, critical thinking, and industry-relevant skills.
        </p>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index}>
              <h3 className="font-bold text-[#ef7f1a] text-xl">{project.title}</h3>
              <p className="text-black text-lg leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tablet Layout */}
      <section className="hidden md:block lg:hidden px-6 py-12 bg-white max-w-4xl mx-auto">
        {/* Testimonial Quote */}
        <div className="mb-10 text-center">
          <div className="text-[#ef7f1a] text-5xl font-bold leading-none mb-4 inline-block">"</div>
          <div className="bg-[#f5f5f5] p-6 rounded-lg inline-block max-w-md">
            <p className="italic text-[#122e6c] text-lg leading-relaxed">
              Instead of just theory, we worked on realistic case studies, applying our learnings like in real life.
              <span className="not-italic font-bold text-[#ef7f1a]"> – Sara,</span>
              <span className="not-italic"> Prometheus School, Noida</span>
            </p>
          </div>
        </div>

        {/* Sample Projects Title */}
        <h2 className="font-bold text-[#0e416f] text-4xl mb-4 text-center">Sample Projects</h2>
        
        <p className="text-black text-lg mb-8 leading-relaxed text-center">
          Below are examples of real-world problem statements students have tackled, fostering creativity, critical thinking, and industry-relevant skills.
        </p>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="flex items-start gap-4">
              <img
                className="w-8 h-8 mt-1 flex-shrink-0"
                alt="Check mark"
                src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
              />
              <div>
                <h3 className="font-bold text-[#ef7f1a] text-xl">{project.title}</h3>
                <p className="text-black text-lg leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative">
        <div className="absolute top-[9384px] left-[88px] w-[310px] h-[57px] bg-white" />

        <div className="absolute top-[9391px] left-24 [font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center tracking-[0] leading-[normal]">
          Sample Projects
        </div>

        <p className="absolute top-[9461px] left-24 w-[1215px] [font-family:'Inter',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
          Below are examples of real-world problem statements students have
          <br />
          tackled, fostering creativity, critical thinking, and industry-relevant skills.
        </p>

        <p className="absolute top-[9559px] left-[143px] w-[1215px] [font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-5">
          <span className="font-bold leading-10">
            <img
            className={`absolute top-[5px] right-[1235px] w-[30px] h-15`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          />
            Market Expansion:</span>
          <span className="leading-10"> Develop a strategy for an Indian electric scooter brand to enter Southeast Asia.<br /></span>
          <span className="font-bold leading-10">
            <img
            className={`absolute top-[45px] right-[1235px] w-[30px] h-15`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          /> Equity Research:</span>
          <span className="leading-10"> Analyze a listed company and recommend a buy, hold, or sell rating with supporting valuation.<br /></span>
          <span className="font-bold leading-10">
            <img
            className={`absolute top-[85px] right-[1235px] w-[30px] h-15`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          /> Healthcare Innovation: </span>
          <span className="leading-10">Create a market-entry plan for a next-gen prenatal screening test in India.<br /></span>
          <span className="font-bold leading-10">
            <img
            className={`absolute top-[125px] right-[1235px] w-[30px] h-15`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          /> Litigation Strategy: </span>
          <span className="leading-10">Design a courtroom advocacy plan for a public interest case.<br /></span>
          <span className="font-bold leading-10">
            <img
            className={`absolute top-[165px] right-[1235px] w-[30px] h-15`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          />
          UX Redesign: </span>
          <span className="leading-10">Improve user experience for a wearable fitness device through interface and feature innovation.<br /></span>
          <span className="font-bold leading-10">
            <img
            className={`absolute top-[205px] right-[1235px] w-[30px] h-15`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          />
          AI for Social Good: </span>
          <span className="leading-10">Build a fake news detection and sentiment analysis system for social media. <br /></span>
          <span className="font-bold leading-10">
            <img
            className={`absolute top-[245px] right-[1235px] w-[30px] h-15`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          />
          Investigative Journalism:</span>
          <span className="leading-10"> Uncover the truth behind "healthy" food labels through data and regulatory analysis.<br /></span>
          <span className="font-bold leading-10">
            <img
            className={`absolute top-[285px] right-[1235px] w-[30px] h-15`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          />
          Policy Review: </span>
          <span className="leading-10">Evaluate the effectiveness of a government employment scheme introduced 5 years ago.</span>
        </p>

        {/* {[9558, 9598, 9638, 9679, 9719, 9760, 9799, 9839].map((top, index) => (
          <img
            key={index}
            className={`absolute top-[${top}px] left-24 w-[30px] h-10`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          />
        ))} */}
      </div>
    </>
  );
};
