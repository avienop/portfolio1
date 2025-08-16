// 📁 src/components/Certificates.jsx
import { motion } from 'framer-motion';

const certificates = [
  {
    title: "UI/UX Design",
    provider: "Great Learning Academy",
    file: "/uiux.pdf"
  },
  {
    title: "JavaScript Essentials 1",
    provider: "Cisco Networking Academy",
    file: "/js1Cert.pdf"
  },
  
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Certificates</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-indigo-400 mb-1">{cert.title}</h3>
              <p className="text-gray-300 mb-4">{cert.provider}</p>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
              >
                View Certificate (PDF)
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
