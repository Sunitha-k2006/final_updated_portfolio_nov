import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const certs = [
  { name: 'Design Thinking – A Primer', issuer: 'NPTEL', year: '2026' },
  { name: 'Introduction to Industry 4.0 and Industrial Internet of Things', issuer: 'NPTEL', year: '2026' },
  { name: 'Learn with AI', issuer: 'Cisco Networking Academy', year: '2026' },
  { name: 'GenAI and Data Analytics Certificate', issuer: 'Forage', year: '2026' },
  { name: 'Foundation of Artificial Intelligence', issuer: 'IBM SkillsBuild', year: '2026' },
  { name: 'Java Foundations', issuer: 'Oracle', year: '2025' },
  { name: 'SQL Intermediate', issuer: 'HackerRank', year: '2025' },
  { name: 'Programming in Modern C++', issuer: 'NPTEL', year: '2025' },
  { name: 'Certified in C Training', issuer: 'IIT Bombay', year: '2024' },
];

export default function Certifications() {
  const [ref, inView] = useInView();
  return (
    <section id="certifications" className="py-24 px-6 bg-[#0d1226]/50">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">Certifications</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Credentials</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certs.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-[#111827]/70 border border-slate-700/40 rounded-xl p-5 hover:border-violet-500/40 transition-colors duration-200 flex items-start gap-3">
                <Award size={18} className="text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium leading-snug">{c.name}</p>
                  <p className="text-violet-400 text-xs mt-1">{c.issuer} · {c.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
