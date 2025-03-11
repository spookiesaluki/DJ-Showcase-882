import { motion } from 'framer-motion';

const tracks = [
  { title: 'Neon Dreams', duration: '3:45', genre: 'House' },
  { title: 'Midnight Rush', duration: '4:20', genre: 'Techno' },
  { title: 'Electric Soul', duration: '3:55', genre: 'EDM' },
];

export default function Music() {
  return (
    <section className="bg-gradient-to-b from-dark to-primary text-white py-20 px-4" id="music">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-blue"
        >
          Latest Tracks
        </motion.h2>

        <div className="grid gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-r from-secondary/50 to-primary/50 backdrop-blur-sm p-6 rounded-lg flex items-center justify-between hover:from-neon-purple/30 hover:to-neon-blue/30 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              <div>
                <h3 className="text-xl font-semibold">{track.title}</h3>
                <p className="text-neon-blue/80">{track.genre}</p>
              </div>
              <span className="text-neon-pink">{track.duration}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}