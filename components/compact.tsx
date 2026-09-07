import { eventProps } from "@/types/event";
import { convertTime } from "@/util/functions/date";
import { FC, useState } from "react";

export const Compact: FC<eventProps> = ({ data }) => {
    const [day, setDay]=useState("Friday");
    const filteredEvents=data?.events.filter((event)=>{ return convertTime(event.startTime,true).includes(day);});
    console.log(filteredEvents);
    return (
        <div className="relative w-full min-h-screen bg-cover bg-center bg-fixed bg-[url('/images/compactBG.jpg')] ">

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

            <div className="mt-20">

                <div className="relative mt-8 w-[1024px] ml-10 overflow-hidden rounded-md border border-white/49 bg-blue-900/80 backdrop-blur-[2px] p-6 ">



                    <div className="relative z-10">
                        <div className="mb-6 flex items-end justify-between">
                            <h1 className="text-lg uppercase text-white/60">Schedule</h1>
                            <p className="text-sm text-white/60">{day}</p>
                        
                        </div>
                    </div>
                    
                    {filteredEvents?.map((event) => (
                        <div
                            key={event.eventID}
                            className="mb-6 flex items-stretch gap-6"
                        >
                            <div className="shrink-0 w-28 flex flex-col items-center text-white ml-10">
                                <p className="text-xl font-bold">
                                    {convertTime(event.startTime,false)}
                                </p>
                                <div className="my-2 flex min-h-16 flex-1 flex-col items-center">
                                    <span className=" text-8xl leading-none text-white font-bold">
                                        ↓
                                    </span>
                                </div>
                                <p className="text-xl font-bold">
                                    {convertTime(event.endTime,false)}
                                </p>
                            </div>
                            <div className="rounded-xl border boerder-white/20 bg-blue-900/50 p-4 ml-20">
                                <h1 className="text-2xl font-bold">{event.name}</h1>    
                                <h3 className="mt-1 text-sm text-white text-bold">⚲ {event.locations[0].description}</h3>
                                <p className="text-white text-sm">{event.description}</p>
                            </div>

                        </div>
                    ))} 
                </div>

            </div> 
        </div>
  );
};
