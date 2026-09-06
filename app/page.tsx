"use client";
import { Events } from "@/components/events";
import { Navbar } from "@/components/navbar";
import { Surface } from "@/components/surface";
import { EventData } from "@/types/event";
import Image from "next/image";
import { useState, useEffect } from "react";


export default function Home() {
    const [data, setData]=useState<EventData|null>(null); //can't interact until I know what the variable type is
    useEffect(()=>{
        async function loadEvents(){
            try{
                const response= await fetch("https://adonix.hackillinois.org/event/")
                if(!response.ok){
                    throw new Error("Failed to fetch events");
                }
                const json: EventData=(await response.json());
                setData(json);
            }
            catch(error){
                console.log(error);
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
