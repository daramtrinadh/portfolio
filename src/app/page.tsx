"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect";
import { FlipWords } from "../components/ui/flip-words";
import { HoverEffect } from "../components/ui/card-hover-effect";
 
const projects = [
  {
    title: "Next js",
    description:"Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering",
    link: "https://nextjs.org/",
  },
  {
    title: "React",
    description:
      "React is a JavaScript library for building user interfaces. React is used to build single-page applications.",
    link: "https://react.dev/",
  },
  {
    title: "Framer Motion",
    description:
      "The open source Framer Motion powers the production quality animation and can be used in Framer or any React based project.",
    link: "https://www.framer.com/motion/",
  },
  {
    title: "Tailwindcss",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://tailwindcss.com/",
  },
  {
    title: "Vercel",
    description:
      "Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
    link: "https://vercel.com/",
  },
  {
    title: "Github",
    description:
      "GitHub is a developer platform that allows developers to create, store, manage and share their code. ",
    link: "https://github.com/",
  }
];
const  Home=()=> {
  const words = ["beautiful", "modern", "responsive", "interactive"];
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-auto w-[70vw]  flex flex-col lg:flex-col overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative md:flex-row" >
      <h1 className="font-extrabold">👋 Hello there! I'm Trinadh</h1>     
      <p className="md:text-2xl text-2xl font-medium text-center text-white relative z-20 max-w-2xl mx-auto">A passionate Frontend Developer creating engaging web experiences.</p>
      <p className="text-center">I like to craft solid and scalable frontend products with great user experiences.</p>
      <h1 className="text-4xl mb-7 text-white text-center font-normal text-white-600 dark:text-white-400">
      Building
        <span style={{ color: 'white' }}><FlipWords words={words} /></span>
        websites with an interactive tech stack:
      </h1>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}

export default Home