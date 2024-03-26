import "./cookie_popup.css"
import {Link} from "react-router-dom";

interface cookiePopupProps {
    cookieAccepted: boolean;
    setCookieTrue: () => void
}

export default function CookiePopup({cookieAccepted, setCookieTrue}: cookiePopupProps) {

    return (
        <div className={`cookie_popup${!cookieAccepted ? " open" : ""}`}>
            <div className={"cookieContent"}>
                <p className={"cookie_text"}>
                    <div>Bestätigen sie die hiermit die</div>
                    <Link to={"/datenSchutzHinweis"}>Datenschutz-Richtlinien</Link>
                </p>
                <div className={"cookie_actions"}>
                    <button className={"cookie_actions-button"} id={"buttonAccept"} onClick={setCookieTrue}>Akzeptieren</button>
                    <button className={"cookie_actions-button"} id={"buttonDecline"}>Ablehnen</button>
                </div>
            </div>
        </div>
    )
}