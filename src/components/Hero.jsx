import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Link, Download, ArrowDown, Camera } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

// Replace src/assets/profile.jpg with your actual photo to update the profile image

const fade = { hidden: { opacity: 0, y: 24 }, show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }) };

export default function Hero() {
  const [photo, setPhoto] = useState(profileImg);
  const fileRef = useRef();

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div className="order-2 md:order-1">
          <motion.p custom={0} variants={fade} initial="hidden" animate="show"
            className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            AI/ML &amp; Generative AI Enthusiast
          </motion.p>
          <motion.h1 custom={1} variants={fade} initial="hidden" animate="show"
            className="text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Sunitha K
          </motion.h1>
          <motion.p custom={2} variants={fade} initial="hidden" animate="show"
            className="text-xl text-slate-400 mb-4 font-medium">
            Developer
          </motion.p>
          <motion.p custom={3} variants={fade} initial="hidden" animate="show"
            className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent mb-6">
            "Exploring AI. Building Intelligent Solutions."
          </motion.p>
          <motion.p custom={4} variants={fade} initial="hidden" animate="show"
            className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
            I'm a Computer Science and Business Systems student interested in Artificial Intelligence, Machine Learning and Generative AI. I enjoy building practical applications and exploring how technology can solve real-world problems.
          </motion.p>
          <motion.div custom={5} variants={fade} initial="hidden" animate="show"
            className="flex flex-wrap gap-4 mb-8">
            <a href="/resume.pdf" download
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-violet-900/30 text-sm">
              <Download size={16} /> Download Resume
            </a>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 border border-violet-500/40 hover:border-violet-400 text-slate-300 hover:text-white rounded-lg font-medium transition-all duration-200 text-sm">
              <ArrowDown size={16} /> View Projects
            </button>
          </motion.div>
          <motion.div custom={6} variants={fade} initial="hidden" animate="show"
            className="flex gap-4">
            <a href="https://github.com/Sunitha-k2006" target="_blank" rel="noreferrer"
              className="p-2.5 rounded-lg border border-slate-700 hover:border-violet-500 text-slate-400 hover:text-violet-400 transition-all duration-200">
              <GitBranch size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sunitha-k-51b152328" target="_blank" rel="noreferrer"
              className="p-2.5 rounded-lg border border-slate-700 hover:border-violet-500 text-slate-400 hover:text-violet-400 transition-all duration-200">
              <Link size={20} />
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div custom={1} variants={fade} initial="hidden" animate="show"
          className="order-1 md:order-2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-violet-500/50">
              <img
                src={photo}
                alt="Sunitha K"
                className="w-full h-full object-cover object-top"
              />
              <button
                onClick={() => fileRef.current.click()}
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white text-xs gap-1 flex-col"
              >
                <Camera size={20} />
                <span>Change Photo</span>
              </button>
            </div>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
