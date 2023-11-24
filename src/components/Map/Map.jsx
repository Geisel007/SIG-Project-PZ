import React, { useState, useCallback } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import View from '../Wrappers/View/View'
import 'leaflet/dist/leaflet.css'
import './Map.styles.css'

const Map = ({
  latitude,
  longitude,
  zoom
}) => {

  const [map, setMap] = useState(null);

  const updateMapCenterZoom = useCallback((newCenter, newZoom) => {
    console.log('newZoom', newZoom)
    if (map !== null) {
      map.setView(newCenter, newZoom);
    }
  }, [map]);

  return (
    <View>
      <MapContainer
        center={[latitude, longitude]}
        zoom={zoom}
        preferCanvas
        scrollWheelZoom={false}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
      </MapContainer>
      <button type="button" onClick={() => updateMapCenterZoom([14.389786, 121.047566], 8)}>
        See Location
      </button>
    </View>
  )
}

export default Map
