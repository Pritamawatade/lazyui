import { motion } from "framer-motion";
import { ChevronRight, Code, Layout, Cpu, Zap, Package, Github } from "lucide-react";
import Navbar from "./components/Navbar/Navbar";
import Feature from "./components/FeatureCard/Feature";
import FooterLink from "./components/FooterLink/FooterLink";
import { Link } from "react-router-dom";

export default function App() {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20" initial="hidden" animate="visible" variants={heroVariants}>
        <motion.div className="absolute inset-0 -z-10 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto text-center">
          <motion.div className="relative inline-block mb-6" variants={itemVariants}>
            <span className="px-4 py-2 text-sm font-medium bg-indigo-500/20 rounded-full border border-indigo-400/30 text-indigo-300">Beautifully crafted UI components</span>
          </motion.div>

          <motion.h1
            className="text-2xl md:text-6xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-transparent bg-clip-text leading-tight"
            variants={itemVariants}
          >
            Ship faster with LazyUI — you build the logic, we bring the <span className="text-indigo-400">UI</span>
            <motion.span
              className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 font-extrabold text-4xl md:text-6xl lg:text-6xl drop-shadow-lg"
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{
                scale: 1.1,
                rotate: [0, 2, -2, 0],
                textShadow: "0px 0px 8px rgba(255,255,255,0.9)",
                transition: {
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
            >
              &nbsp; Magic
            </motion.span>
          </motion.h1>

          <motion.p variants={itemVariants} className={`text-2xl md:text-3xl font-bold transition-all duration-1000 delay-500 mb-6`}>
            <span className="text-blue-300">Build fast.</span>
            <span className="text-purple-300"> Ship faster.</span>
            <span className="text-green-300"> Look great.</span>
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center items-center" variants={itemVariants}>
            <motion.a
              href="#documentation"
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all shadow-xl hover:shadow-indigo-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={"/docs"}>Documentation</Link>
              <ChevronRight size={20} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 md:mt-16 w-full max-w-4xl mx-auto bg-slate-800/60 rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden"
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <div className="relative">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="text-xs text-slate-400 ml-2">Lazy UI</div>
            </div>
            <div className="p-4 md:p-8 bg-slate-900/40 font-mono text-sm overflow-x-auto">
              <pre className="text-indigo-300">
                <span className="text-pink-400">import</span> {"{ Button }"} <span className="text-pink-400">from</span>{" "}
                <span className="text-green-400">'@/components/ui/button'</span>;{"\n\n"}
                <span className="text-pink-400">function</span> <span className="text-blue-400">App</span>() {"{"}
                {"\n  "}
                <span className="text-pink-400">return</span> {"("}
                {"\n    "}
                {'<div className="app">'}
                {"\n      "}
                {'<Button variant="primary" size="lg">'}
                {"\n          "}
                {"Get Started"}
                {"\n        "}
                {"</Button>"}
                {"\n    "}
                {"</div>"}
                {"\n  "}
                {")"}
                {"\n"}
                {"}"}
              </pre>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full filter blur-3xl z-0"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section className="pb-16 sm:pb-32 pt-16 sm:pt-28 px-6 relative" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={heroVariants}>
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white" variants={itemVariants}>
            Why choose <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">LazyUI</span>?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature
              icon={<Layout size={20} className="text-white" />}
              title="Customizable Components"
              description="Our components are designed to be highly customizable to fit your brand's unique style and needs."
              color="from-indigo-500 to-indigo-700"
              index={0}
            />

            <Feature
              icon={<Cpu size={20} className="text-white" />}
              title="Performance Optimized"
              description="Built with performance in mind, LazyUI ensures your applications remain fast and responsive."
              color="from-purple-500 to-purple-700"
              index={1}
            />

            <Feature
              icon={<Zap size={20} className="text-white" />}
              title="Rapid Development"
              description="Speed up your development process with our ready-to-use components."
              color="from-pink-500 to-pink-700"
              index={2}
            />

            <Feature
              icon={<Code size={20} className="text-white" />}
              title="Developer Friendly"
              description="Well-documented components with TypeScript support makes development a breeze."
              color="from-blue-500 to-blue-700"
              index={3}
            />

            <Feature
              icon={<Package size={20} className="text-white" />}
              title="Lightweight"
              description="Small bundle size ensures your applications load quickly and efficiently."
              color="from-cyan-500 to-cyan-700"
              index={4}
            />

            <Feature
              icon={<Cpu size={20} className="text-white" />}
              title="Modern Development"
              description="Use micro animated and resposive UI components"
              color="from-indigo-500 to-purple-700"
              index={5}
            />
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="pb-10 px-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={heroVariants}>
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-b from-slate-800 to-slate-900 p-8 md:p-16 rounded-2xl border border-slate-700/50 shadow-xl relative overflow-hidden"
          variants={itemVariants}
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>

          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={itemVariants}>
            Less CSS stress. More product success.
          </motion.h2>

          <motion.p className="text-xl text-slate-300 mb-10" variants={itemVariants}>
            Start creating beautiful interfaces with LazyUI today.
          </motion.p>

          <motion.div className="flex justify-center" variants={itemVariants}>
            <motion.button
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all shadow-xl hover:shadow-indigo-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={"/docs/components/alertbox"}> Browse Components</Link>
              <ChevronRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Lazy<span className="text-indigo-300">UI</span>
            </span>
            <span className="text-slate-400 text-sm">© 2025 LazyUI</span>
          </div>

          <div className="flex gap-8 text-slate-400">
            <FooterLink text="GitHub" link="https://github.com/Pritamawatade/lazyui" />
            <FooterLink text="Documentation" link="/docs" />
          </div>
        </div>
      </footer>
    </div>
  );
}
