"use client";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

interface ExperienceCardProps {
  cardInfo: {
    company: string;
    desc: string;
    date: string;
    companylogo: any;
    role: string;
    descBullets: string[];
  };
  isDark: boolean;
}

export default function ExperienceCard({cardInfo, isDark}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        {/* Company Header with Background */}
        <div className="relative h-44 bg-gradient-to-br from-primary/90 to-primary/70">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative h-full flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold text-center px-6 drop-shadow-lg">
              {cardInfo.company}
            </h3>
          </div>

          {/* Company Logo */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <img
                className="w-full h-full object-cover"
                src={cardInfo.companylogo}
                alt={cardInfo.company}
              />
            </div>
          </div>
        </div>

        {/* Card Content */}
        <CardHeader className="pt-20 pb-4">
          <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <Briefcase className="h-5 w-5" />
            {cardInfo.role}
          </CardTitle>
          <CardDescription className="text-center flex items-center justify-center gap-2 mt-2">
            <Calendar className="h-4 w-4" />
            {cardInfo.date}
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-6">
          {cardInfo.desc && (
            <p className="text-muted-foreground text-center mb-4">
              {cardInfo.desc}
            </p>
          )}

          {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
            <ul className="space-y-2">
              {cardInfo.descBullets.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}