export function convertTime(time:number, displayWeekday:boolean){
    if(displayWeekday){
        return new Date(time*1000).toLocaleDateString("en-US", {
            weekday: "long",
            timeZone:"America/Chicago",
            hour:"numeric",
            minute:"2-digit",
        })
    }
    return new Date(time*1000).toLocaleTimeString("en-US", {
        timeZone:"America/Chicago",
        hour:"numeric",
        minute:"2-digit",
    })
}
