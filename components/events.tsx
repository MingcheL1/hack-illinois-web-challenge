"use client"
import { FC, useEffect, useState } from "react";

export const Events: FC=()=>{
    const [data, setData]=useState<unknown>(null); //can't interact until I know what the variable type is
    useEffect(()=>{
        async function loadEvents(){
            try{
                const response= await fetch("https://adonix.hackillinois.org/event/")
                const json: unknown=(await response.json());
                setData(json);
            }
            catch(error){
                console.log("booooo")
            }
            
        }
        loadEvents();
    },[])
    return(
        <div>
            <p>{JSON.stringify(data,null,2)}</p>
        </div>
    );
}