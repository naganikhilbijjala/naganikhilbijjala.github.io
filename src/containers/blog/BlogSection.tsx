"use client";
import React from "react";
import {motion} from "framer-motion";
import {FaCalendarAlt, FaClock, FaArrowRight} from "react-icons/fa";

export default function BlogSection() {
  const blogPosts = [
    {
      title: "Building Scalable Microservices with Spring Boot",
      date: "January 15, 2024",
      excerpt: "Learn how to design and implement scalable microservices architecture using Spring Boot and best practices.",
      readTime: "8 min read",
      link: "#",
      category: "Backend"
    },
    {
      title: "AWS Best Practices for Cloud-Native Applications",
      date: "December 20, 2023",
      excerpt: "Explore essential AWS services and patterns for building resilient cloud-native applications.",
      readTime: "10 min read",
      link: "#",
      category: "Cloud"
    },
    {
      title: "Optimizing Database Performance in Production",
      date: "November 10, 2023",
      excerpt: "Tips and techniques for improving database query performance and reducing latency in production systems.",
      readTime: "6 min read",
      link: "#",
      category: "Database"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: {[key: string]: string} = {
      "Backend": "from-purple-500 to-pink-500",
      "Cloud": "from-blue-500 to-cyan-500",
      "Database": "from-green-500 to-teal-500"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <div id="blog" className="relative py-16 px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts on software engineering, technology, and best practices
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Category badge */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getCategoryColor(post.category)}`} />

              {/* Card content */}
              <div className="p-6 space-y-4">
                {/* Category tag */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(post.category)} text-white shadow-md`}
                >
                  {post.category}
                </motion.span>

                {/* Meta information */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-xs" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-xs" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  <a href={post.link} className="block">
                    {post.title}
                  </a>
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read more link */}
                <motion.a
                  href={post.link}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300"
                >
                  <span>Read more</span>
                  <FaArrowRight className="text-indigo-600" />
                </motion.a>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Decorative element */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            </motion.article>
          ))}
        </motion.div>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 text-white font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
          >
            <span>View All Posts</span>
            <FaArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}