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
            className="w-full h-full object-cover absolute blur-[3px]"
        />
        <div className="inline-flex gap-2 mb-8 p-2">
            {
                ["Friday", "Saturday", "Sunday"].map((d) => {
                    const active=day===d;
                    return(
                        <button key={d} onClick={ ()=> {setDay(d); console.log(d)}} className={`px-4 py-2 rounded-lg backdrop-blur-sm ${active ? 'bg-black/30' : 'bg-black/20 hover:bg-black/30'}`}>
                            {d}
                        </button>
                    );
                })
            }
        </div>

        <div className="absolute inset-0 mt-20">

            <div className="relative mt-8 max-w-full overflow-hidden rounded-md border border-white/30 bg-white10 p-6 shadow-2xl backdrop-blur-2xl">



                <div className="relative z-10">
                    <div className="mb-6 flex items-end justify-between">
                        <h1 className="text-lg uppercase tracking-[0.25em] text-white/60">Schedule</h1>
                        <p className="text-sm text-white/60">{day}</p>
                    
                    </div>
                </div>
                
                {filteredEvents?.map((event) => (
                    <div
                        key={event.eventID}
                        className=" text-white rounded-md shadow-md p-4 m-4"
                    >
                        
                            
                        <h2 className="text-xl font-bold">{convertTime(event.startTime)} - {convertTime(event.endTime)}</h2>
                    </div>
                ))} 
            </div>

        </div> 
        </div>
  );
};
