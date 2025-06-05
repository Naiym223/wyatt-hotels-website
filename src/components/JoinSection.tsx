'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Users, 
  MessageCircle, 
  Star,
  Crown,
  Zap,
  Heart
} from 'lucide-react';

const FloatingIcon = ({ icon: Icon, delay = 0, position = { top: '20%', left: '20%' } }) => (
  <motion.div
    className="absolute opacity-20"
    style={position}
    animate={{
      y: [-20, 20, -20],
      rotate: [0, 180, 360],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      delay,
      ease: "easeInOut",
    }}
  >
    <Icon className="w-8 h-8 text-blue-400" />
  </motion.div>
);

const BenefitCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
      }}
      className="group"
    >
      <Card className="h-full bg-white/80 backdrop-blur-md border-0 shadow-xl hover-lift">
        <CardContent className="p-6 text-center">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-300/50 transition-all duration-300"
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const PulsingButton = ({ children, variant = "default", className = "", ...props }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group"
  >
    <Button
      className={`relative overflow-hidden ${className}`}
      variant={variant}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20"
        initial={false}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />
      <span className="relative z-10">{children}</span>
    </Button>
  </motion.div>
);

export default function JoinSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const benefits = [
    {
      icon: Crown,
      title: "VIP Treatment",
      description: "Enjoy exclusive privileges and premium access to all hotel amenities"
    },
    {
      icon: Users,
      title: "Amazing Community",
      description: "Connect with like-minded individuals who share your passion for excellence"
    },
    {
      icon: Star,
      title: "Career Growth",
      description: "Advance through our ranks and develop valuable leadership skills"
    },
    {
      icon: Zap,
      title: "Regular Events",
      description: "Participate in exciting activities and special hotel-wide events"
    },
    {
      icon: Heart,
      title: "Supportive Environment",
      description: "Experience a welcoming culture that values every member's contribution"
    },
    {
      icon: MessageCircle,
      title: "Active Community",
      description: "Engage with our vibrant discord community and stay connected"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.5, 1, 1.5],
            opacity: [0.1, 0.4, 0.1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
        />
      </div>

      {/* Floating icons */}
      <FloatingIcon icon={Crown} delay={0} position={{ top: '10%', left: '10%' }} />
      <FloatingIcon icon={Star} delay={2} position={{ top: '20%', right: '15%' }} />
      <FloatingIcon icon={Users} delay={4} position={{ bottom: '30%', left: '5%' }} />
      <FloatingIcon icon={Heart} delay={6} position={{ bottom: '20%', right: '10%' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Ready to Join?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Become part of the most prestigious hotel group in Roblox. 
            Experience luxury, build friendships, and create unforgettable memories.
          </motion.p>

          {/* Main CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <PulsingButton
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl group"
            >
              <Users className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
              Join Roblox Group
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </PulsingButton>
            
            <PulsingButton
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white/10 font-bold text-xl px-12 py-6 rounded-2xl backdrop-blur-md"
            >
              <MessageCircle className="mr-3 w-6 h-6" />
              Discord Server
            </PulsingButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center items-center gap-12 text-white/70 mb-20"
          >
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-white mb-1"
                whileInView={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5 }}
              >
                12K+
              </motion.div>
              <div className="text-sm">Happy Members</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-white mb-1"
                whileInView={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                24/7
              </motion.div>
              <div className="text-sm">Active Community</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-white mb-1"
                whileInView={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                5★
              </motion.div>
              <div className="text-sm">Experience Rating</div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Wyatt Hotels?
            </h3>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Discover the exclusive benefits that make our community special
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                {...benefit}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
            <CardContent className="p-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Crown className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Your Luxury Journey Starts Here
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Don't just dream about luxury—live it. Join Wyatt Hotels today and 
                experience what it means to be part of something extraordinary.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold text-xl px-16 py-6 rounded-2xl shadow-2xl"
                >
                  Start Your Journey
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </motion.div>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}