import './App.css'
import {Route, Routes} from "react-router-dom";
import Header from "src/components/header/Header.tsx";
import Footer from "src/components/Footer.tsx";
import Home from "src/pages/Home.tsx";
import Tickets from "src/pages/Tickets.tsx";
import Guides from "src/pages/Guides.tsx";
<<<<<<< HEAD
import Map from "src/pages/Map/Map.tsx";
=======
import Impressum from "src/pages/Impressum.tsx";
>>>>>>> master
import NotFound from "src/pages/NotFound.tsx";
import DatenSchutzHinweis from "src/pages/DatenSchutzHinweis.tsx";
import CookiePopup from "src/components/cookiePopup/CookiePopup.tsx";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";


function App() {
    const [cookies, setCookies] = useCookies(["cookies_accepted"])
    const [cookieAccepted, setCookieAccepted] = useState<boolean>(true)

    function setCookieTrue() {
        // Um eine verzögerung des öffnens zu erzeugen
        setCookies("cookies_accepted", true, {path: '/', sameSite: 'none', secure: true})
        setTimeout(() => {
            setCookieAccepted(true)
        }, 500)
    }

    useEffect(() => {
        setTimeout(() => {
            if (!cookies.cookies_accepted) {
                setCookieAccepted(false);
            }
        }, 2000)
    }, []);

    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/home"} element={<Home/>}/>
                    <Route path={"/tickets"} element={<Tickets/>}/>
                    <Route path={"/guides"} element={<Guides/>}/>
                    <Route path={"/map"} element={<Map/>}/>
                    <Route path={"/datenSchutzHinweis"} element={<DatenSchutzHinweis/>}/>
                    <Route path={"/impressum"} element={<Impressum/>}/>
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>

            <CookiePopup cookieAccepted={cookieAccepted} setCookieTrue={setCookieTrue}/>
        </>
    )
}

export default App
