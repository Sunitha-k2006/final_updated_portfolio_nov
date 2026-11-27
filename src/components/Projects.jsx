import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const projects = [
  {
    title: 'AI-Based Email Spoofing Detection System',
    description: 'AI-powered phishing and email spoofing detection system with Gmail email analysis, threat classification and security analytics achieving 95%+ reported accuracy.',
    features: ['Gmail email analysis', 'Threat classification', 'Security analytics', '95%+ accuracy'],
    stack: ['Python', 'Flask', 'React.js', 'Scikit-learn', 'BERT', 'CNN', 'LSTM', 'Graph Neural Networks', 'MongoDB'],
    github: 'https://github.com/Sunitha-k2006/email_spoofing_detection_system',
  },
  {
    title: 'BlizBlow – AI-Assisted Business Management System',
    description: 'Full-stack business management platform with AI-powered content generation, customer enquiry management, chatbot support and secure role-based access control.',
    features: ['AI content generation', 'Customer enquiry management', 'Chatbot support', 'Role-based access control'],
    stack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/Sunitha-k2006/business_manangement_system',
  },
  {
    title: 'Complaint Management System',
    description: 'Centralized complaint management platform enabling complaint registration, tracking and real-time status monitoring for streamlined resolution workflows.',
    features: ['Complaint registration', 'Complaint tracking', 'Status monitoring', 'Centralized management'],
    stack: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Sunitha-k2006/complaint_management_system',
  },
];

export default function Projects() {
  const [ref, inView] = useInView();
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">What I've Built</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-[#111827]/70 border border-slate-700/40 rounded-2xl p-6 flex flex-col hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-900/10 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-semibold text-base leading-snug flex-1 pr-2">{p.title}</h3>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="text-slate-500 hover:text-violet-400 transition-colors shrink-0 mt-0.5">
                    <GitBranch size={18} />
                  </a>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.description}</p>
                <ul className="mb-4 space-y-1">
                  {p.features.map(f => (
                    <li key={f} className="text-slate-400 text-xs flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-violet-400 shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {p.stack.map(s => (
                    <span key={s} className="px-2 py-0.5 bg-violet-900/30 text-violet-300 text-xs rounded-full border border-violet-800/40">
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
