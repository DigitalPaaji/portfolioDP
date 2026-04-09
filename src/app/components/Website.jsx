"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, StepBack, StepForward, X } from 'lucide-react';

const Website = () => {
const data = {
    id: 6,
    category: "Website Design UI/UX",
    coverImg: "/Images/portfolio/website/cover.webp",
    gallery: [
      { 
        thumb: "/Images/portfolio/website/m.webp", // Usually a cropped/smaller version
       full: "/Images/digimagnifiko.pdf",
  type: "pdf"
        // full: "/Images/portfolio/website/1.webp"   // The full high-res design
      },
        { 
        thumb: "/Images/portfolio/website/sr.webp", 
       full: "/Images/sr.pdf",
  type: "pdf"
        // full: "/Images/portfolio/website/13.webp" 
      },
   { 
        thumb: "/Images/portfolio/website/dp.webp", 
       full: "/Images/dp.pdf",
  type: "pdf"
        // full: "/Images/portfolio/website/5.webp" 
      },
      
      
      
      { 
        thumb: "/Images/portfolio/website/begum.webp", 
       full: "/Images/begum.pdf",
  type: "pdf"
        // full: "/Images/portfolio/website/13.webp" 
      },
   { 
        thumb: "/Images/portfolio/website/dpa.webp", 
       full: "/Images/dpa.pdf",
  type: "pdf"
        // full: "/Images/portfolio/website/5.webp" 
      },
            { 
        thumb: "/Images/portfolio/website/rp.webp", 
       full: "/Images/rp.pdf",
  type: "pdf"
        // full: "/Images/portfolio/website/10.webp" 
      },
      { 
        thumb: "/Images/portfolio/website/f.webp", 
       full: "/Images/fleet.pdf",
  type: "pdf"
        // full: "/Images/portfolio/website/11.webp" 
      },
            { 
        thumb: "/Images/portfolio/website/sms.webp", 
       full: "/Images/sms.pdf",
  type: "pdf"
        // full: "/Images/portfolio/website/7.webp" 
      },
      { 
        thumb: "/Images/portfolio/website/p.webp", 
       full: "/Images/p.pdf",
  type: "pdf"
        // full: "/Images/portfolio/website/9.webp" 
      },   
      { 
        thumb: "/Images/portfolio/website/c.webp", 
       full: "/Images/c.pdf",
  type: "pdf"
        // full: "/Images/portfolio/website/12.webp" 
      },      { 
        thumb: "/Images/portfolio/website/hammer.webp", 
       full: "/Images/hammer.pdf",
  type: "pdf"
        // full: "/Images/portfolio/website/4.webp" 
      },

          { 
        thumb: "/Images/portfolio/website/k.webp", 
       full: "/Images/k.pdf",
  type: "pdf"
        // full: "/Images/portfolio/website/3.webp" 
      },

  //     { 
  //       thumb: "/Images/portfolio/website/2.webp", 
  //     //  full: "/Images/fleet.pdf",
  // type: "pdf",
  //       full: "/Images/portfolio/website/2.webp" 
  //     },

  //     { 
  //       thumb: "/Images/portfolio/website/6.webp", 
  //     //  full: "/Images/fleet.pdf",
  // type: "pdf",
  //       full: "/Images/portfolio/website/6.webp" 
  //     },

    ],
  };
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage !== null ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev + 1) % data.gallery.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev - 1 + data.gallery.length) % data.gallery.length);
  };

  return (
    <div className='relative w-full h-[78vh] overflow-auto scroll-smooth no-scrollbar'>
      {/* GRID SECTION */}
      <div className="w-full pb-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {data.gallery.map((asset, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-black/20 border border-white/10 shadow-lg"
              onClick={() => setSelectedImage(index)}
            >
              {/* SHOW THUMBNAIL IMAGE HERE */}
              <img
                src={asset.thumb} 
                className="w-full h-auto lg:h-64 object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
                alt={`Thumbnail ${index + 1}`}
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex justify-center items-center pointer-events-none">
                <div className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 shadow-xl">
                  <Maximize2 strokeWidth={2} className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FULL SCREEN MODAL */}
{/* FULL SCREEN MODAL */}
<AnimatePresence>
  {selectedImage !== null && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] w-full h-screen flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-4"
      onClick={() => setSelectedImage(null)}
    >
      {/* Close Button - Smaller on mobile */}
      <button 
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/60 hover:text-white z-[10000] bg-white/10 p-2 sm:p-3 rounded-full transition-colors"
        onClick={() => setSelectedImage(null)}
      >
        <X size={24} className="sm:w-8 sm:h-8" />
      </button>

      {/* Navigation Buttons - Hidden or smaller on very small screens if needed */}
      <button 
        className="absolute left-2 sm:left-6 text-white/60 hover:text-white z-[10000] bg-white/10 p-2 sm:p-3 rounded-full" 
        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
      >
        <StepBack size={20} className="sm:w-6 sm:h-6" />
      </button>
      
      <button 
        className="absolute right-2 sm:right-6 text-white/60 hover:text-white z-[10000] bg-white/10 p-2 sm:p-3 rounded-full" 
        onClick={(e) => { e.stopPropagation(); handleNext(); }}
      >
        <StepForward size={20} className="sm:w-6 sm:h-6" />
      </button>
    
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full h-full flex justify-center items-center"
        onClick={(e) => e.stopPropagation()} 
      >
        {data.gallery[selectedImage].type === "pdf" ? (
          <div className="w-full h-full max-w-4xl max-h-[75vh] sm:max-h-[85vh] flex items-center justify-center">
            <iframe
              /* view=FitH ensures the PDF fits the width of the container */
              src={`${data.gallery[selectedImage].full}#view=FitH&toolbar=0&navpanes=0`} 
              className="w-full h-full rounded-lg shadow-2xl bg-white"
              title="PDF Viewer"
            />
          </div>
        ) : (
          <img
            src={data.gallery[selectedImage].full}
            className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg shadow-2xl"
            alt="Full Resolution View"
          />
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      {/* <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] w-full h-screen flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >

            <button 
              className="absolute top-6 right-6 text-white/60 hover:text-white z-50 bg-white/10 p-3 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

   
            <button className="absolute top-1/2 left-6 text-white/60 hover:text-white z-50 bg-white/10 p-3 rounded-full" onClick={handlePrev}>
              <StepBack size={25} />
            </button>
            <button className="absolute top-1/2 right-6 text-white/60 hover:text-white z-50 bg-white/10 p-3 rounded-full" onClick={handleNext}>
              <StepForward size={25} />
            </button>
         
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-5xl flex justify-center items-center p-4"
              onClick={(e) => e.stopPropagation()} 
            >
           
              //  <img
              //   src={data.gallery[selectedImage].full}
              //   className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              //   alt="Full Resolution View"
              // /> 
              {data.gallery[selectedImage].type === "pdf" ? (
  <iframe
    src={`${data.gallery[selectedImage].full}#toolbar=0`} 
    className="w-full h-[85vh] rounded-lg shadow-2xl"
  />
) : (
  <img
    src={data.gallery[selectedImage].full}
    className="aspect-square object-contain rounded-lg shadow-2xl"
    alt="Full Resolution View"
  />
)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default Website;



// "use client";

// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Maximize2, StepBack, StepForward, X } from 'lucide-react';

// const Website = () => {
//   const data = {
//     id: 6,
//     category: "Website Design UI/UX",
//     coverImg: "/Images/portfolio/website/cover.webp",
//     gallery: [
//       { type: "image", url: "/Images/portfolio/website/1.webp" },
//       { type: "image", url: "/Images/portfolio/website/7.webp" },
//       { type: "image", url: "/Images/portfolio/website/9.webp" },
//       { type: "image", url: "/Images/portfolio/website/10.webp" },
//       { type: "image", url: "/Images/portfolio/website/11.webp" },
//       { type: "image", url: "/Images/portfolio/website/12.webp" },
//       { type: "image", url: "/Images/portfolio/website/13.webp" },
//       { type: "image", url: "/Images/portfolio/website/2.webp" },
//       { type: "image", url: "/Images/portfolio/website/3.webp" },
//       { type: "image", url: "/Images/portfolio/website/4.webp" },
//       { type: "image", url: "/Images/portfolio/website/5.webp" },
//       { type: "image", url: "/Images/portfolio/website/6.webp" },
//     ],
//   };

//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     // Prevent background scrolling when modal is open
//     document.body.style.overflow = selectedImage ? 'hidden' : 'unset';
//     return () => { document.body.style.overflow = 'unset'; };
//   }, [selectedImage]);


//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
//   };
//   const handleNext = (e) => {
//     e.stopPropagation();
//     setSelectedImage((prev) => (prev + 1) % data.gallery.length);
//   };

//   const handlePrev = (e) => {
//     e.stopPropagation();
//     setSelectedImage((prev) => (prev - 1 + data.gallery.length) % data.gallery.length);
//   };
//   return (
//     <div className='relative w-full h-[78vh] overflow-auto scroll-smooth  no-scrollbar'>
//       {/* GRID SECTION */}
//       <div className="w-full pb-20">
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8"
//         >
//           {data.gallery.map((asset, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
             
//               className="group relative overflow-hidden rounded-xl cursor-pointer bg-black/20 border border-white/10 shadow-lg "
//               onClick={() => setSelectedImage(index)}
//             >
             
//               <img
//                 src={asset.url}
//                 className="w-full h-full md:grayscale hover:grayscale-0 transition-all duration-700 object- "
//                 alt={`Website UI/UX Design ${index + 1}`}
//                 loading="lazy"
//               />
              
//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex justify-center items-center pointer-events-none">
//                 <div className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 shadow-xl">
//                   <Maximize2 strokeWidth={2} className="w-6 h-6 text-white" />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* FULL SCREEN MODAL */}
//     <AnimatePresence>
//         {selectedImage !==null && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-[9999] w-full h-screen flex items-center justify-center bg-black/95 backdrop-blur-xl"
//             onClick={() => setSelectedImage(null)}
//           >
        
//             <button 
//               className="absolute top-6 right-6 md:top-10 md:right-10 text-white/60 hover:text-white z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
//               onClick={() => setSelectedImage(null)}
//               aria-label="Close fullscreen"
//             >
//               <X size={32} strokeWidth={2} />
//             </button>
//           <button 
//               className="absolute top-1/2 right-6  md:right-10 text-white/60 hover:text-white z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
//             onClick={handleNext}
//             >
//               <StepForward size={25} strokeWidth={2} />
//             </button>



//           <button 
//               className="absolute top-1/2 left-6  md:left-10 text-white/60 hover:text-white z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
//            onClick={handlePrev}
             
//             >
            
//               <StepBack size={25} strokeWidth={2} />
//             </button>
         
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               // Allow vertical scrolling inside the modal if the website image is very long
//               className="relative w-full h-full max-w-7xl max-h-screen p-4  flex justify-center items-center overflow-y-auto"
//               onClick={(e) => e.stopPropagation()} 
//             >
//               <img
//                 src={data.gallery[selectedImage].url}
//                 // object-contain ensures the whole width fits, but if it's super tall, the user might want to scroll it.
//                 // Using max-h-full keeps it entirely within the viewport. Change to h-auto if you prefer them to scroll long pages.
//                 className="w-full h-[80%] object-contain rounded-lg shadow-2xl"
//                 alt="Full screen website design"
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Website;