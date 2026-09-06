export function convertTime(time:number){
    return new Date(time*1000).toLocaleDateString("en-US", {
        weekday: "long",
        timeZone:"America/Chicago",
        hour:"numeric",
        minute:"2-digit",
    })
}