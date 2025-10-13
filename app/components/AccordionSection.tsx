"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <section className="bg-gray-50 py-20">
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
        <div className="relative w-full overflow-hidden md:w-1/2">
          <Image
            src="https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk4.jpg"
            alt="Deliver perfectly illustration"
            width={800}
            height={533}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
