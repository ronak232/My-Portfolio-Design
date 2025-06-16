import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center text-white overflow-hidden"
    >
      {/* Mobile Background */}
      <div className="absolute inset-0 blur-sm">
        <img
          src="https://res.cloudinary.com/dwc1sjsvj/image/upload/v1750052100/ugdds2wtyhqkjuiyzrmx.png"
          alt="background"
          className="block md:hidden w-full h-full object-cover"
        />
      </div>

      {/* Desktop Background */}
      <div className="absolute inset-0 blur-sm">
        <img
          src="https://res.cloudinary.com/dwc1sjsvj/image/upload/v1750052100/np0hlxdquxxutzq7nqlp.png"
          alt="background"
          className="hidden md:block w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center sm:text-left">
        <motion.p
          className="mb-2 text-2xl text-cyan-400 sm:text- font-notoSerif font-bold"
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
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://drive.google.com/uc?export=download&id=17OqVbQGuh6RuSUNTU8yqJVMcMh4K7kA3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
          >
            📄 Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
