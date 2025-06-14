import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

const About = () => {
  const techStack = [
    { icon: <FaReact size={40} />, name: "React" },
    { icon: <SiNextdotjs size={40} />, name: "Next.js" },
    { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS" },
    { icon: <FaNodeJs size={40} />, name: "Node.js" },
    { icon: <SiMongodb size={40} />, name: "MongoDB" },
    { icon: <FaFigma size={40} />, name: "Figma" },
  ];

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-sora text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/60">
            I&apos;m a passionate frontend developer dedicated to crafting
            exceptional user experiences through clean, efficient, and visually
            appealing web applications.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-center font-sora text-2xl font-bold text-foreground">
            My Tech Stack
          </h3>
          <motion.div
            className="mt-8 grid grid-cols-2 justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="rounded-full bg-primary/10 p-4 text-primary">
                  {tech.icon}
                </div>
                <span className="font-semibold text-foreground/80">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
