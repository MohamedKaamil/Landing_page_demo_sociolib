"use client";

import { ChartPie, Package, ChartLine, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Market Research",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet.",
    icon: ChartPie,
  },
  {
    id: 2,
    title: "Product Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet.",
    icon: Package,
  },
  {
    id: 3,
    title: "Marketing Strategy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet.",
    icon: ChartLine,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-2">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-wider text-gray-500 text-md md:text-md mb-5 mt-4 ">work process</p>
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl mb-34 ">
            Smart Design Framework
          </h2>
        </div>
        {/* Grid layout with dotted connectors */}
        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-25 md:grid-cols-3 md:gap-20">
            {steps.map(({ id, title, description, icon: Icon }, index) => (
              <div key={id} className="relative flex flex-col items-center">
                {/* Dotted connector line - only between items on desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-28 hidden h-px w-full border-t-2 border-dotted border-gray-300 md:block" />
                )}

                {/* Card container */}
                <div className="relative z-10 flex flex-col items-center">
                {/* Number badge */}
                  <div className="absolute top-[-28px] right-[15px] sm:top-[-25px] sm:right-[30px] mt-0 mr-0 p-4 bg-gray-100 rounded-full text-lg font-medium text-black flex items-center justify-center">
                    {id}.
                  </div>

                  {/* Icon box */}
                  <div className="mb-8 flex h-55 w-55 items-center justify-center rounded border-3 border-gray-100 bg-white ">
                    <Icon className="h-16 w-16 text-primary text-yellow-200" strokeWidth={1.5} />
                  </div>

                  {/* Title and Description */}
                  <div className="text-center">
                    <h3 className="mb-3 text-2xl text-gray-900 mt-1">
                      {title}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      {description}
                    </p>
                </div>              
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="#services"
            className="inline-flex items-center space-x-2 text-primary hover:underline font-medium text-lg"
          >
            <span>View Services</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}
