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
        <div className="inline-flex gap-2 mb-8 p-2 rounded-2xl bg-white/15 backdrop-blur-sm shadow-lg border border-white/30">
            {
                ["Friday", "Saturday", "Sunday"].map((d) => {
                    const active=day===d;
                    return(
                        <button key={d} onClick={ ()=> {setDay(d); console.log(d)}} className={`px-4 py-2 rounded-lg ${active ? 'bg-white/30' : 'bg-white/20 hover:bg-white/30'}`}>
                            {d}
                        </button>
                    );
                })
            }
        </div>

        <div className="absolute inset-0 mt-20">
            {filteredEvents?.map((event) => (
            <div
                key={event.eventID}
                className=" text-white rounded-lg shadow-md p-4 m-4"
            >
                <h2 className="text-xl font-bold">{event.startTime}</h2>
            </div>
            ))}
        </div> 
        </div>
  );
};
