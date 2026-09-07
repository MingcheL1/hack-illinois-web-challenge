import { eventProps } from "@/types/event";
import { convertTime } from "@/util/functions/date";
import { FC, useState } from "react";

export const Compact: FC<eventProps> = ({ data }) => {
    const [day, setDay]=useState("Friday");
    const filteredEvents=data?.events.filter((event)=>{ return convertTime(event.startTime).includes(day);});
    console.log(filteredEvents);
    return (
        <div className="relative w-full h-screen ">
        <img
            src="/images/compactBG.jpg"
            alt="Compact Mode"
            className="w-full h-full object-cover absolute inset-0"
        />
        <div className="inline-flex gap-2 ml-8 mt-10 mb-8 p-2 relative">
            {
                ["Friday", "Saturday", "Sunday"].map((d) => {
                    const active=day===d;
                    return(
                        <button key={d} onClick={ ()=> {setDay(d); console.log(d)}} className={`px-4 py-2 rounded-lg ${active ? 'bg-yellow-300 text-black' : 'bg-blue-900/80 text white hover:bg-yellow-300/75'}`}>
                            {d}
                        </button>
                    );
                })
            }
        </div>

        <div className="absolute inset-0 mt-20">

            <div className="relative mt-8 w-[850px] ml-10 overflow-hidden rounded-md border border-white/49 bg-blue-900/80 backdrop-blur-[2px] p-6 ">



                <div className="relative z-10">
                    <div className="mb-6 flex items-end justify-between">
                        <h1 className="text-lg uppercase text-white/60">Schedule</h1>
                        <p className="text-sm text-white/60">{day}</p>
                    
                    </div>
                </div>
                
                {filteredEvents?.map((event) => (
                    <div
                        key={event.eventID}
                        className="text-white rounded-md shadow-md m-4 border border-white/10 shadow-lg bg-blue-800/70 px-5 py-4"
                    >
                        
                        <h1 className="text-xl font-bold">{event.name}</h1>    
                        <h2 className="mb-1 text-sm font-bold">{convertTime(event.startTime)} - {convertTime(event.endTime)}</h2>
                        <h3 className="mt-1 text-sm text-white">{event.locations.description}</h3>
                        <p className="text-white">{event.description}</p>
                    </div>
                ))} 
            </div>

        </div> 
        </div>
  );
};
