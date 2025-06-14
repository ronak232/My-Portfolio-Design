import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import data from "../data/data.json";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-sora text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          My Work & Projects
        </h2>
        <p className="mt-4 text-center text-lg text-foreground/60">
          Here are some of the projects I&apos;m proud to have worked on.
        </p>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.portfolio.map((project) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-card shadow-lg transition-shadow duration-300 hover:shadow-xl"
              variants={itemVariants}
            >
              <img
                src={project.img}
                alt={project.desc}
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="font-sora text-xl font-bold text-card-foreground">
                  {project.desc}
                </h3>
                <p className="mt-2 text-card-foreground/80">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-end gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
                  >
                    <FaGithub />
                    Source Code
                  </a>
                  <a
                    href={project.link} // Assuming the link is the live demo
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

