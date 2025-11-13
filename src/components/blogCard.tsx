"use client";
import React from "react";


interface BlogCardProps {
  blog: {
    url: string;
    title: string;
    description: string;
    image?: string;
  };
  isDark: boolean;
}

export default function BlogCard({blog, isDark}: BlogCardProps) {
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
    <div onClick={() => openUrlInNewTab(blog.url, blog.title)}>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <a
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
          href="#blog"
        >
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title}
          </h3>
          <p className={isDark ? "small-dark small" : "small"}>
            {blog.description}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
