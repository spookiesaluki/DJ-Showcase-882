import { motion } from 'framer-motion';
import { FaPlay, FaInstagram, FaSoundcloud, FaSpotify } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-dark via-primary to-secondary text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/20 via-transparent to-transparent" />
      
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">
            DJ ALOBAR
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">funk-soul-hiphop-disco-house-tropicalia-world</p>
          
          <div className="flex gap-6 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white px-8 py-3 rounded-full flex items-center gap-2 shadow-lg shadow-neon-purple/50"
            >
              <FaPlay />
              Listen Now
            </motion.button>
          </div>

          <div className="flex gap-6 justify-center">
            {[FaInstagram, FaSoundcloud, FaSpotify].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, color: '#FF1493' }}
                className="text-2xl text-gray-400 hover:text-neon-pink transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-dark to-transparent" />
    </div>
  );
}