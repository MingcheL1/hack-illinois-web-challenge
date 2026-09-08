export type Event={
    eventId: number;
    name: string;
    description: string;
    startTime: number;
    endTime:number;
    locations: [{
        description: string;
        latitude:number;
        lontitude:number;
    }]
    points: number;
}

export type EventData={
    events: Event[]
}

export type eventProps={
    data: EventData|null;
    up?:()=>void;
}