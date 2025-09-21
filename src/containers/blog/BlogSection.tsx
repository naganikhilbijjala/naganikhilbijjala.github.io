"use client";
import React from "react";

import {motion} from "framer-motion";

export default function BlogSection() {

  const blogPosts = [
    {
      title: "Building Scalable Microservices with Spring Boot",
      date: "January 15, 2024",
      excerpt: "Learn how to design and implement scalable microservices architecture using Spring Boot and best practices.",
      readTime: "8 min read",
      link: "#"
    },
    {
      title: "AWS Best Practices for Cloud-Native Applications",
      date: "December 20, 2023",
      excerpt: "Explore essential AWS services and patterns for building resilient cloud-native applications.",
      readTime: "10 min read",
      link: "#"
    },
    {
      title: "Optimizing Database Performance in Production",
      date: "November 10, 2023",
      excerpt: "Tips and techniques for improving database query performance and reducing latency in production systems.",
      readTime: "6 min read",
      link: "#"
    }
  ];

  return (
    <div id="blog" className="main blog-section">
      <div className="blog-header">
        <h1 className="blog-title">Blog</h1>
        <p className="blog-subtitle">
          Thoughts on software engineering, technology, and best practices
        </p>
      </div>
      <div className="blog-container">
        {blogPosts.map((post, index) => (
          <motion.article
            key={index}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: index * 0.1}}
            className="blog-post"
          >
            <div className="post-meta">
              <span className="post-date">{post.date}</span>
              <span className="post-read-time">{post.readTime}</span>
            </div>
            <h2 className="post-title">
              <a href={post.link} className="post-link">{post.title}</a>
            </h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <a href={post.link} className="read-more">Read more →</a>
          </motion.article>
        ))}
      </div>
    </div>
  );
}