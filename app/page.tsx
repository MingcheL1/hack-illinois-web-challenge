"use client";
import { Compact } from "@/components/compact";
import { Navbar } from "@/components/navbar";
import { Surface } from "@/components/surface";
import { EventData } from "@/types/event";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";


export default function Home() {
    const [data, setData]=useState<EventData|null>(null);
    const [page, setPage]=useState<"surface"|"schedule">("surface");
    const [transition, setTransition]=useState(false);
    const surfaceRef=useRef<HTMLDivElement>(null);
    const scheduleRef=useRef<HTMLDivElement>(null);
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
    function dive(){
        setTransition(true);
        setTimeout( ()=>{
            scheduleRef.current?.scrollIntoView({
                behavior: "smooth",
                block:"start",
            },)
        },50)
        setTimeout( ()=>{
            setPage("schedule");
            setTransition(false);
            window.scrollTo(0,0)
        },900)
    }
    function up(){
        setTransition(true);
        setTimeout(()=>{
            surfaceRef.current?.scrollIntoView({
                behavior:"smooth",
                block:"start"
            },)
        },50)
        setTimeout(()=>{
            setPage("surface");
            setTransition(false);
            window.scrollTo(0,0);
        },900)
    }
  return (
    
    <div className="sky min-h-screen">
        <Navbar/>
      {(page==="surface" || transition)&&(
        <div ref={surfaceRef}>
            <Surface dive={dive}/>
        </div>
      )}
      {(page==="schedule"||transition) && (
        <div ref={scheduleRef}>
            <Compact data={data} up={up}/>
        
      </div>)

      }
    </div>
  )
}
