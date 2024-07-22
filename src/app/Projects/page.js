"use client";
import React from "react";
import { PinContainer } from "../../components/ui/3d-pin";

const Page = () => {
  return (
    <div className='h-[40rem] w-full flex items-center justify-center'>
      <PinContainer title='projects' href='' className='m-5'>
        <div className='flex flex-col p-4 tracking-tight text-slate-100/50 w-[18rem] sm:w-[20rem] h-[18rem] sm:h-[20rem]'>
          <h3 className='max-w-xs pb-2 m-0 font-bold text-base text-slate-100'>
            Projects
          </h3>
          <div className='text-base m-0 p-0 font-normal'>
            <span className='text-slate-500'>Displaying Projects</span>
          </div>
          <div className='flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' />
        </div>
      </PinContainer>
    </div>
  );
};

export default Page;
