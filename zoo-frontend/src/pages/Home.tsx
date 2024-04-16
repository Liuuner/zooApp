import "./Home.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Paper from '@mui/material/Paper';

function Home() {

    return (
        <div>
            <Paper sx={{}} elevation={5} className={"paper"}>
                <div id={"openingHoursTitle"}>
                    <AccessTimeIcon fontSize={"large"}/>
                    <h1>Öffnungszeiten</h1>
                </div>
                <table className={"openingHoursTable"}>
                    <tr>
                        <th>März bis Oktober</th>
                    </tr>
                    <tr>
                        <td>Zoo: 9-18 Uhr</td>
                    </tr>
                    <tr>
                        <td>Masoalahalle: 10-18 Uhr</td>
                    </tr>
                </table>
                <br/>
                <table className={"openingHoursTable"}>
                    <tr>
                        <th>November bis Februar</th>
                    </tr>
                    <tr>
                        <td>Zoo: 9-17 Uhr</td>
                    </tr>
                    <tr>
                        <td>Masoalahalle: 10-17 Uhr</td>
                    </tr>
                </table>
            </Paper>
            <Paper className={"newsPaper"}>
                <a href={"https://www.zoo.ch/de/zoonews/zwei-neue-im-regenwald"}><img className={"newsImg"} src="/Vogel.png" /></a>
                <h3 className={"imageText"}>ZWEI NEUE IM REGENWALD</h3>
            </Paper>
            <Paper className={"newsPaper"}>
                <a href={"https://www.zoo.ch/de/zoonews"}><img className={"newsImg"} src="/KaTierHalt.png"/></a>
                <h3 className={"imageText"}>GUT INFORMIERT: ZOONEWS</h3>
            </Paper>
        </div>
    );
}

export default Home;