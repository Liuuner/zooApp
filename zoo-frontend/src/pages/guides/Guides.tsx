import {FormEvent, useEffect, useState} from "react";

import "./guides.css"
import {CustomerModel, TicketModel, TicketTypeEnum} from "src/model/ticket.ts";
import {TextField} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Dayjs} from "dayjs";

export default function Guides() {
    const [entryAt, setEntryAt] = useState<Date>(new Date());
    const [ticketType, setTicketType] = useState<TicketTypeEnum>("SINGLE_ENTRY");
    const [customers, setCustomers] = useState<CustomerModel[]>([{name: "", age: 0}]);

    function addTicket(e: FormEvent) {
        e.preventDefault();

        customers.pop();

        const newTickets: TicketModel[] = [
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
                            <TextField
                                type={"text"}
                                label={"Name"}
                                variant={"outlined"}
                                className={"name"}
                                size={"small"}
                                required
                                value={customer.name}
                                onChange={e => updateCustomer(index, 'name', e.target.value)}
                            />
                            <TextField
                                type={"number"}
                                label={"Alter"}
                                variant={"outlined"}
                                className={"age"}
                                size={"small"}
                                inputProps={{min: 0, max: 130}}
                                required
                                onKeyPress={e =>  {
                                    if (e.which === 8) {
                                        return;
                                    }
                                    if (e.which < 48 || e.which > 57) {
                                        e.preventDefault();
                                    }
                                }}
                                value={customer.age !== 0 ? Number(customer.age) : ""}
                                onChange={e => updateCustomer(index, 'age', e.target.value)}
                            />
                            <div className={"price"}>{customer.age < 6 ? 0 : customer.age <= 15 ? 15 : 25} CHF</div>
                        </div>
                    )}
                    {customers.length > 1 && <div className={"gesamtpreis"}>
                        <span>Gesamter Preis: </span><span>{customers.reduce((acc, customer) => acc + (customer.age < 6 ? 0 : customer.age <= 15 ? 15 : 25), 0)} CHF</span>
                    </div>}
                </div>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        className={"dateInput"}
                        format={"DD. MMMM YYYY"}
                        onChange={(date: Dayjs | null) => date && setEntryAt(new Date(date.toDate()))}/>
                </LocalizationProvider>

                <div className={"buy_buttons"}>
                    {/*<button className={"twint"} type={"submit"}><img src="/twint.png" alt="TWINT"/><span>TWINT</span></button>*/}
                    <button className={"creditCard"} type={"submit"}><img src="/kartenzahlung.png" alt="Kartenzahlung"/><span>Kartenzahlung</span>
                    </button>
                    {/*<button type={"submit"}><img src="/apple.png" alt="Apple-Pay"/><span>PAY</span></button>*/}
                </div>
            </form>
        </main>
    )
}
