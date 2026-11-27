import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Experience() {
  const [ref, inView] = useInView();
  return (
    <section id="experience" className="py-24 px-6 bg-[#0d1226]/50">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Internship</h2>
          <div className="bg-[#111827]/70 border border-slate-700/40 rounded-2xl p-7 hover:border-violet-500/40 transition-colors duration-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-violet-900/30 rounded-xl border border-violet-800/40 shrink-0">
                <Briefcase size={20} className="text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">MERN Stack Intern</h3>
                <p className="text-violet-400 font-medium text-sm mb-1">BYTES · 2025</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Developed full-stack MERN applications involving responsive interfaces, REST APIs, MongoDB databases and frontend-backend integration.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
