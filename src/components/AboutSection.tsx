import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Award, Code2 } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "5+ Years",
    description: "Professional Experience",
  },
  {
    icon: Briefcase,
    title: "50+ Projects",
    description: "Successfully Delivered",
  },
  {
    icon: Award,
    title: "10+ Awards",
    description: "Recognition & Honors",
  },
  {
    icon: GraduationCap,
    title: "B.S. Computer Science",
    description: "Stanford University",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Crafting Digital Experiences with Passion
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a Full Stack Developer based in San Francisco with a passion for building 
                  exceptional digital experiences. With over 5 years of experience in web development, 
                  I specialize in creating responsive, user-centric applications using modern technologies.
                </p>
                <p>
                  My journey in tech started during my Computer Science studies at Stanford, where I 
                  discovered my love for problem-solving and creative coding. Since then, I've worked 
                  with startups and enterprises alike, helping them bring their visions to life.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, mentoring 
                  aspiring developers, or exploring the latest tech trends. I believe in writing clean, 
                  maintainable code and creating inclusive, accessible experiences for all users.
                </p>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-card p-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}