import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#F3F4F6] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Headline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
            Transform Your Body & Mind with Personalized Training
          </h1>

          <p className="text-lg text-[#4B5563] max-w-md">
            Achieve your fitness goals faster with expert guidance, tailored
            programs, and ongoing support.
          </p>

          <motion.a
            href="#booking"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-[#EF4444] text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Book Your Free Consultation
          </motion.a>
        </motion.div>

        {/* Right: Trainer Photo */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-full flex justify-center"
        >
          <div className="bg-white shadow-lg rounded-2xl p-4 md:p-6 border border-[#E5E7EB]">
            <img
              src="https://images.unsplash.com/photo-1594737625785-0c4d8f8e3c99?auto=format&fit=crop&w=1200&q=80"
              alt="Personal Trainer"
              className="rounded-xl object-cover w-full h-[380px] md:h-[450px]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
