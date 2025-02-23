import React from "react";
import { motion } from "framer-motion";
import { FaLink, FaChartLine, FaShieldAlt, FaBolt } from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 150 },
  },
};

// Feature Data with Icons
const features = [
  {
    title: "Effortless URL Shortening",
    desc: "Generate short, memorable links with one click.",
    icon: <FaLink size={36} className="text-blue-500" />,
  },
  {
    title: "Advanced Analytics",
    desc: "Monitor link engagement with real-time insights.",
    icon: <FaChartLine size={36} className="text-green-500" />,
  },
  {
    title: "Robust Security",
    desc: "Ensure privacy with state-of-the-art encryption.",
    icon: <FaShieldAlt size={36} className="text-red-500" />,
  },
  {
    title: "Lightning-Fast Performance",
    desc: "Experience instant redirects with top-tier reliability.",
    icon: <FaBolt size={36} className="text-yellow-500" />,
  },
];

const FeaturesSection = () => {
  return (
    <motion.div
      className="container mx-auto grid gap-8 mt-16 mb-8 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-6 lg:px-14"
      variants={containerVariants}
    >
      {features.map((feature, index) => (
        <motion.div key={index} variants={itemVariants}>
          <div className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-white/20 dark:border-gray-700 flex flex-col items-center text-center relative group overflow-hidden">
            {/* Icon with animation */}
            <motion.div
              className="mb-4 p-4 bg-white dark:bg-gray-900 rounded-full shadow-md"
              whileHover={{ scale: 1.1 }}
            >
              {feature.icon}
            </motion.div>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {feature.desc}
            </p>

            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-all"></div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeaturesSection;
