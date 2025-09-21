"use client";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface AchievementCardProps {
  cardInfo: {
    title: string;
    description: string;
    image: any;
    imageAlt: string;
    footer: Array<{ name: string; url: string }>;
  };
  isDark: boolean;
}

export default function AchievementCard({cardInfo, isDark}: AchievementCardProps) {
  function openUrlInNewTab(url: string, name: string) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    if (typeof window !== 'undefined') {
      var win = window.open(url, "_blank");
      if (win) {
        win.focus();
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
        <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            src={cardInfo.image}
            alt={cardInfo.imageAlt || "Card Thumbnail"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold line-clamp-2">
            {cardInfo.title}
          </CardTitle>
          <CardDescription className="line-clamp-3 mt-2">
            {cardInfo.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-wrap gap-2 pt-0">
          {cardInfo.footer.map((v, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}