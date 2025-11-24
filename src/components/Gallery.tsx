import { motion } from "framer-motion";
import { gallery } from "../data/gallery";

export default function Gallery() {
  return (
    <section className="bg-[#F3F4F6] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#111827] mb-12 text-center"
        >
          Before & After Results
        </motion.h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gallery.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl shadow-lg border border-[#E6E2DD] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="grid grid-cols-2">
                {/* Before Image */}
                <img
                  src={item.before}
                  alt={`${item.name} Before`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {/* After Image */}
                <img
                  src={item.after}
                  alt={`${item.name} After`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4 bg-white text-center">
                <p className="text-[#111827] font-semibold">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
