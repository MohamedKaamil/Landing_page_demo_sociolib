"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const slides = [
  {
    image: 'https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk12-650x650.jpg',
    heading: 'Why Your Marketing Design is Important',
    body:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: '	https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk11-650x650.jpg',
    heading: 'Why Your Marketing Design is Important',
    body:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export default function ApproachSection() {
  const [index, setIndex] = useState(0);
  const current = slides[index];

  return (
    <section className="py-20 ">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 px-5 md:flex-row md:px-8 mb-10">
        {/* Image slider */}
        <div className="relative w-full md:w-1/2">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <Image
                src={current.image}
                alt="Approach slide"
                width={800}
                height={650}
                className="md:h-[600px] w-full object-cover "
              />
            </motion.div>
          </AnimatePresence>
          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full bg-black/60 transition-colors ${i === index ? 'bg-primary' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </div>
        {/* Text content */}
        <div className="w-full md:w-1/2 ">
          <p className="uppercase tracking-wider text-primary mb-8">approach</p>
          <h2 className="text-3xl sm:text-5xl mb-8">
            {current.heading}
          </h2>
          <p className="mb-6 text-md leading-relaxed text-muted text-gray-800">
            {current.body}
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center bg-primary px-9 py-5 text-md font-semibold text-dark transition-colors bg-yellow-200"
          >
            Get in Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}