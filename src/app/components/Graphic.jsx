"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, StepBack, StepForward, X } from "lucide-react";
const Graphic = () => {
  const [subcat, setSubcat] = useState("All");

  const [selectedImage, setSelectedImage] = useState(null);
  const graphicSubCategories = [
    "All",
    "Jewellery",
    "Restaurant",
    "Clubs",
    "YT Thumbnails",
    "Visiting Cards",
    "Logo/Brochure/Catalogue",
    "Packaging Designs",
    "Products",
    "education",
    "printing",
    "Menu"
  ];

  const data = [
    {
      id: 1,
      category: "All",
      coverImg: "/Images/work/1.gif",
      gallery: [
        { type: "image", url: "/Images/portfolio/graphic/restraurant/1.gif" },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/0.webp" },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/18.webp" },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/19.webp" },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/20.webp" },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/6.webp" },
        {
          type: "image",
          url: "/Images/portfolio/graphic/restraurant/Restaurants8.webp",
        },
        { type: "image", url: "/Images/portfolio/graphic/21.webp" },
        { type: "image", url: "/Images/portfolio/graphic/15.webp" },
        { type: "image", url: "/Images/portfolio/graphic/14.webp" },
        { type: "image", url: "/Images/portfolio/graphic/22.webp" },
        { type: "image", url: "/Images/portfolio/graphic/16.webp" },
        { type: "image", url: "/Images/portfolio/graphic/13.webp" },
        { type: "image", url: "/Images/portfolio/graphic/9.webp" },
        { type: "image", url: "/Images/portfolio/graphic/6.webp" },
        { type: "image", url: "/Images/portfolio/graphic/product/24.webp" },
        { type: "image", url: "/Images/portfolio/graphic/product/26.webp" },
        { type: "image", url: "/Images/portfolio/graphic/product/11.webp" },
        { type: "image", url: "/Images/portfolio/graphic/product/12.webp" },

        { type: "image", url: "/Images/portfolio/graphic/product/23.webp" },
      ],
    },
    {
      id: 2,
      category: "Jewellery",
      coverImg: "/Images/work/ds2.jpeg",
      gallery: [
        { type: "image", url: "/Images/portfolio/graphic/product/25.webp" },

        {
          type: "image",
          url: "/Images/portfolio/graphic/product/product5.webp",
        },
        {
          type: "image",
          url: "/Images/portfolio/graphic/product/product4.webp",
        },
        {
          type: "image",
          url: "/Images/portfolio/graphic/product/product6.webp",
        },
        { type: "image", url: "/Images/portfolio/graphic/product/j1.webp" },
        { type: "image", url: "/Images/portfolio/graphic/product/j2.webp" },
        { type: "image", url: "/Images/portfolio/graphic/product/j3.webp" },

        { type: "image", url: "/Images/portfolio/graphic/product/j6.webp" },
        { type: "image", url: "/Images/portfolio/graphic/product/j7.webp" },

        { type: "image", url: "/Images/portfolio/graphic/product/j4.webp" },

        { type: "image", url: "/Images/portfolio/graphic/product/j8.webp" },
        { type: "image", url: "/Images/portfolio/graphic/product/j5.webp" },

        // { type: "image", url: "/Images/portfolio/graphic/product/ds1.webp" },
      ],
    },
    {
      id: 3,
      category: "Clubs",
      coverImg: "/Images/work/Restaurants4.jpeg",
      gallery: [
        { type: "image", url: "/Images/portfolio/graphic/restraurant/0.webp" },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/18.webp" },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/19.webp" },

        
        { type: "image", url: "/Images/portfolio/graphic/restraurant/20.webp" },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/club1.webp" },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/club2.webp" },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/club3.webp" },
        {
          type: "image",
          url: "/Images/portfolio/graphic/restraurant/Restaurants2.webp",
        },
        {
          type: "image",
          url: "/Images/portfolio/graphic/restraurant/Restaurants8.webp",
        },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/1.gif" },
      ],
    },
    {
      id: 4,
      category: "YT Thumbnails",
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
        // { type: "image", url: "/Images/portfolio/graphic/visitingcard/2.webp" },
        { type: "image", url: "/Images/portfolio/graphic/visitingcard/ibanta.webp" },
        { type: "image", url: "/Images/portfolio/graphic/visitingcard/4.webp" },
        { type: "image", url: "/Images/portfolio/graphic/visitingcard/6.webp" },
        { type: "image", url: "/Images/portfolio/graphic/visitingcard/7.webp" },
        { type: "image", url: "/Images/portfolio/graphic/visitingcard/royalpalm.webp" },
        { type: "image", url: "/Images/portfolio/graphic/visitingcard/santosh.webp" },
      ],
    },
    {
      id: 6,
      category: "Packaging Designs",
      coverImg: "/Images/portfolio/packaging/3.webp",
      gallery: [
               { type: "image", url: "/Images/portfolio/graphic/label/p2.webp" },
        { type: "image", url: "/Images/portfolio/graphic/label/p3.webp" },

        { type: "image", url: "/Images/portfolio/graphic/label/p1.webp" },

        { type: "image", url: "/Images/portfolio/graphic/label/9.webp" },

        { type: "image", url: "/Images/portfolio/graphic/label/12.webp" },
        { type: "image", url: "/Images/portfolio/graphic/label/13.webp" },
        { type: "image", url: "/Images/portfolio/graphic/label/14.webp" },
        {
          type: "image",
          url: "/Images/portfolio/graphic/label/packaging1.webp",
        },
        {
          type: "image",
          url: "/Images/portfolio/graphic/label/packaging2.webp",
        },
        {
          type: "image",
          url: "/Images/portfolio/graphic/label/packaging3.webp",
        },

        // { type: "image", url: "/Images/portfolio/graphic/label/8.webp" },
        // { type: "image", url: "/Images/portfolio/graphic/label/label1.webp" },
        // { type: "image", url: "/Images/portfolio/graphic/label/label2.webp" },
        // { type: "image", url: "/Images/portfolio/graphic/packaging/1.webp" },
        // { type: "image", url: "/Images/portfolio/graphic/packaging/2.webp" },
        // { type: "image", url: "/Images/portfolio/graphic/packaging/3.webp" },
        // { type: "image", url: "/Images/portfolio/graphic/label/3.webp" },
        // { type: "image", url: "/Images/portfolio/graphic/label/4.webp" },
        // { type: "image", url: "/Images/portfolio/graphic/label/1.webp" },
        { type: "image", url: "/Images/portfolio/graphic/packaging/4.webp" },


        { type: "image", url: "/Images/portfolio/graphic/label/label6.webp" },
      ],
    },

    {
      id: 7,
      category: "Logo/Brochure/Catalogue",
      coverImg: "/Images/portfolio/packaging/3.webp",
      gallery: [
        { type: "image", url: "/Images/portfolio/graphic/product/saajriwaaj.webp" },
        { type: "image", url: "/Images/portfolio/graphic/label/daf.webp" },

       
{ type: "image", url: "/Images/portfolio/graphic/label/prodsol.webp" },
        // { type: "image", url: "/Images/portfolio/graphic/label/8.webp" },
         { type: "image", url: "/Images/portfolio/graphic/label/10.webp" },
        { type: "image", url: "/Images/portfolio/graphic/label/logo.webp" },
      
        { type: "image", url: "/Images/portfolio/graphic/label/label5.webp" },
        { type: "image", url: "/Images/portfolio/graphic/label/logo1.webp" },
       
        { type: "image", url: "/Images/portfolio/graphic/label/cover.webp" },
           { type: "image", url: "/Images/portfolio/graphic/label/cover1.webp" },
        
         // { type: "image", url: "/Images/portfolio/graphic/label/logo2.webp" },
        // { type: "image", url: "/Images/thumbnail/logo1.webp" },
          // { type: "image", url: "/Images/portfolio/graphic/label/label4.webp" },

      ],
    },

    {
      id: 8,
      category: "Restaurant",
      coverImg: "/Images/work/Restaurants4.jpeg",
      gallery: [
        { type: "image", url: "/Images/portfolio/graphic/restraurant/6.webp" },
        { type: "image", url: "/Images/portfolio/graphic/food/3.webp" },
        {
          type: "image",
          url: "/Images/portfolio/graphic/food/Restaurants4.webp",
        },

        {
          type: "image",
          url: "/Images/portfolio/graphic/food/Restaurants3.webp",
        },
        {
          type: "image",
          url: "/Images/portfolio/graphic/restraurant/Restaurants1.webp",
        },
        {
          type: "image",
          url: "/Images/portfolio/graphic/restraurant/Restaurants10.webp",
        },

        {
          type: "image",
          url: "/Images/portfolio/graphic/restraurant/Restaurants3.webp",
        },
        {
          type: "image",
          url: "/Images/portfolio/graphic/restraurant/Restaurants4.webp",
        },
        {
          type: "image",
          url: "/Images/portfolio/graphic/restraurant/Restaurants5.webp",
        },
        {
          type: "image",
          url: "/Images/portfolio/graphic/restraurant/Restaurants6.webp",
        },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/6.webp" },
        {
          type: "image",
          url: "/Images/portfolio/graphic/restraurant/Restaurants7.webp",
        },

        {type: "image",url: "/Images/portfolio/graphic/restraurant/Restaurants9.webp"},
        {type: "image",url: "/Images/portfolio/graphic/restraurant/Restaurants11.webp"},
        {type: "image",url: "/Images/portfolio/graphic/restraurant/Restaurants12.webp"},
        {type: "image",url: "/Images/portfolio/graphic/restraurant/Restaurants13.webp"},
        {type: "image",url: "/Images/portfolio/graphic/restraurant/Restaurants14.webp"},

      ],
    },
    {
      id: 9,
      category: "Products",
      coverImg: "/Images/work/Restaurants4.jpeg",
      gallery: [
        {
          type: "image",
          url: "/Images/portfolio/graphic/product/mubasa1.webp",
        },
        {
          type: "image",
          url: "/Images/portfolio/graphic/product/mubasa2.webp",
        },
        {
          type: "image",
          url: "/Images/portfolio/graphic/product/mubasa3.webp",
        },
        { type: "image", url: "/Images/portfolio/graphic/product/murgi1.webp" },
        { type: "image", url: "/Images/portfolio/graphic/product/murgi2.webp" },
        { type: "image", url: "/Images/portfolio/graphic/product/ibnta1.webp" },
        { type: "image", url: "/Images/portfolio/graphic/product/liqa1.webp" },
        { type: "image", url: "/Images/portfolio/graphic/product/liqa2.webp" },
        // { type: "image", url: "/Images/portfolio/graphic/product/liqa3.webp" },
        { type: "image", url: "/Images/portfolio/graphic/product/liqa5.webp" },
        { type: "image", url: "/Images/portfolio/graphic/product/liqa6.webp" },
        { type: "image", url: "/Images/portfolio/graphic/product/liqa7.webp" },
        // { type: "image", url: "/Images/portfolio/graphic/product/goyal1.webp" },
        // { type: "image", url: "/Images/portfolio/graphic/product/goyal2.webp" },
      ],
    },
    {
      id: 10,
      category: "education",
      coverImg: "/Images/work/Restaurants4.jpeg",
      gallery: [
        { type: "image", url: "/Images/portfolio/graphic/education/1.webp" },
        { type: "image", url: "/Images/portfolio/graphic/education/2.webp" },
        { type: "image", url: "/Images/portfolio/graphic/education/3.webp" },
          { type: "image", url: "/Images/portfolio/graphic/education/4.webp" },
        { type: "image", url: "/Images/portfolio/graphic/education/5.webp" },
        { type: "image", url: "/Images/portfolio/graphic/education/6.webp" },
          { type: "image", url: "/Images/portfolio/graphic/education/7.webp" },
        { type: "image", url: "/Images/portfolio/graphic/education/8.webp" },
      ],
    },
     {
      id: 11,
      category: "printing",
      coverImg: "/Images/work/Restaurants4.jpeg",
      gallery: [
       { type: "image", url: "/Images/portfolio/graphic/restraurant/21.webp" },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/22.webp" },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/23.webp" },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/24.webp" },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/25.webp" },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/26.webp" },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/27.webp" },
        { type: "image", url: "/Images/portfolio/graphic/restraurant/28.webp" },
      ],
    },
    { id: 12,
      category: "Menu",
    gallery: [
 {type:"iframe", fullurl:"https://online.fliphtml5.com/jbrzt/Food-Menu-Black/",url:"/Images/thumbnail/oasis3.webp" },
        {type:"iframe", fullurl:"https://online.fliphtml5.com/jbrzt/Jaggi-Resorts_compressed/",url:"/Images/thumbnail/oasis4.webp" },
        {type:"iframe", fullurl:"https://online.fliphtml5.com/jbrzt/Shaurya-Menu-compressed/",url:"/Images/thumbnail/oasis5.webp" },
        
    
    ]
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  const handleNext = (e) => {
    e.stopPropagation(); // Prevents clicking the backdrop
    setSelectedImage(
      (prev) =>
        (prev + 1) %
        data?.find((item) => item.category == subcat)?.gallery.length,
    );
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImage(
      (prev) =>
        (prev -
          1 +
          data?.find((item) => item.category == subcat)?.gallery.length) %
        data?.find((item) => item.category == subcat)?.gallery.length,
    );
  };
  return (
    <div className="w-full relative h-[78vh] overflow-auto scroll-smooth  no-scrollbar">
      <div
        className={`sticky -top-0 z-10 bg-white/[0.02]  rounded-2xl p-2 mb-2 backdrop-blur-md flex md:flex-wrap gap-3 justify-between overflow-auto  md:justify-center gap-x-5 text-white `}
      >
        {graphicSubCategories.map((item, index) => {
          return (
            <div
              onClick={() => {setSubcat("")  , 
                
                setTimeout(() => {
                  setSubcat(item)
                }, 100);
                }}
              key={index}
              className={` text-nowrap cursor-pointer border-b border-gray-600/50 border-dotted text-[12px] md:text-[20px] px-3 py-1  capitalize font-mono   ${subcat == item ? "bg-[#cc5f4d] rounded-xl " : ""} `}
            >
              {item}
            </div>
          );
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
            {data?.find((item) => item?.category == subcat)?.gallery.map((asset, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-xl cursor-pointer bg-black/20 border border-white/10 shadow-lg "
                  onClick={() => setSelectedImage(index)}
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
                      <Maximize2
                        strokeWidth={2}
                        className="w-6 h-6 text-white"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
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
             
              className="relative w-full h-full max-w-7xl max-h-screen p-4  flex justify-center items-center overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              { data?.find((item) => item?.category == subcat)?.gallery[
                    selectedImage
                  ].type =="iframe"  &&    <iframe 
                      src={data.find((item) => item.category == subcat)?.gallery[
                    selectedImage
                  ].fullurl}
                      className="w-full h-full bg-black"
                   title="Food Menu Black" seamless="seamless" scrolling="no" frameBorder="0" allowtransparency="true" allowfullscreen="true"
                    /> }
                  
                  
                  
                  
                   { data.find((item) => item.category == subcat)?.gallery[
                    selectedImage
                  ].type =="image" &&<img
                src={
                  data.find((item) => item.category == subcat)?.gallery[
                    selectedImage
                  ].url
                }
                // object-contain ensures the whole width fits, but if it's super tall, the user might want to scroll it.
                // Using max-h-full keeps it entirely within the viewport. Change to h-auto if you prefer them to scroll long pages.
                className="w-full h-[80%] object-contain rounded-lg shadow-2xl"
                alt="Full screen website design"
              /> }
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Graphic;
