import './App.css'
import {Route, Routes} from "react-router-dom";
import Header from "src/components/header/Header.tsx";
import Footer from "src/components/Footer.tsx";
import Home from "src/pages/Home.tsx";
import Tickets from "src/pages/Tickets.tsx";
import Guides from "src/pages/Guides.tsx";
import Impressum from "src/pages/Impressum.tsx";
import NotFound from "src/pages/NotFound.tsx";


function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/tickets"} element={<Tickets/>}/>
                <Route path={"/guides"} element={<Guides/>}/>
                <Route path={"/impressum"} element={<Impressum/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
)
}

export default App
