"use client";
import { FC, useState } from "react";
import Link from "next/link";

export const Navbar: FC = () => {


  return (
    <div className="fixed z-100 flex flex-row mx-auto mt-4 ml-8 text-black py-2 h-auto font-mono gap-x-xl w-full">
      <div className=""><img src="/images/HackIllinois.png" className="w-40 h-auto"></img></div>
      <div className="gap-12 ml-auto mt-4 text-white place-items-center justify-center px-4">
        <div className="lg:hidden">
        </div>
        <div className="space-x-12 text-2xl">
          <Link href="/" className="">
            Schedule
          </Link>
          <Link href="https://2025.hackillinois.org/mentors" className="">
            Mentors
          </Link>
          <Link href="https://2025.hackillinois.org/prizes" className="">
            Prizes
          </Link>
          <Link href="/" className="mr-8">
            Credits
          </Link>
        </div>
      </div>
    </div>
  );
};
