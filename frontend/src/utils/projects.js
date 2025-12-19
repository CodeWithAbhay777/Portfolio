import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiSocketdotio, SiWebrtc, SiOpenai, SiRedux, SiStripe, SiNextdotjs, SiFramer  } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { IoLogoCss3 , IoLogoHtml5 } from "react-icons/io5";


const projectsData = [
    {
        title: "Code Igniter",
        description: "Developed a real-time platform for coding collaboration, eliminating the need for screen-sharing or lengthy calls.",
        features: "Multi-language code editing , video calls (WebRTC) , whiteboard (TLDraw) , AIassistant (ChatGPT API) , and Google OAuth for secure code saving.",
        image: "/codeIgniterImage.png",
        techStack: [
            { name: "Reactjs", icon: SiReact },
            { name: "Nodejs", icon: SiNodedotjs },
            { name: "Expressjs", icon: SiExpress },
            { name: "MongoDB", icon: SiMongodb },
            { name: "TailwindCSS", icon: SiTailwindcss },
            { name: "Socket.io", icon: SiSocketdotio },
            { name: "WebRTC", icon: SiWebrtc },
            { name: "OpenAI", icon: SiOpenai },
        ],
        liveURL: "https://code-igniter-ftfo.vercel.app/",
        githubLink: "https://github.com/CodeWithAbhay777/Code_igniter",
        demo: "",
    },

    {
        title: "Code Cortex",
        description: "Built a full-stack Learning Management System enabling users to buy and sell courses with a seamless, responsive experience.",
        features: "Course marketplace, payment integration (Stripe) , user authentication, mobileresponsive, dark/light mode.",
        image: "/codeCortexImage.png",
        techStack: [
            { name: "Reactjs", icon: SiReact },
            { name: "Nodejs", icon: SiNodedotjs },
            { name: "Expressjs", icon: SiExpress },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Redux", icon: SiRedux },
            { name: "TailwindCSS", icon: SiTailwindcss },
            { name: "ShadCN", icon: null }, // No official react-icon for ShadCN
            { name: "Stripe", icon: SiStripe },
        ],
        liveURL: "https://code-cortex-kappa.vercel.app/",
        githubLink: "https://github.com/CodeWithAbhay777/Code_Cortex",
        demo: "https://drive.google.com/file/d/1ZFVWtU31IvJ4M6AQBhR_vJ6IV4NCECgM/view?usp=drive_link",
    },

    {
        title: "Portfolio",
        description: "A modern, responsive portfolio website built using Next.js to showcase my skills, projects, and contact information with smooth navigation and animations.",
        features: "Smooth scroll and section-based navigation , clean UI along with animations",
        image: "/portfolioImage.png",
        techStack: [
            { name: "Nextjs", icon: SiNextdotjs },
            { name: "Framer-motion", icon: SiFramer },
            { name : "TailwindCSS" , icon : SiTailwindcss}
        ],
        liveURL: "https://abhay-awasthi-portfolio.vercel.app/",
        githubLink: "https://github.com/CodeWithAbhay777/Portfolio",
        demo: "",
    },

    {
        title: "Dictionary",
        description: "Developed a dictionary with use of open source API with HTML ,CSS ,JS",
        features: "All important accessibilities , maintained session history , google search , pronunciation ",
        image: "/dictionaryImage.png",
        techStack: [
            { name: "HTML", icon: IoLogoHtml5 },
            { name: "CSS", icon: IoLogoCss3 },
            { name: "Javascript", icon: FaJs }
        ],
        liveURL: "https://dictionaryyyyy.netlify.app/",
        githubLink: "",
        demo: "",
    }
];

export default projectsData;
