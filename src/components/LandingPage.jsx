import { motion } from "framer-motion";
import React from "react";
import {  useStoreContext } from "../contextApi/ContextApi";
import FeaturesSection from "./FeatureSection";

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

const LandingPage = () => {
  const { token } = useStoreContext();
  console.log("TOKEN FROM LANDING PAGE:" + token);
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.div
        className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-20 px-8"
        variants={itemVariants}
      >
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h1
            className="font-extrabold text-6xl leading-tight drop-shadow-lg"
            variants={itemVariants}
          >
            Shorten. Share. Analyze.
          </motion.h1>
          <motion.p className="mt-4 text-lg opacity-90" variants={itemVariants}>
            Create concise, trackable links and maximize engagement
            effortlessly.
          </motion.p>
          <motion.div
            className="mt-6 flex justify-center lg:justify-start gap-4"
            variants={itemVariants}
          >
            <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition-all">
              Manage Links
            </button>
            <button className="bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-900 transition-all">
              Create Short Link
            </button>
          </motion.div>
        </div>

        <motion.div
          className="lg:w-1/2 flex justify-center"
          variants={itemVariants}
        >
          <motion.img
            className="w-[450px] rounded-xl hover:scale-105 transition-transform"
            src="/images/logo.png"
            alt="Shorten URL"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </motion.div>

      {/* Trusted Companies Section */}
      <motion.div className="text-center py-12" variants={itemVariants}>
        <motion.p
          className="text-3xl font-bold opacity-95"
          variants={itemVariants}
        >
          Trusted By Professionals & Companies
        </motion.p>
      </motion.div>

      {/* Features Section */}
      <FeaturesSection />
    </motion.div>
  );
};

export default LandingPage;
