import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data';

interface GalleryProps {
  limitLongForm?: number;
  limitShortForm?: number;
  showViewAll?: boolean;
  hideHeader?: boolean;
}

export default function Gallery({ limitLongForm, limitShortForm, showViewAll, hideHeader }: GalleryProps) {
  const longFormProjects = projects.filter(p => p.category === 'Long Form');
  const shortFormProjects = projects.filter(p => p.category === 'Short Form');

  const displayLongForm = limitLongForm ? longFormProjects.slice(0, limitLongForm) : longFormProjects;
  const displayShortForm = limitShortForm ? shortFormProjects.slice(0, limitShortForm) : shortFormProjects;

  return (
    <section id="work" className={`${hideHeader ? 'pb-24' : 'py-24'} px-6 md:px-12 max-w-[1600px] mx-auto`}>
      {!hideHeader && (
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
              Selected Works
            </h2>
            <p className="text-gray-500 text-lg font-light">A curated selection of my finest edits.</p>
          </div>
          {showViewAll && (
            <Link 
              to="/portfolio"
              className="hidden md:inline-flex items-center gap-2 text-gray-900 font-medium hover:opacity-70 transition-opacity"
            >
              View all edits
            </Link>
          )}
        </div>
      )}

      {/* Long Form Section */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-gray-200 flex-1"></div>
          <h3 className="font-display text-xl font-medium text-gray-400 uppercase tracking-widest">Long Form</h3>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {displayLongForm.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative block cursor-pointer aspect-video"
            >
              <div className="absolute inset-0 overflow-hidden rounded-xl bg-gray-100">
                <img 
                  src={project.thumbnailUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* White Fade Overlay on Hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-500 ease-out"></div>
                
                {/* Play Icon Container */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <Play className="w-6 h-6 text-gray-900 fill-current ml-1" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-white z-10">
                 {/* Dark gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent -z-10 rounded-b-xl"></div>
                
                <div>
                  <p className="text-sm font-medium tracking-wider uppercase mb-2 opacity-80">{project.type}</p>
                  <h3 className="font-display text-2xl md:text-3xl font-medium">{project.title}</h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Short Form Section */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-gray-200 flex-1"></div>
          <h3 className="font-display text-xl font-medium text-gray-400 uppercase tracking-widest">Short Form</h3>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {displayShortForm.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative block cursor-pointer aspect-[9/16]"
            >
              <div className="absolute inset-0 overflow-hidden rounded-xl bg-gray-100">
                <img 
                  src={project.thumbnailUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* White Fade Overlay on Hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-500 ease-out"></div>
                
                {/* Play Icon Container */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <Play className="w-5 h-5 text-gray-900 fill-current ml-1" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-white z-10">
                 {/* Dark gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent -z-10 rounded-b-xl"></div>
                
                <div>
                  <h3 className="font-display text-lg font-medium">{project.title}</h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {showViewAll && (
        <div className="mt-24 text-center">
          <Link 
            to="/portfolio"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-10 py-5 rounded-full font-medium tracking-wide hover:bg-gray-800 transition-all shadow-xl shadow-gray-900/20"
          >
            View all edits
          </Link>
        </div>
      )}
    </section>
  );
}
