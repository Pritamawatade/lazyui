"use client";

import Link from "next/link";
import { FiGithub, FiTwitter, FiMail, FiHeart } from "react-icons/fi";
import { IconBrandDiscord, IconBrandLinkedin } from "@tabler/icons-react";

const navigation = {
  product: [
    { name: "Components", href: "/docs/components/button" },
    { name: "Documentation", href: "/docs" },
    { name: "Examples", href: "/examples" },
    { name: "Changelog", href: "/changelog" },
  ],
  resources: [
    { name: "Getting Started", href: "/docs/getting-started" },
    { name: "Installation", href: "/docs/installation" },
    { name: "Customization", href: "/docs/customization" },
    { name: "Theming", href: "/docs/theming" },
  ],
  community: [
    { name: "GitHub", href: "https://github.com/pritamawatade/lazyui" },
    { name: "Discord", href: "https://discord.gg/JfsGDKG3" },
    { name: "Twitter", href: "https://x.com/pritam_awatade" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/pritam-awatade/" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/pritamawatade/lazyui",
    icon: FiGithub,
  },
  {
    name: "Twitter",
    href: "https://x.com/pritam_awatade",
    icon: FiTwitter,
  },
  {
    name: "Discord",
    href: "https://discord.gg/JfsGDKG3",
    icon: IconBrandDiscord,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/pritam-awatade",
    icon: IconBrandLinkedin,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Liquid UI
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              The most comprehensive React UI library for building beautiful, accessible, 
              and performant web applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Community
            </h3>
            <ul className="space-y-3">
              {navigation.community.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 Liquid UI. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-gray-600 dark:text-gray-400 text-sm mr-2">
                Made with
              </span>
              <FiHeart className="w-4 h-4 text-red-500 mx-1" />
              <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">
                by developers, for developers
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}