import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="flex min-h-screen items-center bg-[#0a192f] text-white">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.p 
          className="mb-2 text-lg text-cyan-400"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hey, I&apos;m Ronak.
        </motion.p>
        <motion.h1 
          className="text-4xl font-extrabold sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="block text-gray-300">I enjoy <span className="text-cyan-400">building</span> and</span>
          <span className="block text-gray-300"><span className="text-cyan-400">designing</span> for the web.</span>
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
