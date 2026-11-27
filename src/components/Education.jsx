import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const edu = [
  {
    degree: 'B.Tech – Computer Science and Business Systems',
    institution: 'Sri Eshwar College of Engineering',
    period: '2024 – 2028',
    detail: 'Currently pursuing',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Tamil Nadu State Board',
    period: '2024',
    detail: '97.4%',
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Tamil Nadu State Board',
    period: '2022',
    detail: '95.16%',
  },
];

export default function Education() {
  const [ref, inView] = useInView();
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Academic Background</h2>
          <div className="space-y-4">
            {edu.map((e, i) => (
              <motion.div key={e.degree} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-[#111827]/70 border border-slate-700/40 rounded-xl p-6 hover:border-violet-500/40 transition-colors duration-200 flex items-start gap-4">
                <div className="p-2.5 bg-violet-900/30 rounded-lg border border-violet-800/40 shrink-0">
                  <GraduationCap size={18} className="text-violet-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-white font-semibold text-base">{e.degree}</h3>
                    <span className="text-violet-400 font-semibold text-sm shrink-0">{e.detail}</span>
                  </div>
                  <p className="text-slate-400 text-sm mt-1">{e.institution} · {e.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
