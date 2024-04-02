import {FormEvent, useEffect, useState} from "react";
import {CustomerModel, TicketModel, TicketTypeEnum} from "src/model/tickes.ts";

import "./guides.css"

export default function Guides() {
    const [entryAt, setEntryAt] = useState<Date>(new Date());
    const [ticketType, setTicketType] = useState<TicketTypeEnum>("SINGLE_ENTRY");
    const [customers, setCustomers] = useState<CustomerModel[]>([{name: "", age: null}]);

    function addTicket(e: FormEvent) {
        e.preventDefault();

        customers.pop();

        let newTickets: TicketModel[] = [
            ...JSON.parse(localStorage.getItem("tickets") || "[]"),
            {boughtAt: new Date(), entryAt: entryAt, ticketType: ticketType, customers: customers}
        ];

        localStorage.setItem("tickets", JSON.stringify(newTickets));
    }

    useEffect(() => {
        console.log(customers);
        if (customers[customers.length - 1].name || customers[customers.length - 1].age) {
            addCustomer();
        } else if (customers.length > 1) {
            customers.pop();
        }
    }, [customers[customers.length - 1].name, customers[customers.length - 1].age]);

    const updateCustomer = (index: number, field: keyof CustomerModel, value: string) => {
        const newCustomers = [...customers];
        if (field === "age") {
            newCustomers[index]["age"] = Number(value);
        } else {
            newCustomers[index]["name"] = value;
        }
        setCustomers(newCustomers);
    };

    function addCustomer() {
        console.log("test")
        setCustomers([...customers, {name: "", age: null}]);
    }

    return (
        <>
            <h1>Guides</h1>
            <form onSubmit={addTicket}>
                <div>
                    <input type={"radio"} name={"Single"} value={"SINGLE_ENTRY"} checked={ticketType === "SINGLE_ENTRY"}
                           onChange={e => setTicketType(e.target.value as TicketTypeEnum)}/>
                    <input type={"radio"} name={"Group"} value={"GROUP"} checked={ticketType === "GROUP"}
                           onChange={e => setTicketType(e.target.value as TicketTypeEnum)}/>
                    <input type={"radio"} name={"Guide"} value={"GUIDED_TOUR"} checked={ticketType === "GUIDED_TOUR"}
                           onChange={e => setTicketType(e.target.value as TicketTypeEnum)}/>
                </div>
                <div>
                    <input type="date" onChange={e => setEntryAt(new Date(e.target.value))}/>
                </div>
                <div>
                    {customers.map((customer, index) =>
                        <div key={index}>
                            <input type="text" value={customer.name}
                                   onChange={e => updateCustomer(index, 'name', e.target.value)}/>
                            <input type="number" value={customer.age ?? ""} min={0}
                                   onChange={e => updateCustomer(index, 'age', e.target.value)}/>
                        </div>
                    )}
                    <div onClick={addCustomer}>+</div>
                </div>
                <button type={"submit"}>Buy</button>
            </form>
        </>
    )
}
