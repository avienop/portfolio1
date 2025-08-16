import { motion } from 'framer-motion';

const projects = [
  {
    title: "Car Rental Management System",
    description: "A web app to manage car allotments, users, and fines.For login id is : admin and password is:12",
    tech: "React, Redux Toolkit, Tailwind CSS, React Router DOM",
    link: "https://rentalmanagment.netlify.app/", 
  },
  {
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking dashboard.",
    tech: "React, Tailwind CSS, CoinGecko API",
    link: "https://cryptodashboardd.netlify.app/", 
  },
  {
    title: "Resume Builder",
    description: "Generate professional resumes with live preview and download options.",
    tech: "React, Tailwind CSS, JS",
    link: "https://ibadresumebuilder.netlify.app/", 
  },
  
  {
    title: "Shanghai Cafe Website Frontend",
    description: "A stylish and responsive frontend for a fictional cafe named Shanghai Cafe.",
    tech: "React, Tailwind CSS, JS",
    link: "https://03r.vercel.app/"
  },
  
  {
    title: "Todo App (Redux Toolkit)",
    description: "A simple todo app with add, delete, and filter functionality using Redux Toolkit.",
    tech: "React, Redux Toolkit, Tailwind CSS",
    link: "https://todosappibad.netlify.app/",
  },
  {
    title: "Password Generator",
    description: "Generates secure passwords with adjustable length and character settings . we can also copy password to clipboard",
    tech: "React, Tailwind CSS, useEffect, useRef, useCallback",
    link: "https://lengthwisepasswordgenerator.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-white">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-indigo-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-2">{project.description}</p>
              <p className="text-gray-400 text-sm mb-4">
                <strong>Tech:</strong> {project.tech}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
