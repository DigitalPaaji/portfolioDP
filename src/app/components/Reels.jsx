"use client"
import { Play, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Reels = () => {
const [subcat,setSubcat]=useState("jewellery")
  const graphicSubCategories = [
    "jewellery",
    "Restraunt",
    "educational",
    "electronics",
    "others"
  ];
  const [selectedAsset, setSelectedAsset] = useState(null);

const data = [
{
    id: 1,
    category: "jewellery",
 
    gallery: [
   {type:"video",url:"https://www.youtube.com/embed/6jiW_UAvE38",thumb:"saajriwaj1.webp"},
   {type:"video",url:"https://www.youtube.com/embed/7xCRhzA8ICc",thumb:"saajriwaj3.webp"},
    
      
    ],
  },
 {
    id: 2,
    category: "Restraunt",
 
    gallery: [
       {type:"video",url:"https://www.youtube.com/embed/3CMHqcoftb0" ,thumb:"amber2.webp"}, 
       {type:"video",url:"https://www.youtube.com/embed/hleWBqF5F2M",thumb:"amber1.webp"},
    ],
  },
 {
    id: 3,
    category: "others",
gallery: [
     {type:"video",url:"https://www.youtube.com/embed/kAsUuGOfO6Q",thumb:"murgi1.webp"},

    ],
  },
 
 

]

  
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
  return (
    <div className='w-full relative h-[78vh] overflow-auto scroll-smooth  no-scrollbar'>
      <div className={`sticky -top-0 z-10 mb-2 bg-white/[0.02]  rounded-2xl p-2 mb-2 backdrop-blur-md flex md:flex-wrap justify-between overflow-auto  md:justify-around text-white `}>
{graphicSubCategories.map((item,index)=>{
    return(
        <div onClick={()=>setSubcat(item)} key={index} className={`cursor-pointer px-3 py-1 rounded-xl capitalize font-mono   ${subcat==item? "bg-[#cc5f4d] ":"" } `}>
{item}
            </div>
    )
})}
</div>


    <div className="w-full pb-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {data.find(item=>item.category==subcat)?.gallery?.map((asset, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-black/20 border border-white/10 shadow-lg aspect-[9/16]"
              onClick={() => setSelectedAsset(asset)}
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
                          className="w-full h-full  md:grayscale hover:grayscale-0 object-cover transition-transform duration-700 group-hover:opacity-70"
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
        {selectedAsset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] w-full h-screen flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedAsset(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/60 hover:text-white z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
              onClick={() => setSelectedAsset(null)}
            >
              <X size={32} strokeWidth={2} />
            </button>

            {/* FULL SCREEN CONTENT */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-7xl max-h-screen p-4 md:p-12 flex justify-center items-center"
              onClick={(e) => e.stopPropagation()} 
            >
              {selectedAsset.type === 'image' ? (
                <img
                  src={selectedAsset.url}
                  className="w-full h-full object-contain"
                  alt="Full screen content"
                />
              ) : (
                <div className=" h-screen flex justify-center items-center bg-black rounded-lg overflow-hidden shadow-2xl">
                  {(selectedAsset.url.includes("youtube.com") || selectedAsset.url.includes("instagram.com")) ? (
                    <iframe
                      src={getModalVideoUrl(selectedAsset.url)}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={selectedAsset.url}
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
  )
}

export default Reels