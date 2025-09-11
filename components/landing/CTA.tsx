"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiArrowRight, FiGithub, FiBookOpen } from "react-icons/fi";
import { IconSparkles, IconRocket } from "@tabler/icons-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-xl animate-pulse animation-delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 dark:border-blue-800/50 mb-8">
            <IconRocket className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Ready to launch your next project?
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Start building with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Liquid UI today
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join thousands of developers who are already building amazing products. 
            Get started in minutes with our comprehensive component library.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              asChild
            >
              <a href="/docs" className="flex items-center text-white">
                <IconSparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                <span className="text-white">Get Started Free</span>
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-6 border-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300 group"
              asChild
            >
              <a href="https://github.com/pritamawatade/lazyui" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <FiGithub className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View on GitHub
              </a>
            </Button>
          </div>

          {/* Features list */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center sm:justify-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
              <span className="text-gray-600 dark:text-gray-300">Free & Open Source</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
              <span className="text-gray-600 dark:text-gray-300">No Installation Required</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
              <span className="text-gray-600 dark:text-gray-300">Production Ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
