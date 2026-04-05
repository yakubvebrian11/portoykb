import HeroImage from "/assets/heroo.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/pvsyst.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/etap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nextjs.png";
import Tools8 from "/assets/tools/octave.png";
import Tools9 from "/assets/tools/excel.png";
import Tools10 from "/assets/tools/word.png";
import Tools11 from "/assets/tools/power.png";
import Tools12 from "/assets/tools/canva.png";
import Tools13 from "/assets/tools/autocad.png";
import Tools14 from "/assets/tools/codeb.png";
import Tools15 from "/assets/tools/form.png";
import Tools16 from "/assets/tools/sheets.png";
import Tools17 from "/assets/tools/docs.png";
import Tools18 from "/assets/tools/manag.png";
import Tools19 from "/assets/tools/report.png";
import Tools20 from "/assets/tools/calendar.png";
import Tools21 from "/assets/tools/C++.png";
import Tools22 from "/assets/tools/css.png";
import Tools23 from "/assets/tools/html.png";
import Tools24 from "/assets/tools/atmel.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    kategori: "Coding Tools",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    kategori: "Web Development",
    dad: "200",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    kategori: "Web Development",
    dad: "400",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    kategori: "Web Development",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Next JS",
    ket: "Framework",
    kategori: "Web Development",
    dad: "700",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "PVsyst",
    ket: "Photovoltaic (PV) Simulation",
    kategori: "Engineering",
    dad: "300",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "ETAP",
    ket: "Power Analyst System",
    kategori: "Engineering",
    dad: "500",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "GNU Octave",
    ket: "Numerical Computing",
    kategori: "Engineering",
    dad: "800",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "AutoCAD",
    ket: "CAD",
    kategori: "Engineering",
    dad: "1300",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Microsoft Excel",
    ket: "Administration Tools",
    kategori: "Administration Tools",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Microsoft Word",
    ket: "Administration Tools",
    kategori: "Administration Tools",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Microsoft Power Point",
    ket: "Administration Tools",
    kategori: "Administration Tools",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Canva",
    ket: "Design APP",
    kategori: "Design",
    dad: "1200",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Code::Blocks",
    ket: "Code Editor",
    kategori: "Coding Tools",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "Google Docs",
    ket: "Administration Tools",
    kategori: "Administration Tools",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Google Sheet",
    ket: "Administration Tools",
    kategori: "Administration Tools",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "Google Form",
    ket: "Administration Tools",
    kategori: "Administration Tools",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Management",
    ket: "Project Manager",
    kategori: "Project Manager",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "Reporting",
    ket: "Project Manager",
    kategori: "Project Manager",
    dad: "1900",
  },
  {
    id: 20,
    gambar: Tools20,
    nama: "Goolge Calendar",
    ket: "Project Manager",
    kategori: "Project Manager",
    dad: "2000",
  },
  {
    id: 21,
    gambar: Tools21,
    nama: "C++",
    ket: "Language",
    kategori: "Web Development",
    dad: "2100",
  },
  {
    id: 22,
    gambar: Tools22,
    nama: "CSS",
    ket: "Language",
    kategori: "Web Development",
    dad: "2200",
  },
  {
    id: 23,
    gambar: Tools23,
    nama: "HTML",
    ket: "Language",
    kategori: "Web Development",
    dad: "2300",
  },
  {
    id: 24,
    gambar: Tools24,
    nama: "Atmel Studio",
    ket: "Microcontroller Programming IDE",
    kategori: "Coding Tools",
    dad: "2400",
  },
];

export const categories = [
  { id: "all", name: "All" },
  { id: "Coding Tools", name: "Coding Tools" },
  { id: "Web Development", name: "Language and Framework" },
  { id: "Engineering", name: "Engineering" },
  { id: "Administration Tools", name: "Administration Tools" },
  { id: "Design", name: "Design" },
  { id: "Project Manager", name: "Project Manager" },
];

export const getToolsByCategory = (categoryId) => {
  if (categoryId === "all") {
    return listTools;
  }
  return listTools.filter((tool) => tool.kategori === categoryId);
};

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";

