import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { listProyek } from "../data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProyekSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (selectedProject || previewImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject, previewImage]);

  return (
    <section
      id="proyek"
      className="w-full scroll-mt-10 mt-5 px-4 sm:px-8 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-yellow-500">
            Projects
          </h1>
        </div>

        <div className="sm:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1.2}
          >
            {listProyek.map((proyek, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => setSelectedProject(proyek)}
                  className="group bg-slate-900/50 backdrop-blur p-5 rounded-xl border border-slate-700 shadow-xl shadow-black/40 active:scale-95 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-14 h-14 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center overflow-hidden">
                      <img
                        src={proyek.cover}
                        alt={proyek.nama}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>

                  <p className="text-amber-400 text-xs mb-1 text-center">
                    {proyek.tahun}
                  </p>

                  <h2 className="text-slate-100 text-sm font-semibold mb-4 text-center line-clamp-2">
                    {proyek.nama}
                  </h2>

                  <button className="mt-auto text-xs px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300">
                    View Details
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {listProyek.map((proyek, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(proyek)}
              className="group bg-slate-900/50 backdrop-blur p-6 rounded-xl border border-slate-700 shadow-xl shadow-black/40 hover:shadow-2xl hover:-translate-y-2 hover:border-amber-500/40 hover:bg-slate-800/60 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src={proyek.cover}
                    alt={proyek.nama}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              <p className="text-amber-400 text-xs mb-1 text-center">
                {proyek.tahun}
              </p>

              <h2 className="text-slate-100 text-sm font-semibold mb-4 text-center line-clamp-2 group-hover:text-amber-400 transition-colors">
                {proyek.nama}
              </h2>

              <button className="mt-auto text-xs px-5 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 group-hover:bg-amber-500 group-hover:text-black transition-all">
                View Details
              </button>
            </div>
          ))}
        </div>

        {selectedProject &&
          createPortal(
            <>
              <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-9999"
                onClick={() => setSelectedProject(null)}
              />

              <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
                <div
                  className="relative bg-slate-900/95 backdrop-blur border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[70vh] overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-5 border-b border-slate-700 relative text-center">
                    <h3 className="text-white font-semibold text-lg">
                      {selectedProject.nama}
                    </h3>
                    <p className="text-amber-400 text-sm">
                      {selectedProject.tahun}
                    </p>

                    <button
                      className="absolute top-5 right-5 text-2xl text-slate-400 hover:text-white transition"
                      onClick={() => setSelectedProject(null)}
                    >
                      ×
                    </button>
                  </div>

                  <div className="max-h-[calc(70vh-4.5rem)] overflow-y-auto p-8">
                    <div className="text-center mb-8">
                      <p className="text-amber-400 text-sm">OVERVIEW</p>
                    </div>

                    <p className="text-slate-300 text-sm mb-8 text-justify">
                      {selectedProject.desk}
                    </p>

                    <div className="space-y-8">
                      {Object.keys(selectedProject).map((key) => {
                        if (
                          Array.isArray(selectedProject[key]) &&
                          key !== "gallery"
                        ) {
                          return (
                            <div key={key}>
                              <h4 className="text-xs uppercase text-amber-400 mb-3">
                                {key}
                              </h4>

                              <ul className="list-disc grid sm:grid-cols-2 gap-3">
                                {selectedProject[key].map((item, i) => (
                                  <li
                                    key={i}
                                    className="text-sm text-slate-300 p-2  "
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>

                    <div className="mt-10">
                      <h4 className="text-xs uppercase text-amber-400 mb-4 text-center">
                        Documentation
                      </h4>

                      <div className="relative">
                        <div className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 text-3xl text-amber-400 cursor-pointer hover:text-white">
                          <i className="ri-arrow-left-s-line"></i>
                        </div>

                        <div className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 text-3xl text-amber-400 cursor-pointer hover:text-white">
                          <i className="ri-arrow-right-s-line"></i>
                        </div>

                        <Swiper
                          modules={[Pagination, Navigation]}
                          navigation={{
                            prevEl: ".custom-prev",
                            nextEl: ".custom-next",
                          }}
                          pagination={{
                            clickable: true,
                            dynamicBullets: true,
                          }}
                          spaceBetween={20}
                          slidesPerView={1}
                        >
                          {selectedProject.gallery?.map((img, i) => (
                            <SwiperSlide key={i}>
                              <div className="flex justify-center overflow-hidden rounded-lg">
                                <img
                                  src={img}
                                  onClick={() => setPreviewImage(img)}
                                  className="
                                  w-full h-40
                                  sm:h-64 sm:max-w-md 
                                  object-cover cursor-zoom-in 
                                  transition-transform duration-300 hover:scale-105
                                "
                                  alt={`doc-${i}`}
                                />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>,
            document.body,
          )}

        {previewImage &&
          createPortal(
            <div className="fixed inset-0 z-99999 flex items-center justify-center p-4">
              <div
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
                onClick={() => setPreviewImage(null)}
              />

              <div className="relative max-w-5xl w-full">
                <img
                  src={previewImage}
                  className="w-full max-h-[70vh] object-contain rounded-lg"
                  alt="preview"
                />

                <button
                  onClick={() => setPreviewImage(null)}
                  className="absolute -top-10 right-0 text-white text-4xl hover:text-amber-400"
                >
                  &times;
                </button>
              </div>
            </div>,
            document.body,
          )}
      </div>
    </section>
  );
};

export default ProyekSection;
