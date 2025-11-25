import { motion } from "framer-motion";
import { pricing } from "../data/pricing";

export default function Pricing() {
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
          Pricing Plans
        </motion.h2>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white p-8 rounded-2xl shadow-lg border border-[#E6E2DD] flex flex-col justify-between cursor-pointer transition-shadow duration-300 hover:shadow-2xl ${
                plan.popular ? "border-[#EF4444] shadow-2xl" : ""
              }`}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#111827]">
                  {plan.title}
                </h3>
                <p className="text-[#EF4444] font-bold text-2xl">
                  {plan.price}
                </p>
                <ul className="text-[#4B5563] list-disc list-inside space-y-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              {plan.popular && (
                <div className="mt-6 text-center text-white bg-[#EF4444] px-4 py-2 rounded-lg font-semibold shadow-md">
                  Most Popular
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
