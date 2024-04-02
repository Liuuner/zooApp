import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import logo from "/public/logo.png";

import "./header.css"

function Header() {
    const [open, setOpen] = useState<boolean>(false);
    const headerRef = useRef<HTMLDivElement>(null);

    function toggleOpen() {
        setOpen(!open);
    }

    function handleClickOutside(event: Event) {
        if (open && headerRef.current && !headerRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mouseup', handleClickOutside);
        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        };
    }, [open]);

    return (
        <div id={"header"} ref={headerRef}>
            <div className={"header"}>
                <a target={"_blank"} href="https://www.zoo.ch/de"><img src={logo} alt="logo" className={"logo"}/></a>
                <div className={`hamburger${open ? " open" : ""}`} onClick={() => toggleOpen()}>
                    <span className={"bar"} id={"top"}/>
                    <span className={"bar"} id={"middle"}/>
                    <span className={"bar"} id={"bottom"}/>
                    <div id={"hamburger_circle"}/>
                </div>
            </div>
            <nav className={`navDropdown${open ? " open" : ""}`}>
                <Link to={"/home"} onClick={toggleOpen}>Home</Link>
                <Link to={"/tickets"} onClick={toggleOpen}>Tickets</Link>
                <Link to={"/guides"} onClick={toggleOpen}>Guides</Link>
                <Link to={"/map"} onClick={toggleOpen}>Map</Link>
                <Link to={"/impressum"} onClick={toggleOpen}>Impressum</Link>
                <Link to={"/datenSchutzHinweis"} onClick={toggleOpen}>Daten Schutz Hinweis</Link>
                <div id={"navRoundBottom"}></div>
            </nav>
        </div>
    )
}

export default Header;