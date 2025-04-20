import React from "react";
import Navbar from "../Navbar/Navbar";

export default function About() {
  return (
    <section id="about" className="bg-slate-900 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              LazyUI
            </span>
          </h1>
          <div className="h-1 w-24 bg-indigo-500 mx-auto rounded"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto bg-slate-800 rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left sidebar with team icon */}
            <div className="md:w-1/3 bg-indigo-900 p-6 flex flex-col items-center justify-center">
              <div className="bg-indigo-700 p-4 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white text-center">
                A Team of Five Developers
              </h3>
              <p className="text-indigo-200 text-center mt-2">
                Connected by passion
              </p>
              <div className="flex flex-col gap-2 my-4 text-white items-start justify-center">
                <a className="hover:underline" href="https://github.com/manjeetsingh-02">@Manjeet</a>
                <a className="hover:underline" href="https://github.com/pritamawatade">@Pritam</a>
                <a className="hover:underline" href="https://github.com/hardik8127">@Hardik</a>
                <a className="hover:underline" href="https://github.com/deepakdotcom">@Deepak</a>
                <a className="hover:underline" href="https://github.com/1986prasenjit">@Prasenjit</a>
              </div>
            </div>

            {/* Right content */}
            <div className="md:w-2/3 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>

              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-indigo-400">LazyUI</strong> is a
                  passion project built by a team of five like-minded developers
                  who connected during the Web Development Cohort led by the
                  incredible{" "}
                  <strong className="text-indigo-400">Hitesh Choudhary</strong>{" "}
                  and <strong className="text-indigo-400">Piyush Garg</strong>,
                  under the inspiring banner of{" "}
                  <strong className="text-indigo-400">Chai Code</strong>.
                </p>

                <p>
                  What started as a random team formation quickly evolved into a
                  focused mission — to create a modern, lightweight, and
                  developer-friendly UI component library. Throughout our
                  journey, we encountered countless challenges, from technical
                  roadblocks to sleepless nights debugging UI glitches. But with
                  each obstacle, we grew stronger — and none of this would have
                  been possible without the constant support, mentorship, and
                  encouragement from the{" "}
                  <strong className="text-indigo-400">Chai Code team</strong>.
                </p>

                <p>
                  We poured our hearts, days, and (a lot of!) late nights into
                  building LazyUI — not just as a tool, but as a gift to the
                  developer community. Every component you see has been crafted
                  with love, with a single goal in mind:{" "}
                  <strong className="text-indigo-400">
                    to help developers ship faster and bring their dream
                    projects to life
                  </strong>
                  .
                </p>

                <p>
                  LazyUI is, and always will be,{" "}
                  <strong className="text-indigo-400">
                    completely open-source and free to use
                  </strong>
                  . It's our way of giving back to the community that shaped us.
                </p>

                <p>
                  To{" "}
                  <strong className="text-indigo-400">
                    Hitesh Sir, Piyush Sir, and the entire Chai Code team
                  </strong>{" "}
                  — thank you for creating an environment where ideas like this
                  can come to life. We are forever grateful.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-6">
            Crafted with ❤️ and many cups of chai
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg shadow-lg transition-colors duration-300">
            Explore Components
          </button>
        </div>
      </div>
    </section>
  );
}
