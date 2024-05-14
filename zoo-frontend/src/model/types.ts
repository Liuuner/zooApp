export type TicketTypeEnum = "GROUP" | "GUIDED_TOUR" | "SINGLE_ENTRY";

type TicketStatus = "expired" | "upcoming" | "active";

export type CustomerModel = {
    name: string;
    age: number;
    tickets?: TicketModel[];
}

export type TicketModel = {
    boughtAt: Date;
    entryAt: Date;
    ticketType: TicketTypeEnum;
    price: number;
    customers?: CustomerModel[];
}

export function getTicketStatus(ticket: TicketModel): TicketStatus {
    const currentDate = new Date().setHours(0, 0, 0, 0);
    const ticketDate = ticket.entryAt.setHours(0, 0, 0, 0);

    if (ticketDate == currentDate) {
        return "active";
    }
    if (ticketDate > currentDate) {
        return "upcoming";
    }
    return "expired";
}

export function countAdultsAndChildren(customers: CustomerModel[]): { adults: number; children: number } {
    let adults = 0;
    let children = 0;

    for (const customer of customers) {
        if (customer.age >= 12) {
            adults++;
        } else {
            children++;
        }
    }

    return {adults, children};
}

export function sortAfterDate(a: TicketModel, b: TicketModel) {
    const statusA = getTicketStatus(a);
    const statusB = getTicketStatus(b);

    if (statusA !== statusB) {
        return statusA === "active" ? -1 :
            statusB === "active" ? 1 :
                statusA === "upcoming" ? -1 :
                    1;
    }

    return a.entryAt.getTime() - b.entryAt.getTime();
}
