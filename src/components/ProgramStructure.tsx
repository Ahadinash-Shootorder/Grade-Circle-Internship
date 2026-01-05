// import React from 'react';

// export const ProgramStructure = () => {
//   const coreComponents = [
//     "Live mentor sessions every week",
//     "Small group format (5-7 students)",
//     "Deep-dive into specific career streams",
//     "Project-based learning",
//     "Personalized career pathway mapping"
//   ];

//   return (
//     <>
//       {/* Mobile Version */}
//       <div className="block md:hidden w-full bg-white py-8 px-4">

//         {/* Program Structure Title */}
//         <div className="mb-6">
//           <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[38px] -mb-3 leading-tight">
//             Program
//           </h2>
//           <div className="[-webkit-text-stroke:1.2px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-[52px]">
//             Structure
//           </div>
//         </div>

//         {/* Core Components Button */}
//         <div className="mb-6">
//           <div className="bg-[#122e6c] rounded-full py-3 px-6 inline-block">
//             <span className="[font-family:'Inter',Helvetica] font-bold text-white text-lg">
//               Core Components
//             </span>
//           </div>
//         </div>

//         {/* Checklist */}
//         <div className="space-y-4">
//           {coreComponents.map((item, index) => (
//             <div key={index} className="flex items-center gap-3">
//               <div className="w-5 h-5 rounded-full bg-[#ec9950] flex items-center justify-center flex-shrink-0">
//                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <span className="[font-family:'Inter',Helvetica] font-light text-black text-base">
//                 {item}
//               </span>
//             </div>
//           ))}
//         </div>
//       {/* Another Testimonial at top */}
//         <div className="relative mt-9">
//           {/* Quote Mark */}
//           <div className="absolute -top-6 bg-white h-[40px] -left-4 text-[#122e6c] text-[130px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-bold leading-none  ml-1">
//              “
//           </div>
          
//           {/* Testimonial Box */}
//           <div className="border-2 border-[#122e6c] rounded-2xl p-6 shadow-sm bg-white">
//             <p className="[font-family:'Montserrat',Helvetica] font-normal text-xl leading-relaxed">
//               <span className="font-semibold italic text-[#f36a1e]">
//                 We were pushed to go into every detail. The accountability and depth made it stand out from any school project
//               </span>
//               <span className="font-bold text-[#122e6c] text-lg"> – Riva,</span>
//               <span className="text-black text-lg"> Kanakia International School, Mumbai</span>
//             </p>
//           </div>
//         </div>
//       </div>
      

//       {/* Tablet Version */}
//       <div className="hidden md:block lg:hidden w-full bg-white py-12 px-6">
//         {/* Testimonial */}
//         <div className="max-w-2xl mx-auto mb-12">
//           <div className="relative">
//             {/* Quote Mark */}
//             <div className="text-[#122e6c] text-[150px] [font-family:'Kannada_Sangam_MN-Regular',Helvetica] font-normal leading-none -mb-16 ml-4">
//               "
//             </div>
            
//             {/* Testimonial Box */}
//             <div className="border-2 border-[#122e6c] rounded-3xl p-8 ml-8 bg-white">
//               <p className="[font-family:'Montserrat',Helvetica] font-normal text-transparent text-2xl leading-relaxed">
//                 <span className="font-semibold italic text-[#f36a1e]">
//                   Instead of just theory, we worked on realistic case studies, applying our learnings like in real life.
//                 </span>
//                 <span className="font-bold text-[#122e6c] text-xl"> – Sara,</span>
//                 <span className="text-black text-xl"> Prometheus School, Noida</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Program Structure Title */}
//         <div className="text-center mb-8">
//           <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-5xl leading-tight">
//             Program
//           </h2>
//           <div className="[-webkit-text-stroke:3px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-6xl">
//             Structure
//           </div>
//         </div>

