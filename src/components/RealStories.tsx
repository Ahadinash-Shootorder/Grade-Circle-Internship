import React, { useState } from 'react';

export const RealStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const mentors = [
    {
      name: "Nobin Mattam",
      title: "Talent Acquisition Lead, TESCO",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-5.png",
      badge: "TESCO",
      badgeImage: "/Tesco.png"
    },
    {
      name: "Satyanshu Singh",
      title: "Filmfare Award Winner & Netflix Fame Writer and Director",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-6.png",
      badge: "NETFLIX",
      badgeImage: "/Netfilx.png"
    }
  ];

  const testimonials = [
    {
      heading: "Learning by Doing",
      quote: "Instead of just theory, we worked on realistic case studies, applying our learnings like in real life.",
      author: "Sara",
      school: "Prometheus School, Noida"
    },
    {
      heading: "Real-World Experience",
      quote: "The mentorship program gave me insights into corporate life that no classroom could provide.",
      author: "Aahana",
      school: "Lotus Valley International School, Noida"
    },
    {
      heading: "Career Clarity",
      quote: "I now understand what different roles entail and can make informed career decisions.",
      author: "Rahul",
      school: "Delhi Public School, Gurgaon"
    },
    {
      heading: "Skill Development",
      quote: "The hands-on projects helped me develop practical skills that will be valuable in my future career.",
      author: "Priya",
      school: "Modern School, Delhi"
    },
    {
      heading: "Industry Connections",
      quote: "Getting mentored by professionals from top companies opened doors I never knew existed.",
      author: "Arjun",
      school: "St. Xavier's School, Mumbai"
    }
  ];

  return (
    <>
      {/* Mobile Version */}
      <div className="block md:hidden w-full">
        {/* Sample Profiles Section */}
        <div className="bg-[#f7f7f7] px-4 py-8">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-black text-2xl text-center mb-8">
            Sample Profiles of Industry Mentors
          </h2>

          {/* Mentor Cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {mentors.map((mentor, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src={mentor.badgeImage}
                    alt={mentor.badge}
                    className="absolute -top-3 -left-4 w-16 h-10 rounded bg-white object-contain z-10"
                  />
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-32 h-32"
                  />
                </div>
                <h3 className="[font-family:'Inter',Helvetica] font-extrabold text-[#122e6c] text-sm text-center mt-2">
                  {mentor.name}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#122e6c] text-xs text-center">
                  {mentor.title}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="bg-[#122e6c] rounded-lg p-4 flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-white font-bold text-4xl">20+</div>
              <div className="text-white text-xs">UNIQUE INDUSTRIES/<br />FUNCTIONS</div>
            </div>
            <div className="text-white font-bold">FROM</div>
            <div className="text-center">
              <div className="text-white font-bold text-4xl">100+</div>
              <div className="text-white text-xs">MENTORS</div>
            </div>
          </div>
          <div className="relative mt-9">
          {/* Quote Mark */}
          <div className="absolute -top-6 bg-white h-[40px] -left-4 text-[#122e6c] text-[130px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-bold leading-none  ml-1">
             “
          </div>
          
          {/* Testimonial Box */}
          <div className="border-2 border-[#122e6c] rounded-2xl p-6 shadow-sm bg-white">
            <p className="[font-family:'Montserrat',Helvetica] font-normal text-xl leading-relaxed">
              <span className="font-semibold italic text-[#f36a1e]">
                The continuity with one mentor for four weeks made it far more engaging than any other program I've attended.
              </span>
              <span className="font-bold text-[#122e6c] text-lg"> – Aahana,</span>
              <span className="text-black text-lg"> Lotus Valley International School, Noida</span>
            </p>
          </div>
        </div>
        </div>
            
        {/* Real Stories Title */}
        <div className="px-4 py-8 bg-white">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-2xl text-center mb-6">
            Real Stories | Real Skills | Real Impact
          </h2>

          {/* Testimonial Card */}
          <div className="relative overflow-hidden">
            {/* Quote Mark - Fixed position for all cards */}
            <div className="absolute -top-5 -left-4 bg-white h-[80px] w-[80px] flex items-center justify-center pt-4 z-40">
              <span className="text-[#ef7f1a] h-[100%] text-[130px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-bold leading-none">
                “
              </span>
            </div>
            
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full relative">
                  <div className="border border-[#ef7f1a] rounded-lg p-6 mt-6 pt-12 bg-white shadow-sm">
                    <div className="text-black text-lg mb-2">{testimonial.heading}</div>
                    <p className="[font-family:'Montserrat',Helvetica] font-semibold italic text-[#122e6c] text-lg leading-relaxed mb-4">
                      {testimonial.quote}
                    </p>
                    <p className="text-[#ef7f1a]">
                      <span className="font-bold">– {testimonial.author},</span> {testimonial.school}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-[#122e6c]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full">
        {/* Sample Profiles Section */}
        <div className="bg-[#f7f7f7] px-6 py-12">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-black text-4xl text-center mb-12">
            Sample Profiles of Industry Mentors
          </h2>

          {/* Mentor Cards */}
          <div className="flex justify-center gap-8 mb-12">
            {mentors.map((mentor, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative mb-4">
                  <span className="absolute -top-3 left-0 bg-red-600 text-white text-sm px-3 py-1 rounded font-bold">
                    {mentor.badge}
                  </span>
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-32 h-32 rounded-full border-4 border-[#ef7f1a] object-cover"
                  />
                </div>
                <h3 className="[font-family:'Inter',Helvetica] font-extrabold text-[#122e6c] text-lg text-center">
                  {mentor.name}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#122e6c] text-sm text-center leading-tight">
                  {mentor.title}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="bg-[#122e6c] rounded-lg p-6 flex items-center justify-center gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-[#ef7f1a] font-bold text-4xl">20+</div>
              <div className="text-white text-sm">UNIQUE INDUSTRIES/<br />FUNCTIONS</div>
            </div>
            <div className="text-white font-bold text-4xl">FROM</div>
            <div className="text-center">
              <div className="text-white font-bold text-4xl">100+</div>
              <div className="text-white text-sm">MENTORS</div>
            </div>
          </div>
        </div>

        {/* Real Stories Title */}
        <div className="px-6 py-12 bg-white">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center mb-8">
            Real Stories | Real Skills | Real Impact
          </h2>

          {/* Testimonial Card */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Quote Mark */}
              <div className="text-[#122e6c] text-[120px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] leading-none absolute -top-6 left-0">
                "
              </div>
              
              <div className="border-2 border-[#ef7f1a] rounded-2xl p-8 pt-16 bg-white">
                <div className="text-black text-2xl mb-4">Learning by Doing</div>
                <p className="[font-family:'Montserrat',Helvetica] font-semibold italic text-[#122e6c] text-xl leading-relaxed mb-6">
                  Instead of just theory, we worked on realistic case studies, applying our learnings like in real life.
                </p>
                <p className="text-[#ef7f1a] text-lg">
                  <span className="font-bold">– Sara,</span> Prometheus School, Noida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version - Original */}
      <div className="hidden lg:block relative">
        <p className="absolute top-[7618px] left-[386px] [font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center tracking-[0] leading-[normal]">
          Real Stories | Real Skills | Real Impact
        </p>

        <div className="absolute top-[6926px] left-[50px] w-[1340px] h-[378px] bg-[#f7f7f7] rounded-[20px]" />
        <div className="absolute top-[8719px] left-[50px] w-[1340px] h-[245px] bg-[#f7f7f7] rounded-[20px]" />

        <img className="absolute top-[6968px] left-[130px] w-[151px] h-[151px] object-cover" alt="Ellipse" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-4.png" />
        
        <div className="absolute top-[7134px] left-[142px] [font-family:'Inter',Helvetica] font-extrabold text-[#122e6c] text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Rahul Shubham
        </div>
        <div className="absolute top-[7157px] left-[125px] [font-family:'Inter',Helvetica] font-normal text-[#122e6c] text-[15px] text-center tracking-[0] leading-[normal]">
          Senior Manager, UX,<br />HDFC
        </div>

        <img className="absolute top-[7304px] left-[396px] w-[697px] h-[52px]" alt="Vector" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/vector-4.svg" />
        <div className="absolute top-[7211px] left-[427px] w-[623px] h-[140px] bg-[#122e6c] rounded-[20px_20px_0px_0px]" />

        <img className="absolute top-[6960px] left-[91px] w-[79px] h-[71px] object-cover" alt="Rectangle" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-26.svg" />
        <img className="absolute top-[6968px] left-[405px] w-[151px] h-[151px] object-cover" alt="Ellipse" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-5.png" />
        <img className="absolute top-[6968px] left-[721px] w-[151px] h-[151px] object-cover" alt="Ellipse" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-6.png" />

        <div className="absolute top-[7134px] left-[415px] [font-family:'Inter',Helvetica] font-extrabold text-[#122e6c] text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Nobin Mattam
        </div>
        <div className="absolute top-[7134px] left-[735px] [font-family:'Inter',Helvetica] font-extrabold text-[#122e6c] text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Satyanshu Singh
        </div>

        <div className="absolute top-[7157px] left-[387px] [font-family:'Inter',Helvetica] font-normal text-[#122e6c] text-[15px] text-center tracking-[0] leading-[normal]">
          Talent Acquisition Lead,<br />TESCO
        </div>
        <p className="absolute top-[7157px] left-[686px] [font-family:'Inter',Helvetica] font-normal text-[#122e6c] text-[15px] text-center tracking-[0] leading-[normal]">
          Filmfare Award Winner &amp;<br />Netflix Fame Writer and Director
        </p>

        <img className="absolute top-[6960px] left-[366px] w-[79px] h-[71px] object-cover" alt="Rectangle" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-41.svg" />
        <img className="absolute top-[6960px] left-[682px] w-[79px] h-[71px] object-cover" alt="Rectangle" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-42.svg" />

        <img className="absolute top-[6968px] left-[1074px] w-[151px] h-[151px] object-cover" alt="Ellipse" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-7.png" />
        <div className="absolute top-[7134px] left-[1100px] [font-family:'Inter',Helvetica] font-extrabold text-[#122e6c] text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Rachita Rungta
        </div>
        <div className="absolute top-[7157px] left-[1077px] [font-family:'Inter',Helvetica] font-normal text-[#122e6c] text-[15px] text-center tracking-[0] leading-[normal]">
          Senior Data Scientist,<br />Unilever
        </div>
        <img className="absolute top-[6960px] left-[1035px] w-[79px] h-[71px] object-cover" alt="Rectangle" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-43.svg" />

        <div className="flex w-[95px] items-center justify-center gap-2.5 px-2.5 py-[5px] absolute top-[7259px] left-[694px] bg-white rotate-[-89.76deg]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
            FROM
          </div>
        </div>

        <img className="absolute top-[7210px] left-[458px] w-[269px] h-[149px] object-cover" alt="Element unique industries" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/20-unique-industries.png" />
        <img className="absolute top-[7210px] left-[757px] w-[269px] h-[149px] object-cover" alt="Element mentors" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/100-mentors.png" />

        <p className="absolute top-[6859px] left-[400px] [font-family:'Inter',Helvetica] font-extrabold text-black text-4xl text-center tracking-[0] leading-[normal]">
          Sample Profiles of Industry Mentors
        </p>
      </div>
    </>
  );
};

 