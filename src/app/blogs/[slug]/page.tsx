"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaArrowLeft, FaUser } from "react-icons/fa";
import Link from "next/link";
import { useParams } from "next/navigation";
import blogsData from "@/data/blogs.json";
import { Blog } from "@/types/blog";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const blog: Blog | undefined = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <Link
            href="/blogs"
            className="text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-2"
          >
            <FaArrowLeft />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Backend: "from-purple-500 to-pink-500",
      Cloud: "from-blue-500 to-cyan-500",
      Database: "from-green-500 to-teal-500",
      Frontend: "from-orange-500 to-red-500",
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  // Simple markdown-like rendering for demonstration
  const renderContent = (content: string) => {
    // Split content into sections
    const sections = content.split("\n\n");

    return sections.map((section, index) => {
      // Headers
      if (section.startsWith("# ")) {
        return (
          <h1 key={index} className="text-4xl font-bold mb-6 mt-8">
            {section.replace("# ", "")}
          </h1>
        );
      }
      if (section.startsWith("## ")) {
        return (
          <h2 key={index} className="text-3xl font-bold mb-4 mt-6">
            {section.replace("## ", "")}
          </h2>
        );
      }
      if (section.startsWith("### ")) {
        return (
          <h3 key={index} className="text-2xl font-bold mb-3 mt-5">
            {section.replace("### ", "")}
          </h3>
        );
      }

      // Code blocks
      if (section.startsWith("```")) {
        const codeContent = section.replace(/```\w*\n?/g, "").trim();
        return (
          <pre
            key={index}
            className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm"
          >
            <code>{codeContent}</code>
          </pre>
        );
      }

      // Lists
      if (section.includes("\n- ")) {
        const items = section.split("\n").filter((line) => line.startsWith("- "));
        return (
          <ul key={index} className="list-disc list-inside mb-4 space-y-2">
            {items.map((item, i) => (
              <li key={i} className="text-gray-700 dark:text-gray-300">
                {item.replace("- ", "")}
              </li>
            ))}
          </ul>
        );
      }

      if (section.includes("\n1. ")) {
        const items = section.split("\n").filter((line) => /^\d+\./.test(line));
        return (
          <ol key={index} className="list-decimal list-inside mb-4 space-y-2">
            {items.map((item, i) => (
              <li key={i} className="text-gray-700 dark:text-gray-300">
                {item.replace(/^\d+\.\s*/, "")}
              </li>
            ))}
          </ol>
        );
      }

      // Regular paragraphs
      if (section.trim()) {
        return (
          <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {section}
          </p>
        );
      }

      return null;
    });
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

      <div className="relative py-16 px-4 sm:px-8">
        <div className="relative max-w-4xl mx-auto">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
            >
              <FaArrowLeft />
              Back to Blogs
            </Link>
          </motion.div>

          {/* Blog Header */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Hero Image */}
            {blog.image && (
              <div className="relative h-64 sm:h-96 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Category badge on image */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-block px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(
                      blog.category
                    )} text-white shadow-lg`}
                  >
                    {blog.category}
                  </span>
                </div>
              </div>
            )}

            {/* Blog Content */}
            <div className="p-6 sm:p-10">
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {blog.title}
              </h1>

              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <FaUser />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>{new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {renderContent(blog.content)}
              </div>
            </div>
          </motion.article>

          {/* Navigation to other posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
            >
              View All Posts
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
