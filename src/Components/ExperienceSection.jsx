import { motion } from 'framer-motion';

const experienceData = [
  {
    date: '2022 - Present',
    role: 'Frontend Developer',
    company: 'Innovatech Solutions',
    description: [
      'Developed and maintained responsive web applications using React and Next.js, resulting in a 30% increase in user engagement.',
      'Collaborated with designers and backend developers to implement new features and improve existing ones.',
      'Optimized application performance, reducing load times by 20% and improving overall user satisfaction.',
    ],
  },
  // Add more experience objects here
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-sora text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Work Experience
        </h2>
        <p className="mt-4 text-center text-lg text-foreground/60">
          My professional journey and key accomplishments.
        </p>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>

          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-12 flex w-full items-center justify-between"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                {/* Empty div for spacing */}
              </div>

              <div className="absolute left-1/2 z-10 -translate-x-1/2 transform">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <div className="h-3 w-3 rounded-full bg-primary-foreground"></div>
                </div>
              </div>

              <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                <div className={`rounded-lg bg-card p-6 shadow-lg ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <p className="text-sm font-semibold text-primary">{item.date}</p>
                  <h3 className="mt-1 font-sora text-xl font-bold text-card-foreground">
                    {item.role}
                  </h3>
                  <p className="text-md mt-1 font-medium text-card-foreground/80">
                    {item.company}
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-left text-card-foreground/60">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

