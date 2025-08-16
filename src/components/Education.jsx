import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="bg-slate-800 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6">Education</h2>
          <p className="text-gray-300">
            Bachelor of Engineering in Software Engineering (B.E SE)<br />
            Karachi Institute of Economics and Technology (KIET)<br />
            2023 – Present (Expected Graduation: 2027)
          </p>
           <p className="text-gray-300">
            Intermediate (Pre-Engineering)<br />
            F.G Inter Boys College, Karachi Cantt<br />
            Passed in 2023
          </p> <p className="text-gray-300">
            Matriculation (Science Group)<br />
            Fazaia Inter College, Korangi Creek, Karachi<br />
            Passed in 2021
          </p>
        </motion.div>
      </div>
    </section>
  );
}
