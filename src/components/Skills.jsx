import { motion } from 'framer-motion';

const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git"];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-800 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-700 p-4 rounded-xl shadow text-center text-white"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

