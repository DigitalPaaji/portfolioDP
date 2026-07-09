"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  Play,
  StepBack,
  StepForward,
  X,
} from "lucide-react";

const Bni = () => {
  const [tab, setTab] = useState("graphics");

  /* ---------------- GRAPHICS ---------------- */
  const graphics = [
     "/Images/portfolio/BNI/b7.webp",
    "/Images/portfolio/BNI/b8.webp",
    "/Images/portfolio/BNI/b9.webp",
    "/Images/portfolio/BNI/b10.webp",
    "/Images/portfolio/BNI/b11.webp",
    "/Images/portfolio/BNI/b1.webp",
    "/Images/portfolio/BNI/b2.webp",
    "/Images/portfolio/BNI/b3.webp",
    "/Images/portfolio/BNI/b4.webp",
    "/Images/portfolio/BNI/b5.webp",
    "/Images/portfolio/BNI/b6.webp",
    "/Images/portfolio/BNI/b12.webp",
    "/Images/portfolio/BNI/b13.webp",
  ];

  /* ---------------- VIDEOS ---------------- */
  const videos = [
    {
      url: "https://youtube.com/shorts/nlW0WLhuJW8?si=4C7Ix-Q94MM_OUMf",
      thumb: "/Images/thumbnail/baadme1.webp",
      landscape: false,
    },
    {
      url: "https://youtube.com/shorts/sQB8aZIg2_k?si=4C7Ix-Q94MM_OUMf",
      thumb: "/Images/thumbnail/paaji1.webp",
      landscape: true,
    },
    {
      // type: "video",
      url: "https://www.youtube.com/embed/H68ev8JVrIg",
      thumb: "/Images/thumbnail/bni1.webp",
    },
    
    
    
    
    
    
    
    {
      url: "https://youtube.com/shorts/jcHNyBL-aAE",
      thumb: "/Images/thumbnail/bni5.webp",
      landscape: false,
    },
    {
      url: "https://youtube.com/shorts/Ajr12pMU3II",
      thumb: "/Images/thumbnail/bni4.webp",
      landscape: true,
    },
    {
      // type: "video",
      url: "https://www.youtube.com/embed/nMmyBwJs9a8",
      thumb: "/Images/thumbnail/bni1.webp",
    },

            {
      url: "https://youtube.com/shorts/ANZCAujvJNE",
      thumb: "/Images/thumbnail/bni2.webp",
      landscape: false,
    },
    {
      url: "https://youtube.com/shorts/CCA0UDawy2Q",
      thumb: "/Images/thumbnail/bni6.webp",
      landscape: true,
    },
    {
      // type: "video",
      url: "https://www.youtube.com/embed/nMmyBwJs9a8",
      thumb: "/Images/thumbnail/bni3.webp",
    },
    
    
    
    
    {
      // type: "video",
      url: "https://www.youtube.com/embed/r9KkepYxLPg",
      thumb: "/Images/thumbnail/bni7.webp",
    },
    
    {
      url: "https://www.youtube.com/embed/Oogjo4gj3Xo",
      thumb: "/Images/thumbnail/bni8.webp",
    },
    
    {
      url: "https://www.youtube.com/embed/e-H1nrWi710",
      thumb: "/Images/thumbnail/bni9.webp",
    },
    {
      url: "https://www.youtube.com/embed/xQ7eOpuH02w",
      thumb: "/Images/thumbnail/bni10.webp",
    },
    {
      url: "https://www.youtube.com/embed/qYwBFXYXLKA",
      thumb: "/Images/thumbnail/bni11.webp",
    },
    {
      url: "https://www.youtube.com/embed/cv0Lb95nYIg",
      thumb: "/Images/thumbnail/bni12.webp",
    },
    
    {
      url: "https://www.youtube.com/embed/JJayr0Z-KKc",
      thumb: "/Images/thumbnail/bni13.webp",
    },
    {
      url: "https://www.youtube.com/embed/2dulYQaU1d0",
      thumb: "/Images/thumbnail/bni14.webp",
    },
    {
      url: "https://www.youtube.com/embed/kJnkWgwdfXY",
      thumb: "/Images/thumbnail/bni15.webp",
    },
    {
      url: "https://www.youtube.com/embed/49zZv33bH9Q",
      thumb: "/Images/thumbnail/bni16.webp",
    },
    {
      url: "https://youtube.com/shorts/VvcVufOBtTE",
      thumb: "/Images/thumbnail/bni17.webp",
      landscape: true,
    },
  ];
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    document.body.style.overflow =
      selectedImage !== null || selectedVideo !== null ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage, selectedVideo]);

  /* ---------------- YOUTUBE SHORTS / EMBED FIX ---------------- */
  const getModalVideoUrl = (url) => {
    let id = "";

    if (url.includes("/shorts/")) {
      id = url.split("/shorts/")[1]?.split("?")[0];
    } else if (url.includes("/embed/")) {
      id = url.split("/embed/")[1]?.split("?")[0];
    } else if (url.includes("watch?v=")) {
      id = url.split("watch?v=")[1]?.split("&")[0];
    }

    return `https://www.youtube.com/embed/${id}?autoplay=1&controls=1&rel=0&modestbranding=1`;
  };

  /* ---------------- NAVIGATION ---------------- */
  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev + 1) % graphics.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev - 1 + graphics.length) % graphics.length);
  };

  const nextVideo = (e) => {
    e.stopPropagation();
    setSelectedVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = (e) => {
    e.stopPropagation();
    setSelectedVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="relative w-full h-[78vh] overflow-auto no-scrollbar">
      {/* ---------------- TABS ---------------- */}
      <div className="sticky top-0 z-20 mb-4 p-2 rounded-2xl bg-white/[0.03] backdrop-blur-md flex gap-3">
        {["graphics", "videos"].map((item) => (
          <button
            key={item}
            onClick={() => {
              setTab(item);
              setSelectedImage(null);
              setSelectedVideo(null);
            }}
            className={`px-4 py-2 rounded-xl capitalize font-medium transition ${
              tab === item
                ? "bg-[#cc5f4d] text-white"
                : "bg-white/5 text-white/70 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* ==============*/}
      {/* ================= GRAPHICS*/}
      {tab === "graphics" && (
        <div className="pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {graphics.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={img}
                  alt="BNI Graphic"
                  className="w-full h-full object md:grayscale group-hover:grayscale-0 transition-all duration-500"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex justify-center items-center">
                  <div className="opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition bg-white/10 p-3 rounded-full backdrop-blur-md">
                    <Maximize2 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div> 
      )}

      {tab === "videos" && (
        <div className="pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {videos.map((video, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative rounded-xl overflow-hidden border border-white/10 cursor-pointer aspect-[9/16]"
                onClick={() => setSelectedVideo(index)}
              >
                <img
                  src={video.thumb}
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover group-hover:opacity-70 transition"
                />

                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="bg-black/70 group-hover:bg-[#cc5f4d] p-4 rounded-full transition">
                    <Play className="text-white w-7 h-7 pl-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}


  <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white"
            >
              <X size={28} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 z-50 p-3 rounded-full bg-white/10 text-white"
            >
              <StepBack />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 z-50 p-3 rounded-full bg-white/10 text-white"
            >
              <StepForward />
            </button>

            <img
              src={graphics[selectedImage]}
              alt="Full View"
              className="w-full max-w-7xl h-[85vh] object-contain px-5"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>


      <AnimatePresence>
        {selectedVideo !== null && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white"
            >
              <X size={28} />
            </button>

            <button
              onClick={prevVideo}
              className="absolute left-6 top-1/2 z-50 p-3 rounded-full bg-white/10 text-white"
            >
              <StepBack />
            </button>

            <button
              onClick={nextVideo}
              className="absolute right-6 top-1/2 z-50 p-3 rounded-full bg-white/10 text-white"
            >
              <StepForward />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className={`rounded-xl overflow-hidden shadow-2xl ${
                videos[selectedVideo].landscape
                  ? "w-full max-w-6xl aspect-video"
                  : "h-[85vh] aspect-[9/16]"
              }`}
            >
              <iframe
                src={getModalVideoUrl(videos[selectedVideo].url)}
                className="w-full h-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Bni;




// "use client"
// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Maximize2, StepBack, StepForward, X } from 'lucide-react';

// const Bni = () => {
// const data = {
//     id: 6,
//     category: "Bni ",
//     coverImg: "/Images/portfolio/website/cover.webp",
//     gallery: [
//       { type: "image", url: "/Images/portfolio/BNI/b1.webp" },
//       { type: "image", url: "/Images/portfolio/BNI/b2.webp" },
//       { type: "image", url: "/Images/portfolio/BNI/b3.webp" },
//       { type: "image", url: "/Images/portfolio/BNI/b4.webp" },
//       { type: "image", url: "/Images/portfolio/BNI/b5.webp" },
//       { type: "image", url: "/Images/portfolio/BNI/b6.webp" },
//       { type: "image", url: "/Images/portfolio/BNI/b7.webp" },
//       { type: "image", url: "/Images/portfolio/BNI/b8.webp" },
      
     
//     ],
//   };
// const [selectedImage, setSelectedImage] = useState(null);
// useEffect(() => {
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
//    <div className='relative w-full h-[78vh] overflow-auto scroll-smooth  no-scrollbar'>
//          {/* GRID SECTION */}
//          <div className="w-full pb-20">
//            <motion.div 
//              variants={containerVariants}
//              initial="hidden"
//              animate="show"
//              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8"
//            >
//              {data.gallery.map((asset, index) => (
//                <motion.div
//                  key={index}
//                  variants={itemVariants}
                
//                  className="group relative overflow-hidden rounded-xl cursor-pointer bg-black/20 border border-white/10 shadow-lg "
//                  onClick={() => setSelectedImage(index)}
//                >
                
//                  <img
//                    src={asset.url}
//                    className="w-full h-full md:grayscale hover:grayscale-0 transition-all duration-700 object- "
//                    alt={`Website UI/UX Design ${index + 1}`}
//                    loading="lazy"
//                  />
                 
//                  {/* Hover Overlay */}
//                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex justify-center items-center pointer-events-none">
//                    <div className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 shadow-xl">
//                      <Maximize2 strokeWidth={2} className="w-6 h-6 text-white" />
//                    </div>
//                  </div>
//                </motion.div>
//              ))}
//            </motion.div>
//          </div>
   
//          {/* FULL SCREEN MODAL */}
//        <AnimatePresence>
//            {selectedImage !==null && (
//              <motion.div
//                initial={{ opacity: 0 }}
//                animate={{ opacity: 1 }}
//                exit={{ opacity: 0 }}
//                transition={{ duration: 0.3 }}
//                className="fixed inset-0 z-[9999] w-full h-screen flex items-center justify-center bg-black/95 backdrop-blur-xl"
//                onClick={() => setSelectedImage(null)}
//              >
           
//                <button 
//                  className="absolute top-6 right-6 md:top-10 md:right-10 text-white/60 hover:text-white z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
//                  onClick={() => setSelectedImage(null)}
//                  aria-label="Close fullscreen"
//                >
//                  <X size={32} strokeWidth={2} />
//                </button>
//              <button 
//                  className="absolute top-1/2 right-6  md:right-10 text-white/60 hover:text-white z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
//                onClick={handleNext}
//                >
//                  <StepForward size={25} strokeWidth={2} />
//                </button>
   
   
   
//              <button 
//                  className="absolute top-1/2 left-6  md:left-10 text-white/60 hover:text-white z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
//               onClick={handlePrev}
                
//                >
               
//                  <StepBack size={25} strokeWidth={2} />
//                </button>
            
//                <motion.div
//                  initial={{ scale: 0.95, opacity: 0 }}
//                  animate={{ scale: 1, opacity: 1 }}
//                  exit={{ scale: 0.95, opacity: 0 }}
//                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
//                  className="relative w-full h-full max-w-7xl max-h-screen p-4  flex justify-center items-center overflow-y-auto"
//                  onClick={(e) => e.stopPropagation()} 
//                >
//                  <img
//                    src={data.gallery[selectedImage].url}
//                    className="w-full h-[80%] object-contain rounded-lg shadow-2xl"
//                    alt="Full screen website design"
//                  />
//                </motion.div>
//              </motion.div>
//            )}
//          </AnimatePresence>
//        </div>
//   )
// }

// export default Bni