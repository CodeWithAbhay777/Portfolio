"use client"
import React, { useRef } from 'react'
import { motion , useInView} from 'framer-motion'
import Image from 'next/image';


const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <section id="about" className="py-20 px-4 w-full min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my journey and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center "
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative "
              >
                <Image
                  src="/portfolioImage_v2.jpg"
                  alt="Abhay Awasthi"
                  height={400}
                  width={450}
                  className="rounded-2xl shadow-2xl shadow-black"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-glow rounded-full opacity-80"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-black">
              Passionate Full Stack Developer
            </h3>
            
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                I'm a dedicated Full Stack Developer with a passion for creating innovative 
                web applications that solve real-world problems. My journey in software 
                development began with curiosity about how websites work, and it has evolved 
                into a deep love for building scalable, user-centric solutions.
              </p>
              
              <p>
                With expertise spanning both frontend and backend technologies, I enjoy 
                the challenge of bringing designs to life while ensuring robust, efficient 
                server-side functionality. I believe in writing clean, maintainable code 
                and staying up-to-date with the latest industry trends and best practices.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community. 
                I'm always eager to take on new challenges and collaborate on exciting projects.
              </p>
            </div>

            {/* Timeline/Experience */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 space-y-4"
            >
              <h4 className="text-xl font-semibold text-black mb-4">Journey Highlights</h4>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-black rounded-full" />
                  <span className="text-gray-600">Started programming journey with web technologies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-black rounded-full" />
                  <span className="text-gray-600">Mastered modern JavaScript frameworks and libraries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-black rounded-full" />
                  <span className="text-gray-600">Built full-stack applications with various tech stacks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-black rounded-full" />
                  <span className="text-gray-600">Continuously learning and adapting to new technologies</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection