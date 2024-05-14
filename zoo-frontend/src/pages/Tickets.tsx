import Ticket from "src/components/ticket/Ticket.tsx";
import {useEffect, useState} from "react";
import {sortAfterDate, TicketModel} from "src/model/types.ts";


function Tickets() {

    const [tickets, setTickets] = useState<TicketModel[]>(JSON.parse(localStorage.getItem("tickets") ?? "[]"))

    useEffect(() => {
        const currentDate = new Date().getDate();

        setTickets([
            {
                ticketType: "GROUP",
                boughtAt: new Date(),
                entryAt: new Date(new Date().setDate(currentDate - 1)),
                customers: [
                    {
                        age: 6,
                        name: "Markus Rühl"
                    }, {
                        age: 9,
                        name: "Markus Rühl"
                    }, {
                        age: 12,
                        name: "Markus Rühl"
                    }, {
                        age: 69,
                        name: "Markus Rühl"
                    }, {
                        age: 42,
                        name: "Markus Rühl"
                    },
                ]
            },
            {
                ticketType: "SINGLE_ENTRY",
                boughtAt: new Date(),
                entryAt: new Date(),
                customers: [
                    {
                        age: 13,
                        name: "Markus Rühl"
                    }
                ]
            },{
                ticketType: "SINGLE_ENTRY",
                boughtAt: new Date(),
                entryAt: new Date(new Date().setHours(22)),
                customers: [
                    {
                        age: 13,
                        name: "Markus Neuer"
                    }
                ]
            },
            {
                ticketType: "GUIDED_TOUR",
                boughtAt: new Date(),
                entryAt: new Date(new Date().setDate(currentDate + 1)),
                customers: [
                    {
                        age: 9,
                        name: "Markus Rühl"
                    }, {
                        age: 12,
                        name: "Markus Rühl"
                    }, {
                        age: 69,
                        name: "Markus Rühl"
                    }, {
                        age: 42,
                        name: "Markus Rühl"
                    }, {
                        age: 42,
                        name: "Markus Rühl"
                    },
                ]
            }
        ]);
    }, []);

    return (
        <>
            <h1>Tickets</h1>
            <div className="tickets">
                {
                    tickets.sort(sortAfterDate).map((ticket, index) => <Ticket key={index} ticket={ticket}/>)
                }
            </div>
        </>
    )
}

export default Tickets;