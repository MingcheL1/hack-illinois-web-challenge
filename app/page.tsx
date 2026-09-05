import { Navbar } from "@/components/navbar";
import { Surface } from "@/components/surface";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-400 min-h-screen">
      <Navbar/>
      <Surface/>
    </div>
  )
}
