export function SampleProjects() {
  const projects = [
    {
      title: "Market Expansion",
      text: "Develop a strategy for an Indian electric scooter brand to enter Southeast Asia.",
    },
    {
      title: "Equity Research",
      text: "Analyze a listed company and recommend a buy, hold, or sell rating with supporting valuation.",
    },
    {
      title: "Healthcare Innovation",
      text: "Create a market-entry plan for a next-gen prenatal screening test in India.",
    },
    {
      title: "Litigation Strategy",
      text: "Design a courtroom advocacy plan for a public interest case.",
    },
    {
      title: "UX Redesign",
      text: "Improve user experience for a wearable fitness device through interface and feature innovation.",
    },
    {
      title: "AI for Social Good",
      text: "Build a fake news detection and sentiment analysis system for social media.",
    },
    {
      title: "Investigative Journalism",
      text: "Uncover the truth behind “healthy” food labels through data and regulatory analysis.",
    },
    {
      title: "Policy Review",
      text: "Evaluate the effectiveness of a government employment scheme introduced 5 years ago.",
    },
  ];

  return (
    <section className="w-full py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">

        {/* Desktop Header */}
        <div className="hidden md:block border border-[#183b73] rounded-xl p-8">
          <h2 className="text-[#183b73] text-3xl font-bold mb-4 relative -top-14 bg-white w-[260px] px-4 left-2">
            Sample Projects
          </h2>
          <p className="text-2xl mb-3 relative -top-10">
            Below are examples of real-world problem statements students have
            tackled, fostering creativity, critical thinking, and
            industry-relevant skills.
          </p>

          <ul className="space-y-4">
            {projects.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1 w-6 h-6 bg-[#ef7f1a] text-white flex items-center justify-center rounded-full text-sm">
                  ✓
                </span>
                <p className="text-lg">
                  <span className="font-bold">{item.title}:</span> {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden">
          <h2 className="text-[#183b73] text-3xl font-bold mb-4">
            Sample Projects
          </h2>
          <p className="text-base mb-6">
            Below are examples of real-world problem statements students have
            tackled, fostering creativity, critical thinking, and
            industry-relevant skills.
          </p>

          <div className="space-y-6">
            {projects.map((item, i) => (
              <div key={i}>
                <p className="text-[#ef7f1a] font-semibold mb-1">
                  {item.title}:
                </p>
                <br />
                <p className="text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
