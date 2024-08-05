"use client";
import React from "react";
import { PinContainer } from "../../components/ui/3d-pin";

const projects = [
  {
    title: "Todo Application",
    href: "https://todo-app-self-five.vercel.app/",
  },
  {
    title: "Nxt Trendz",
    href: "https://threestore.ccbp.tech/login",
  },
  {
    title: "Jobby App",
    href: "https://jobbytrinadh.ccbp.tech/login",
  },
  {
    title: "Naruto",
    href: "https://naruto-ten.vercel.app/",
  },
  {
    title: "Ecommerce",
    href: "https://ecommerce-tau-tan.vercel.app/",
  },
];

const Page = () => {
  return (
    <div className='h-[40rem] w-full flex items-center justify-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full'>
        {projects.map((project, index) => (
          <PinContainer
            key={index}
            title={project.title}
            href={project.href}
            className='m-5'>
            <div className='flex flex-col p-4 tracking-tight text-slate-100/50 w-full h-full '>
              <h3 className='max-w-xs pb-2 m-0 font-bold text-base text-slate-100 text-center'>
                {project.title}
              </h3>
              <div className='flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' />
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default Page;
