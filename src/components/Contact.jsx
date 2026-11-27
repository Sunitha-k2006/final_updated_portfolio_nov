import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, GitBranch, Link, Phone, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'sunitha.k2024csbs@sece.ac.in', href: 'mailto:sunitha.k2024csbs@sece.ac.in' },
  { icon: GitBranch, label: 'GitHub', value: 'Sunitha-k2006', href: 'https://github.com/Sunitha-k2006' },
  { icon: Link, label: 'LinkedIn', value: 'sunitha-k-51b152328', href: 'https://www.linkedin.com/in/sunitha-k-51b152328' },
  { icon: Phone, label: 'Phone', value: '9566810676', href: 'tel:9566810676' },
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    window.location.href = `mailto:sunitha.k2024csbs@sece.ac.in?subject=Portfolio Contact from ${name}&body=${message}%0A%0AFrom: ${email}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0d1226]/50">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Let's Connect.</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Links */}
            <div className="space-y-4">
              {contactLinks.map((c) => (
                <a key={c.label} href={c.href} target={c.label !== 'Phone' && c.label !== 'Email' ? '_blank' : undefined} rel="noreferrer"
                  className="flex items-center gap-4 bg-[#111827]/70 border border-slate-700/40 rounded-xl p-4 hover:border-violet-500/40 transition-colors duration-200 group">
                  <div className="p-2.5 bg-violet-900/30 rounded-lg border border-violet-800/40 shrink-0">
                    <c.icon size={16} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">{c.label}</p>
                    <p className="text-slate-300 text-sm group-hover:text-violet-400 transition-colors">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text" placeholder="Your Name" required
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full bg-[#111827]/70 border border-slate-700/40 rounded-xl px-4 py-3 text-slate-300 text-sm placeholder-slate-600 focus:outline-none focus:border-violet-500/60 transition-colors"
              />
              <input
                type="email" placeholder="Your Email" required
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#111827]/70 border border-slate-700/40 rounded-xl px-4 py-3 text-slate-300 text-sm placeholder-slate-600 focus:outline-none focus:border-violet-500/60 transition-colors"
              />
              <textarea
                placeholder="Your Message" rows={5} required
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#111827]/70 border border-slate-700/40 rounded-xl px-4 py-3 text-slate-300 text-sm placeholder-slate-600 focus:outline-none focus:border-violet-500/60 transition-colors resize-none"
              />
              <button type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white rounded-xl font-medium transition-all duration-200 text-sm shadow-lg shadow-violet-900/30">
                <Send size={15} /> {sent ? 'Opening mail client...' : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
