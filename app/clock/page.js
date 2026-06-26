'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

const timeZones = [
  { name: 'New York', tz: 'America/New_York' },
  { name: 'Los Angeles', tz: 'America/Los_Angeles' },
  { name: 'London', tz: 'Europe/London' },
  { name: 'Paris', tz: 'Europe/Paris' },
  { name: 'Dubai', tz: 'Asia/Dubai' },
  { name: 'Singapore', tz: 'Asia/Singapore' },
  { name: 'Tokyo', tz: 'Asia/Tokyo' },
  { name: 'Sydney', tz: 'Australia/Sydney' },
  { name: 'Kuala Lumpur', tz: 'Asia/Kuala_Lumpur' },
  { name: 'Hong Kong', tz: 'Asia/Hong_Kong' },
  { name: 'India', tz: 'Asia/Kolkata' },
  { name: 'Bangkok', tz: 'Asia/Bangkok' },
];

export default function Clock() {
  const [times, setTimes] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updateTimes = () => {
      const newTimes = {};
      timeZones.forEach(({ name, tz }) => {
        const time = new Date().toLocaleString('en-US', { timeZone: tz });
        newTimes[tz] = time;
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark to-dark/80 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <Link href="/portfolio" className="flex items-center gap-2 text-secondary hover:text-blue-400 transition w-fit">
            <FiArrowLeft /> Back to Portfolio
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            World Clock
          </h1>
          <p className="text-gray-400 text-lg">
            Current time across different time zones
          </p>
        </motion.div>

        {/* Clocks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timeZones.map((zone, index) => (
            <motion.div
              key={zone.tz}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-effect p-8 rounded-lg border border-secondary/20 hover:border-secondary/50 transition"
            >
              {/* Location Name */}
              <h2 className="text-2xl font-bold text-secondary mb-4 text-center">
                {zone.name}
              </h2>

              {/* Digital Time Display */}
              <div className="bg-dark/50 p-6 rounded-lg border-2 border-secondary/30 mb-4">
                <div className="font-mono text-4xl font-bold text-center text-secondary/90 tracking-wider">
                  {times[zone.tz] ? (
                    times[zone.tz].split(', ')[1] || times[zone.tz]
                  ) : (
                    '--:--:--'
                  )}
                </div>
              </div>

              {/* Date Display */}
              <div className="text-center text-sm text-gray-400">
                {times[zone.tz] ? (
                  times[zone.tz].split(', ')[0] || new Date().toLocaleDateString()
                ) : (
                  'Loading...'
                )}
              </div>

              {/* Timezone ID */}
              <div className="text-xs text-gray-500 text-center mt-3">
                {zone.tz}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 glass-effect p-8 rounded-lg"
        >
          <h3 className="text-xl font-bold text-secondary mb-4">About This Clock</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>✓ Real-time updates every second</li>
            <li>✓ Displays time for 12 major cities worldwide</li>
            <li>✓ Automatic timezone conversion</li>
            <li>✓ 24-hour format display</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
