import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // For now: just log submission
    console.log("Booking submitted");
  };

  return (
    <section id="booking" className="bg-[#F3F4F6] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#111827] mb-8 text-center"
        >
          Book Your Consultation
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-[#4B5563] mb-12"
        >
          Select your package and preferred date/time, and we’ll get back to
          you.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-lg border border-[#E6E2DD] space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-[#4B5563] font-medium mb-1">
              Full Name
            </label>
            <input
              required
              type="text"
              className="w-full p-3 border border-[#D9CFC3] rounded-lg bg-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-[#EF4444] transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#4B5563] font-medium mb-1">
              Email
            </label>
            <input
              required
              type="email"
              className="w-full p-3 border border-[#D9CFC3] rounded-lg bg-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-[#EF4444] transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[#4B5563] font-medium mb-1">
              Phone
            </label>
            <input
              required
              type="tel"
              className="w-full p-3 border border-[#D9CFC3] rounded-lg bg-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-[#EF4444] transition"
            />
          </div>

          {/* Select Package */}
          <div>
            <label className="block text-[#4B5563] font-medium mb-1">
              Package
            </label>
            <select className="w-full p-3 border border-[#D9CFC3] rounded-lg bg-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-[#EF4444] transition">
              <option>1-on-1 Personal Training</option>
              <option>Group Training</option>
              <option>Online Coaching Program</option>
            </select>
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-[#4B5563] font-medium mb-1">
              Preferred Date
            </label>
            <input
              required
              type="date"
              className="w-full p-3 border border-[#D9CFC3] rounded-lg bg-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-[#EF4444] transition"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-[#EF4444] text-white py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Submit Booking
          </motion.button>

          {/* Success Message */}
          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-700 font-medium mt-4"
            >
              Thank you! We’ll contact you shortly.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
