"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/**
 * BlogSection replicates the "Our Stories" block from the original
 * Elementor template. It displays three blog cards with a date box,
 * category metadata and headline. Images are pulled directly from the
 * original site; feel free to swap the `image` URLs for your own
 * content. Each card gently zooms on hover to mirror the original
 * interaction.
 */
interface BlogPost {
  image: string;
  date: string;
  categories: string[];
  author: string;
  title: string;
  link?: string;
}

const posts: BlogPost[] = [
  {
    image:
      "https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mildlee-7KKy7-TeeVs-unsplash.jpg",
    date: "20 Oct",
    categories: ["Business"],
    author: "Socio Lib",
    title: "What Makes Good Design?: Elements and Principles",
    link: "#",
  },
  {
    image:
      "https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/novel.jpg",
    date: "20 Oct",
    categories: ["Business"],
    author: "Socio Lib",
    title: "Creative Content Marketing Ideas for Your Website",
    link: "#",
  },
  {
    image:
      "https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/keagan-henman-ZqXXVeRCyZ0-unsplash.jpg",
    date: "20 Oct",
    categories: ["Business"],
    author: "Socio Lib",
    title: "How to Choose the Right Colors for Your Brand",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Our Stories
        </motion.h2>
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-1 text-primary font-medium mb-12 hover:underline"
        >
          View Updates <ArrowRight size={16} />
        </motion.a>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white  overflow-hidden  transition-shadow"
            >
              <div className="relative group overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1920}
                  height={1280}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-0 right-0 bg-gray-200 text-gray-800 text-md font-semibold px-4 py-4">
                  {post.date}
                </span>
              </div>
              <div className="p-6 text-left ">
                <div className="text-sm text-gray-500 mb-2 flex flex-wrap gap-2 ">
                  {post.categories.map((cat, i) => (
                    <span key={i}>{cat}</span>
                  ))}
                  <span className="mx-1">/</span>
                  <span>{post.author}</span>
                </div>
                <h5 className=" text-2xl leading-snug">
                  {post.title}
                </h5>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}