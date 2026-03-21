"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

const Ads = () => {
  const data = {
    id: 9,
    category: "Ad Results(Marketing)",
    coverImg:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    gallery: [
      {
        type: "image",
        url: "/Images/portfolio/ad/1.webp",
      },
      {
        type: "image",
        url: "/Images/portfolio/ad/2.webp",
      },
      {
        type: "image",
        url: "/Images/portfolio/ad/3.webp",
      },

    ],
  };

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Prevent background scrolling when modal is open
    document.body.style.overflow = selectedImage ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  // Framer Motion Variants for smooth staggered loading
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

  return (
    <div className='relative w-full h-[78vh] overflow-auto scroll-smooth  no-scrollbar'>
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
             
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-black/20 border border-white/10 shadow-lg "
              onClick={() => setSelectedImage(asset)}
            >
              {/* object-top ensures we see the top of long website mockups in the thumbnail */}
              <img
                src={asset.url}
                className="w-full h-full md:grayscale hover:grayscale-0 transition-all duration-700 object- "
                alt={`Website UI/UX Design ${index + 1}`}
                loading="lazy"
              />
              
              {/* Hover Overlay */}
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
    <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] w-full h-screen flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
        
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/60 hover:text-white z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
              onClick={() => setSelectedImage(null)}
              aria-label="Close fullscreen"
            >
              <X size={32} strokeWidth={2} />
            </button>

         
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              // Allow vertical scrolling inside the modal if the website image is very long
              className="relative w-full h-full max-w-7xl max-h-screen p-4  flex justify-center items-center overflow-y-auto"
              onClick={(e) => e.stopPropagation()} 
            >
              <img
                src={selectedImage.url}
                // object-contain ensures the whole width fits, but if it's super tall, the user might want to scroll it.
                // Using max-h-full keeps it entirely within the viewport. Change to h-auto if you prefer them to scroll long pages.
                className="w-full h-[80%] object-contain rounded-lg shadow-2xl"
                alt="Full screen website design"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Ads;