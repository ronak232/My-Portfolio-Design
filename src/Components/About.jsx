import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma, FaGithub } from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

const About = () => {
  const techStack = [
    { icon: <FaReact size={40} />, name: "React" },
    { icon: <SiNextdotjs size={40} />, name: "Next.js" },
    { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS" },
    { icon: <FaNodeJs size={40} />, name: "Node.js" },
    { icon: <SiMongodb size={40} />, name: "MongoDB" },
    { icon: <FaFigma size={40} />, name: "Figma" },
    { icon: <FaJs size={40} />, name: "JavaScript" },
    { icon: <FaGithub size={40} />, name: "GitHub" },
  ];

  return (
    <section id="about" className="md:py-10 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-sora text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            👋 About Me
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/70">
            I&apos;m{" "}
            <span className="text-cyan-400 font-semibold">Ronak Mathur</span>, a
            passionate <span className="font-medium">Frontend Developer</span>{" "}
            who transforms complex ideas into elegant, performant, and
            responsive user experiences. With{" "}
            <span className="font-medium">
              around 2 years of professional experience
            </span>
            , I&apos;ve worked on real-world web applications at scale —
            improving performance, refining UI/UX, and optimizing accessibility
            across devices.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            I specialize in technologies like{" "}
            <span className="text-cyan-400 font-semibold">
              HTML, CSS, React, Tailwind CSS, SCSS, JavaScript
            </span>
            , and love bringing designs to life with pixel precision using tools
            like <span className="font-semibold">Figma</span>. I’m also actively
            exploring the intersection of{" "}
            <span className="text-cyan-400 font-semibold">
              AI and frontend development
            </span>{" "}
            to build smarter, more intuitive interfaces that go beyond static
            content.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            Whether it&apos;s collaborating in agile teams, integrating RESTful
            APIs, or deploying code via Azure DevOps, I thrive in fast-paced
            environments that demand both creativity and performance. I&apos;m
            always curious, constantly learning, and eager to solve real-world
            problems through code.
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
