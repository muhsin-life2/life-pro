import loader from "@/pages/api/googleMapLoader";
import { useState, useEffect } from "react";
const Map = ({ address }) => {
    const [map, setMap] = useState(null);
    useEffect(() => {
      loader.load().then(() => {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK') {
            const mapOptions = {
              center: results[0].geometry.location,
              zoom: 16,
            };
            const newMap = new window.google.maps.Map(
              document.getElementById('map'),
              mapOptions
            );
            const marker = new window.google.maps.Marker({
              position: results[0].geometry.location,
              map: newMap,
            });
            setMap(newMap);
          }
        });
      });
    }, [address]);
    return <div id="map" style={{ height: '400px' }}></div>;
  };
  export default Map;