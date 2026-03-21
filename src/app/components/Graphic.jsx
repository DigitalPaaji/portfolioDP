"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
const Graphic = () => {
    const [subcat,setSubcat]=useState("All")
    
      const [selectedImage, setSelectedImage] = useState(null);
  const graphicSubCategories = [
    "All",
    "Product Shoot",
    "Restraunt Food Shoot",
    "YouTube Thumbnails",
    "Visiting Cards",
    "Logo Designs",
    "Packaging Designs"
  ];

const data = [
{
    id: 1,
    category: "All",
    coverImg: "/Images/work/1.gif",
    gallery: [
      { type: "image", url: "/Images/portfolio/graphic/food/3.webp" },
      { type: "image", url: "/Images/portfolio/graphic/food/Restaurants4.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/1.gif" },
      { type: "image", url: "/Images/portfolio/graphic/food/Restaurants3.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/0.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/18.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/19.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/20.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/6.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/Restaurants8.webp" },
      { type: "image", url: "/Images/portfolio/graphic/10.webp" },
      { type: "image", url: "/Images/portfolio/graphic/21.webp" },
      { type: "image", url: "/Images/portfolio/graphic/15.webp" },
      { type: "image", url: "/Images/portfolio/graphic/14.webp" },
      { type: "image", url: "/Images/portfolio/graphic/22.webp" },
      { type: "image", url: "/Images/portfolio/graphic/16.webp" },
      { type: "image", url: "/Images/portfolio/graphic/13.webp" },
      { type: "image", url: "/Images/portfolio/graphic/9.webp" },
      { type: "image", url: "/Images/portfolio/graphic/6.webp" },
    ],
  },
 {
    id: 2,
    category: "Product Shoot",
    coverImg: "/Images/work/ds2.jpeg",
    gallery: [
      { type: "image", url: "/Images/portfolio/graphic/product/ds2.jpeg" },
      { type: "image", url: "/Images/portfolio/graphic/product/25.webp" },
      { type: "image", url: "/Images/portfolio/graphic/product/11.webp" },
      { type: "image", url: "/Images/portfolio/graphic/product/5.webp" },
      { type: "image", url: "/Images/portfolio/graphic/product/12.webp" },
      { type: "image", url: "/Images/portfolio/graphic/product/23.webp" },
      { type: "image", url: "/Images/portfolio/graphic/product/24.webp" },
      { type: "image", url: "/Images/portfolio/graphic/product/product5.jpeg" },
      { type: "image", url: "/Images/portfolio/graphic/product/product4.jpeg" },
      { type: "image", url: "/Images/portfolio/graphic/product/product6.jpeg" },
      { type: "image", url: "/Images/portfolio/graphic/product/26.webp" },
      { type: "image", url: "/Images/portfolio/graphic/product/ds1.jpeg" },
    ],
  },
 {
    id: 3,
    category: "Restraunt Food Shoot",
    coverImg: "/Images/work/Restaurants4.jpeg",
    gallery: [
      { type: "image", url: "/Images/portfolio/graphic/restraurant/0.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/18.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/19.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/20.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/Restaurants9.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/Restaurants8.webp" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/1.gif" },
      { type: "image", url: "/Images/portfolio/graphic/restraurant/6.webp" },

    ],
  },
 {
    id: 4,
    category: "YouTube Thumbnails",
    coverImg: "/Images/portfolio/graphic/thumbnails/cover.webp",
    gallery: [
      {
        type: "image",
        url: "/Images/portfolio/graphic/thumbnails/1.webp",
      },
      {
        type: "image",
        url: "/Images/portfolio/graphic/thumbnails/2.webp",
      },  
      {
        type: "image",
        url: "/Images/portfolio/graphic/thumbnails/3.webp",
      },
      {
        type: "image",
        url: "/Images/portfolio/graphic/thumbnails/4.webp",
      },
      {
        type: "image",
        url: "/Images/portfolio/graphic/thumbnails/5.webp",
      },
    ],
  },
 {
    id: 5,
    category: "Visiting Cards",
    coverImg: "/Images/portfolio/visitingcard/3.webp",
    gallery: [
      { type: "image", url: "/Images/portfolio/graphic/label/11.webp" },
      { type: "image", url: "/Images/portfolio/graphic/visitingcard/1.webp" },
      { type: "image", url: "/Images/portfolio/graphic/visitingcard/2.webp" },
      { type: "image", url: "/Images/portfolio/graphic/visitingcard/5.webp" },
      { type: "image", url: "/Images/portfolio/graphic/visitingcard/4.webp" },
    ],
  },
 {
    id: 6,
    category: "Packaging Designs",
    coverImg: "/Images/portfolio/packaging/3.webp",
    gallery: [
      { type: "image", url: "/Images/portfolio/graphic/label/9.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/10.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/12.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/13.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/14.webp" },
      { type: "image", url: "/Images/portfolio/graphic/packaging/1.webp" },
      { type: "image", url: "/Images/portfolio/graphic/packaging/2.webp" },
      { type: "image", url: "/Images/portfolio/graphic/packaging/3.webp" },
      { type: "image", url: "/Images/portfolio/graphic/packaging/4.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/1.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/2.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/3.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/4.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/5.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/8.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/cover.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/label1.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/label2.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/label4.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/label5.webp" },
      { type: "image", url: "/Images/portfolio/graphic/label/label6.webp" },
    ],
  },

   {
    id: 7,
    category: "Logo Designs",
    coverImg: "/Images/portfolio/packaging/3.webp",
    gallery: [
          { type: "image", url: "/Images/portfolio/graphic/label/10.webp" },

   { type: "image", url: "/Images/portfolio/graphic/label/label1.webp" },
   { type: "image", url: "/Images/portfolio/graphic/label/8.webp" },
      { type: "image", url: "/Images/thumbnail/logo1.webp" },
            // { type: "image", url: "/Images/thumbnail/logo2.webp" },

     
    ],
  },

]
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
// console.log(data.find((item)=>item.category == subcat))
  return (
    <div className='w-full relative h-[78vh] overflow-auto scroll-smooth  no-scrollbar'>
        <div className={`sticky -top-0 z-10 bg-white/[0.02]  rounded-2xl p-2 mb-2 backdrop-blur-md flex md:flex-wrap justify-between overflow-auto  md:justify-around text-white `}>
{graphicSubCategories.map((item,index)=>{
    return(
        <div onClick={()=>setSubcat(item)} key={index} className={` text-nowrap cursor-pointer text-[12px] md:text-[20px] px-3 py-1 rounded-xl capitalize font-mono   ${subcat==item? "bg-[#cc5f4d] ":"" } `}>
{item}
            </div>
    )
})}
</div>

<div>
<div className="w-full pb-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {data.find((item)=>item.category == subcat).gallery.map((asset, index) => (
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
</div>



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
  )
}

export default Graphic