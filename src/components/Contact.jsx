import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="bg-gradient-to-b from-dark to-primary text-white py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-purple"
        >
          Book Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-neon-pink" />
              <a href="mailto:booking@djalobar.com" className="hover:text-neon-pink transition-colors">
                booking@djalobar.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-neon-blue" />
              <a href="tel:+1234567890" className="hover:text-neon-blue transition-colors">
                +1 (234) 567-890
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-secondary/30 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-secondary/30 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full bg-secondary/30 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple placeholder-gray-400"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white py-3 rounded-lg font-semibold shadow-lg shadow-neon-purple/30"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}