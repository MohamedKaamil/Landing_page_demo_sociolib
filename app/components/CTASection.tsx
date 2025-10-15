"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * CTASection displays a call to action with a bold headline and a
 * secondary action button. The original design uses a blurred
 * screenshot as the background; here we reuse one of the portfolio
 * images to provide a subtle contextual backdrop while preserving
 * legibility of the text. A semi‑transparent overlay darkens the
 * background. Use the `href` prop on the Link to direct users where
 * you need them.
 */
export default function CTASection() {
  return (
    <section className="relative py-14 bg-primary text-white overflow-hidden">
      {/* Background image with blur and overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0  "></div>
      <Image
        src="https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk14.jpg"
        alt="CTA background"
        fill
        className="object-cover opacity-100 py-0 lg:px-0 bg-white z-10"
      />
      <div className="container mx-auto lg:px-40 px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-20">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold max-w-lg"
        >
          Build your company branding today!
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link
            href="#process"
            className="inline-flex items-center justify-center  bg-yellow-200 text-gray-900 px-10 py-5 font-semibold hover:bg-white transition"
          >
            Get Started <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
