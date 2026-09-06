"use client"
import { EventData, eventProps } from "@/types/event";
import { FC, useEffect, useState } from "react";

export const Events: FC<eventProps>=({data})=>{
    return(
        <div>
            {
                data?.events.map((event)=>(
                    <div key={event.eventID} className="bg-white text-black rounded-lg shadow-md p-4 m-4">
                        <h2 className="text-xl font-bold">{event.name}</h2>
                    </div>
                ))
            }
        </div>
    );
}

//map events next
//dive mode vs compact mode