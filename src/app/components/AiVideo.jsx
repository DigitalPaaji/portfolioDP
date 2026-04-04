"use client";

import { Play, StepBack, StepForward, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AiVideo = () => {
  const aivideos = {
    id: 1,
    category: "AI Videos",
    coverImg: "/Images/portfolio/ai/cover.gif",
    gallery: [
      { type: "video", url: "https://www.youtube.com/embed/hSVONZ8aULc", thumb: "ai4.webp" },
      { type: "video", url: "https://www.youtube.com/embed/TpmoYQyJ2CQ", thumb: "ai1.webp" },
      { type: "video", url: "https://www.youtube.com/embed/3DqIN3n3CO0", client: "ibanta", thumb: "ibnta1.webp" },
      { type: "video", url: "https://www.youtube.com/embed/tFGKkq4qOik", client: "ibanta", thumb: "ibnta2.webp" },
      { type: "video", url: "https://www.youtube.com/embed/JIvu3LY-xfk", thumb: "ai2.webp" },
      { type: "video", url: "https://www.youtube.com/embed/YQ7cuNJwCQI", client: "fleetx", thumb: "fleetx2.webp" },
      { type: "video", url: "https://www.youtube.com/embed/JEh70PImLOM", client: "ibanta", thumb: "ibnta3.webp" },
      { type: "video", url: "https://www.youtube.com/embed/mHYycNYN954", client: "ibanta", thumb: "ibnta4.webp" },
      { type: "video", url: "https://www.youtube.com/embed/k5dYhWZDWiU", client: "fleetx", thumb: "fleetx1.webp" },
      { type: "video", url: "https://www.youtube.com/embed/ag_jFaBbAlM", thumb: "spd.webp" },
      { type: "video", url: "https://www.youtube.com/embed/RwuK_SGYljU", thumb: "ai3.webp" },
      { type: "video", url: "https://www.youtube.com/embed/WXy49BMkS0U", thumb: "muraga1.webp" },
      { type: "video", url: "https://www.youtube.com/embed/mARWXpzxcHI", thumb: "fleetx3.webp" },
      { type: "video", url: "https://www.youtube.com/embed/A67jLML8c6Y", thumb: "saajriwaj2.webp" },
      {type:"video",url:"https://www.youtube.com/embed/kAsUuGOfO6Q",thumb:"murgi1.webp"},
      {type:"video",url:"https://www.youtube.com/embed/7xCRhzA8ICc",thumb:"saajriwaj3.webp"},
    ],
  };

  const [selectedAsset, setSelectedAsset] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedAsset ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedAsset]);

  const getModalVideoUrl = (url) => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = url.includes('v=') ? url.split('v=')[1]?.split('&')[0] : url.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1`;
    }
    if (url.includes("instagram.com")) {
      return `${url}embed/`;
    }
    return url;
  };

const handleNext = (e) => {
    e.stopPropagation();
    setSelectedAsset((prev) => (prev + 1) % aivideos.gallery.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedAsset((prev) => (prev - 1 + aivideos.gallery.length) % aivideos.gallery.length);
  };


  return (
    <div className='relative w-full h-[78vh] overflow-auto scroll-smooth  no-scrollbar '>
      
      <div className="w-full pb-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {aivideos?.gallery?.map((asset, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-black/20 border border-white/10 shadow-lg aspect-[9/16]"
              onClick={() => setSelectedAsset(index)}
            >
              {asset.type === 'image' ? (
                <img
                  src={asset.url}
                  className="w-full h-full md:grayscale hover:grayscale-0 object-cover transition-transform duration-700 "
                  alt="Gallery content"
                />
              ) : (
                <div className="w-full h-full relative">
                  {(asset.url.includes("youtube.com") || asset.url.includes("instagram.com")) ? (
                    asset.thumb ? (
                      <>
                        <img 
                          src={`/Images/thumbnail/${asset.thumb}`} 
                          alt="Video thumbnail" 
                          className="w-full md:grayscale hover:grayscale-0 h-full object-cover transition-transform duration-700 group-hover:opacity-70"
                        />
                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                          <div className="bg-black/70 p-4 rounded-full backdrop-blur-sm shadow-xl transition-transform duration-300  group-hover:bg-[#cc5f4d]">
                            <Play strokeWidth={2.5} className="w-8 h-8 text-white pl-1" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <iframe
                        src={`${asset.url.replace("watch?v=", "embed/")}?modestbranding=1&rel=0&controls=0&showinfo=0`}
                        className="w-full h-full pointer-events-none"
                        tabIndex="-1"
                        title="Video preview"
                      />
                    )
                  ) : (
                    <video
                      src={asset.url}
                      className="w-full h-full object-cover transition-transform duration-700 "
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      
      <AnimatePresence>
        {selectedAsset !==null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] w-full h-screen flex items-center justify-center bg-black/95 backdrop-blur-xl"
          >
        
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/60 hover:text-white z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
              onClick={() => setSelectedAsset(null)}
            >
              <X size={32} strokeWidth={2} />
            </button>

          <button 
              className="absolute top-1/2 right-6  md:right-10 text-white/60 hover:text-white z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
            onClick={handleNext}
            >
              <StepForward size={25} strokeWidth={2} />
            </button>



<button 
              className="absolute top-1/2 left-6  md:left-10 text-white/60 hover:text-white z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
           
             onClick={handlePrev}
             
            >
            
              <StepBack size={25} strokeWidth={2} />
            </button>


            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-7xl max-h-screen p-4 md:p-12 flex justify-center items-center"
              onClick={(e) => e.stopPropagation()} 
            >
              {aivideos.gallery[selectedAsset].type === 'image' ? (
                <img
                  src={aivideos.gallery[selectedAsset].url}
                  className="w-full h-full object-contain"
                  alt="Full screen content"
                />
              ) : (
                <div className=" h-screen flex justify-center items-center bg-black rounded-lg overflow-hidden shadow-2xl">
                  {(aivideos.gallery[selectedAsset].url.includes("youtube.com") || aivideos.gallery[selectedAsset].url.includes("instagram.com")) ? (
                    <iframe
                      src={getModalVideoUrl(aivideos.gallery[selectedAsset].url)}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={aivideos.gallery[selectedAsset].url}
                      controls
                      autoPlay
                      loop
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AiVideo;