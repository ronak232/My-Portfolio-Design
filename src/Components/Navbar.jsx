import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useThemeSwitcher } from "../utils/darkModeSwitch";
import { FiSun, FiMoon, FiX, FiMenu } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mode, toggleTheme] = useThemeSwitcher();

  const navItems = [
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/ronak232",
      icon: <FaGithub className="h-5 w-5" />,
    },
    {
      href: "https://www.linkedin.com/in/ronak-mathur-232001/",
      icon: <FaLinkedin className="h-5 w-5" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold font-sora cursor-pointer"
        >
          RM
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-50}
              className="cursor-pointer text-lg font-semibold text-foreground/90 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button onClick={toggleTheme} className="p-2">
            {mode === "dark" ? (
              <FiSun className="h-5 w-5" />
            ) : (
              <FiMoon className="h-5 w-5" />
            )}
          </button>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-50}
                className="cursor-pointer text-lg font-medium text-foreground/70 transition-colors hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <button onClick={toggleTheme} className="p-2">
                {mode === "dark" ? (
                  <FiSun className="h-5 w-5" />
                ) : (
                  <FiMoon className="h-5 w-5" />
                )}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
