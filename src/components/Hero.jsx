import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-4 bg-slate-800 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm{' '}
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          >
            Ibad Ali Mughal
          </motion.span>
        </h1>

        <p className="text-gray-300 text-lg mb-6">
          Frontend Developer & UI Designer
        </p>

        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-indigo-600 px-6 py-2 rounded-full text-white hover:bg-indigo-500"
          >
            My Work
          </a>
          <a
            href="#contact"
            className="border border-indigo-500 px-6 py-2 rounded-full text-indigo-400 hover:bg-indigo-500 hover:text-white"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}
