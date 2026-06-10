
// import { Moon, Sun } from "lucide-react";
// import { useEffect, useState } from "react";
// import {cn} from "@/lib/utils";

// export const ThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect (() =>{
//     const storedTheme = localStorage.getItem("theme")
//     if (storedTheme === "dark"){
//       setIsDarkMode(true)
//       document.documentElement.classList.add("dark");
//     }
//     else{
//       localStorage.setItem("theme", "light");
//       setIsDarkMode(false);

//     }
//   }, [])



//   const toggleTheme = () => {
//     if (isDarkMode) {
//     document.documentElement.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//       setIsDarkMode(false);
//   }else{
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//     setIsDarkMode(true);
//   }
// };
//   return (
//   //  <button onClick = {toggleTheme} className = {cn(
//   //   "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300" ,
//   //   "focus:outlin-hidden"
//   //   )} 
//   //   >
    
//   //   {isDarkMode ? (
//   //   <Sun className="h-6 w-6 text-yellow-300" />
//   //   ):(
//   //     <Moon className = "h-6 w-6 text-blue-900" />

//   //   )}
//   //  </button>
//   <button
//   onClick={toggleTheme}
//   className={cn(
//     "fixed max-sm:hidden top-5 right-5 z-50",
//     "p-3 rounded-full",
//     "backdrop-blur-md",
//     "bg-slate-900/60",
//     "border border-slate-700",
//     "hover:scale-110",
//     "transition-all duration-300",
//     "focus:outline-none"
//   )}
// >
//   {isDarkMode ? (
//     <Sun className="h-5 w-5 text-yellow-300" />
//   ) : (
//     <Moon className="h-5 w-5 text-slate-300" />
//   )}
// </button>
//   );
// };

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 right-5 z-50",
        "p-3 rounded-full",
        "backdrop-blur-md",
        "border border-slate-700",
        "bg-slate-900/60",
        "hover:scale-110",
        "transition-all duration-300",
        "focus:outline-none"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700" />
      )}
    </button>
  );
};