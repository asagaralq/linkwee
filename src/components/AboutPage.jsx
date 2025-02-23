import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mt-10 drop-shadow-lg">About Linkwee</h1>
        <p className="mt-6 text-lg  max-w-3xl mx-auto">
          Linkwee simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links with precision and ease.
        </p>
      </div>
      
      {/* Features Section */}
      <div className="container mx-auto grid gap-8 mt-12 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {[ 
          { icon: <FaLink className="text-blue-500 text-5xl" />, title: "Simple URL Shortening", desc: "Generate short, memorable URLs instantly with an intuitive interface." },
          { icon: <FaShareAlt className="text-green-500 text-5xl" />, title: "Powerful Analytics", desc: "Track clicks, geographical data, and referral sources for optimized strategies." },
          { icon: <FaEdit className="text-purple-500 text-5xl" />, title: "Enhanced Security", desc: "All URLs are encrypted, ensuring privacy and data protection at all times." },
          { icon: <FaChartLine className="text-red-500 text-5xl" />, title: "Fast and Reliable", desc: "Experience instant redirects with 99.9% uptime on our robust infrastructure." },
        ].map((feature, index) => (
          <div key={index} className="bg-white/20 backdrop-blur-lg p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all border border-white/30 flex flex-col items-center text-center">
            {feature.icon}
            <h2 className="mt-4 text-2xl font-bold">{feature.title}</h2>
            <p className="mt-2  text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