//         {/* Core Components */}
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-[#122e6c] rounded-full py-4 px-8 inline-block mb-8">
//             <span className="[font-family:'Inter',Helvetica] font-bold text-white text-2xl">
//               Core Components
//             </span>
//           </div>

//           {/* Checklist */}
//           <div className="space-y-6">
//             {coreComponents.map((item, index) => (
//               <div key={index} className="flex items-center gap-4">
//                 <div className="w-8 h-8 rounded-full bg-[#ef7f1a] flex items-center justify-center flex-shrink-0">
//                   <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <span className="[font-family:'Inter',Helvetica] font-light text-black text-xl">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Desktop Version - Original */}
//       <div className="hidden lg:block relative">
//         {/* <div className="absolute top-[5240px] left-[-5px] w-[1440px] h-[932px] bg-[#f7f7f7]" /> */}

//         {/* <p className="absolute top-[2948px] left-[354px] [font-family:'Inter',Helvetica] font-bold text-[#ef7f1a] text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
//           100+ Mentors | 20+ Career Pathways
//         </p> */}

//         <div className="left-[54px] relative [font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[74px] text-center tracking-[0] leading-[normal]">
//           Program
//         </div>
//         <div className="relative left-[47px] [-webkit-text-stroke:3px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-9xl text-center tracking-[0] leading-[normal]">
//           Structure
//         </div>

//         <div className="relative top-[24px] left-[66px] w-[387px] h-[102px] bg-[#122e6c] rounded-[50px] flex items-center justify-center">

//         <div className=" left-24 [font-family:'Inter',Helvetica] flex justify-center items-center font-bold text-white text-4xl text-center tracking-[0] leading-[normal]">
//           Core Components
//         </div>
//         </div>

//         <p className="relative top-[38px] left-32 w-[560px] [font-family:'Inter',Helvetica] font-light text-black text-2xl tracking-[0] leading-[50px]">
//           <img className="top-[px] left-[81px] relative w-[30px] h-15" alt="Check mark" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png" />Live mentor sessions every week
//           <br />
//           Small group format (5-7 students)
//           <br />
//           Deep-dive into specific career streams
//           <br />
//           Project-based learning
//           <br />
//           Personalized career pathway mapping
//         </p>

        
//         <img className="top-[3910px] left-[81px] relative w-[30px] h-15" alt="Check mark" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png" />
//         <img className="top-[3962px] left-[81px] relative w-[30px] h-15" alt="Check mark" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png" />
//         <img className="top-[4011px] left-[81px] relative w-[30px] h-15" alt="Check mark" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png" />
//         <img className="top-[4061px] left-[81px] relative w-[30px] h-15" alt="Check mark" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png" />

//         <div className="relative top-[33px] left-[789px] w-[873px] h-[878px] bg-white rounded-[436.5px/439px] border-[20px] border-solid border-[#f36a1e]" />

//         <img className="relative top-[px] border rounded-l-full left-[843px] w-[697px] h-[775px] bg-cover object-cover" alt="Ellipse" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-3.png" />

        
//       </div>
//     </>
//   );
// };



// export function ProgramStructure() {
//   return (
//     <section className="w-full bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT */}
//         <div>
//           <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-7xl leading-tight">
//             Program
//           </h2>
//           <h2 className="[-webkit-text-stroke:2px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-9xl text-center tracking-[0] leading-[normal]">
//             Structure
//           </h2>

//           <div className="mt-8">
//             <span className="inline-block bg-[#183b73] text-white px-8 py-3 rounded-full text-lg font-semibold">
//               Core Components
//             </span>
//           </div>

//           <ul className="mt-8 space-y-4 text-lg text-gray-800">
//             {[
//               "Live mentor sessions every week",
//               "Small group format (5–7 students)",
//               "Deep-dive into specific career streams",
//               "Project-based learning",
//               "Personalized career pathway mapping",
//             ].map((item) => (
//               <li key={item} className="flex items-center gap-3">
//                 <span className="w-5 h-5 bg-[#f37b21] text-white flex items-center justify-center rounded-full text-sm">✓</span>
//                 {item}
//               </li>
//             ))}
//           </ul>

//           {/* QUOTE BOX */}
//           <div className="mt-12 border-2 border-[#dbe3f0] rounded-xl p-6 relative">
//             <span className="absolute -top-7 left-3 [font-family:'Kannada_Sangam_MN-Regular',Helvetica] text-[#183b73] text-9xl">“</span>
//             <p className="text-[#f37b21] text-lg leading-relaxed">
//               We were pushed to go into every detail. The accountability and depth
//               made it stand out from any school project
//             </p>
//             <p className="mt-4 font-semibold text-[#183b73]">
//               — Riva, Kanakia International School, Mumbai
//             </p>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//        <div className="relative hidden lg:block">

//   {/* CIRCLE IMAGE */}
//   <div className="absolute right-[-180px] top-1/2 -translate-y-1/2
//     w-[680px] h-[680px] rounded-full overflow-hidden">

//     <img
//       src="https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-3.png"
//       className="w-full h-full object-cover"
//     />
//   </div>

//   {/* ORANGE ARC */}
//   <div className="absolute right-[-220px] top-1/2 -translate-y-1/2
//     w-[740px] h-[740px] rounded-full
//     border-[14px] border-[#ef7f1a]
//     border-t-transparent border-l-transparent" />

// </div>

//       </div>
//     </section>
//   );
// }



export function ProgramStructure() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6
        grid grid-cols-1 lg:grid-cols-2
        gap-10 lg:gap-16 items-center">

        {/* LEFT */}
        <div>
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f]
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Program
          </h2>

          <h2 className="[-webkit-text-stroke:2px_#ef7f1a]
            [font-family:'Inter',Helvetica] font-bold text-transparent
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl
            text-left sm:text-center lg:text-left tracking-[0] leading-[normal]">
            Structure
          </h2>

          <div className="mt-6 sm:mt-8">
            <span className="inline-block bg-[#183b73] text-white
              px-6 sm:px-8 py-2 sm:py-3 rounded-full
              text-base sm:text-lg font-semibold">
              Core Components
            </span>
          </div>

          <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4
            text-base sm:text-lg text-gray-800">
            {[
              "Live mentor sessions every week",
              "Small group format (5–7 students)",
              "Deep-dive into specific career streams",
              "Project-based learning",
              "Personalized career pathway mapping",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="w-5 h-5 bg-[#f37b21] text-white
                  flex items-center justify-center rounded-full text-sm">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* QUOTE BOX */}
          <div className="mt-10 sm:mt-12 border-2 border-[#dbe3f0]
            rounded-xl p-4 sm:p-6 relative">

            <span className="absolute -top-6 sm:-top-7 left-2 sm:left-3
              [font-family:'Kannada_Sangam_MN-Regular',Helvetica]
              text-[#183b73]
              text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
              “
            </span>

            <p className="text-[#f37b21]
              text-base sm:text-lg leading-relaxed">
              We were pushed to go into every detail. The accountability and depth
              made it stand out from any school project
            </p>

            <p className="mt-3 sm:mt-4 font-semibold text-[#183b73]
              text-sm sm:text-base">
              — Riva, Kanakia International School, Mumbai
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative hidden lg:block">

          {/* CIRCLE IMAGE */}
          <div className="absolute right-[-120px] xl:right-[-180px]
            top-1/2 -translate-y-1/2
            w-[520px] h-[520px] xl:w-[680px] xl:h-[680px]
            rounded-full overflow-hidden">

            <img
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/ellipse-3.png"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ORANGE ARC */}
          <div className="absolute right-[-150px] xl:right-[-220px]
            top-1/2 -translate-y-1/2
            w-[580px] h-[580px] xl:w-[740px] xl:h-[740px]
            rounded-full border-[14px] border-[#ef7f1a]
            border-t-transparent border-l-transparent" />
        </div>
      </div>
    </section>
  );
}
