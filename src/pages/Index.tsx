import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { FoundedByAlumni } from '../components/FoundedByAlumni';
import { ProgramOverview } from '../components/ProgramOverview';
import { CareerStreams } from '../components/CareerStreams';
import { Testimonials } from '../components/Testimonials';
import { ProgramStructure } from '../components/ProgramStructure';
import { ProgramDeliverables } from '../components/ProgramDeliverables';
import { FoundingTeam } from '../components/FoundingTeam';
import { RealStories } from '../components/RealStories';
import { TrustedSchools } from '../components/TrustedSchools';
import { StudentExperiences } from '../components/StudentExperiences';
import { SampleProjects } from '../components/SampleProjects';
import { Footer } from '../components/Footer';

const Index = () => {
  const currentUrl = typeof window !== 'undefined' ? window.location.origin : 'https://grade-circle.vercel.app/';

  return (
    <>
      <Helmet>
        <title>GradCircle - Professional Immersion Internship Program</title>
        <meta name="description" content="Join GradCircle's 4-week virtual internship program for grades 9-12 students. Work with industry mentors from Fortune-500 companies on real-world projects." />
        <meta name="author" content="GradCircle" />

        <meta property="og:title" content="GradCircle - Professional Immersion Internship Program" />
        <meta property="og:description" content="Join GradCircle's 4-week virtual internship program for grades 9-12 students. Work with industry mentors from Fortune-500 companies on real-world projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://c.animaapp.com/mjmwrwbp4K97wU/img/gradcircle--white-orange-logo--png-1.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GradCircle - Professional Immersion Internship Program" />
        <meta name="twitter:description" content="Join GradCircle's 4-week virtual internship program for grades 9-12 students. Work with industry mentors from Fortune-500 companies on real-world projects." />
        <meta name="twitter:image" content="https://c.animaapp.com/mjmwrwbp4K97wU/img/gradcircle--white-orange-logo--png-1.png" />
      </Helmet>

      <div className="relative min-h-screen w-full  overflow-x-hidden">
      
        <Header />
        <Hero />
        <FoundedByAlumni />
        <ProgramOverview />
        <CareerStreams />
        <Testimonials />
        <ProgramStructure />
        {/* <StudentExperiences /> */}
        <ProgramDeliverables />
        <FoundingTeam />
        <RealStories />
        <TrustedSchools />
        <SampleProjects />
        <Footer />
      </div>
    </>
  );
};

export default Index;
