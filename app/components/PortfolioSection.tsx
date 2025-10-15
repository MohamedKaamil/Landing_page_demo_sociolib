"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const portfolioImages = [
   {
    src: "https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk5.jpg",
    className: "h-full ",
  },
  {
    src: "https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk6.jpg",
    className: "h-full",
  },
  {
    src: "https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk7.jpg",
    className: "col-span-2 h-full ",
  },
  {
    src: "https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk8.jpg",
    className: "col-span-2 h-full",
  },
  {
    src: "https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk9.jpg",
    className: "h-full",
  },
  {
    src: "https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk10.jpg",
    className: "h-full",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold sm:text-5xl">We Create Future</h2>
          <Link
            href="#portfolio"
            className="mt-2 inline-flex items-center text-primary hover:underline"
          >
            View Portfolio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* 3 columns on md+, 2 on sm, 1 on mobile; tiles keep a consistent aspect like the screenshot */}
        <div id="portfolio" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioImages.map((image, idx) => (
        <motion.div
            key={idx}
            className={image.className}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="group relative overflow-hidden">
              <img
                src={image.src}
                alt={`Mulk project ${idx + 1}`}
                // Add transition and group-hover classes to the image
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
        </motion.div>
    ))}
        </div>
      </div>
    </section>
  );
}
