'use client';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Hotel, Users, Star, Shield, Award, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ 
      scale: 1.05, 
      rotateY: 5,
      boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
    }}
    className="group"
  >
    <Card className="h-full bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500">
      <CardContent className="p-8 text-center">
        <motion.div
          className="mb-6"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </motion.div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  </motion.div>
);

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              About Wyatt Hotels
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Experience unparalleled luxury and hospitality in the world of Roblox. 
            Wyatt Hotels sets the standard for premium accommodation, exceptional service, 
            and unforgettable experiences that go beyond imagination.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <FeatureCard
            icon={Crown}
            title="Luxury Experience"
            description="Immerse yourself in the finest Roblox hospitality with our premium amenities and world-class service standards."
            delay={0}
          />
          <FeatureCard
            icon={Hotel}
            title="Spacious Rooms"
            description="Our meticulously designed rooms offer comfort and elegance, providing the perfect retreat for every guest."
            delay={0.2}
          />
          <FeatureCard
            icon={Users}
            title="12K+ Community"
            description="Join our thriving community of luxury travelers and hospitality enthusiasts from around the globe."
            delay={0.4}
          />
          <FeatureCard
            icon={Star}
            title="Premium Service"
            description="Experience service that exceeds expectations with our dedicated team committed to your satisfaction."
            delay={0.6}
          />
          <FeatureCard
            icon={Shield}
            title="Safe & Secure"
            description="Your safety and security are our top priorities, ensuring a worry-free and peaceful stay."
            delay={0.8}
          />
          <FeatureCard
            icon={Award}
            title="Award Winning"
            description="Recognized for excellence in hospitality and innovation in the Roblox gaming community."
            delay={1}
          />
        </div>

        {/* Mission Statement */}
        <motion.div
          className="text-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-12 text-white shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-6"
            animate={{
              textShadow: [
                '0 0 20px rgba(255, 255, 255, 0.5)',
                '0 0 30px rgba(255, 255, 255, 0.8)',
                '0 0 20px rgba(255, 255, 255, 0.5)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            The Wyatt Way
          </motion.h3>
          <motion.p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We believe that every guest deserves an extraordinary experience. From the moment you step into our virtual doors, 
            you become part of our family. Our commitment to excellence, attention to detail, and passion for hospitality 
            creates memories that last a lifetime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
