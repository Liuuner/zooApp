import "src/components/ticket/ticket.css";
import {countAdultsAndChildren, getTicketStatus, TicketModel, TicketTypeEnum} from "src/model/types.ts";
import QrCode from "/qr-code.png";
import {useState} from "react";

type TicketProps = {
    ticket: TicketModel;
}

const TicketTitles: {[key in TicketTypeEnum]: string} = {
    GROUP: "Gruppenticket",
    GUIDED_TOUR: "Führung",
    SINGLE_ENTRY: "Einzelticket"
}

function Ticket ({ticket}: TicketProps) {
    const [isQrCodeOpen, setIsQrCodeOpen] = useState<boolean>(false);

    const status = getTicketStatus(ticket);

    const {adults, children} = countAdultsAndChildren(ticket.customers);


    return (
        <div className={`ticket ${status}`}>
            <button className={`qrCodeContainer ${isQrCodeOpen && "open"}`} onClick={() => setIsQrCodeOpen((b) => !b)}>
                <img src={QrCode} alt="QrCode"/>
            </button>
            <div className="ticketContent">
                <p className={"ticketTitle"}>{TicketTitles[ticket.ticketType]}</p>
                {ticket.ticketType === "SINGLE_ENTRY" && <p>{ticket.customers[0].name}</p>}
                {!!adults && <p>{adults} Vollpreis</p>}
                {!!children && <p>{children} Vergünstigt</p>}
            </div>
        </div>
    )
}


export default Ticket;