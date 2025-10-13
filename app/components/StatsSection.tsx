"use client";

import { useEffect, useState } from "react";
import { Heart, MonitorSmartphone, Bookmark, Crop } from "lucide-react";
import { motion } from "framer-motion";

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
}

const stats: StatItem[] = [
  { icon: Heart, value: 352, label: "Clients" },
  { icon: MonitorSmartphone, value: 713, label: "Projects" },
  { icon: Bookmark, value: 29, label: "Countries" },
  { icon: Crop, value: 42, label: "Designers" },
];

// Count up hook
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return count;
}

// Individual stat component
function Stat({
  icon: Icon,
  value,
  label,
  visible,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  visible: boolean;
  index: number;
}) {
  const count = useCountUp(visible ? value : 0, 2000);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-center justify-center space-x-6 md:space-x-8 lg:space-x-13"
    >
      <Icon className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 text-primary text-yellow-200" />
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark">{count}</span>
        <span className="mt-1 text-sm md:text-base lg:text-lg text-muted">{label}</span>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const [visible, setVisible] = useState(false);

  const onVisibilityChange = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setVisible(true);
    });
  };

  return (
    <section className="bg-gray-50 py-19">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div
          className="flex flex-col md:flex-row items-center justify-center md:divide-x md:divide-gray-300 md:space-x-0 space-y-6 md:space-y-0"
          ref={(node) => {
            if (node) {
              const observer = new IntersectionObserver(onVisibilityChange, {
                threshold: 0.3,
              });
              observer.observe(node);
              return () => observer.disconnect();
            }
          }}
        >
          {stats.map(({ icon, value, label }, idx) => (
            <div key={label} className="px-4 md:px-8">
              <Stat
                icon={icon}
                value={value}
                label={label}
                visible={visible}
                index={idx}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
