import { motion } from 'motion/react';
import { Zap, Infinity, Star, Headphones, FileSignature, CreditCard } from 'lucide-react';

const benefits = [
  {
    title: "Fast Turnaround",
    description: "Get your videos back fast without sacrificing quality. Most projects are completed within 48-72 hours.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Unlimited Revisions",
    description: "We don't stop until you are 100% satisfied. Request as many changes as you need.",
    icon: <Infinity className="w-6 h-6" />
  },
  {
    title: "Premium Quality",
    description: "Every edit is crafted with attention to detail, ensuring a high-end, professional look.",
    icon: <Star className="w-6 h-6" />
  },
  {
    title: "Dedicated Support",
    description: "Direct communication line via Slack or email. Always know the status of your project.",
    icon: <Headphones className="w-6 h-6" />
  },
  {
    title: "Flexible Contracts",
    description: "Scale your video output up or down as needed. Adjust or pause your service depending on your content schedule.",
    icon: <FileSignature className="w-6 h-6" />
  },
  {
    title: "Predictable Pricing",
    description: "Flat monthly rates or clear project-based pricing. No hidden fees or surprises.",
    icon: <CreditCard className="w-6 h-6" />
  }
];

export default function Benefits() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50 border-t border-gray-200/50">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4"
          >
            The Benefits of Working with Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg font-light max-w-2xl mx-auto"
          >
            Experience a seamless, professional, and stress-free post-production process.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-6">
                {benefit.icon}
              </div>
              <h3 className="font-display text-xl font-medium text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
