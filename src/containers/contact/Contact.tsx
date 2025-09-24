import React from "react";
import SocialMedia from "@/components/socialMedia";
import {contactInfo} from "@/portfolio";
import {motion} from "framer-motion";
import {FaPhone, FaEnvelope, FaPaperPlane} from "react-icons/fa";

export default function Contact() {
  return (
    <div id="contact" className="relative py-20 px-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-48 w-96 h-96 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: "-100px"}}
        transition={{duration: 0.8}}
        className="relative max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{opacity: 0, x: -40}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, delay: 0.2}}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <motion.h1
                className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{opacity: 0, y: -20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
              >
                {contactInfo.title}
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-400 max-w-md"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: 0.2}}
              >
                {contactInfo.subtitle}
              </motion.p>
            </div>

            {/* Contact Details Card */}
            <motion.div
              initial={{opacity: 0, scale: 0.95}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: 0.3}}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6 border border-gray-100 dark:border-gray-700"
            >
              {/* Phone Number */}
              {contactInfo.number && (
                <motion.div whileHover={{x: 5}} className="group">
                  <a
                    href={`tel:${contactInfo.number}`}
                    className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                      <FaPhone className="text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Phone
                      </p>
                      <p className="text-lg font-semibold">
                        {contactInfo.number}
                      </p>
                    </div>
                  </a>
                </motion.div>
              )}

              {/* Email Address */}
              <motion.div whileHover={{x: 5}} className="group">
                <a
                  href={`mailto:${contactInfo.email_address}`}
                  className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <p className="text-lg font-semibold break-all">
                      {contactInfo.email_address}
                    </p>
                  </div>
                </a>
              </motion.div>

              {/* Divider */}
              <div className="border-t border-gray-200 dark:border-gray-700 my-6" />

              {/* Social Media */}
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Connect with me
                </p>
                <SocialMedia />
              </div>
            </motion.div>

            {/* Call to Action Button */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: 0.5}}
            >
              <motion.a
                href={`mailto:${contactInfo.email_address}`}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                <FaPaperPlane className="text-lg" />
                <span>Send Message</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Illustration/Image */}
          <motion.div
            initial={{opacity: 0, x: 40}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, delay: 0.4}}
            className="relative"
          >
            <div className="relative">
              {/* Decorative gradient circle behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />

              {/* Decorative elements */}
              <motion.div
                className="absolute top-10 -right-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{opacity: 0.3}}
              />
              <motion.div
                className="absolute bottom-10 -left-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{opacity: 0.3}}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
