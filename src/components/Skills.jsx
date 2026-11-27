import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const categories = [
  { label: 'Programming', skills: ['C', 'C++', 'Python', 'Java'] },
  { label: 'AI / ML', skills: ['BERT', 'CNN', 'LSTM', 'Graph Neural Networks', 'Scikit-learn'] },
  { label: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'] },
  { label: 'Backend', skills: ['Node.js', 'Express.js', 'Django', 'Flask', 'REST APIs'] },
  { label: 'Database', skills: ['MongoDB', 'PostgreSQL', 'SQL'] },
  { label: 'Tools', skills: ['VS Code', 'Git', 'GitHub', 'Canva', 'Figma', 'Power BI', 'Jupyter Notebook'] },
  { label: 'Core Concepts', skills: ['Data Structures', 'OOP', 'DBMS', 'CRUD Operations'] },
];

export default function Skills() {
  const [ref, inView] = useInView();
  return (
    <section id="skills" className="py-24 px-6 bg-[#0d1226]/50">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">Technical Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">What I Work With</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-[#111827]/70 border border-slate-700/40 rounded-xl p-5 hover:border-violet-500/40 transition-colors duration-200"
              >
                <h3 className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-3">{cat.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(s => (
                    <span key={s} className="px-3 py-1 bg-slate-800/80 text-slate-300 text-xs rounded-full border border-slate-700/50">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
