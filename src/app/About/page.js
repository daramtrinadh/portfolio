import React from "react";
import { Spotlight } from "../../components/ui/Spotlight";

const page = () => {
  return (
    <div className='h-[40rem] w-full lg:items-center lg:justify-center lg:flex flex-row rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden'>
      <div>
        <Spotlight
          className='-top-40 left-0 md:left-60 md:-top-20'
          fill='white'
        />
        <div className=' p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0'>
          <h1 className='text-4xl text-center md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
            About Me
            <br />
          </h1>
          <p className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto'>
            I am a passionate frontend developer with a strong focus on creating
            visually stunning and highly interactive user interfaces. My
            expertise lies in utilizing Next.js and React.js to build dynamic
            and performant web applications. With a solid foundation in
            TypeScript, I ensure type-safe code that is both scalable and
            maintainable.
          </p>
          <p className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto'>
            To bring animations and interactivity to life, I use Framer Motion,
            enabling smooth and engaging user experiences. Tailwind CSS is my
            go-to for efficient and responsive styling, allowing me to rapidly
            prototype and refine designs. My development process is streamlined
            with GitHub for version control, ensuring collaboration and code
            integrity.
          </p>
          <p className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto'>
            Deployments are a breeze with Vercel, where I can optimize and scale
            web applications effortlessly. This combination of tools and
            technologies allows me to deliver seamless and robust web
            experiences that meet modern standards and exceed user expectations.
          </p>
        </div>
      </div>
    </div>
  );
};
export default page;
