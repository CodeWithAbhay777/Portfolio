"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import emailjs from 'emailjs-com';

import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  try{
    setIsSubmitting(true);
    await emailjs.send(serviceId, templateId, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }, publicKey);

    toast.success("Message sent successfully.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);

  }catch (err) {
    toast.error("Failded to send message")
    console.log(err)
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  }
   
   
    
    
    
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "codewithabhay11@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=codewithabhay11@gmail.com&su=Let's%20Connect&body=Hi%20Abhay%2C%20I%20checked%20out%20your%20portfolio...",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lucknow, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/CodeWithAbhay777",
      color: "#181717",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abhay-awasthi-83326b281/",
      color: "#0A66C2",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "#1DA1F2",
    },
  ];

  

  return (
    <section id="contact" className="py-20 px-4 bg-card/30 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className=" flex flex-col items-center lg:items-start">
              <h3 className="text-2xl font-bold text-black mb-4">
                Let's work together
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I'm always open to discussing new opportunities, creative
                projects, or potential collaborations. Whether you have a
                question about my work or just want to say hello, feel free to
                reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 ">
              {contactInfo.map((contact) => (
                <motion.div
                  key={contact.label}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg transition-colors "
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <contact.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-black">{contact.label}</p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-gray-700 hover:text-black transition-colors font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 hover:text-black font-medium">
                        {contact.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className=" flex flex-col items-center lg:items-start">
              <h4 className="text-lg font-semibold text-black mb-4">
                Follow me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="card-hover p-8 rounded-xl space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full min-h-[120px] resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 text-lg font-medium bg-black text-white cursor-pointer hover:text-black hover:bg-gray-200"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="mr-2 h-5 w-5 border-2 border-current border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
