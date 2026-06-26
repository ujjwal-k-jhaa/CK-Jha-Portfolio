import { motion } from 'motion/react';
import { MonitorPlay, Smartphone, Mic2, Repeat, Film } from 'lucide-react';

const services = [
  {
    title: "YouTube Video Editing",
    description: "Engaging, high-retention long-form videos designed for the YouTube algorithm.",
    icon: <MonitorPlay className="w-8 h-8" />,
    features: ["Color Correction", "Color Grading", "Motion Graphics", "Audio Editing", "SFX", "Captions"]
  },
  {
    title: "Shorts & Reels Editing",
    description: "Punchy, fast-paced vertical content that hooks viewers from the first second.",
    icon: <Smartphone className="w-8 h-8" />,
    features: ["Dynamic Captions", "Pacing Optimization", "Trending Audio", "VFX", "Color Grading", "Sound Design"]
  },
  {
    title: "Podcast Editing",
    description: "Polished multi-cam video and crystal-clear audio for professional podcasts.",
    icon: <Mic2 className="w-8 h-8" />,
    features: ["Multi-cam Switching", "Audio Cleanup", "Noise Reduction", "Intro/Outro", "Color Correction", "Highlights"]
  },
  {
    title: "Content Repurposing",
    description: "Transforming your long-form videos into dozens of viral short-form clips.",
    icon: <Repeat className="w-8 h-8" />,
    features: ["Contextual Cropping", "Highlight Extraction", "Re-framing", "Subtitle Generation", "Platform Optimization"]
  },
  {
    title: "Trailer & Promo Editing",
    description: "Cinematic and compelling edits for product launches, courses, and films.",
    icon: <Film className="w-8 h-8" />,
    features: ["Cinematic Cuts", "Advanced Sound Design", "Typography", "Color Grading", "VFX", "Motion Graphics"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-gray-50 border-y border-gray-200/50">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4"
          >
            My Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg font-light max-w-2xl mx-auto"
          >
            End-to-end post-production solutions to elevate your content and grow your audience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 group ${
                idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
              } ${
                idx === 4 ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 mb-8 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="font-display text-2xl font-medium text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 mb-8 font-light leading-relaxed">{service.description}</p>
              
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Includes</h4>
                <ul className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
