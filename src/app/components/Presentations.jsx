"use client";

import { Play, StepBack, StepForward, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Presentations = () => {
  const aivideos = {
    id: 1,
    category: "Video Presentations",
    coverImg: "/Images/portfolio/ai/cover.gif",
    gallery: [
      {
        type: "video",
        url: "https://www.youtube.com/embed/J-xrMCtDCgU",
        thumb: "prodsol.webp",
      },
  {
        type: "video",
        url: "https://www.youtube.com/embed/XszgFnVc2uE",
        thumb: "electronica.webp",
      },
  {
        type: "video",
        url: "https://www.youtube.com/embed/c_Ejpxq2dwI",
        thumb: "army.webp",
      },
  {
        type: "video",
        url: "https://www.youtube.com/embed/sQB8aZIg2_k",
        thumb: "paaji1.webp",
      },
  

      
    ],
  };

  const [selectedAsset, setSelectedAsset] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedAsset !== null ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedAsset]);

  const getModalVideoUrl = (url) => {
    const videoId = url.split("/embed/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`;
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedAsset((prev) => (prev + 1) % aivideos.gallery.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedAsset(
      (prev) => (prev - 1 + aivideos.gallery.length) % aivideos.gallery.length
    );
  };

  return (
    <div className="relative w-full h-[78vh] overflow-auto no-scrollbar">
      {/* Thumbnail Grid */}
      <div className="w-full pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {aivideos.gallery.map((asset, index) => (
            <div
              key={index}
              onClick={() => setSelectedAsset(index)}
              className="group relative rounded-xl overflow-hidden cursor-pointer bg-black/20 border border-white/10 shadow-lg aspect-video"
            >
              <img
                src={`/Images/thumbnail/${asset.thumb}`}
                alt="Thumbnail"
                className="w-full h-full object-cover group-hover:opacity-70 transition"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/70 p-4 rounded-full">
                  <Play className="text-white w-8 h-8 pl-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedAsset !== null && (
          <motion.div
            className="fixed inset-0 z-9999 bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              className="absolute top-8 right-24 z-99 text-white"
              onClick={() => setSelectedAsset(null)}
            >
              <X size={32} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-6 top-1/2 z-50 text-white"
              onClick={handlePrev}
            >
              <StepBack size={28} />
            </button>

            {/* Next */}
            <button
              className="absolute right-6 top-1/2 z-50 text-white"
              onClick={handleNext}
            >
              <StepForward size={28} />
            </button>

            {/* Video Player */}
            <div className="w-full max-w-6xl px-4">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src={getModalVideoUrl(
                    aivideos.gallery[selectedAsset].url
                  )}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Presentations;