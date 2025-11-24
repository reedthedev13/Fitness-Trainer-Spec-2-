import { motion } from "framer-motion";
import { services } from "../data/services";

export default function Services() {
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
          Our Training Packages
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-[#E6E2DD] flex flex-col justify-between cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#111827]">
                  {service.title}
                </h3>
                <p className="text-[#4B5563]">{service.description}</p>
              </div>

              <p className="mt-6 text-[#EF4444] font-bold">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
