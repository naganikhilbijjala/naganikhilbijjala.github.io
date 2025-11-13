"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import blogsData from "@/data/blogs.json";
import { Blog } from "@/types/blog";

export default function BlogsPage() {
  const blogs: Blog[] = blogsData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Backend: "from-purple-500 to-pink-500",
      Cloud: "from-blue-500 to-cyan-500",
      Database: "from-green-500 to-teal-500",
      Frontend: "from-orange-500 to-red-500",
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Professional subtle background pattern */}
      <div className="fixed inset-0 -z-10">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Subtle gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950/20 dark:to-purple-950/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-100 to-cyan-100 dark:from-indigo-950/20 dark:to-cyan-950/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative py-16 px-8">

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Thoughts on software engineering, technology, and best practices
            </p>
            <Link
              href="/"
              className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
            >
              ← Back to Home
            </Link>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogs.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Category badge */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getCategoryColor(
                    post.category
                  )}`}
                />

                {/* Blog Image */}
                {post.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Card content */}
                <div className="p-6 space-y-4">
                  {/* Category tag */}
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(
                      post.category
                    )} text-white shadow-md`}
                  >
                    {post.category}
                  </span>

                  {/* Meta information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-xs" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-xs" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    <Link href={`/blogs/${post.slug}`} className="block">
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read more link */}
                  <Link href={`/blogs/${post.slug}`}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300"
                    >
                      <span>Read more</span>
                      <FaArrowRight className="text-indigo-600" />
                    </motion.div>
                  </Link>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Decorative element */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
