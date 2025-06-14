import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-sora text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/60">
            I&apos;m currently open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <motion.div
          className="mt-16 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-lg bg-card p-8 shadow-lg">
            <div className="flex items-center justify-center gap-4 text-center">
                <a href="mailto:ronakmathur9@gmail.com" className="flex items-center gap-2 text-lg font-semibold text-foreground/80 transition-colors hover:text-primary">
                    <FaEnvelope />
                    ronakmathur9@gmail.com
                </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com/ronak232" target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-primary">
                <FaGithub size={28} />
            </a>
            <a href="https://linkedin.com/in/ronak-mathur-232" target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-primary">
                <FaLinkedin size={28} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

