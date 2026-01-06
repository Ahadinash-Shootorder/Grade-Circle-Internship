import React, { useEffect, useState } from "react";

export const RealStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = React.useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let startX = 0;

    const touchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const touchEnd = (e) => {
      const diff = startX - e.changedTouches[0].clientX;

      if (diff > 50) {
        setActiveIndex((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      } else if (diff < -50) {
        setActiveIndex((prev) =>
          prev === 0 ? testimonials.length - 1 : prev - 1
        );
      }
    };

    slider.addEventListener("touchstart", touchStart);
    slider.addEventListener("touchend", touchEnd);

    return () => {
      slider.removeEventListener("touchstart", touchStart);
      slider.removeEventListener("touchend", touchEnd);
    };
  }, []);

  const mentors = [
    {
      name: "Nobin Mattam",
      title: "Talent Acquisition Lead, TESCO",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-5.png",
      badge: "TESCO",
      badgeImage: "./Tesco.png",
    },
    {
      name: "Satyanshu Singh",
      title: "Filmfare Award Winner & Netflix Fame Writer and Director",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-6.png",
      badge: "NETFLIX",
      badgeImage: "./Netfilx.png",
    },
  ];

  const desktopMentors = [
    {
      name: "Rahul Shubham",
      title: "Senior Manager, UX, HDFC",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-4.png",
      badgeImage: "https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-26.svg",
    },
    {
      name: "Nobin Mattam",
      title: "Talent Acquisition Lead, TESCO",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-5.png",
      badgeImage: "https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-41.svg",
    },
    {
      name: "Satyanshu Singh",
      title: "Filmfare Award Winner & Netflix Fame Writer and Director",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-6.png",
      badgeImage: "https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-42.svg",
    },
    {
      name: "Rachita Rungta",
      title: "Senior Data Scientist, Unilever",
      image: "https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-7.png",
      badgeImage: "https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-43.svg",
    },
  ];

  const testimonials = [
    {
      heading: "Learning by Doing",
      quote:
        "Instead of just theory, we worked on realistic case studies, applying our learnings like in real life.",
      author: "Sara",
      school: "Prometheus School, Noida",
    },
    {
      heading: "Real-World Experience",
      quote:
        "The mentorship program gave me insights into corporate life that no classroom could provide.",
      author: "Aahana",
      school: "Lotus Valley International School, Noida",
    },
    {
      heading: "Career Clarity",
      quote:
        "I now understand what different roles entail and can make informed career decisions.",
      author: "Rahul",
      school: "Delhi Public School, Gurgaon",
    },
    {
      heading: "Skill Development",
      quote:
        "The hands-on projects helped me develop practical skills that will be valuable in my future career.",
      author: "Priya",
      school: "Modern School, Delhi",
    },
    {
      heading: "Industry Connections",
      quote:
        "Getting mentored by professionals from top companies opened doors I never knew existed.",
      author: "Arjun",
      school: "St. Xavier's School, Mumbai",
    },
  ];

  return (
    <section className="w-full">
      {/* Mobile Version */}
      <div className="block md:hidden w-full">
        {/* Sample Profiles Section */}
        <div className="bg-[#f7f7f7] px-4 py-8">
          <h2 className="font-['Inter',Helvetica] font-extrabold text-black text-2xl text-center mb-8">
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
                <h3 className="font-['Inter',Helvetica] font-extrabold text-[#122e6c] text-sm text-center mt-2">
                  {mentor.name}
                </h3>
                <p className="font-['Inter',Helvetica] font-normal text-[#122e6c] text-xs text-center">
                  {mentor.title}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="bg-[#122e6c] rounded-lg p-4 flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-white font-bold text-4xl">20+</div>
              <div className="text-white text-xs">
                UNIQUE INDUSTRIES/
                <br />
                FUNCTIONS
              </div>
            </div>
            <div className="text-white font-bold">FROM</div>
            <div className="text-center">
              <div className="text-white font-bold text-4xl">100+</div>
              <div className="text-white text-xs">MENTORS</div>
            </div>
          </div>

          <div className=" mt-9">
            {/* Quote Mark */}
            <div className="relative translate-y-8">
              <img
                src="./Blue_quote.jpg"
                alt="Quote"
                className="w-[42px] h-[42px] object-contain"
              />
            </div>

            {/* Testimonial Box */}
            <div className="border-2 border-[#122e6c] rounded-2xl p-6 shadow-sm bg-white">
              <p className="font-['Montserrat',Helvetica] font-normal text-xl leading-relaxed">
                <span className="font-semibold italic text-[#f36a1e]">
                  The continuity with one mentor for four weeks made it far more
                  engaging than any other program I've attended.
                </span>
                <span className="font-bold text-[#122e6c] text-lg">
                  {" "}
                  – Aahana,
                </span>
                <span className="text-black text-lg">
                  {" "}
                  Lotus Valley International School, Noida
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Real Stories Title */}
        <div className="px-4 py-8 bg-white">
          <h2 className="font-['Inter',Helvetica] font-extrabold text-[#0e416f] text-2xl text-center mb-6">
            Real Stories | Real Skills | Real Impact
          </h2>

          {/* Testimonial Card */}
          <div className="relative overflow-hidden">
            {/* Quote Mark - Fixed position for all cards */}
            <div className="absolute -translate-y-4 -left-4 bg-white h-[80px] w-[80px] flex items-center justify-center pt-4 z-40">
              <div className="relative">
                <img
                  src="./quote.png"
                  alt="Quote"
                  className="w-[42px] h-[42px] object-contain"
                />
              </div>
            </div>

            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out touch-pan-x"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full relative">
                  <div className="border border-[#ef7f1a] rounded-lg p-6 mt-6 pt-12 bg-white shadow-sm">
                    <div className="text-black text-lg mb-2 font-semibold">
                      {testimonial.heading}
                    </div>
                    <p className="font-['Montserrat',Helvetica] font-semibold italic text-[#122e6c] text-lg leading-relaxed mb-4">
                      {testimonial.quote}
                    </p>
                    <p className="text-[#ef7f1a]">
                      <span className="font-bold">– {testimonial.author},</span>{" "}
                      {testimonial.school}
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
                  index === activeIndex ? "bg-[#122e6c]" : "bg-gray-300"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full">
        {/* Sample Profiles Section */}
        <div className="bg-[#f7f7f7] px-6 py-12">
          <h2 className="font-['Inter',Helvetica] font-extrabold text-black text-4xl text-center mb-12">
            Sample Profiles of Industry Mentors
          </h2>

          {/* Mentor Cards */}
          <div className="flex justify-center gap-8 mb-12">
            {mentors.map((mentor, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative mb-4">
                  <img
                    src={mentor.badgeImage}
                    alt={mentor.badge}
                    className="absolute -top-3 -left-4 w-20 h-12 rounded bg-white object-contain z-10"
                  />
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-40 h-40 rounded-full border-4 border-[#ef7f1a] object-cover"
                  />
                </div>
                <h3 className="font-['Inter',Helvetica] font-extrabold text-[#122e6c] text-lg text-center">
                  {mentor.name}
                </h3>
                <p className="font-['Inter',Helvetica] font-normal text-[#122e6c] text-sm text-center leading-tight">
                  {mentor.title}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="bg-[#122e6c] rounded-lg p-6 flex items-center justify-center gap-8 max-w-md mx-auto mb-12">
            <div className="text-center">
              <div className="text-[#ef7f1a] font-bold text-4xl">20+</div>
              <div className="text-white text-sm">
                UNIQUE INDUSTRIES/
                <br />
                FUNCTIONS
              </div>
            </div>
            <div className="text-white font-bold text-4xl">FROM</div>
            <div className="text-center">
              <div className="text-white font-bold text-4xl">100+</div>
              <div className="text-white text-sm">MENTORS</div>
            </div>
          </div>

          {/* Featured Testimonial */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="absolute -top-6 -left-4 bg-[#f7f7f7] h-[60px] w-[60px] flex items-center justify-center z-10">
              <span className="text-[#122e6c] text-[130px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-bold leading-none">
                “
              </span>
            </div>

            <div className="border-2 border-[#122e6c] rounded-2xl p-8 pt-12 shadow-sm bg-white">
              <p className="font-['Montserrat',Helvetica] font-normal text-xl leading-relaxed">
                <span className="font-semibold italic text-[#f36a1e]">
                  The continuity with one mentor for four weeks made it far more
                  engaging than any other program I've attended.
                </span>
                <span className="font-bold text-[#122e6c] text-lg">
                  {" "}
                  – Aahana,
                </span>
                <span className="text-black text-lg">
                  {" "}
                  Lotus Valley International School, Noida
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Real Stories Title */}
        <div className="px-6 py-12 bg-white">
          <h2 className="font-['Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center mb-8">
            Real Stories | Real Skills | Real Impact
          </h2>

          {/* Testimonial Card */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Quote Mark */}
              <div className="absolute -top-6 -left-4 bg-white h-[80px] w-[80px] flex items-center justify-center z-10">
                <span className="text-[#ef7f1a] text-[120px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] leading-none">
                  “
                </span>
              </div>

              <div className="border-2 border-[#ef7f1a] rounded-2xl p-8 pt-16 bg-white shadow-sm">
                <div className="text-black text-2xl mb-4 font-semibold">
                  Learning by Doing
                </div>
                <p className="font-['Montserrat',Helvetica] font-semibold italic text-[#122e6c] text-xl leading-relaxed mb-6">
                  Instead of just theory, we worked on realistic case studies,
                  applying our learnings like in real life.
                </p>
                <p className="text-[#ef7f1a] text-lg">
                  <span className="font-bold">– Sara,</span> Prometheus School,
                  Noida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full bg-white">
        <div className="max-w-[1340px] mx-auto px-[50px] py-16">
          {/* Sample Profiles Title */}
          <h2 className="font-['Inter',Helvetica] font-extrabold text-black text-4xl text-center mb-12">
            Sample Profiles of Industry Mentors
          </h2>

          {/* Mentors Section */}
          <div className="bg-[#f7f7f7] rounded-[20px] p-12 mb-16">
            <div className="flex justify-center gap-16 mb-12">
              {desktopMentors.map((mentor, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <img
                      src={mentor.badgeImage}
                      alt={`${mentor.name} badge`}
                      className="absolute -top-2 -left-4 w-[79px] h-[71px] object-cover z-10"
                    />
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-[151px] h-[151px] object-cover"
                    />
                  </div>
                  <h3 className="font-['Inter',Helvetica] font-extrabold text-[#122e6c] text-[15px] text-center whitespace-nowrap">
                    {mentor.name}
                  </h3>
                  <p className="font-['Inter',Helvetica] font-normal text-[#122e6c] text-[15px] text-center w-[200px] whitespace-normal break-words">
                    {mentor.title.split(", ").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < mentor.title.split(", ").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats Banner */}
            <div className="relative bg-[#122e6c] rounded-[20px] h-[140px] flex items-center justify-center">
              <div className="flex items-center gap-12">
                <img
                  src="https://c.animaapp.com/mjmwrwbp4K97wU/img/20-unique-industries.png"
                  alt="20+ unique industries"
                  className="w-[269px] h-[149px] object-cover"
                />
                <div className="bg-white px-4 py-2 rotate-[-90deg]">
                  <div className="font-['Inter',Helvetica] font-normal text-black text-2xl">
                    FROM
                  </div>
                </div>
                <img
                  src="https://c.animaapp.com/mjmwrwbp4K97wU/img/100-mentors.png"
                  alt="100+ mentors"
                  className="w-[269px] h-[149px] object-cover"
                />
              </div>
            </div>
            <div className="relative mx-auto mt-12 w-full max-w-[745px] border border-[#ef7f1a] rounded-[20px] p-10 bg-white">
              {/* Quote image */}
              <img
                src="./Blue_quote.jpg"
                alt="quote"
                className="absolute -top-6 -left-6 w-[60px] h-[60px]"
              />

              <p className="font-['Montserrat',Helvetica] font-semibold italic text-[#f36a1e] text-2xl leading-relaxed mb-4">
                The continuity with one mentor for four weeks made it far more
                engaging than any other program I've attended.
              </p>

              <p className="text-[#122e6c] text-xl">
                <span className="font-bold">– Aahana,</span>{" "}
                <span className="text-black">
                  Lotus Valley International School, Noida
                </span>
              </p>
            </div>
          </div>

          {/* Real Stories Section */}
          <h2 className="font-['Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center mb-12">
            Real Stories | Real Skills | Real Impact
          </h2>

          <div className="grid grid-cols-2 gap-10">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="relative border border-[#ef7f1a] rounded-[20px] p-10 bg-white"
              >
                {/* Quote image */}
                <img
                  src="./quote.png"
                  alt="quote"
                  className="absolute -top-6 -left-6 w-[80px] h-[80px] bg-white"
                />

                {/* Heading + line */}
                <div className="flex items-center gap-6 mb-4 px-6">
                  <h3 className="text-black text-xl ">{item.heading}</h3>
                  {/* <div className="flex-1 h-[1px] bg-[#ef7f1a]" /> */}
                </div>

                {/* Quote text */}
                <p className="font-['Montserrat',Helvetica] font-semibold italic text-[#122e6c] text-lg leading-relaxed mb-4 px-6">
                  {item.quote}
                </p>

                {/* Author */}
                <p className="text-[#ef7f1a] text-lg px-6">
                  <span className="font-bold">– {item.author},</span>{" "}
                  {item.school}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealStories;