export const listProyek = [
  {
    id: 2,
    cover: Proyek2,
    nama: "Web Portofolio",
    tahun: "2026",
    desk: `A personal portfolio website developed using React 
    with Vite as the build tool to enable a fast and lightweight 
    development process. The interface is designed with Tailwind CSS, 
    resulting in a modern, responsive, and consistent layout across various 
    devices. Interactive features such as the project carousel are implemented 
    using Swiper.js, with a modular component structure and separated data management to 
    improve maintainability and scalability. The website is deployed on Vercel to ensure optimal 
    performance and reliable accessibility.`,

    frontend: [
      "React as the main library for building component-based user interfaces",
      "Vite as the build tool for a fast development server and lightweight bundling",
      "Tailwind CSS for modern and responsive styling",
      "Swiper.js for project and documentation carousels",
    ],

    performance: [
      "Lazy loading for images and components",
      "Build optimization using Vite for faster bundling and hot reload",
      "Code splitting and dynamic rendering for better load performance",
      "Smooth scrolling and animation optimization using Framer Motion",
      "Responsive design with a mobile-first approach",
      "Efficient state management to minimize unnecessary re-renders",
      "Optimized image rendering with object-fit and constrained dimensions",
      "Modal and portal rendering to reduce DOM complexity",
    ],

    gallery: [
      "/assets/proyek/porto/p8.webp",
      "/assets/proyek/porto/p0.webp",
      "/assets/proyek/porto/p1.webp",
      "/assets/proyek/porto/p2.webp",
      "/assets/proyek/porto/p3.webp",
      "/assets/proyek/porto/p4.webp",
      "/assets/proyek/porto/p5.webp",
      "/assets/proyek/porto/p6.webp",
      "/assets/proyek/porto/p7.webp",
    ],
  },

  {
    id: 1,
    cover: Proyek1,
    nama: "Tool Load Unbalance Analyzer",
    tahun: "2025",
    desk: `Load Unbalance Analyzer is a GNU Octave-based application 
          designed to analyze the loading condition of three-phase 
          distribution transformers interactively. The program allows 
          users to input phase current data, transformer capacity, 
          phase voltage, and neutral resistance through a table input 
          or by importing data from an Excel file. 
          The system then calculates the neutral current, loading percentage, 
          load imbalance level using the a, b, and c coefficient method, 
          power losses, and estimated financial losses. 
          The application is also equipped with load balancing simulation 
          using a greedy algorithm to support technical evaluation of 
          electric power distribution networks.`,

    fitur: [
      "Manual data input & Excel import",
      "Add and remove rows in the table",
      "Reset all input data",
      "Reset analysis results",
      "Detect the highest load imbalance",
      "Estimate power losses & financial losses",
      "Automatic load balancing simulation using a greedy algorithm",
      "Export results to Excel/TXT",
      "Simulation graph visualization",
    ],

    gallery: [
      "/assets/proyek/ast/ast1.webp",
      "/assets/proyek/ast/ast2.webp",
      "/assets/proyek/ast/ast3.webp",
      "/assets/proyek/ast/ast4.webp",
      "/assets/proyek/ast/ast5.webp",
      "/assets/proyek/ast/ast6.webp",
      "/assets/proyek/ast/ast7.webp",
      "/assets/proyek/ast/ast8.webp",
      "/assets/proyek/ast/ast9.webp",
      "/assets/proyek/ast/ast10.webp",
      
    ],
  },

  {
    id: 3,
    cover: Proyek3,
    nama: "Automatic Curtain",
    tahun: "2023",
    desk: `Automatic Curtain Control System is an IoT 
    prototype developed as a smart home automation project. 
    The system uses an ATmega16 microcontroller programmed in C 
    language to control the movement of the curtain based on the 
    ambient light intensity. An LDR sensor detects the light level in 
    real time and drives a servo motor to open the curtain when the 
    environment is bright and close it when it is dark. The system was designed, 
    simulated, and tested using Proteus before being implemented as a hardware prototype.`,

    Hardware: [
      "ATmega16 — Microcontroller used as the central control unit of the system",
      "Sensor LDR — Sensor used to detect light intensity",
      "Servo Motor — Actuator used to open and close the curtain",
    ],

    Software: [
      "Atmel Studio — IDE for programming AVR microcontrollers",
      "CodeVisionAVR — Compiler C for ATmega16",
      "Proteus — Electronic circuit simulation software",
    ],

    Functional: [
      "The curtain automatically opens when the light intensity exceeds the threshold",
      "The curtain automatically closes when the light intensity falls below the threshold",
      "Manual adjustment through reset or reprogramming",
      "A cost-effective and scalable prototype for smart home applications",
    ],

    gallery: [
      "/assets/proyek/bingkai/bingkai1.webp",
      "/assets/proyek/bingkai/bingkai2.webp",
      "/assets/proyek/bingkai/bingkai3.webp",
      "/assets/proyek/bingkai/bingkai4.webp",
    ],
  },
];

export const listexperience = [
  {
    company: "PT PLN (Persero) - ULP Kota Magelang",
    date: "Feb - Apr 2025",
    role: "Technical Services Bandongan — Intern",

    certificate: "/assets/certifiMagang/certifM1.webp",

    jobdesk: [
      "Restored customer voltage from 140V to 220V by correcting service connection issues, improving power supply quality.",
      "Executed Right of Way (ROW) activities on medium-voltage distribution networks, achieving reliability indices of SAIDI (0.0058), SAIFI (0.303), and CAIDI (0.191) in compliance with SPLN 68:2:1986.",
      "Resolved customer electrical issues related to MCB, fuses, and non-standard installations effectively and in a timely manner.",
      "Conducted load measurement and analysis on distribution transformers to monitor load imbalance conditions.",
      "Successfully normalized overvoltage conditions for 10 customers, reducing voltage from 240–261V to 223–228V, improving power quality and reducing the risk of equipment damage.",
      "Prepared technical documentation and data-driven evaluation reports to support improvements in distribution system performance.",
    ],

    documentation: [
      "/assets/certifiMagang/dokumentasi/dok0.webp",
      "/assets/certifiMagang/dokumentasi/dok1.webp",
      "/assets/certifiMagang/dokumentasi/dok2.webp",
      "/assets/certifiMagang/dokumentasi/dok3.webp",
      "/assets/certifiMagang/dokumentasi/dok4.webp",
      "/assets/certifiMagang/dokumentasi/dok5.webp",
      "/assets/certifiMagang/dokumentasi/dok6.webp",
      "/assets/certifiMagang/dokumentasi/dok7.webp",
      "/assets/certifiMagang/dokumentasi/dok8.webp",
      "/assets/certifiMagang/dokumentasi/dok9.webp",
    ],
  },
];
