export type Event={
    eventID: number;
    name: string;
    description: string;
    startTime: number;
    endTime:number;
    locations: [{
        description: string;
        latitude:number;
        lontitude:number;
    }]
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

export type eventProps={
    data: EventData|null;
}