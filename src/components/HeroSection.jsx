// // import {ArrowDown} from "lucide-react";

// // export const HeroSection = () => {
// //     return (
// //         <section 
// //         id = "hero"
// //         className=" relative min-h-screen flex flex-col items-center justify-center px-4"
// //         >
// //             <div className ="container max-w-4xl mx-auto text-center z-10">
// //                 <div className = "space-y-6">
// //                     <h1 className = "text-4xl md:text-6xl font-bold tracking-tight">
// //                          {/* <span className ="opacity-8 animate-fade=in"> Hi , I'm </span>  */}
// //                          <span> Hello,I'm </span>

// //                         <span className="text-primary opacity-0 animate-fade-in-delay-1">
// //                             {""}
// //                             Pakhi </span>
// //                         <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
// //                             {""}
// //                              Srivastava
// //                         </span>
// //                     </h1>
// //                     <p className="text-lg md:text-xl textx-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
// //                         Enthusiastic learner with an interest in data analytics, machine learning, and web development, seeking opportunities to learn, grow, and contribute. Skilled in Python, SQL, and JavaScript, with hands-on project experience and a focus on solving real-world problems.

// //                     </p>

// //                     <div className=" pt-4 opacity-0 animate-fade-in-delay-4">
// //                         <a href="#projects" className="cosmic-button">
// //                         View My Work 
// //                         </a>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce">
// //               <span className="text-sm text-muted foreground mb-2"> Scroll</span>
// //               <ArrowDown className="h-5 w-5 text-primary" />
// //             </div>
// //         </section>
// //     );
// // };

// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4"
//     >
//       <div className="container max-w-5xl mx-auto text-center z-10">
//         <div className="space-y-6">

//           {/* Profile Image */}
//           <img
//             src="/profile.jpg"
//             alt="Pakhi Srivastava"
//             className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto border-4 border-primary object-cover shadow-lg"
//           />

//           {/* Name */}
//           <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
//             <span>Hello, I'm </span>

//             <span className="text-primary opacity-0 animate-fade-in-delay-1">
//               Pakhi
//             </span>

//             <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
//               Srivastava
//             </span>
//           </h1>

//           {/* Role */}
//           <h2 className="text-2xl md:text-3xl font-semibold text-primary opacity-0 animate-fade-in-delay-2">
//             Data Analyst | AI Enthusiast | Frontend Developer
//           </h2>

//           {/* Description */}
//           <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
//             Computer Science undergraduate passionate about Data Analytics,
//             Artificial Intelligence, Machine Learning, and Full-Stack
//             Development. Experienced in building AI-powered applications,
//             real-time systems, and data-driven solutions using Python,
//             React, SQL, Machine Learning, and modern web technologies.
//           </p>

//           {/* Buttons */}
//           <div className="pt-6 flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-delay-4">

//             <a href="#projects" className="cosmic-button">
//               View My Work
//             </a>

//             <a
//               href="https://github.com/pakhisrivastava2122"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-3 rounded-full border border-primary hover:bg-primary/10 transition duration-300"
//             >
//               GitHub
//             </a>

//             <a
//               href="https://www.linkedin.com/in/pakhi-srivastava-06b43329b"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-3 rounded-full border border-primary hover:bg-primary/10 transition duration-300"
//             >
//               LinkedIn
//             </a>

//             <a
//               href="/Pakhi_Resume.pdf"
//               download
//               className="px-6 py-3 rounded-full border border-primary hover:bg-primary/10 transition duration-300"
//             >
//               Resume
//             </a>

//           </div>

//           {/* Stats */}
//           <div className="flex flex-wrap justify-center gap-10 pt-10">

//             <div>
//               <h3 className="text-3xl font-bold text-primary">250+</h3>
//               <p className="text-muted-foreground">
//                 LeetCode Problems
//               </p>
//             </div>

//             <div>
//               <h3 className="text-3xl font-bold text-primary">3+</h3>
//               <p className="text-muted-foreground">
//                 Major Projects
//               </p>
//             </div>

//             <div>
//               <h3 className="text-3xl font-bold text-primary">4</h3>
//               <p className="text-muted-foreground">
//                 Certifications
//               </p>
//             </div>

//           </div>

//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
//         <span className="text-sm text-muted-foreground mb-2">
//           Scroll Down
//         </span>

//         <ArrowDown className="h-5 w-5 text-primary" />
//       </div>
//     </section>
//   );
// };

import { ArrowDown } from "lucide-react";
import photo from "@/assets/photo.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* Profile Image */}
          {/* <img
            src="/PORTFOLIO/projects/photo.jpg"
            alt="Pakhi Srivastava"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto border-4 border-primary object-cover shadow-lg"
          /> */}
          {/* <img src={photo} alt="Profile"
          alt="Pakhi Srivastava"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto border-4 border-primary object-cover shadow-lg"
           /> */}
          <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-lg">
  <img
    src={photo}
    alt="Pakhi Srivastava"
    className="w-full h-full object-cover"
  />
</div>
          {/* Name */}
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            <span>Hello, I'm </span>

            <span className="text-primary">
              Pakhi
            </span>

            <span className="text-gradient ml-2">
              Srivastava
            </span>
          </h1>

          {/* Role */}
          {/* <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            Full Stack Developer | AI Enthusiast | Data Analyst
          </h2> */}
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-400">
  Full Stack Developer | AI Enthusiast | Data Analyst
</h2>

          {/* Description */}
          {/* <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"> */}
          <p className="text-slate-400 text-lg">
            Computer Science undergraduate passionate about Full-Stack Development,
            Artificial Intelligence, and Data Analytics. Experienced in building
            AI-powered applications, real-time systems, and data-driven solutions
            using Python, React, Node.js, SQL, and modern web technologies.
          </p>

          {/* Buttons */}
          <div className="pt-6 flex flex-wrap justify-center gap-4">

            <a href="#projects" className="cosmic-button">
              View My Work
            </a>

            <a
              href="https://github.com/pakhisrivastava2122"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-primary hover:bg-primary/10 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/pakhi-srivastava-06b43329b"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-primary hover:bg-primary/10 transition"
            >
              LinkedIn
            </a>

            <a
              href="/PORTFOLIO/projects/Pakhi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-primary hover:bg-primary/10 transition"
            >
              Resume
            </a>

          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10 pt-10">

            <div>
              <h3 className="text-3xl font-bold text-primary">250+</h3>
              <p className="text-muted-foreground">
                LeetCode Problems
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">3+</h3>
              <p className="text-muted-foreground">
                Major Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">4</h3>
              <p className="text-muted-foreground">
                Certifications
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          Scroll Down
        </span>

        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};