import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Feature({ icon, title, description, color, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const [rotation, setRotation] = useState(0);
    const featureVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.1,
            duration: 0.5,  
          },
        }),
      };
    // Handle the gradient animation when hovered
    useEffect(() => {
      let animationFrame;
      let startTime;
  
      const animateGradient = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
  
        // Complete a full rotation every 3 seconds
        const newRotation = ((elapsed / 3000) * 360) % 360;
        setRotation(newRotation);
  
        animationFrame = requestAnimationFrame(animateGradient);
      };
  
      if (isHovered) {
        animationFrame = requestAnimationFrame(animateGradient);
      }
  
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [isHovered]);
  
    return (
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated gradient border */}
        <div
          className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `linear-gradient(${rotation}deg, #4f46e5, #06b6d4, #818cf8, #4f46e5)`,
            backgroundSize: "300% 300%",
            padding: "2px",
            filter: "blur(0.5px)",
            zIndex: 0,
          }}
        />
  
        {/* Main content card */}
        <motion.div
          className="p-6 bg-slate-800/50 rounded-xl border border-transparent relative z-10 group-hover:shadow-lg group-hover:shadow-indigo-800/10 transition-all"
          style={{ margin: "2px" }} // To account for the border width
          variants={featureVariants}
          custom={index}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div
            className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center bg-gradient-to-br ${color} shadow-lg group-hover:scale-110 transition-all duration-300`}
          >
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-300 transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
            {description}
          </p>
        </motion.div>
      </div>
    );
  }


  export default Feature;