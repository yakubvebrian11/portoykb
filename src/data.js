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
import Tools25 from "/assets/tools/cadesimu.png";
import Tools26 from "/assets/tools/cxp.png";

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
  {
    id: 25,
    gambar: Tools25,
    nama: "CADe SIMU",
    ket: "Electrical Control Circuit Simulation",
    kategori: "Engineering",
    dad: "2500",
  },
  {
    id: 26,
    gambar: Tools26,
    nama: "CX-Programming",
    ket: "Programable Logic Controller (PLC)",
    kategori: "Engineering",
    dad: "2600",
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
import Proyek7 from "/assets/proyek/proyek3.webp";
import Proyek3 from "/assets/proyek/proyek4.png";
import Proyek4 from "/assets/proyek/proyek5.png";
import Proyek5 from "/assets/proyek/proyek6.png";
import Proyek6 from "/assets/proyek/proyek7.png";

export const listProyek = [
 {
    id: 2,
    cover: Proyek2,
    nama: "Web Portofolio",
    tahun: "2026",
    desk: "A personal portfolio website developed using React with Vite as the build tool to enable a fast and lightweight development process. The interface is designed with Tailwind CSS, resulting in a modern, responsive, and consistent layout across various devices. Interactive features such as the project carousel are implemented using Swiper.js, with a modular component structure and separated data management to improve maintainability and scalability. The website is deployed on Vercel to ensure optimal performance and reliable accessibility.",

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
    desk: "Load Unbalance Analyzer is a GNU Octave-based application designed to analyze the loading condition of three-phase distribution transformers interactively. The program allows users to input phase current data, transformer capacity, phase voltage, and neutral resistance through a table input or by importing data from an Excel file. The system then calculates the neutral current, loading percentage, load imbalance level using the a, b, and c coefficient method, power losses, and estimated financial losses. The application is also equipped with load balancing simulation using a greedy algorithm to support technical evaluation of electric power distribution networks.",

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
  "id": 3,
  "cover": Proyek3,
  "nama": "Design Layout ATS",
  "tahun": "2024",
  "desk": "Automatic Transfer Switch (ATS) design layout and control schematic project. This electrical engineering design focuses on creating an automatic main power-to-backup power transition system infrastructure, ensuring optimal space planning, safe wiring paths, and structured physical component layout configurations inside a distribution box panel.",
  "Functional": "The Automatic Transfer Switch (ATS) system operates by continuously monitoring the availability of the main power source (PLN) using an electromagnetic relay, keeping the main contactor energized to supply the load while the backup source contactor remains de-energized. When the main power source experiences a power outage or voltage loss, the relay detects the condition and activates Timer 1, which after a 5-second delay, sends a signal to energize the backup source contactor and transfer the load. Once the main power source is restored and its voltage returns to normal, the relay detects the recovered supply and activates Timer 2, initiating another 5-second delay before de-energizing the backup contactor and re-energizing the main contactor to transfer the load back. Throughout this entire transfer process, both contactors operate with a strict interlocking sequence, ensuring they cannot be energized simultaneously.",
  "Specification": [
    {
      "component": "Miniature Circuit Breaker (MCB)",
      "specification": "Schneider Electric Acti9 iK60N, 1P+N, 6A, 230 VAC",
      "function": "Provides protection and serves as the main control power supply."
    },
    {
      "component": "Magnetic Contactor",
      "specification": "2 × Schneider Electric LC1D09M7, 3P, 9A, 220 VAC Coil",
      "function": "Switches the load between the main power source and the backup power source."
    },
    {
      "component": "On-Delay Timer",
      "specification": "2 × Schneider Electric RE17RMMW, 24–240 VAC/DC (Set to 5 Seconds)",
      "function": "Provides a 5-second delay during power source transfer."
    },
    {
      "component": "Electromagnetic Relay",
      "specification": "Schneider Electric RXM2AB2P7, DPDT, 220 VAC Coil",
      "function": "Monitors the main power source and controls the transfer sequence."
    },
    {
      "component": "Pilot Lamp",
      "specification": "Schneider Electric Harmony XB5AVB3, Ø22 mm, Green/Red, 230 VAC LED",
      "function": "Indicates the active power source."
    },
    {
      "component": "Terminal Block",
      "specification": "Schneider Electric Linergy TR, 2.5 mm²",
      "function": "Provides cable termination and wiring connections."
    },
    {
      "component": "DIN Rail",
      "specification": "TS35 Galvanized Steel Rail (IEC 60715)",
      "function": "Supports mounting of electrical components."
    }
  ],
  "gallery": [
    "/assets/proyek/ATS/A0.webp",
    "/assets/proyek/ATS/A1.webp",
    "/assets/proyek/ATS/A2.webp",
    "/assets/proyek/ATS/A3.webp",
    "/assets/proyek/ATS/A4.webp",
    "/assets/proyek/ATS/A5.webp",
    "/assets/proyek/ATS/A6.PNG",
    "/assets/proyek/ATS/A7.PNG",
    "/assets/proyek/ATS/A8.PNG"
  ]
},

  {
  "id": 4,
  "cover": Proyek4,
  "nama": "Design Layout Direct On - Line (DOL)",
  "tahun": "2024",
  "desk": "This project focuses on the comprehensive design and simulation of a Direct-On-Line (DOL) Control Panel for a 1 HP (0.75 kW) three-phase induction motor starting system. The engineering workflow integrates high-precision 2D/3D physical layout modeling in AutoCAD with rigorous logical and functional validation inside CADe SIMU. By bridging mechanical spatial design and electrical control logic, the project ensures safety standard compliance, optimal wiring pathways, and flawless protection coordination before physical panel assembly.",
  "Functional": "The Direct-On-Line (DOL) starting system operates by delivering full three-phase line voltage directly to the 1 HP motor terminals when the Normally Open (NO) Start button is pressed, which activates the magnetic contactor coil and simultaneously closes the auxiliary NO contact (13-14) to establish a self-holding (latching) circuit that maintains power after the button is released. This continuous power supply remains active until the system is either manually shut down by pressing the Normally Closed (NC) Stop button—instantly interrupting the control loop—or automatically tripped by the Thermal Overload Relay (TOR) opening its NC contact (95-96) due to excessive thermal generation from an overcurrent condition, thereby isolating the motor and protecting its stator windings from severe damage.",
  "Specification": [
    {
      "component": "Miniature Circuit Breaker (Power)",
      "specification": "Schneider Electric Acti9 iK60N, 3P, 6A",
      "function": "Protects the 3-phase power circuit from short circuits."
    },
    {
      "component": "Miniature Circuit Breaker (Control)",
      "specification": "Schneider Electric Acti9 iK60N, 1P, 6A",
      "function": "Protects and supplies power to the control circuit."
    },
    {
      "component": "Magnetic Contactor",
      "specification": "Schneider Electric LC1D09M7, 3P, 9A, 220 VAC Coil",
      "function": "Connects and disconnects power to the motor."
    },
    {
      "component": "Thermal Overload Relay",
      "specification": "Schneider Electric LRD07 (1.6–2.5 A)",
      "function": "Protects the 1 HP motor from overcurrent and overload."
    },
    {
      "component": "Push Button (Start)",
      "specification": "Schneider Electric Harmony XB5AA31, NO, Ø22 mm",
      "function": "Starts the motor."
    },
    {
      "component": "Push Button (Stop)",
      "specification": "Schneider Electric Harmony XB5AA42, NC, Ø22 mm",
      "function": "Stops the motor."
    },
    {
      "component": "Pilot Lamp",
      "specification": "Schneider Electric Harmony XB5 Series, Green, Red, Yellow, Ø22 mm, 220 VAC LED",
      "function": "Indicates motor operating and power status."
    },
    {
      "component": "Terminal Strip",
      "specification": "12 Pole, 25 A, 600 V",
      "function": "Provides cable connection points for panel wiring."
    },
    {
      "component": "DIN Rail",
      "specification": "TS35, Galvanized Steel",
      "function": "Mounts internal electrical components."
    }
  ],
  "gallery": [
    "/assets/proyek/DOL/D1.png",
    "/assets/proyek/DOL/D2.png",
    "/assets/proyek/DOL/D3.webp",
    "/assets/proyek/DOL/D4.webp",
    "/assets/proyek/DOL/D5.webp",
    "/assets/proyek/DOL/D6.PNG",
    "/assets/proyek/DOL/D7.webp",
    "/assets/proyek/DOL/D8.webp",
    "/assets/proyek/DOL/D9.webp",
    "/assets/proyek/DOL/D10.webp"
  ]
},

  {
  "id": 5,
  "cover": Proyek5,
  "nama": "Design Layout Forward Reverse",
  "tahun": "2024",
  "desk": "This project focuses on the comprehensive design and simulation of a Forward-Reverse Control Panel for a 1 HP (0.75 kW) three-phase induction motor rotational direction management system. The engineering workflow integrates high-precision 2D/3D physical layout modeling in AutoCAD with rigorous logical and functional validation inside CADe SIMU. By bridging mechanical spatial design and electrical control logic, the project ensures safety standard compliance, optimal wiring pathways, and flawless electrical interlocking coordination to prevent short circuits before physical panel assembly.",
  "Functional": "The Forward-Reverse motor control system operates by alternating the phase sequence supplied to a 1 HP three-phase induction motor through the coordination of two separate magnetic contactors. When the Forward button is pressed, the first contactor coil energizes, securing a self-holding path and running the motor clockwise. Pressing the Reverse button activates the second contactor, swapping two power phases to reverse the motor's rotational direction. Throughout this process, a strict electrical interlocking sequence is maintained via normally closed (NC) auxiliary contacts to prevent both contactors from energizing simultaneously, which would cause a catastrophic phase-to-phase short circuit. The entire operation remains safely active until interrupted by the manual Stop button or automatically tripped by the Thermal Overload Relay (TOR) protecting the system from overcurrent conditions.",
  "Specification": [
    {
      "component": "Miniature Circuit Breaker (Power)",
      "specification": "Schneider Electric Acti9 iK60N, 3P, 6A",
      "function": "Provides short-circuit and overload protection for the 1 HP three-phase power circuit."
    },
    {
      "component": "Miniature Circuit Breaker (Control)",
      "specification": "Schneider Electric Acti9 iK60N, 1P, 6A",
      "function": "Provides protection and power supply for the control circuit."
    },
    {
      "component": "Magnetic Contactor",
      "specification": "2 × Schneider Electric LC1D09M7, 3P, 9A, 220 VAC Coil",
      "function": "Controls the forward and reverse rotation of the three-phase induction motor."
    },
    {
      "component": "Thermal Overload Relay",
      "specification": "Schneider Electric LRD07 (1.6–2.5 A)",
      "function": "Protects the 1 HP motor against overload conditions by monitoring phase current."
    },
    {
      "component": "Push Button (Forward)",
      "specification": "Schneider Electric Harmony XB5AA31, NO, Ø22 mm",
      "function": "Starts the motor in the forward direction."
    },
    {
      "component": "Push Button (Reverse)",
      "specification": "Schneider Electric Harmony XB5AA31, NO, Ø22 mm",
      "function": "Starts the motor in the reverse direction."
    },
    {
      "component": "Push Button (Stop)",
      "specification": "Schneider Electric Harmony XB5AA42, NC, Ø22 mm",
      "function": "Stops the motor by interrupting the control circuit."
    },
    {
      "component": "Emergency Stop Push Button",
      "specification": "Schneider Electric Harmony XB5AS542, NC, Ø22 mm, Twist Release",
      "function": "Immediately disconnects the control circuit during emergency conditions."
    },
    {
      "component": "Pilot Lamp",
      "specification": "Schneider Electric Harmony XB5 Series, Green, Yellow, Red, Ø22 mm, 220 VAC LED",
      "function": "Indicates power availability and motor operating status."
    },
    {
      "component": "Terminal Strip",
      "specification": "12 Pole, 25 A, 600 V",
      "function": "Provides cable termination and distribution for the control circuit."
    },
    {
      "component": "DIN Rail",
      "specification": "TS35, Galvanized Steel",
      "function": "Supports mounting of electrical components."
    },
    {
      "component": "Wire Duct",
      "specification": "PVC Slotted Wiring Duct, 40 × 40 mm",
      "function": "Organizes and protects internal panel wiring."
    }
  ],
  "gallery": [
    "/assets/proyek/FW/A0.webp",
    "/assets/proyek/FW/A1.webp",
    "/assets/proyek/FW/A2.webp",
    "/assets/proyek/FW/A3.webp",
    "/assets/proyek/FW/A4.webp",
    "/assets/proyek/FW/A5.webp",
    "/assets/proyek/FW/A6.PNG",
    "/assets/proyek/FW/A7.webp",
    "/assets/proyek/FW/A8.PNG",
    "/assets/proyek/FW/A9.PNG",
    "/assets/proyek/FW/A10.PNG",
    "/assets/proyek/FW/A11.PNG"
  ]
},

 {
  "id": 6,
  "cover": Proyek6,
  "nama": "Design Layout Star Delta",
  "tahun": "2024",
  "desk": "This project focuses on the engineering design and simulation of a Star-Delta Control Panel for a 3 HP (2.2 kW) three-phase induction motor starting infrastructure using AutoCAD. The design pipeline covers high-precision 3D layout modeling, spatial component arrangements, and technical schematics. The control logic is comprehensively simulated and validated inside CADe SIMU to verify sequential switching phases, automatic transitions, electrical interlocking safety, and heavy-duty motor protection systems.",
  "Functional": "The Star-Delta control system operates by reducing the starting current of a 3 HP three-phase induction motor through a multi-stage electrical transition managed by three distinct contactors: Main, Star, and Delta. Upon pressing the Start button, the Main and Star contactors activate simultaneously, connecting the motor windings in a Star configuration to draw lower initial current from the grid. Once the preset time on the On-Delay Timer is reached, the Star contactor disengages and the Delta contactor safely activates, transitioning the motor to a full-voltage Delta run configuration. A critical electrical interlocking circuit is maintained via auxiliary contacts to prevent simultaneous operation of the Star and Delta contactors, avoiding hazardous phase-to-phase short circuits. The entire control loop remains fully operational until interrupted by the manual Stop command or tripped by the Thermal Overload Relay.",
  "Specification": [
    {
      "component": "Miniature Circuit Breaker (Power)",
      "specification": "Schneider Electric Acti9 iK60N, 3P, 6A (Curve C)",
      "function": "Provides short-circuit and overload protection for the 3 HP three-phase motor power circuit."
    },
    {
      "component": "Miniature Circuit Breaker (Control)",
      "specification": "Schneider Electric Acti9 iK60N, 1P, 6A",
      "function": "Provides protection and power supply for the control circuit."
    },
    {
      "component": "Main Contactor",
      "specification": "Schneider Electric LC1D09M7, 3P, 9A, 220 VAC Coil",
      "function": "Connects the motor to the main power supply during both Star and Delta operation."
    },
    {
      "component": "Star Contactor",
      "specification": "Schneider Electric LC1D09M7, 3P, 9A, 220 VAC Coil",
      "function": "Connects the motor windings in the Star configuration during starting."
    },
    {
      "component": "Delta Contactor",
      "specification": "Schneider Electric LC1D09M7, 3P, 9A, 220 VAC Coil",
      "function": "Reconnects the motor windings in the Delta configuration after the preset delay."
    },
    {
      "component": "On-Delay Timer",
      "specification": "Schneider Electric RE17RMMW, 0.1–100 Hours, 24–240 VAC/DC",
      "function": "Controls the automatic transition from Star to Delta operation."
    },
    {
      "component": "Thermal Overload Relay",
      "specification": "Schneider Electric LRD10 (4–6 A)",
      "function": "Protects the 3 HP motor against overload conditions by monitoring phase current."
    },
    {
      "component": "Push Button (Start)",
      "specification": "Schneider Electric Harmony XB5AA31, NO, Green, Ø22 mm",
      "function": "Initiates the Star-Delta starting sequence."
    },
    {
      "component": "Push Button (Stop)",
      "specification": "Schneider Electric Harmony XB5AA42, NC, Red, Ø22 mm",
      "function": "Stops the motor by interrupting the control circuit."
    },
    {
      "component": "Emergency Stop Push Button",
      "specification": "Schneider Electric Easy Harmony XA2ES542, 1NC, Latching Turn-to-Release, Ø22 mm",
      "function": "Provides immediate emergency shutdown by cutting off the control circuit supply and locking it open until manually reset."
    },
    {
      "component": "Pilot Lamp",
      "specification": "Schneider Electric Harmony XB5 Series, Green, Yellow, Red, Ø22 mm, 220 VAC LED",
      "function": "Indicates power availability, run status, and fault/trip conditions of the control system."
    },
    {
      "component": "Terminal Strip",
      "specification": "12 Pole, 25 A, 600 V",
      "function": "Provides secure cable termination and distribution for external power and control connections."
    },
    {
      "component": "DIN Rail",
      "specification": "TS35, Galvanized Steel",
      "function": "Supports the installation of electrical components inside the panel."
    },
    {
      "component": "Wire Duct",
      "specification": "PVC Slotted Wiring Duct, 40 × 40 mm",
      "function": "Organizes and protects internal panel wiring."
    }
  ],
  "gallery": [
    "/assets/proyek/SD/S0.webp",
    "/assets/proyek/SD/S1.webp",
    "/assets/proyek/SD/S2.webp",
    "/assets/proyek/SD/S3.webp",
    "/assets/proyek/SD/S4.webp",
    "/assets/proyek/SD/S5.webp",
    "/assets/proyek/SD/S6.webp",
    "/assets/proyek/SD/S7.PNG",
    "/assets/proyek/SD/S8.PNG",
    "/assets/proyek/SD/S9.PNG",
    "/assets/proyek/SD/S10.PNG"
  ]
},

  {
    id: 7,
    cover: Proyek7,
    nama: "Automatic Curtain",
    tahun: "2023",
    desk: "Automatic Curtain Control System is an IoT prototype developed as a smart home automation project. The system uses an ATmega16 microcontroller programmed in C language to control the movement of the curtain based on the ambient light intensity. An LDR sensor detects the light level in real time and drives a servo motor to open the curtain when the environment is bright and close it when it is dark. The system was designed, simulated, and tested using Proteus before being implemented as a hardware prototype.",

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

    Functional:
      "The smart automated home device functions dynamically by executing real-time ambient lux monitoring. The system's control loops ensure that the motorized curtain automatically expands and opens when the integrated LDR sensor detects light intensity levels exceeding the hardcoded daybreak threshold value. Conversely, the actuator triggers the servo motor to safely close the curtain as dark ambient environments fall beneath the operational threshold. Manual adjustments and calibrations can be introduced by standard hardware reset execution or control parameter reprogramming.",

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
