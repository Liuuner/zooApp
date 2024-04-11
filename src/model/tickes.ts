export type TicketTypeEnum = "GROUP" | "GUIDED_TOUR" | "SINGLE_ENTRY";

export type CustomerModel = {
    name: string;
    age: number;
}

export type TicketModel = {
    boughtAt: Date;
    entryAt: Date;
    ticketType: TicketTypeEnum;
    customers: CustomerModel[];
}