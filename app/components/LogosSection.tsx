"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * LogosSection renders a simple strip of client logos. The original
 * template features five logos that gently animate into view as the
 * section scrolls into the viewport. To preserve that feel we use
 * framer‑motion to fade the list in on mount. The images are loaded
 * directly from the WordPress demo – Next.js has been configured to
 * allow remote assets from demo.sociolib.com in next.config.js.  If you
 * wish to replace any of these with your own partners simply change
 * the URL in the `logos` array.
 */
export default function LogosSection() {
  const logos = [
    {
      src: "https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/client1.png",
      alt: "torq logo",
    },
    {
      src: "https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/client5.png",
      alt: "kahf logo",
    },
    {
      src: "https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/client2.png",
      alt: "uhud logo",
    },
    {
      src: "https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/client3.png",
      alt: "dukan logo",
    },
    {
      src: "https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/client4.png",
      alt: "dearafa logo",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          // Updated classes for mobile responsiveness
          className="flex flex-col items-center justify-center gap-12 sm:flex-row sm:flex-wrap sm:gap-20"
        >
          {logos.map((logo, idx) => (
            <div key={idx} className="grayscale transition hover:grayscale-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={77}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}