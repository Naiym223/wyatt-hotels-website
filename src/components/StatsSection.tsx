'use client';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Star, Building, Trophy, Clock, Globe, LucideIcon } from 'lucide-react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter = ({ value, suffix = '', duration = 2 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * value));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
  description: string;
}

const StatCard = ({ icon: Icon, value, suffix, label, delay = 0, description }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ 
      scale: 1.05,
      rotateY: 10,
      boxShadow: "0 30px 60px rgba(59, 130, 246, 0.4)"
    }}
    className="group relative"
  >
    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="mb-6"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        {/* Value */}
        <motion.div
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <AnimatedCounter value={value} suffix={suffix} />
        </motion.div>

        {/* Label */}
        <h3 className="text-xl font-semibold text-gray-700 mb-2 group-hover:text-blue-700 transition-colors duration-300">
          {label}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Sparkle Effect */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          delay: Math.random() * 2,
        }}
      />
    </div>
  </motion.div>
);

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto]">
              Our Achievements
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Numbers that reflect our commitment to excellence and the trust our community places in us.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <StatCard
            icon={Users}
            value={12000}
            suffix="+"
            label="Active Members"
            description="Growing community of luxury hotel enthusiasts and Roblox players worldwide"
            delay={0}
          />
          <StatCard
            icon={Star}
            value={98}
            suffix="%"
            label="Satisfaction Rate"
            description="Exceptional guest satisfaction scores reflecting our commitment to excellence"
            delay={0.2}
          />
          <StatCard
            icon={Building}
            value={25}
            suffix="+"
            label="Hotel Locations"
            description="Premium hotel properties across multiple Roblox experiences and worlds"
            delay={0.4}
          />
          <StatCard
            icon={Trophy}
            value={150}
            suffix="+"
            label="Awards Won"
            description="Recognition for outstanding service and innovation in virtual hospitality"
            delay={0.6}
          />
          <StatCard
            icon={Clock}
            value={24}
            suffix="/7"
            label="Support Available"
            description="Round-the-clock customer service ensuring seamless experiences"
            delay={0.8}
          />
          <StatCard
            icon={Globe}
            value={45}
            suffix="+"
            label="Countries Served"
            description="Global reach connecting players from diverse cultures and backgrounds"
            delay={1}
          />
        </div>

        {/* Featured Highlight */}
        <motion.div
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-16 h-16 border border-white rounded-full" />
            <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white rounded-full" />
          </div>

          <div className="relative z-10">
            <motion.h3
              className="text-4xl md:text-5xl font-bold mb-4"
              animate={{
                textShadow: [
                  '0 0 20px rgba(255, 255, 255, 0.5)',
                  '0 0 40px rgba(255, 255, 255, 0.8)',
                  '0 0 20px rgba(255, 255, 255, 0.5)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Leading the Future
            </motion.h3>
            <motion.p
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              As pioneers in virtual hospitality, we continue to set new standards for luxury experiences in the Roblox metaverse, 
              creating unforgettable moments for every guest who walks through our digital doors.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
