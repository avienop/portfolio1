import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-800 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6">Experience</h2>

          <p className="text-gray-300 mb-4">
            <strong className="text-indigo-400">Project-Based Learning & Skill Development</strong> — Ongoing
          </p>

          <p className="text-gray-300">
            Although I do not have formal job experience, I have built several real-world projects and completed multiple certifications. These include:
            <br />
            - <strong>UI/UX Design</strong> from Great Learning Academy<br />
            - <strong>JavaScript Essentials 1 & 2</strong> from Cisco Networking Academy
            <br /><br />
            These certifications included hands-on projects and simulations that sharpened my problem-solving, design thinking, and coding skills. I regularly work with tools like <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Redux Toolkit</strong> to deepen my development expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
