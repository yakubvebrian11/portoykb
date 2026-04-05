import React, { useState } from "react";
import { motion } from "framer-motion";

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    const newErrors = {};

    if (!form.name) newErrors.name = "Complete your name";
    if (!form.email) newErrors.email = "Complete your email";
    if (!form.message) newErrors.message = "Complete your message";

    if (Object.keys(newErrors).length) {
      e.preventDefault();
      setErrors(newErrors);
    }
  };

  const contactCards = [
    {
      icon: "ri-mail-fill",
      title: "Email",
      value: "yakubvebrian@gmail.com",
    },
    {
      icon: "ri-map-pin-user-fill",
      title: "Location",
      value: "Magelang, Central Java, Indonesia",
    },
  ];

  const socials = [
    ["ri-instagram-line", "https://www.instagram.com/yakubuss_/"],
    ["ri-linkedin-box-line", "https://linkedin.com"],
    ["ri-github-line", "https://github.com"],
    ["ri-whatsapp-fill", "https://wa.me/6287705354212"],
  ];

  return (
    <section
      id="contact"
      className="w-full text-center mb-12 px-4 sm:px-8 lg:px-20 scroll-mt-32 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
        

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px bg-slate-700 w-16"></div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-yellow-500">
            Contact
          </h1>
          <div className="h-px bg-slate-700 w-16"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          
   
          <div className="lg:col-span-1 space-y-6">
            
            {contactCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-amber-400 transition-colors"
              >
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 mb-4">
                  <i className={card.icon}></i>
                </div>
                <h3 className="text-white font-bold mb-1">{card.title}</h3>
                <p className="text-slate-400 text-sm">{card.value}</p>
              </motion.div>
            ))}

        
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-amber-400 transition-colors"
            >
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 mb-4">
                <i className="ri-links-fill"></i>
              </div>
              <h3 className="text-white font-bold mb-3">Social Media</h3>
              <div className="flex gap-3 justify-center">
                {socials.map(([icon, link], i) => (
                  <motion.a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-amber-500 hover:text-black transition"
                  >
                    <i className={icon}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="lg:col-span-2">
            <form
              action="https://formsubmit.co/yakubvebrian@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl"
            >
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                
                {["name", "email"].map((field) => (
                  <div key={field}>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder={
                        field === "name"
                          ? "Your name..."
                          : "Enter email..."
                      }
                      value={form[field]}
                      onChange={handleChange}
                      className="bg-slate-900 border border-slate-600 text-white p-3 rounded-lg w-full"
                    />
                    {errors[field] && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  rows="5"
                  name="message"
                  placeholder="Enter message..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-600 text-white p-3 rounded-lg mb-2"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs">
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 p-4 rounded-xl font-bold flex justify-center gap-2 mt-6"
              >
                <i className="ri-send-plane-fill"></i>
                Send
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;