"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/CodeWithAbhay777",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/abhay-awasthi-83326b281/",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com",
      label: "Twitter",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-bold text-gradient cursor-pointer"
            >
              Abhay Awasthi
            </motion.button>

            <p className="text-muted-foreground text-sm flex items-center">
              © {currentYear} Made with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-1 text-red-500"
              >
                <FaHeart size={12} />
              </motion.span>
              by Abhay Awasthi
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                onClick={() => {
                  const element = document.querySelector(
                    `#${item.toLowerCase()}`
                  );
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-muted-foreground hover:text-primary transition-colors underline-animate"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  y: -3,
                  transition: { type: "spring", stiffness: 400 },
                }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-card rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 pt-8 border-t border-border/50 text-center"
        >
          <div className=" flex items-center justify-center">
            <TextHoverEffect text="ABHAY" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
