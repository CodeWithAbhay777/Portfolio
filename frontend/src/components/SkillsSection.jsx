"use client"
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, 
  SiExpress, SiMongodb, SiPostgresql, SiPrisma, SiRedux, SiGit, 
  SiGithub, SiTypescript, SiDocker, SiCplusplus
} from 'react-icons/si';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFF" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#FFF" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#FFF" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 ">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: categoryIndex * 0.2 }}
              className="card-hover p-6 rounded-xl "
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4 ">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className="flex flex-col items-center p-4 rounded-lg bg-background/50 hover:bg-primary/10 transition-all duration-300 group cursor-pointer "
                  >
                    <skill.icon 
                      size={40} 
                      style={{ color: skill.color }}
                      className="mb-2 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm font-medium text-center text-white group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-13 text-center"
        >
          <p className="text-gray-400 text-md max-w-3xl mx-auto leading-relaxed">
            I'm constantly learning and exploring new technologies to stay current with 
            industry trends.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;