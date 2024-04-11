import {FormEvent, useEffect, useState} from "react";
import {CustomerModel, TicketModel, TicketTypeEnum} from "src/model/tickes.ts";

import "./guides.css"

export default function Guides() {
    const [entryAt, setEntryAt] = useState<Date>(new Date());
    const [ticketType, setTicketType] = useState<TicketTypeEnum>("SINGLE_ENTRY");
    const [customers, setCustomers] = useState<CustomerModel[]>([{name: "", age: 0}]);

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
        if (customers[customers.length - 1].name || customers[customers.length - 1].age) {
            addCustomer();
        } else if (customers.length > 1 && !customers[customers.length - 2].name && !customers[customers.length - 2].age) {
            setCustomers(customers => customers.slice(0, -1));
        }
    }, [customers]);


    const updateCustomer = (index: number, field: keyof CustomerModel, value: string) => {
        const newCustomers = [...customers];
        if (field === "age") {
            newCustomers[index].age = Number(value);
        } else {
            newCustomers[index].name = value;
        }
        setCustomers(newCustomers);
    };

    function addCustomer() {
        setCustomers([...customers, {name: "", age: 0}]);
    }

    return (
        <main>
            <h1>Guides</h1>
            <form className={"booking_form"} onSubmit={addTicket}>
                <div className={"ticket_types"}>
                    <div onClick={() => setTicketType("SINGLE_ENTRY")}
                         className={`ticket_type ${ticketType === "SINGLE_ENTRY" ? "active" : ""}`}>
                        <label>Einzel<br/>Eintritt</label>
                    </div>

                    <div onClick={() => setTicketType("GROUP")}
                         className={`ticket_type ${ticketType === "GROUP" ? "active" : ""}`}>
                        <label>Gruppen<br/>Eintritt</label>
                    </div>

                    <div onClick={() => setTicketType("GUIDED_TOUR")}
                         className={`ticket_type ${ticketType === "GUIDED_TOUR" ? "active" : ""}`}>
                        <label>Geführte<br/>Tour</label>
                    </div>
                </div>
                <div className={"customer-wrapper"}>
                    {customers.map((customer, index) =>
                        <div className={"customer_inputs"} key={index}>
                            <input className={"name"} type="text" value={customer.name} placeholder={"name"}
                                   onChange={e => updateCustomer(index, 'name', e.target.value)}/>
                            <input className={"age"} type="number" value={customer.age !== 0 ? Number(customer.age).toString() : ""} min={0}
                                   max={150} placeholder={"alter"}
                                   onChange={e => {
                                       updateCustomer(index, 'age', e.target.value);
                                   }}/>
                            <div className={"price"}>{customer.age < 6 ? 0 : customer.age <= 15 ? 15 : 25} CHF</div>
                        </div>
                    )}
                    {customers.length > 1 && <div className={"gesamtpreis"}>
                        <span>Gesamter Preis: </span><span>{customers.reduce((acc, customer) => acc + (customer.age < 6 ? 0 : customer.age <= 15 ? 15 : 25), 0)} CHF</span>
                    </div>}
                </div>
                <input className={"dateInput"} type="date" onChange={e => setEntryAt(new Date(e.target.value))}/>
                <div className={"buy_buttons"}>
                    <button type={"submit"}><img src="/twint.png" alt="TWINT"/><span>TWINT</span></button>
                    <button type={"submit"}><img src="/kartenzahlung.png"
                                                 alt="Kartenzahlung"/><span>Kartenzahlung</span></button>
                    <button type={"submit"}><img src="/apple.png" alt="Apple-Pay"/><span>PAY</span></button>
                </div>
            </form>
        </main>
    )
}
