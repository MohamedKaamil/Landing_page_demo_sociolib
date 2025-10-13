"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react'; // Importing the Quote icon

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet.',
    author: 'ADAM',
    role: 'Entrepreneur',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet.',
    author: 'MOOSA',
    role: 'Entrepreneur',
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="relative py-20">
      {/* Background image with fixed position */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk13.jpg')",
        }}
      />
      {/* Dark overlay on top of the background image */}
      <div className="absolute inset-0 -z-5 bg-black/50" />
      <div className="mx-auto max-w-3xl px-4 text-center text-white md:px-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Flex container for the quote icon and text */}
            <div className="flex items-center justify-center mb-6">
              {/* Quote icon */}
              <Quote className="mr-3 h-15 w-15 text-primary" />
              {/* Quote text */}
              <p className="max-w-2xl text-2xl font-semibold ">
                {current.quote}
              </p>
            </div>
            <p className=" text-lg mt-2 flex justify-center items-center">
              {current.author} -
              <span className="text-sm text-primary ml-2">{current.role}</span>
            </p>
          </motion.div>
        </AnimatePresence>
        {/* Dots navigation */}
        <div className="mt-8 flex justify-center space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition-colors ${i === index ? 'bg-primary' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
