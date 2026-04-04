"use client";

import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import { useState } from "react";
import AiVideo from "../components/AiVideo";
import  Animation from "../components/Animation"
import Website from "../components/Website";
import Ads from "../components/Ads";
import Graphic from "../components/Graphic";
import Reels from "../components/Reels";
import { ChevronsDown, ListFilter, X } from "lucide-react";
import Bni from "../components/Bni";




const DigitalPaajiHero = () => {
  const services = [
    "AI Videos",
    "Reels Creation",
    "Animation",
    "Graphic",
    "Website UI/UX",
    // "Menu Cards",
    "BNI"
  ];

  const [select, setSelect] = useState("");
  const [toggleCat,setToggleCate] = useState(false)
 const portfolioImages = [
    "/Images/portfolio/ai/cover.gif",
    "/Images/portfolio/website/cover.webp",
    "/Images/portfolio/reels/cover.gif",
    "/Images/portfolio/graphic/food/3.webp",
    "/Images/portfolio/animation/cover.gif",
    "/Images/portfolio/graphic/label/cover.webp",
  ];



  return (
  
    <div className="flex w-full bg-[#050505] min-h-screen font-sans relative no-scrollbar overflow-hidden">
      
     <div className="absolute  top-1 md:top-5 right-1 md:right-5  z-[99]">
      <img src="/Images/bnilogo.png" alt="BNI " className=" h-10 md:h-20 w-full"  />
     </div>
        <div className="absolute inset-0 z-0 flex items-center opacity-30 pointer-events-none">
            <motion.div 
              className="flex whitespace-nowrap gap-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {portfolioImages.map((src, index) => (
                <div 
                  key={index} 
                  className="relative w-[300px] h-[450px] md:w-[450px] md:h-[600px] flex-shrink-0 rounded-2xl overflow-hidden border border-white/10"
                >
                  <img
                    src={src}
                    alt={`Portfolio ${index}`}
                    
                    className="object-cover  h-full  grayscale-50  "
                  />
                </div>
              ))}
            </motion.div>
       </div>


      <div 
        className={`relative z-10 w-full px-2 md:px-12  py-4 md:pt-12 flex flex-col md:flex-row justify-center min-h-screen  md:gap-8 transition-all duration-700 ease-in-out ${
          select ? "items-start " : "items-center "
        }`}
      >
        

        <motion.div
          layout
          className={`flex flex-col transition-all duration-700 ease-in-out h-fit ${
            select 
              ? "w-full md:w-[25%] items-center md:items-start md:sticky md:top-12 z-20" 
              : "w-full max-w-6xl items-center"
          }`}
        >
     
          <motion.div
            layout
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`mb-6 md:mb-10 w-48 transition-all duration-500 ${
              select ? " hidden md:flex mb-0 md:w-56 md:mb-12" : " md:w-64 lg:w-80 mx-auto md:mb-10"
            }`}
          >
            <Link href="/" className="block hover:opacity-80 transition-opacity">
              <img
                src="/Images/logoWhite.webp"
                alt="Digital Paaji Logo"
                width={2648}
                height={984}
                className="w-full h-auto"
                priority
              />
            </Link>
          </motion.div>

      
    
         <motion.h3
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            onClick={()=>setShowExpertise(true)}
            className={` cursor-pointer  uppercase font-medium  text-[#cc5f4d]  transition-all ${
              select ? " hidden md:flex mb-2 text-center md:text-left" : "mb-2 md:mb-14 text-center"
            }`}
          >
            Our Expertise
          </motion.h3>

         

    <motion.div
            layout
            className={`flex flex-wrap px-6 gap-2 md:gap-4 w-full ${
              select ? " hidden  md:flex   flex-row md:flex-col justify-center md:justify-start" : "flex-row justify-center items-center md:gap-6"
            }`}
          >
            {services.map((service, index) => (
              <motion.div
                layout
                key={service}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{
                  y: -5,
                  backgroundColor: select === service ? "rgba(204, 95, 77, 0.2)" : "rgba(255, 255, 255, 0.08)",
                  borderColor: "#cc5f4d",
                }}
                className={`transition-all duration-300 group cursor-pointer text-center border backdrop-blur-xl ${
                  select === service 
                    ? "bg-[#cc5f4d]/20 border-[#cc5f4d]" 
                    : "bg-white/[0.03] border-white/10"
                } ${
                  select ? "w-auto md:w-full px-6 py-4 md:px-6" : "w-full md:w-auto px-8 py-3 md:px-10 md:py-6"
                }`}
                onClick={() => setSelect(select === service ? "" : service)}
              >
                <span className="text-sm md:text-md font-medium uppercase tracking-[0.2em] text-gray-200 group-hover:text-white transition-colors">
                  {service}
                </span>
              </motion.div>
            ))}
          </motion.div> 

{select && toggleCat && <motion.div
            layout
            className={`   fixed top-0 left-0   flex flex-col justify-center h-screen px-10 bg-black/40 gap-2 w-full `}
          >
            {services.map((service, index) => (
              <motion.div
                layout
                key={service}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{
                  y: -5,
                  backgroundColor: select === service ? "rgba(204, 95, 77, 0.2)" : "rgba(255, 255, 255, 0.08)",
                  borderColor: "#cc5f4d",
                }}
                className={`transition-all duration-300 group cursor-pointer text-center border backdrop-blur-xl ${
                  select === service 
                    ? "bg-[#cc5f4d]/20 border-[#cc5f4d]" 
                    : "bg-white/[0.03] border-white/10"
                } ${
                  select ? "w-auto md:w-full px-6 py-4 md:px-6" : "w-full md:w-auto px-8 py-5 md:px-10 md:py-6"
                }`}
                onClick={() => {setSelect(service),setToggleCate(false)}}
              >
                <span className="text-sm md:text-md font-medium uppercase tracking-[0.2em] text-gray-200 group-hover:text-white transition-colors">
                  {service}
                </span>
              </motion.div>
            ))}
          </motion.div>

}


        </motion.div>

    
        <AnimatePresence mode="wait">
          {select && (
            <motion.div
              key={select}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full md:w-[100%]   flex flex-col items-center justify-start bg-white/[0.02] border border-white/5 rounded-2xl p-4  backdrop-blur-md"
            >
              
              <div className="w-full ">
                <div className="mb-4 flex justify-between items-center">
                <p className=" text-xl text-white cursor-pointer md:hidden  " onClick={()=>setSelect("")}><ChevronsDown className="rotate-90" /></p>
                <h2 className=" text-xl md:text-3xl  font-bold text-white ">{select}</h2>
               </div>
                <div className="w-full h-px mb-2 bg-white/10 md:mb-8"></div>
              </div>

              {select === "AI Videos" && <AiVideo />}
              {select === "Animation" && <Animation />}
              {select === "Website UI/UX" && <Website />}
              {select === "Menu Cards" && <Ads />}
              {select === "Graphic" && <Graphic />}
              {select === "BNI" && <Bni />}
    
              {select === "Reels Creation" && <Reels /> }
         
            </motion.div>
          )}
        </AnimatePresence>
        {select && 
<div className="md:hidden fixed bottom-3 right-3 z-50  cursor-pointer bg-[#cc5f4d] p-2 rounded-full" onClick={()=>setToggleCate(!toggleCat)}>
  {!toggleCat? 
<ListFilter className="text-[10px]" size={17} color="white" /> :
<X  className="text-[10px]" size={17} color="white" />
}
</div>
}
      </div>
    </div>
  );
};

export default DigitalPaajiHero;