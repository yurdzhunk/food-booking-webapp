import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Box } from '@mui/material';
import '../assets/stores_images/stores.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZHpodW5rIiwiYSI6ImNsNmMzaTkxaTAwdnUzZHFpMm9rZG95ZmYifQ.EhVBd_NgAtJY7kUVrpxkig';

const Map = ({restaurant}) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-0.132728);
    const [lat, setLat] = useState(51.500034);
    const [zoom, setZoom] = useState(10.5);
    const [currentMarkers, setCurrentMarkers] = useState([]);

    useEffect(() => {
// initialize map only once
        if(map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current, // container ID
            style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
            center: [lng, lat], // starting position
            zoom: zoom // starting zoom
        });
    });

    useEffect(() => {

        if(currentMarkers.length > 0){
            for(let marker of currentMarkers){
                marker.remove();
            }
            setCurrentMarkers([]);
        }

        const storeMarkers = 
            {
                Mcdonalds: [
                    [-0.133917, 51.510940],
                    [-0.166517, 51.517719],
                    [-0.045310, 51.457818],
                    [0.029480, 51.532160],
                    [-0.178742, 51.461260],
                ],
                KFC: [
                    [-0.176466, 51.515862],
                    [-0.081755, 51.479669],
                    [-0.059772, 51.525934],
                    [-0.094769, 51.542589],
                    [-0.192378, 51.453224],
                ],
                Dominos: [
                    [-0.199529, 51.517689],
                    [-0.085203, 51.529865],
                    [-0.089322, 51.490121],
                    [-0.181333, 51.439429],
                    [-0.111834, 51.460759],
                ]
            }
        


        for (const coordinates of storeMarkers[restaurant]) {
            // create a HTML element for each feature
            const el = document.createElement('div');
            el.className = 'marker-' + restaurant;
            el.style.width = '40px';
            el.style.height = '40px';
        
            // make a marker for each feature and add to the map
            const marker = new mapboxgl.Marker(el).setLngLat(coordinates).addTo(map.current);
            setCurrentMarkers((prev) => [...prev, marker])
        }


    }, [restaurant]);

    return (
        <Box ref={mapContainer} sx={{height: '500px', width: '100%', boxShadow: 10}} />
    )
}

export default Map