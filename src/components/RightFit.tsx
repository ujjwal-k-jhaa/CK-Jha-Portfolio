import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const goodFit = [
  "You value high-quality, high-retention storytelling over sheer volume.",
  "You see video editing as an investment to grow your brand, not a cheap commodity.",
  "You want a proactive creative partner who brings new ideas to the table.",
  "You have a clear vision, strong brand identity, and understand your target audience."
];

const badFit = [
  "You are looking for the cheapest editing option available on the market.",
  "You need overnight 12-hour turnarounds regularly without compromising quality.",
  "You prefer to micro-manage every single cut, transition, and frame.",
  "You don't have a content strategy or clear end-goals for your videos."
];

export default function RightFit() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4"
          >
            Are We The Right Fit?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg font-light max-w-2xl mx-auto"
          >
            Great work comes from great partnerships. Let's ensure our working styles and expectations align for the best possible results.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Good Fit */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100"
          >
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-8">
              <Check className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="font-display text-2xl font-medium text-gray-900 mb-8">We're a perfect match if...</h3>
            <ul className="space-y-6">
              {goodFit.map((item, idx) => (
                <li key={idx} className="flex gap-4 text-gray-600 font-light leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full shrink-0 mt-2.5 opacity-40"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bad Fit */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm"
          >
            <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-8">
              <X className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="font-display text-2xl font-medium text-gray-900 mb-8">We might not align if...</h3>
            <ul className="space-y-6">
              {badFit.map((item, idx) => (
                <li key={idx} className="flex gap-4 text-gray-500 font-light leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full shrink-0 mt-2.5"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
