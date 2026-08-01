import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jayveer Jebaliya — AI/ML Developer",
  author: "Jayveer Jebaliya",
  description:
    "AI and Machine Learning developer building intelligent web and data-driven applications with Python, React, and Streamlit.",
  lang: "en",
  siteLogo: "public/me.png",
  navLinks: [
    { text: "Internship", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Resume", href: "#resume" },
    { text: "About", href: "#about" },
    
  ],
  socialLinks: [
    { text: "Gmail", href: "mailto:jayveerjebaliya17@gmail.com" },
    {
      text: "LinkedIn",
      href: "https://linkedin.com/in/jayveer-jebaliya-616305342",
    },
    { text: "Github", href: "https://github.com/jebaliya" },
  ],
  socialImage: "/social-preview.png",
  canonicalURL: "https://your-domain.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Jayveer Jebaliya",
    specialty: "AI / ML Developer",
    summary:
      "AI/ML Engineer specializing in Generative AI, RAG architectures, and Computer Vision, with hands-on experience building and deploying intelligent applications.",
    email: "jayveerjebaliya17@gmail.com",
    location: "India",
    tags: ["Machine Learning","Deep Learning","Computer Vision","LLMs","GenAI","Docker"],
    resumeHref: "/jayveer__CV.pdf",
  },
  experience: [
    {
      company: "AndSwitch Tech",
      position: "React.js Intern",
      startDate: "Nov 2024",
      endDate: "Mar 2025",
      kind: "work",
      summary: [
        "Built responsive and dynamic user interfaces using React.js, leveraging hooks, component lifecycle, and state management.",
        "Developed reusable UI components and maintained a consistent design system across multiple web applications.",
        "Integrated RESTful APIs with the frontend using Axios/Fetch, handling async data flow and error states effectively.",
      ],
    },
    {
      company: "Rashtriya Raksha University",
      position: "M.Tech — Data Science & Machine Learning",
      startDate: "2025",
      endDate: "2027",
      kind: "education",
      summary:
        "Pursuing advanced AI, machine learning, and data science coursework with a focus on applied ML systems and research-driven problem solving.",
    },
    {
      company: "R K University",
      position: "B.Tech — Computer Engineering",
      startDate: "2022",
      endDate: "2025",
      kind: "education",
      summary:
        "Focused on software engineering fundamentals, algorithms, and data structures while working on practical projects across web and AI domains.",
    },
  ],
  projects: [
    {
      name: "Face Recognition",
      summary:
        "face recognition system using FastAPI, OpenCV (YuNet + SFace), and real-time face detection for automated identity-based attendance tracking.",
      linkPreview: "https://facedetection-ai.vercel.app/",
      linkSource: "https://github.com/Jebaliya/Face-detection-app",
      image: "/face-detection.png",
      stack: ["PyTorch", "OpenCV", "XAI"],
    },
    {
      name: "AI Research Assistant",
      summary:
        "Document ingestion and hybrid retrieval assistant built with Streamlit, ChromaDB, Langfuse, and LLM-powered answers.",
      linkPreview: "https://ai-research-assistant-1.streamlit.app/",
      linkSource: "https://github.com/Jebaliya/ai-research-assistant",
      image: "/research.png",
      stack: ["Streamlit", "ChromaDB", "Langfuse", "LLMs"],
    },
    {
      name: "Deep-Fake Detection",
      summary:
        "End-to-end deepfake detector using PyTorch, OpenCV, and explainable visual analysis for image authenticity classification.",
      linkPreview: "https://deep-fake-detection-ai.streamlit.app/",
      linkSource: "https://github.com/Jebaliya/deep-fake",
      image: "/deepfake.png",
      stack: ["PyTorch", "OpenCV", "XAI"],
    },
    {
      name: "RAG based Chatbot",
      summary:
        "Hybrid retrieval chatbot using ChromaDB, BM25 search, Groq API, and Docker deployment for document-driven answers.",
      linkPreview: "https://rag-based-chatbot1.streamlit.app/",
      linkSource: "https://github.com/Jebaliya/RAG-based-Chatbot",
      image: "/rag.png",
      stack: ["ChromaDB", "BM25", "Groq", "Docker"],
    },    
    {
      name: "Medical Diagnosis System",
      summary:
        "A medical diagnosis web app that captures user symptoms, predicts probable diseases with confidence scores, and generates downloadable reports with precaution recommendations.",
      linkPreview: "https://medical-diagnosis-system-by-ai-powered.streamlit.app/",
      linkSource: "https://github.com/Jebaliya/AI-Powered-Medical-Diagnosis-System",
      image: "/medical.png",
      stack: ["Streamlit", "Scikit-learn", "Pandas"],
    },
  ],

  about: {
    description:
      "I'm Jayveer Jebaliya, a Data Science and Machine Learning specialist who builds AI-powered applications — from GenAI systems using RAG and LangChain to practical LLM integrations and deployment tools like Streamlit and Docker. I enjoy turning research concepts into real-world, reliable demos that are easy to use and maintain.",
    image: "/me.png",
    focusAreas: [
      "Retrieval-Augmented Generation",
      "LLM Orchestration",
      "Computer Vision",
      "Model Deployment",
    ],
  },
};