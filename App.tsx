/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Car, Video, Mail, Linkedin, Instagram, ExternalLink, ChevronRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1a1a1a] font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tight text-xl">JS.</span>
          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#experience" className="hover:text-black transition-colors">Experience</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-bold tracking-tighter mb-6 leading-tight">
              Joshua <br />
              <span className="text-blue-600">Salinas</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-md">
              A versatile professional blending the art of high-stakes car sales with the precision of creative video editing. 
            </p>
            <div className="flex gap-4">
              <a 
                href="#contact" 
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all flex items-center gap-2"
              >
                Let's talk <Mail size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-gray-200 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/joshua-salinas/800/800" 
                alt="Joshua Salinas" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Available for projects</span>
              </div>
              <p className="font-medium">Based in California</p>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Expertise</h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Car Sales */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Car size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Car Sales Specialist</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Proven track record in high-volume automotive sales. Expert in customer relationship management, negotiation, and providing a seamless buying experience.
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-blue-600" /> Inventory Management
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-blue-600" /> Strategic Negotiation
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-blue-600" /> Client Retention
                </li>
              </ul>
            </motion.div>

            {/* Video Editing */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Video size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Video Editor</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Crafting compelling visual stories through advanced editing techniques. Specialized in dynamic pacing, color grading, and social media content optimization.
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-purple-600" /> Adobe Premiere & After Effects
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-purple-600" /> Narrative Storytelling
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-purple-600" /> Motion Graphics
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-black text-white rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to collaborate?</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Whether you're looking for your next vehicle or need a visual story told, I'm here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:shrmpsllart@gmail.com" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2">
                Email Me <ExternalLink size={18} />
              </a>
              <div className="flex items-center gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[100%] bg-blue-600 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-50%] right-[-20%] w-[100%] h-[100%] bg-purple-600 rounded-full blur-[120px]" />
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-100 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Joshua Salinas. All rights reserved.</p>
      </footer>
    </div>
  );
}
