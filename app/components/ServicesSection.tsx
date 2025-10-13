"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Branding',
    prefix: 'Smart',
    image: 'https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk2.jpg',
  },
  {
    title: 'Marketing',
    prefix: 'Effective',
    image: 'https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk3.jpg',
  },
  {
    title: 'Design',
    prefix: 'Creative',
    image: 'https://demo.sociolib.com/mulk/wp-content/uploads/sites/7/2021/10/mulk1.jpg',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 mb-10">
      <div className="mx-auto max-w-6xl px-4 md:px-2">
        <div className="grid gap-10 md:grid-cols-3"> {/* Increased gap between images */}
          {cards.map(({ title, prefix, image }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative overflow-hidden group"
            >
              <Image
                src={image}
                alt={title}
                width={600}  // Increased width
                height={750} // Increased height
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Title and Prefix at the top-left */}
              <div className="absolute top-6 left-6 flex flex-col justify-start p-6 text-white">
                <span className="text-sm uppercase text-gray-300">{prefix}</span>
                <h3 className="text-2xl font-semibold">{title}</h3>
              </div>

              {/* Description, centered and visible only on hover */}
              <div className="absolute inset-0 flex items-center justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-center text-lg text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus
                  nisl vitae magna pulvinar laoreet.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
