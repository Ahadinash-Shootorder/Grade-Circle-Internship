import React from 'react';

export const SampleProjects = () => {
  const projects = [
    { title: "Market Expansion:", description: "Develop a strategy for an Indian electric scooter brand to enter Southeast Asia." },
    { title: "Equity Research:", description: "Analyze a listed company and recommend a buy, hold, or sell rating with supporting valuation." },
    { title: "Healthcare Innovation:", description: "Create a market-entry plan for a next-gen prenatal screening test in India." },
    { title: "Litigation Strategy:", description: "Design a courtroom advocacy plan for a public interest case." },
    { title: "UX Redesign:", description: "Improve user experience for a wearable fitness device through interface and feature innovation." },
    { title: "AI for Social Good:", description: "Build a fake news detection and sentiment analysis system for social media." },
    { title: "Investigative Journalism:", description: "Uncover the truth behind \"healthy\" food labels through data and regulatory analysis." },
    { title: "Policy Review:", description: "Evaluate the effectiveness of a government employment scheme introduced 5 years ago." },
  ];

  return (
    <section className="w-full">
      {/* Mobile Version */}
      <div className="block md:hidden w-full bg-white">
        <div className="px-4 py-8">
          {/* Testimonial Quote */}
          <div className="relative mb-8">
            {/* Quote Mark */}
            <div className="bg-white h-[40px] -left-4 text-[#122e6c] text-[130px] font-['Kannada_Sangam_MN-Regular',Helvetica] font-bold leading-none ml-1">
              "
            </div>
            
            {/* Testimonial Box */}
            <div className="border-2 border-[#122e6c] rounded-2xl p-6 shadow-sm bg-white">
              <p className="font-['Montserrat',Helvetica] font-normal text-lg leading-relaxed">
                <span className="font-semibold italic text-[#f36a1e]">
                  I loved building our own brand and creating a detailed investor pitch- it felt like the real world.
                </span>
                <span className="font-bold text-[#122e6c] text-base"> – Laavanya,</span>
                <span className="text-black text-base"> The British Co-Ed High School, Patiala</span>
              </p>
            </div>
          </div>

          {/* Sample Projects Title */}
          <h2 className="font-['Inter',Helvetica] font-extrabold text-[#0e416f] text-2xl mb-4">
            Sample Projects
          </h2>
          
          <p className="font-['Inter',Helvetica] text-black text-base mb-6 leading-relaxed">
            Below are examples of real-world problem statements students have tackled, fostering creativity, critical thinking, and industry-relevant skills.
          </p>

          {/* Projects List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index}>
                <h3 className="font-bold text-[#ef7f1a] text-lg">{project.title}</h3>
                <p className="text-black text-base leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full bg-white">
        <div className="px-6 py-12 max-w-4xl mx-auto">
          {/* Testimonial Quote */}
          <div className="relative mb-10">
            <div className=" bg-white h-[60px] w-[60px] flex items-center justify-center z-10">
              <span className="text-[#122e6c] text-[100px] font-['Kannada_Sangam_MN-Regular',Helvetica] leading-none">
                "
              </span>
            </div>
            
            <div className="border-2 border-[#122e6c] rounded-2xl p-8 pt-12 bg-white shadow-sm">
              <p className="font-['Montserrat',Helvetica] font-normal text-lg leading-relaxed">
                <span className="font-semibold italic text-[#f36a1e]">
                  I loved building our own brand and creating a detailed investor pitch- it felt like the real world.
                </span>
                <span className="font-bold text-[#122e6c]"> – Laavanya,</span>
                <span className="text-black"> The British Co-Ed High School, Patiala</span>
              </p>
            </div>
          </div>

          {/* Sample Projects Title */}
          <h2 className="font-['Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl mb-4 text-center">
            Sample Projects
          </h2>
          
          <p className="font-['Inter',Helvetica] text-black text-lg mb-8 leading-relaxed text-center">
            Below are examples of real-world problem statements students have tackled, fostering creativity, critical thinking, and industry-relevant skills.
          </p>

          {/* Projects List */}
          <div className="space-y-5">
            {projects.map((project, index) => (
              <div key={index} className="flex items-start gap-4">
                <img
                  className="w-7 h-7 mt-1 flex-shrink-0"
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
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full bg-white">
        <div className="max-w-[1340px] mx-auto px-[50px] py-16">
          {/* Sample Projects Title */}
          <h2 className="font-['Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl mb-6">
            Sample Projects
          </h2>
          
          <p className="font-['Inter',Helvetica] text-black text-[32px] leading-relaxed mb-8">
            Below are examples of real-world problem statements students have tackled, fostering creativity, critical thinking, and industry-relevant skills.
          </p>

          {/* Projects List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="flex items-start gap-4">
                <img
                  className="w-[30px] h-[30px] mt-2 flex-shrink-0"
                  alt="Check mark"
                  src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
                />
                <p className="font-['Inter',Helvetica] text-black text-xl leading-10">
                  <span className="font-bold text-[#ef7f1a]">{project.title}</span>
                  <span> {project.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleProjects;