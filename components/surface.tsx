import { ArrowBigDown, ArrowBigDownDash } from "lucide-react";
import { FC } from "react";

export const Surface: FC = () => {
    return(
        <div>
            <div className="font-bold text-center mt-20">
                <h1 className="text-8xl text-white mt-5">HackIllinois 2027</h1>
                <p className="text-3xl">Take a Deep Dive into Our Schedule</p>
            </div>
            <div>
                <svg className="sea" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 800 400">
                    <defs>
                        <linearGradient id="waves" x1="400" y1="600" x2="400" y2="214" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#0000FF"></stop>
                            <stop offset="1" stopColor="#29ABE2"></stop>
                        </linearGradient>
                    </defs>
                    <g className="waves" transform="translate(0,-65)">
                        <path fill="url(#waves)" fillOpacity="1" d="M750.9,229.8c-14.8-7.9-28.7-15.4-57.2-15.4c-28.5,0-42.4,7.5-57.2,15.4c-15.2,8.2-30.9,16.6-62.1,16.6s-46.9-8.4-62.1-16.6c-14.8-7.9-28.7-15.4-57.2-15.4c-28.5,0-42.4,7.5-57.2,15.4c-15.2,8.2-30.9,16.6-62.1,16.6c-31.2,0-46.9-8.4-62.1-16.6c-14.8-7.9-28.7-15.4-57.2-15.4c-28.5,0-42.4,7.5-57.2,15.4c-15.2,8.2-30.9,16.6-62.1,16.6c-31.2,0-46.9-8.4-62.1-16.6c-14.8-7.9-28.9-15.4-57.3-15.4c-16.9,0-28.8,2.6-38.8,6.4V800h922V237c-12,5.3-26,9.4-47.8,9.4C782.1,246.4,766.1,237.9,750.9,229.8z"></path>
                    </g>
                </svg>
            </div>

        </div>
    );
}