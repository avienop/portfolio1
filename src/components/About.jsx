import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-300">
        I'm a dedicated frontend developer with a strong passion for creating modern, responsive, and user-friendly interfaces. I specialize in building web applications using React and Tailwind CSS, and I enjoy turning ideas into interactive digital experiences that are both visually appealing and easy to use. My approach emphasizes clean, maintainable code, accessibility best practices, and performance optimization to ensure smooth and consistent user experiences across devices. I’m always eager to learn new tools, stay updated with the latest web trends, and continuously improve my skills to build better and more impactful products.
        </p>
      </motion.div>
    </section>
  );
}

