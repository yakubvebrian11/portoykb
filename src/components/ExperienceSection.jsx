import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { listexperience } from "../data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ExperienceSection = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (selectedExp || previewImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedExp, previewImage]);

  return (
    <section
      id="experience"
      className="w-full  scroll-mt-32 mt-5 px-4 sm:px-8 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-yellow-500">
            Experience
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {listexperience.map((exp, index) => (
            <div
              key={index}
              onClick={() => setSelectedExp(exp)}
              className="group bg-slate-900/50 backdrop-blur p-6 rounded-xl border border-slate-700 
              shadow-xl shadow-black/40 
              hover:shadow-2xl 
              hover:-translate-y-2 
              hover:border-slate-500 
              hover:bg-slate-800/60 
              transition-all duration-300 
              cursor-pointer flex flex-col w-full max-w-sm" 
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-amber-400">
                  <i className="ri-briefcase-4-fill text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-amber-400 transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-zinc-500 text-sm">{exp.date}</p>
                  <p className="text-zinc-400 text-sm">{exp.role}</p>
                </div>
              </div>

              <span className="text-xs text-zinc-500 mb-4">{exp.location}</span>

              <button className="mt-auto text-xs px-5 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 group-hover:bg-amber-500 group-hover:text-black transition-all">
                View Details
              </button>
            </div>
          ))}
        </div>

        {selectedExp &&
          createPortal(
            <>
              <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-9999"
                onClick={() => setSelectedExp(null)}
              />

              <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
                <div
                  className="relative bg-slate-900/95 backdrop-blur border border-slate-700 rounded-2xl 
                  max-w-3xl w-full max-h-[70vh] overflow-hidden shadow-2xl shadow-black/50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-5 border-b border-slate-700/50 sticky top-0 bg-slate-900/95 backdrop-blur z-10 flex justify-between items-center">
                    <h3 className="text-white font-semibold text-lg">
                      {selectedExp.company}
                      <p className="text-amber-400 uppercase tracking-wider text-xs">
                        {selectedExp.role} 
                      </p>
                      <p className="text-slate-500 text-xs mt-1">
                        {selectedExp.date}
                      </p>
                    </h3>
                    <button
                      className="text-2xl text-slate-400 hover:text-white transition-colors"
                      onClick={() => setSelectedExp(null)}
                    >
                      ×
                    </button>
                  </div>

                  <div className="max-h-[calc(70vh-4.5rem)] overflow-y-auto scroll-smooth p-8 pt-6">
                    <div className="mb-8">
                      <h4 className="text-xs uppercase text-amber-400 mb-4">
                        Job Description
                      </h4>

                      <ul className="list-disc pl-5 space-y-3">
                        {selectedExp.jobdesk.map((job, i) => (
                          <li
                            key={i}
                            className="text-xs text-slate-300 leading-relaxed text-justify "
                          >
                            {job}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-10">
                      <h4 className="text-xs uppercase text-amber-400 mb-4 text-center">
                        Certificate
                      </h4>

                      <div className="flex justify-center">
                        <img
                          src={selectedExp.certificate}
                          onClick={() =>
                            setPreviewImage(selectedExp.certificate)
                          }
                          className="max-w-sm w-full object-contain rounded-xl border border-slate-700 cursor-zoom-in"
                          alt="certificate"
                        />
                      </div>
                    </div>

                    <div className="mb-10">
                      <h4 className="text-xs uppercase text-amber-400 mb-4 text-center">
                        Documentation
                      </h4>

                      <div className="relative">
                        <div className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-3xl text-amber-400 hover:text-white transition">
                          <i className="ri-arrow-left-s-line"></i>
                        </div>

                        <div className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-3xl text-amber-400 hover:text-white transition">
                          <i className="ri-arrow-right-s-line"></i>
                        </div>

                        <Swiper
                          modules={[Pagination, Navigation]}
                          navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                          }}
                          pagination={{
                            clickable: true,
                            dynamicBullets: true,
                          }}
                          spaceBetween={20}
                          slidesPerView={1}
                        >
                          {selectedExp.documentation?.map((img, i) => (
                            <SwiperSlide key={i}>
                              <div className="flex justify-center">
                                <img
                                  src={img}
                                  loading="lazy"
                                  decoding="async"
                                  className="w-full max-w-md h-64 object-contain rounded-xl border border-slate-700 cursor-zoom-in"
                                  onClick={() => setPreviewImage(img)}
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

              <div className="relative w-full max-w-sm sm:max-w-xl md:max-w-2xl flex justify-center items-center">
                <img
                  src={previewImage}
                  className="w-full max-h-[70vh] object-contain rounded-xl shadow-2xl cursor-zoom-out"
                  alt="preview"
                  onClick={() => setPreviewImage(null)}
                />

                <button
                  onClick={() => setPreviewImage(null)}
                  className="absolute -top-10 right-0 text-4xl text-white hover:text-amber-400 transition"
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

export default ExperienceSection;
