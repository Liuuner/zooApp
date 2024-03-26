import './Map.css'
function Map() {


    return (
        <div id={"mapContainer"} style={{overflow: "hidden", height: "100%"}}>
            <img id={"map"} style={{scale: "2" }} src={"public/map.png"}/>
        </div>
    )
}

export default Map;