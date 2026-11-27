import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function About() {
  const [ref, inView] = useInView();
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Who I Am</h2>
          <div className="bg-[#111827]/60 border border-slate-700/40 rounded-2xl p-8 backdrop-blur-sm">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm <span className="text-violet-400 font-semibold">Sunitha K</span>, a B.Tech Computer Science and Business Systems student at Sri Eshwar College of Engineering (2024–2028), passionate about <span className="text-violet-400 font-semibold">Artificial Intelligence, Machine Learning and Generative AI</span>. I have hands-on experience building full-stack web applications using the MERN stack, Django and Flask, and I enjoy applying AI/ML techniques — including BERT, CNNs, LSTMs and Graph Neural Networks — to solve real-world problems. I'm driven by the goal of creating intelligent, practical technology solutions that make a meaningful impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
