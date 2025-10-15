"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

// CSS for the blinking cursor effect
const BlinkingCursor = () => (
  <style jsx global>{`
    @keyframes blink {
      50% { opacity: 0; }
    }
    .cursor-blink {
      animation: blink 1s step-end infinite;
    }
  `}</style>
);

const wordsToType = ['Better', 'Faster', 'Smarter'];

export default function Hero() {
  const [openVideo, setOpenVideo] = useState(false);
  
  // Typewriter Logic
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = wordsToType[wordIndex];
      const shouldDelete = isDeleting;

      if (shouldDelete) {
        setText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setText((prev) => currentWord.substring(0, prev.length + 1));
      }

      if (!shouldDelete && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (shouldDelete && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % wordsToType.length);
      }
    };

    // --- MODIFIED LINE ---
    // Changed the first value from 100 to 50 to increase deletion speed
    const typingInterval = setInterval(handleTyping, isDeleting ? 50 : 150);

    return () => clearInterval(typingInterval);
  }, [text, isDeleting, wordIndex]);

  const bgImage =
    'https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/man-ipad.jpg';

  return (
    <>
      <BlinkingCursor />
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden md:justify-start"
      >
        {/* Background */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 -z-5 bg-gray-800/50" />

        {/* Play button */}
        <motion.div
          className="absolute left-1/2 top-32 z-10 mb-8 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-transparent text-white transition hover:bg-white/10 md:left-auto md:right-32 md:top-1/2 md:mb-0 md:h-24 md:w-24 md:-translate-y-1/2 md:translate-x-0 lg:right-80"
          aria-label="Play video"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <button
            onClick={() => setOpenVideo(true)}
            className="flex h-full w-full items-center justify-center"
          >
            <Play className="h-8 w-8 fill-white md:h-10 md:w-10" />
          </button>
        </motion.div>

        <div className="mx-auto w-full max-w-7xl px-6 py-65 md:px-12 md:py-24 lg:px-16 sm:translate-y-4 md:translate-x-[-2%]">
          <div className="max-w-xl text-center text-white md:text-left">
            <h1 className="mt-8 text-4xl font-semibold leading-tight sm:text-5xl md:mt-0 lg:text-6xl">
              Let us help you achieve your goals.{' '}
              <span className="text-primary inline-block min-h-[1em] text-yellow-200">
                {text}
                <span className="cursor-blink ">|</span>
              </span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-6">
              <Link
                href="#process"
                className="inline-flex items-center justify-center bg-primary px-12 py-5 text-sm font-semibold text-black transition-colors bg-yellow-200 hover:bg-white md:w-auto w-64"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                <Phone className="h-5 w-5" />
                <span>+123 456 789</span>
              </span>
            </div>
          </div>
        </div>

        {/* Video modal */}
        <AnimatePresence>
          {openVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80"
              onClick={() => setOpenVideo(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 250, damping: 25 }}
                className="relative w-11/12 max-w-4xl overflow-hidden rounded-lg bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setOpenVideo(false)}
                  className="absolute right-2 top-2 z-10 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Promo video"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}