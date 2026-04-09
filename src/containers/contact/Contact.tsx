import React from "react";
import SocialMedia from "@/components/socialMedia";
import {contactInfo} from "@/portfolio";
import {motion} from "framer-motion";
import {FaEnvelope, FaArrowRight} from "react-icons/fa";

export default function Contact() {
  return (
    <div id="contact" className="relative py-24 px-6">
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: "-100px"}}
        transition={{duration: 0.7}}
        className="relative max-w-6xl mx-auto"
      >
        {/* Ambient glow behind the section */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-400/[0.06] dark:bg-emerald-500/[0.04] rounded-full blur-[80px]" />
        </div>

        <div className="text-center max-w-2xl mx-auto">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 block"
          >
            Contact
          </motion.span>

          {/* Title */}
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-foreground mb-5"
            initial={{opacity: 0, y: 15}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.1}}
          >
            {contactInfo.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed"
            initial={{opacity: 0, y: 10}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.2}}
          >
            {contactInfo.subtitle}
          </motion.p>

          {/* Email card */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.3}}
            className="mb-10"
          >
            <motion.a
              href={`mailto:${contactInfo.email_address}`}
              whileHover={{y: -3}}
              className="group inline-flex items-center gap-4 px-8 py-5 bg-white/70 dark:bg-white/[0.04] rounded-2xl border border-slate-200/60 dark:border-white/[0.06] hover:border-emerald-300/50 dark:hover:border-emerald-500/20 backdrop-blur-sm transition-all duration-400 hover:shadow-lg hover:shadow-emerald-500/[0.06]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/30 transition-shadow duration-300">
                <FaEnvelope className="text-lg" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-0.5">
                  Email me at
                </p>
                <p className="text-base font-semibold text-foreground">
                  {contactInfo.email_address}
                </p>
              </div>
              <FaArrowRight className="ml-2 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-300" />
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{opacity: 0, y: 15}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.4}}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Or find me on
            </p>
            <SocialMedia />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
