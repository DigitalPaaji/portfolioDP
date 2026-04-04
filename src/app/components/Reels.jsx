"use client"
import { Play, StepBack, StepForward, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Reels = () => {
const [subcat,setSubcat]=useState("jewellery")
  const graphicSubCategories = [
    "jewellery",
    "Restraunt/clubs",
    "educational",
    "electronics",
    "Products",
    // "emotional marketing",
    "others"
  ];
  const [selectedAsset, setSelectedAsset] = useState(null);

const data = [
 {
    id: 1,
    category: "jewellery",
 
    gallery: [
  //  {type:"video",url:"https://www.youtube.com/embed/6jiW_UAvE38",thumb:"saajriwaj1.webp"},
  //  {type:"video",url:"https://www.youtube.com/embed/cURFsqcEY90",thumb:"saajriwaj4.webp"},
   {type:"video",url:"https://www.youtube.com/embed/EckUSVS1pGM",thumb:"saajriwaj5.webp"},
   {type:"video",url:"https://www.youtube.com/embed/nvNhTDsACCw",thumb:"saajriwaj6.webp"},
   {type:"video",url:"https://www.youtube.com/embed/-i-bjTe0QL0",thumb:"saajriwaj7.webp"},
   {type:"video",url:"https://www.youtube.com/embed/MvkVt29bQXI",thumb:"saajriwaj8.webp"},
   {type:"video",url:"https://www.youtube.com/embed/S3NP3KMNQco",thumb:"saajriwaj9.webp"},
   {type:"video",url:"https://www.youtube.com/embed/b3of7BJ9s0g",thumb:"saajriwaj10.webp"},
  //  {type:"video",url:"https://www.youtube.com/embed/EckUSVS1pGM",thumb:"saajriwaj1.webp"}
      
    ],
  },
{
    id: 2,
    category: "electronics",
 
    gallery: [
 
      {type:"video",url:"https://www.youtube.com/embed/ZqbOhYFZHU4",thumb:"liqo1.webp"},
      {type:"video",url:"https://www.youtube.com/embed/-jJsgO882Fo",thumb:"liqo2.webp"},
      {type:"video",url:"https://www.youtube.com/embed/CJ7QOqkbl5g",thumb:"liqo3.webp"},

    
      
    ],
  },
// {
//     id: 10,
//     category: "emotional marketing",
 
//     gallery: [
//    {type:"video",url:"https://www.youtube.com/embed/lcaIDO1XfkE",thumb:"electronic1.webp"},
//   //  {type:"video",url:"https://www.youtube.com/embed/v23XZlcVXvI",thumb:"electronic2.webp"},
   
    
      
//     ],
//   },
{
    id: 4,
    category: "Products",
 
    gallery: [
   {type:"video",url:"https://www.youtube.com/embed/60l3EjL6F4I",thumb:"murgi2.webp"},
   {type:"video",url:"https://www.youtube.com/embed/kn94yTuPdlg",thumb:"murgi3.webp"},
   {type:"video",url:"https://www.youtube.com/embed/tBsGZrON6RA",thumb:"ibnta7.webp"},
   
    
      
    ],
  },

 {
    id: 3,
    category: "others",
gallery: [
          {type:"video",url:"https://www.youtube.com/embed/-JKp6RBS6K4" ,thumb:"sellgo1.webp"}, 
          {type:"video",url:"https://www.youtube.com/embed/ABZ_C_THkdk" ,thumb:"sellgo2.webp"}, 
          {type:"video",url:"https://www.youtube.com/embed/_AxNIhQtdxc" ,thumb:"fire1.webp"}, 
          {type:"video",url:"https://www.youtube.com/embed/FnBcFy68r0w" ,thumb:"fire2.webp"}, 


    ],
  },
  {
    id: 4,
    category: "Restraunt/clubs",
 
    gallery: [
      //  {type:"video",url:"https://www.youtube.com/embed/3CMHqcoftb0" ,thumb:"amber2.webp"}, 
       {type:"video",url:"https://www.youtube.com/embed/hHoQjxH6w3A",thumb:"amber3.webp" ,landscape:true},
       {type:"video",url:"https://www.youtube.com/embed/hleWBqF5F2M",thumb:"amber1.webp"},
      //  {type:"video",url:"https://www.youtube.com/embed/Tn-L67kSHzw",thumb:"education1.webp"},
  
      //  {type:"video",url:"https://www.youtube.com/embed/iqE99DiQuks",thumb:"club1.webp"},
        {type:"video",url:"https://www.youtube.com/embed/m-DFNY8qOkI",thumb:"club2.webp"},
        {type:"video",url:"https://www.youtube.com/embed/uy3KuuR09jE",thumb:"club3.webp"},
        {type:"video",url:"https://www.youtube.com/embed/-u3dwXRxqV8",thumb:"daawath1.webp"},
        {type:"video",url:"https://www.youtube.com/embed/kNxiHdU4XXs",thumb:"daawath2.webp"},
        {type:"video",url:"https://www.youtube.com/embed/oSIIbeTSGYY",thumb:"garden1.webp"},
        {type:"video",url:"https://www.youtube.com/embed/XJQIcayEGrA",thumb:"daawath3.webp"},
        
        {type:"video",url:"https://www.youtube.com/embed/-9Z_1wpZNvE",thumb:"oasis6.webp"},
        {type:"video",url:"https://www.youtube.com/embed/InLrve5kfYY",thumb:"club4.webp"},
        {type:"video",url:"https://www.youtube.com/embed/xZhIrgSc8yc",thumb:"club5.webp"},
        {type:"video",url:"https://www.youtube.com/embed/yOEMaXU5zWA",thumb:"club6.webp"},
        {type:"video",url:"https://www.youtube.com/embed/WTyUiWbMAAU",thumb:"club7.webp"},
        {type:"video",url:"https://www.youtube.com/embed/j27hCFmFdUE",thumb:"club8.webp"},
        {type:"video",url:"https://www.youtube.com/embed/5vp-El6w4rk",thumb:"club9.webp"},
        {type:"video",url:"https://www.youtube.com/embed/ZFKmnQJ3NPA",thumb:"club10.webp",landscape:true},

    ],
  },
 {
    id: 5,
    category: "educational",
 
    gallery: [
      //  {type:"video",url:"https://www.youtube.com/embed/sohORG5GX5c" ,thumb:"education3.webp"}, 
      {type:"video",url:"https://www.youtube.com/embed/sohORG5GX5c" ,thumb:"education8.webp"}, 
       {type:"video",url:"https://www.youtube.com/embed/Fv9UvSp5LPg" ,thumb:"education7.webp"}, 
       {type:"video",url:"https://www.youtube.com/embed/MAX5x7H_gkY" ,thumb:"education3.webp"}, 
       {type:"video",url:"https://www.youtube.com/embed/hleWBqF5F2M",thumb:"education2.webp"},
       {type:"video",url:"https://www.youtube.com/embed/rKZw0zofsXw",thumb:"education4.webp"},


       {type:"video",url:"https://www.youtube.com/embed/6_8Suq2nMQI",thumb:"education9.webp"},
       {type:"video",url:"https://www.youtube.com/embed/plCb4egOnFo",thumb:"education10.webp"},
       {type:"video",url:"https://www.youtube.com/embed/slOoBxX--gU",thumb:"education11.webp"},
       {type:"video",url:"https://www.youtube.com/embed/aVmVDAHY6M8",thumb:"education12.webp"},
       {type:"video",url:"https://www.youtube.com/embed/Zds2wF4NHY4",thumb:"education13.webp"},
       {type:"video",url:"https://www.youtube.com/embed/Gz2Uzu6BRTA",thumb:"education14.webp"},
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

const handleNext = (e) => {
    e.stopPropagation(); // Prevents clicking the backdrop
    setSelectedAsset((prev) => (prev + 1) % data.find(item=>item.category==subcat)?.gallery.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedAsset((prev) => (prev - 1 + data.find(item=>item.category==subcat)?.gallery.length) % data.find(item=>item.category==subcat)?.gallery.length);
  };

  return (
    <div className='w-full relative h-[78vh] overflow-auto scroll-smooth  no-scrollbar'>
      <div className={`sticky -top-0 z-10 mb-2 bg-white/[0.02]  rounded-2xl p-2 mb-2 backdrop-blur-md flex md:flex-wrap justify-between overflow-auto  md:justify-around text-white `}>
{graphicSubCategories.map((item,index)=>{
    return(
        <div onClick={() => {setSubcat("")  , 
                
                setTimeout(() => {
                  setSubcat(item)
                }, 100);
                }}
                
                key={index} className={`cursor-pointer px-3 py-1 rounded-xl capitalize font-mono   ${subcat==item? "bg-[#cc5f4d] ":"" } `}>
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
        {selectedAsset !==null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] w-full h-screen flex items-center justify-center bg-black/95 backdrop-blur-xl"
            // onClick={() => setSelectedAsset(null)}
          >
            {/* Close Button */}
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
              className={`relative w-full h-full  max-h-screen p-4 md:p-12 flex justify-center items-center ${data.find(item=>item.category==subcat)?.gallery[selectedAsset].landscape ?"w-ful" :"max-w-7xl"}`}
              onClick={(e) => e.stopPropagation()} 
            >
              {data.find(item=>item.category==subcat)?.gallery[selectedAsset].type === 'image' ? (
                <img
                  src={data[`${subcat}`].gallery[selectedAsset].url}
                  className="w-full h-full object-contain"
                  alt="Full screen content"
                />
              ) : (
                <div className={` h-screen flex justify-center items-center bg-black rounded-lg overflow-hidden shadow-2xl ${data.find(item=>item.category==subcat)?.gallery[selectedAsset].landscape ?"w-full" :""}  `}>
                  {(data.find(item=>item.category==subcat)?.gallery[selectedAsset].url.includes("youtube.com") || data.find(item=>item.category==subcat)?.gallery[selectedAsset].url.includes("instagram.com")) ? (
                  <> 
                   {data.find(item=>item.category==subcat)?.gallery[selectedAsset].landscape ? 
                    <iframe
  src={getModalVideoUrl(data.find(item=>item.category==subcat)?.gallery[selectedAsset].url)}
  className="w-full aspect-video rounded-lg shadow-md"
  allow="autoplay; encrypted-media; picture-in-picture"
  allowFullScreen
/> :
                    <iframe
                      src={getModalVideoUrl(data.find(item=>item.category==subcat)?.gallery[selectedAsset].url)}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                   }
                    </> 
                  ) : (
                    <video
                      src={data.find(item=>item.category==subcat)?.gallery[selectedAsset].url}
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