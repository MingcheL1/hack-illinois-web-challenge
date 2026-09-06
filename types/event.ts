export type Event={
    eventID: number;
    name: string;
    description: string;
    starTime: number;
    endTime:number;
    locations: {
        description: string;
        latitude:number;
        lontitude:number;
    }
    sponsor: string;
    eventType: string;
    points: number;
    isMandatory:boolean;
    mapImageURL: string;
    menu:string[]
}

export type EventData={
    events: Event[]
}