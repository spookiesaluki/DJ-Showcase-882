import { motion } from 'framer-motion';
import { format } from 'date-fns';

const events = [
  { date: new Date('2024-04-15'), venue: 'Pulse Nightclub', location: 'Los Angeles, CA', ticketLink: '#' },
  { date: new Date('2024-04-22'), venue: 'Electric Festival', location: 'Miami, FL', ticketLink: '#' },
  { date: new Date('2024-05-01'), venue: 'Club Zero', location: 'New York, NY', ticketLink: '#' }
];

export default function Events() {
  return (
    <section className="bg-gradient-to-b from-primary to-dark text-white py-20 px-4" id="events">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple"
        >
          Upcoming Shows
        </motion.h2>

        <div className="grid gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-r from-secondary/30 to-primary/30 backdrop-blur-sm p-6 rounded-lg flex flex-wrap md:flex-nowrap items-center justify-between gap-4 shadow-lg shadow-primary/20"
            >
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-pink">
                    {format(event.date, 'dd')}
                  </div>
                  <div className="text-neon-blue">
                    {format(event.date, 'MMM')}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold">{event.venue}</h3>
                  <p className="text-neon-purple/80">{event.location}</p>
                </div>
              </div>

              <motion.a
                href={event.ticketLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-neon-purple/30"
              >
                Get Tickets
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}