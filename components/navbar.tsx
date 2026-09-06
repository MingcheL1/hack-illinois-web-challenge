"use client";
import { FC, useState } from "react";
import Link from "next/link";

export const Navbar: FC = () => {


  return (
    <div className="mx-auto mt-8 text-black py-2 h-auto font-mono w-xl rounded-xl bg-yellow-300 ">
      <div className="flex flex-row  place-items-center justify-center px-4">
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
          <Link href="/" className="">
            Credits
          </Link>
        </div>
      </div>
    </div>
  );
};
