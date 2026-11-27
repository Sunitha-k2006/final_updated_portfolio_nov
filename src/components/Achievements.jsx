import { motion } from 'framer-motion';
import { Trophy, Code2, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const achievements = [
  { icon: Trophy, text: 'Shortlisted – Intrusion X Second Edition (2026)' },
  { icon: Trophy, text: 'Shortlisted – PROTOTHON\'26 (2026)' },
];

const profiles = [
  {
    name: 'LeetCode',
    detail: '154 problems solved',
    url: 'https://leetcode.com/u/D3VXAdy2jN/',
    color: 'from-orange-500/20 to-yellow-500/20',
    border: 'border-orange-500/30',
    text: 'text-orange-400',
  },
  {
    name: 'SkillRack',
    detail: '1200+ problems · 4 Certificates · 353 Bronze',
    url: 'http://www.skillrack.com/profile/514844/0033742e26ddec4a1d4274dab6ccb76616d3ea13',
    color: 'from-green-500/20 to-emerald-500/20',
    border: 'border-green-500/30',
    text: 'text-green-400',
  },
  {
    name: 'HackerRank',
    detail: '3★ SQL · 3★ C++ · 1★ C · 1★ Java',
    url: 'https://www.hackerrank.com/profile/sunitha_k2024cs1',
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
  },
];

export default function Achievements() {
  const [ref, inView] = useInView();
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Recognition & Coding Profiles</h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {achievements.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 bg-[#111827]/70 border border-slate-700/40 rounded-xl p-4 hover:border-violet-500/40 transition-colors">
                <a.icon size={18} className="text-violet-400 shrink-0" />
                <span className="text-slate-300 text-sm">{a.text}</span>
              </motion.div>
            ))}
          </div>

          <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
            <Code2 size={18} className="text-violet-400" /> Coding Profiles
          </h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {profiles.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`bg-gradient-to-br ${p.color} border ${p.border} rounded-xl p-5 hover:scale-[1.02] transition-transform duration-200 cursor-pointer block`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Star size={14} className={p.text} />
                  <span className={`font-semibold text-sm ${p.text}`}>{p.name}</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{p.detail}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
