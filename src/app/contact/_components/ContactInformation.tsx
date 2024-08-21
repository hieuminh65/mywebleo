import React from "react";
import { motion } from "framer-motion";
import { EnvelopeOpenIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const ContactInfo: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          className="mb-8 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <EnvelopeOpenIcon className="text-blue-500 w-10 h-10" />
          <h2 className="text-xl md:text-3xl font-semibold text-off-black mt-4">
            Gmail: hieung.tech@gmail.com
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <LinkedInLogoIcon className="text-blue-600 w-10 h-10" />
          <h2 className="text-xl md:text-3xl font-semibold text-off-black mt-4">
            LinkedIn: linkedin.com/in/hieunguyen65/
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
