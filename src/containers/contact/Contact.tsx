import React from "react";

import SocialMedia from "@/components/socialMedia";
import {contactInfo} from "@/portfolio";
import {motion} from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1}}
    >
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p className="subTitle contact-subtitle">
              {contactInfo.subtitle}
            </p>
            <div className="contact-text-div">
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            <img
              alt="Man working"
              src={require("../../assets/images/contactMailDark.svg")}
            ></img>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
