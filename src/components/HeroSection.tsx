'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Sparkles, Crown, Hotel, Users, Award, Zap } from 'lucide-react';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const FloatingShape = ({ delay = 0, duration = 6, size = 'w-16 h-16', position = '', children }: any) => (
  <motion.div
    className={`absolute ${size} ${position} flex items-center justify-center`}
    animate={{
      y: [-20, -60, -20],
      x: [-10, 10, -10],
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration,
      repeat: Number.POSITIVE_INFINITY,
      delay,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

const AnimatedIcon = ({ Icon, delay = 0, position = '', color = 'text-white/40' }: any) => (
  <motion.div
    className={`absolute ${position} ${color}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.4, 1, 0.4],
      scale: [1, 1.3, 1],
      rotate: [0, 360],
    }}
    transition={{
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      delay,
      ease: "easeInOut",
    }}
  >
    <Icon size={32} />
  </motion.div>
);

const ParticleField = () => {
  const particles = Array.from({ length: 50 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-50, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

const CounterAnimation = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev < target) {
          return Math.min(prev + Math.ceil(target / 100), target);
        }
        return target;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, [target]);
  
  return <span>{count.toLocaleString()}{suffix}</span>;
};

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 animate-gradient"
        style={{ y, opacity }}
      />
      
      {/* Particle Field */}
      <ParticleField />
      
      {/* Floating Shapes */}
      <FloatingShape delay={0} position="top-20 left-10">
        <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-full backdrop-blur-sm" />
      </FloatingShape>
      
      <FloatingShape delay={1} duration={8} position="top-40 right-20">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-300/30 to-blue-400/30 rounded-lg backdrop-blur-sm rotate-45" />
      </FloatingShape>
      
      <FloatingShape delay={2} duration={10} position="bottom-40 left-20">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-300/20 to-cyan-200/20 rounded-full backdrop-blur-sm" />
      </FloatingShape>
      
      {/* Animated Icons */}
      <AnimatedIcon Icon={Star} delay={0.5} position="top-32 left-1/4" />
      <AnimatedIcon Icon={Crown} delay={1.5} position="top-20 right-1/3" />
      <AnimatedIcon Icon={Hotel} delay={2.5} position="bottom-32 right-1/4" />
      <AnimatedIcon Icon={Sparkles} delay={3.5} position="bottom-20 left-1/3" />
      <AnimatedIcon Icon={Award} delay={1} position="top-1/2 left-10" />
      <AnimatedIcon Icon={Zap} delay={3} position="top-1/2 right-10" />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <motion.div
            className="relative mx-auto mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8, type: "spring", bounce: 0.4 }}
          >
            <Image 
              src="https://ext.same-assets.com/1482780893/1658750988.webp" 
              alt="Wyatt Hotels Logo" 
              width={120} 
              height={120}
              className="mx-auto animate-pulse-glow rounded-2xl"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-4"
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-2"
            animate={{ 
              textShadow: [
                "0px 0px 20px rgba(255,255,255,0.5)",
                "0px 0px 40px rgba(255,255,255,0.8)",
                "0px 0px 20px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Wyatt Hotels
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/80 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Roblox
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mb-8"
        >
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            "The Wyatt Way"
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            Luxury hotel experience, spacious rooms, service beyond imagination
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mb-12"
        >
          <div className="glass rounded-2xl p-8 backdrop-blur-lg">
            <motion.div 
              className="flex items-center justify-center space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Users className="text-white/80" size={32} />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white">
                  <CounterAnimation target={12} suffix="K+" />
                </div>
                <div className="text-white/80">Members</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8 py-4 text-lg font-semibold hover-glow"
            >
              Experience Luxury
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <ArrowRight className="ml-2" size={20} />
              </motion.div>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold"
            >
              Join Our Community
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}