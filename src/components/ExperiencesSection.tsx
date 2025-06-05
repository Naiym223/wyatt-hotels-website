'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  GraduationCap, 
  Users, 
  ClipboardCheck, 
  ArrowRight,
  Star,
  Play
} from 'lucide-react';

const ExperienceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  isMain = false, 
  delay = 0,
  gradient = "from-blue-500 to-cyan-400"
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15, rotateY: isMain ? 0 : -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      whileHover={{ 
        scale: isMain ? 1.02 : 1.05,
        rotateY: isMain ? 2 : 5,
        rotateX: 2,
        boxShadow: "0 30px 60px rgba(59, 130, 246, 0.3)",
        y: -10
      }}
      className={`group relative ${isMain ? 'md:col-span-2 lg:col-span-2' : ''}`}
    >
      <Card className={`h-full overflow-hidden border-0 shadow-2xl hover-lift ${
        isMain 
          ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white' 
          : 'bg-white'
      }`}>
        <CardContent className="p-8 relative">
          {/* Background decoration for main card */}
          {isMain && (
            <div className="absolute inset-0 opacity-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-white/30 rounded-full blur-xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-xl"
              />
            </div>
          )}

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                  isMain 
                    ? 'bg-white/20 text-white' 
                    : `bg-gradient-to-br ${gradient} text-white`
                } group-hover:shadow-lg transition-all duration-300`}
              >
                <Icon className="w-8 h-8" />
              </motion.div>
              
              {isMain && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: delay + 0.3 }}
                  className="flex items-center space-x-1 bg-white/20 rounded-full px-3 py-1"
                >
                  <Star className="w-4 h-4 text-yellow-300 fill-current" />
                  <span className="text-sm font-medium">Featured</span>
                </motion.div>
              )}
            </div>

            {/* Content */}
            <h3 className={`text-2xl font-bold mb-4 ${isMain ? 'text-white' : 'text-gray-800'}`}>
              {title}
            </h3>
            
            <p className={`text-lg leading-relaxed mb-6 ${isMain ? 'text-white/90' : 'text-gray-600'}`}>
              {description}
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: delay + 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 90 }}
                    className={`w-2 h-2 rounded-full ${
                      isMain ? 'bg-white/70' : 'bg-gradient-to-r from-blue-500 to-cyan-400'
                    }`}
                  />
                  <span className={`${isMain ? 'text-white/80' : 'text-gray-700'}`}>
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className={`w-full ${
                  isMain 
                    ? 'bg-white/20 hover:bg-white/30 text-white border border-white/30' 
                    : 'bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white border-0'
                } rounded-xl py-6 text-lg font-semibold group transition-all duration-300`}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                {isMain ? 'Play Now' : 'Explore'}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function ExperiencesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      icon: Building2,
      title: "Work At A Hotel Roleplay",
      description: "Our flagship experience where luxury meets immersive roleplay. Step into the shoes of hotel staff or be a pampered guest in our premium facilities.",
      features: [
        "Realistic hotel operations and management",
        "Multiple job roles and career progression",
        "Luxury suites and premium amenities",
        "Professional training programs",
        "Guest satisfaction system"
      ],
      isMain: true,
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: Users,
      title: "Rank Center",
      description: "Advance your career within the Wyatt Hotels hierarchy. Earn promotions through dedication and exceptional service.",
      features: [
        "Clear promotion pathways",
        "Performance-based advancement",
        "Leadership opportunities",
        "Recognition programs"
      ],
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: GraduationCap,
      title: "Training Center",
      description: "Master the art of hospitality with comprehensive training programs designed to elevate your service skills.",
      features: [
        "Interactive training modules",
        "Skill development workshops",
        "Certification programs",
        "Mentorship opportunities"
      ],
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: ClipboardCheck,
      title: "Quiz Center",
      description: "Test your knowledge and demonstrate your expertise in hotel operations and guest service excellence.",
      features: [
        "Comprehensive knowledge assessments",
        "Skill validation tests",
        "Achievement tracking",
        "Competitive leaderboards"
      ],
      gradient: "from-orange-500 to-red-400"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-gradient mb-6"
          >
            Our Experiences
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover a world of immersive experiences designed to deliver the ultimate 
            in virtual hospitality and professional development.
          </motion.p>
        </div>

        {/* Experiences grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              {...experience}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Bottom section with owner info */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-cyan-500 border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-white relative">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-20 -right-20 w-80 h-80 bg-white/30 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/20 rounded-full blur-3xl"
                />
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                  className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Users className="w-12 h-12" />
                </motion.div>
                
                <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
                <p className="text-xl opacity-90 mb-2">
                  Led by <span className="font-semibold">DoubleNotSus</span>
                </p>
                <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
                  Experience the difference that passionate leadership and community-driven excellence makes. 
                  Join thousands of members who have made Wyatt Hotels their virtual home.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-2xl"
                  >
                    Join Roblox Group
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/50 text-white hover:bg-white/10 font-bold text-lg px-8 py-4 rounded-2xl"
                  >
                    View All Games
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}