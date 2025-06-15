import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center text-white"
    >
      {/* Mobile background */}
      <div className="absolute inset-0 blur-sm">
        <img
          src="/images/mobile-banner.png"
          alt="background"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Desktop background */}
      <div className="absolute inset-0 hidden sm:block sm:backdrop-blur-md"></div>

      <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center sm:text-left">
        <motion.p
          className="mb-2 text-base text-cyan-400 sm:text-lg font-notoSerif font-bold"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hey, I&apos;m Ronak.
        </motion.p>
        <motion.h1
          className="text-4xl font-extrabold font-notoSerif sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="block text-gray-300">
            I enjoy <span className="text-cyan-400">building</span> and
          </span>
          <span className="block text-gray-300">
            <span className="text-cyan-400">designing</span> for the web.
          </span>
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
