"use client"
import { FC, useEffect, useState } from "react";
type eventProps={
    data: unknown;
}
export const Events: FC<eventProps>=({data})=>{
    return(
        <div>
            <p>{JSON.stringify(data,null,2)}</p>
        </div>
    );
}

//map events next
//dive mode vs compact mode