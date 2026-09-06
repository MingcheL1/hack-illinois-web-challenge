import { eventProps } from "@/types/event";
import { FC, useState } from "react";

export const Compact: FC<eventProps> = ({ data }) => {
    const [day, setDay]=useState("Friday");
    return (
        <div className="relative w-full h-screen ">
        <img
            src="/images/compactBG.jpg"
            alt="Compact Mode"
            className="w-full h-full object-cover absolute blur-[3px]"
        />
        <div className="">

        </div>

        <div className="absolute inset-0">
            {data?.events.map((event) => (
            <div
                key={event.eventID}
                className=" text-black rounded-lg shadow-md p-4 m-4"
            >
                <h2 className="text-xl font-bold">{event.name}</h2>
            </div>
            ))}
        </div>
        </div>
  );
};
