import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { listEducation, listRelevantCourse } from "../edu";

const EducationSection = () => {
  const [selectedEdu, setSelectedEdu] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedEdu || selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedEdu, selectedImage]);

  return (
    <section id="education" className="w-full px-4 sm:px-8 lg:px-20 py-8">
      <div className="max-w-5xl mx-auto ">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-yellow-500 inline-block">
            Education
          </h1>
        </div>

        <div className="bg-slate-900/40 p-6 md:p-8 rounded-2xl border border-zinc-800 mb-10 max-w-xl mx-auto text-center shadow-2xl">
          <div className="w-14 h-14 mx-auto mb-4 bg-amber-500/90 rounded-xl flex items-center justify-center">
            <i className="ri-graduation-cap-fill text-2xl text-slate-900 hover:text-white"></i>
          </div>

          <h2 className="text-white text-xl md:text-2xl font-bold mb-1">
            Tidar University
          </h2>

          <p className="text-zinc-300 font-medium">Electrical Engineering</p>

          <p className="text-zinc-500 text-sm mb-4">
            Bachelor of Engineering (S.T.) • 2021 - 2025
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-800 rounded-lg border border-zinc-700">
            <span className="text-zinc-400 text-xs font-semibold">GPA</span>
            <span className="text-base font-bold text-white">
              3.47<span className="text-amber-500 text-sm">/4.00</span>
            </span>
          </div>
        </div>

        <h2 className="text-lg font-bold text-white text-center mb-6">
          Laboratory Assistant
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-12 justify-items-center ">
          {listEducation.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedEdu(item)}
              className="w-full max-w-md bg-slate-900/30 p-5 rounded-xl border border-slate-800 text-center shadow-2xl
              transition-all duration-500 ease-out
              hover:-translate-y-3 hover:scale-[1.03]
              hover:shadow-black"
            >
              <h3 className="font-bold text-white mb-1">{item.nama}</h3>
              <p className="text-xs text-zinc-500 mb-3">
                {item.position} • {item.tahun}
              </p>
              <button className="text-xs text-amber-400 font-semibold transition cursor-pointer">
                View Details
              </button>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700 pt-8">
          <h3 className="text-lg font-bold text-white mb-6 text-center">
            Relevant Coursework
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {listRelevantCourse.map((item) => (
              <div
                key={item.id}
                className="group bg-slate-900 p-4 rounded-xl border border-slate-700 hover:border-white hover:bg-slate-800  transition-all duration-500 ease-out
              hover:-translate-y-3 hover:scale-[1.03]
              hover:shadow-black"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 group-hover:scale-110 transition">
                    <i
                      className={`${item.icon || "ri-book-2-line"} text-lg`}
                    ></i>
                  </div>

                  <p className="text-zinc-300 text-sm font-medium leading-tight group-hover:text-white transition">
                    {item.nama}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedEdu &&
          createPortal(
            <>
              <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-9999"
                onClick={() => setSelectedEdu(null)}
              />

              <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
                <div
                  className="relative bg-slate-900/95 backdrop-blur border border-slate-700 rounded-2xl 
                  max-w-2xl w-full max-h-[70vh] overflow-hidden shadow-2xl shadow-black/50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-1 border-b border-slate-700/50 sticky top-0 bg-slate-900/95 backdrop-blur z-10">
                    <button
                      className="ml-auto block text-2xl text-slate-400 hover:text-amber-400 transition-colors"
                      onClick={() => setSelectedEdu(null)}
                    >
                      ×
                    </button>
                  </div>

                  <div className="max-h-[calc(70vh-4.5rem)] overflow-y-auto modal-scroll scroll-smooth p-8 pt-0">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {selectedEdu.nama}
                      </h2>
                      <p className="text-slate-400 uppercase tracking-wider">
                        {selectedEdu.position} • {selectedEdu.tahun}
                      </p>
                    </div>

                    <div className="mb-8">
                      <p className="text-slate-300 text-sm text-justify leading-relaxed">
                        Laboratory Assistant role focusing on practical
                        implementation of {selectedEdu.nama.toLowerCase()}{" "}
                        concepts.
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xs uppercase text-amber-400 mb-4">
                        Job Description
                      </h4>
                      <ul className="list-disc pl-3 space-y-3 text-justify">
                        {selectedEdu.jobs.map((item, i) => (
                          <li
                            key={i}
                            className="text-xs text-slate-300 leading-relaxed"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {selectedEdu.stats && (
                      <div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {Object.entries(selectedEdu.stats).map(
                            ([key, value]) => (
                              <div
                                key={key}
                                className="text-center p-3 bg-slate-800/50 rounded-xl border border-slate-700"
                              >
                                <div className="text-2xl font-bold text-amber-400">
                                  {value}
                                </div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                                  {key}
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="text-xs uppercase text-amber-400 mb-4 text-center font-bold tracking-wider">
                        Certificate
                      </h4>
                      <div className="flex justify-center">
                        <img
                          src={selectedEdu.certif[0]}
                          onClick={() =>
                            setSelectedImage(selectedEdu.certif[0])
                          }
                          className="max-w-sm w-full object-contain rounded-xl border border-slate-700 shadow-2xl hover:scale-105 transition duration-300 cursor-zoom-in"
                          alt={`${selectedEdu.nama} Certificate`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>,
            document.body,
          )}

       {selectedImage &&
  createPortal(
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-6">
      
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={() => setSelectedImage(null)}
      />

      
      <div className="relative w-full max-w-sm md:max-w-xl flex flex-col items-center">
       
        <button
          className="absolute -top-10 right-0 text-3xl text-white hover:text-amber-400 transition"
          onClick={() => setSelectedImage(null)}
        >
          &times;
        </button>

        <img
          src={selectedImage}
          className="w-full max-h-[70vh] object-contain rounded-xl shadow-2xl transition-all"
          alt="Preview"
          onClick={(e) => e.stopPropagation()} 
        />
      </div>
    </div>,
    document.body
  )
}
      </div>
    </section>
  );
};

export default EducationSection;
