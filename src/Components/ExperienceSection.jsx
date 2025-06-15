import { motion } from "framer-motion";

const experienceData = [
  {
    date: "Aug 2022 - Feb 2024",
    role: "Frontend Developer",
    company: "RightPoint India (A Genpact Company)",
    description: [
      "Built modern, responsive UIs using React, HTML, SCSS, and JavaScript.",
      "Transformed Figma designs into highly interactive, accessible interfaces.",
      "Redesigned checkout UI for seamless cart experience across breakpoints.",
      "Streamlined deployments with Git and Azure DevOps CI/CD pipelines.",
      "Integrated REST APIs to bridge front-end with back-end logic.",
      "Worked in Agile teams with standups, sprints, retros, and estimations.",
      "Upgraded Bootstrap 3 code to Bootstrap 5 across 50+ templates.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-24 px-6 sm:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-cyan-400 tracking-tight">
          Work Experience
        </h2>
        <p className="mt-4 text-lg text-center text-white/70">
          A timeline of my professional journey and impact.
        </p>

        <div className="relative mt-20">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative mb-20 flex flex-col sm:flex-row justify-center ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              } items-center sm:items-start`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >

              {/* Experience Card */}
              <div className="w-full sm:w-1/2 bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-cyan-500/30 transition">
                <p className="text-cyan-400 text-sm font-semibold">
                  {item.date}
                </p>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {item.role}
                </h3>
                <p className="text-md font-medium text-white/70">
                  {item.company}
                </p>
                <ul className="mt-4 space-y-2 text-white/60 list-disc pl-5 text-sm sm:text-base">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
