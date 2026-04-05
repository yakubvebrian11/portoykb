import { listTools, categories, getToolsByCategory } from "../data";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

function SkillSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (selectedCategory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCategory]);

  return (
    <section id="skills" className="w-full py-12 px-4 lg:px-20 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-yellow-500">
          Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories
            .filter((c) => c.id !== "all")
            .map((category) => {
              const tools = getToolsByCategory(category.id);

              return (
                <div
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="bg-slate-900/50 backdrop-blur p-6 rounded-xl border border-slate-700 
                  shadow-xl shadow-black/40 
                  hover:shadow-2xl 
                  hover:-translate-y-1 
                  hover:border-slate-500 
                  hover:bg-slate-800/60 
                  transition-all duration-300 
                  cursor-zoom-in group"
                >
                  <h2 className="text-lg font-bold text-white mb-6 text-center group-hover:text-amber-400 transition-colors">
                    {category.name}
                  </h2>

                  <div className="grid grid-cols-2 gap-1">
                    {tools.map((tool) => (
                      <div
                        key={tool.id}
                        className="flex items-center gap-2 p-3 bg-slate-800/60 rounded-lg hover:bg-slate-700 transition-all"
                      >
                        <img
                          src={tool.gambar}
                          alt={tool.nama}
                          className="w-6 h-6 object-contain shrink-0"
                        />
                        <h3 className="text-xs font-medium text-slate-200 truncate">
                          {tool.nama}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {selectedCategory &&
        createPortal(
          <>
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-9999"
              onClick={() => setSelectedCategory(null)}
            />

            <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
              <div
                className="relative bg-slate-900/95 backdrop-blur border border-slate-700 rounded-2xl 
                max-w-4xl w-full max-h-[70vh] overflow-hidden shadow-2xl shadow-black/50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-5 border-b border-slate-700/50 sticky top-0 bg-slate-900/95 backdrop-blur z-10 flex justify-between items-center">
                  <h3 className="text-white font-semibold text-lg capitalize">
                    {selectedCategory}
                  </h3>

                  <button
                    className="text-2xl text-slate-400 hover:text-white transition-colors"
                    onClick={() => setSelectedCategory(null)}
                  >
                    ×
                  </button>
                </div>

                <div className="max-h-[calc(70vh-4.5rem)] overflow-y-auto modal-scroll scroll-smooth p-8">
                  <div className="text-center mb-8">
                    <p className="text-slate-400 uppercase tracking-wider">
                      {getToolsByCategory(selectedCategory).length} tools
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {getToolsByCategory(selectedCategory).map((tool) => (
                      <div
                        key={tool.id}
                        className="group p-4 bg-slate-800/60 rounded-xl 
                        hover:bg-slate-700 
                        transition-all 
                        text-center 
                        border border-slate-700 
                        hover:border-slate-500 
                        hover:-translate-y-1 
                        hover:shadow-lg"
                      >
                        <img
                          src={tool.gambar}
                          alt={tool.nama}
                          className="w-16 h-16 object-contain mx-auto mb-3 group-hover:scale-110 transition-transform"
                        />

                        <h3 className="text-sm font-semibold text-white">
                          {tool.nama}
                        </h3>

                        <p className="text-xs text-slate-400">{tool.ket}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>,
          document.body,
        )}
    </section>
  );
}

export default SkillSection;
