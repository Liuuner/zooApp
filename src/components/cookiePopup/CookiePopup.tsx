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
                <div className={"cookie_text"}>
                    <p>Bestätigen sie die hiermit die verwendung von Cookies und die </p>
                    <Link to={"/datenSchutzHinweis"}>Datenschutz-Richtlinien</Link>
                </div>
                <div className={"cookie_actions"}>
                    <button className={"cookie_actions-button"} id={"buttonAccept"} onClick={setCookieTrue}>Akzeptieren</button>
                    <a href={"https://google.com"} className={"cookie_actions-button"} id={"linkDecline"}>Ablehnen</a>
                </div>
            </div>
        </div>
    )
}