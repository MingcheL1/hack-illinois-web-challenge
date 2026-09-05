"use client";
import { Events } from "@/components/events";
import { Navbar } from "@/components/navbar";
import { Surface } from "@/components/surface";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
    const [data, setData]=useState<unknown>(null); //can't interact until I know what the variable type is
    useEffect(()=>{
        async function loadEvents(){
            try{
                const response= await fetch("https://adonix.hackillinois.org/event/")
                const json: unknown=(await response.json());
                setData(json);
            }
            catch(error){
                console.log("booooo");
            }
            
        }
        loadEvents();
    },[])
  return (
    <div className="sky min-h-screen">
      <Navbar/>
      <Surface/>
      <Events data={data}/>
    </div>
  )
}
