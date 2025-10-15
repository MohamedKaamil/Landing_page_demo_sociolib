"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Plus, Minus } from "lucide-react";

const items = [
  {
    title: "Unique Product",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet.",
  },
  {
    title: "Brand Identity",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet.",
  },
  {
    title: "Creative Marketing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet.",
  },
];

export default function AccordionSection() {
  const [active, setActive] = useState(0);

  // 1. Create a ref to track the section element in the DOM.
  const sectionRef = useRef(null);

  // 2. useScroll hook tracks the scroll progress of the section.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Animation starts when section enters viewport, ends when it leaves.
  });

  // 3. useTransform maps the scroll progress (0 to 1) to a vertical movement (-40px to 40px).
  const imageY = useTransform(scrollYProgress, [0, 1], [-120, 120]);
  


  return (
    <section ref={sectionRef} className="bg-gray-50 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-12 px-4 md:flex-row md:px-8">

        {/* Left side: accordion list */}
        <div className="w-full md:w-1/2 gap-16 md:flex-row md:gap-16 px-4">
          <p className="uppercase tracking-wider text-primary text-sm md:text-base lg:text-md lg:mb-5">
            visual identity
          </p>
          <h2 className="mt-2 mb-8 text-4xl sm:text-5xl md:text-5xl lg:text-4xl font-semibold">
            Deliver Perfectly
          </h2>
          <div className="space-y-8">
            {items.map((item, idx) => {
              const open = idx === active;
              return (
                <div key={item.title} className="border-b border-gray-200 pb-6">
                  <button
                    onClick={() => setActive(open ? -1 : idx)}
                    className="flex w-full items-center justify-between text-left text-lg sm:text-xl md:text-xl lg:text-2xl font-medium text-dark"
                  >
                    {item.title}
                    {open ? (
                      <Minus className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-7 lg:w-7 text-primary" />
                    ) : (
                      <Plus className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-7 lg:w-7 text-primary" />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pt-2 text-sm sm:text-base md:text-lg lg:text-md text-muted"
                      >
                        {item.content}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>


        {/* Right side: illustrative image */}
        <div className="relative w-full md:w-1/2">
          {/* ======= Your Original Background Image ======= */}
          <Image
            src="https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk4.jpg"
            alt="Deliver perfectly illustration"
            width={800}
            height={533}
            className="h-full w-full object-cover"
          />

       
          <motion.div
            style={{ y: imageY }}
             animate={{
              y: [-10, 10], // Move 10px up and 10px down from its current position
            }}
            // 2. Define the transition to make it a smooth, infinite loop.
            transition={{
              duration: 2.5,          // The animation cycle takes 2.5 seconds
              repeat: Infinity,       // Repeat the animation forever
              repeatType: "mirror",   // Go back and forth smoothly
              ease: "easeInOut",      // A gentle start and end to the movement
            }}
            className="absolute top-1/2 lg:left-[42%] left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
          >
            {/* Replaced Next.js <Image> with standard <img> tag */}
            <img
              src="https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/iphone-paralax.png"
              alt="Evano Everyday App on iPhone"
              width="400"
              height="815"
              className="lg:h-[287px] lg:w-[150px] h-[160px] w-[84px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
