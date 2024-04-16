import React, { useState, useRef } from 'react';
import './Map.css';

function Map() {
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const imageRef = useRef(null);

    const handleTouchStart = (event) => {
        setStartX(event.touches[0].clientX);
        setStartY(event.touches[0].clientY);
    };

    const handleTouchMove = (event) => {
        const deltaX = event.touches[0].clientX - startX;
        const deltaY = event.touches[0].clientY - startY;

        // Begrenze die Verschiebung, um das Bild innerhalb des Rahmens zu halten
        const newOffsetX = Math.min(0, Math.max(offsetX + deltaX, window.innerWidth - imageRef.current.clientWidth));
        const newOffsetY = Math.min(0, Math.max(offsetY + deltaY, window.innerHeight - imageRef.current.clientHeight));

        setOffsetX(newOffsetX);
        setOffsetY(newOffsetY);
        setStartX(event.touches[0].clientX);
        setStartY(event.touches[0].clientY);
    };

    return (
        <div
            id="mapContainer"
            style={{
                overflow: 'hidden',
                height: '90%',
                touchAction: 'none', // Deaktiviere den Browser-Standard-Scrollvorgang
                position: 'relative', // Positioniertes Element hinzufügen
            }}
        >
            <div style={{ position: 'relative', zIndex: 3 }}>
                <img
                    ref={imageRef}
                    id="map"
                    src="/map.png"
                    style={{
                        width: '1600px', // Setze die Breite auf eine feste Größe
                        height: 'auto', // Höhe automatisch berechnen, um das Seitenverhältnis beizubehalten
                        transform: `translate(${offsetX}px, ${offsetY}px)`, // Anwenden der Verschiebung
                        transition: 'transform 0.1s ease-in-out', // Optionale Transition für sanfte Bewegung
                    }}
                    alt="Karte"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                />
            </div>
        </div>
    );
}

export default Map;
