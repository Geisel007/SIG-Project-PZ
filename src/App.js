// React
import React, { useEffect, useRef, useState } from 'react'
// Components
import View from '../src/components/Wrappers/View/View'
import Map from './components/Map/Map'
import ZoomButtons from './components/ZoomButtons/ZoomButtons'
// GeoJSONS
import PZ from './GeoJSON/perez_zeledon.json'
import CARRETERAS from './GeoJSON/carreteras_pz.json'
import RIOS from './GeoJSON/rios_pz.json'
import DISTRITOS from './GeoJSON/distritos_pz.json'
import POBLADOS from './GeoJSON/poblados_pz.json'

// Styles
import './App.css'

function App() {

  const mapRef = useRef()

  const [zoom, setZoom] = useState(9)

  const handleZoomIn = () => {
    setZoom(mapRef.current.getZoom() + 1)
    mapRef.current.setZoom(mapRef.current.getZoom() + 1)
  }

  const handleZoomOut = () => {
    setZoom(mapRef.current.getZoom() - 1)
    mapRef.current.setZoom(mapRef.current.getZoom() - 1)
  }

  return (
    <View 
      className='App'
    >
      <Map
        latitude={9.34111}
        longitude={-83.7406}
        zoom={zoom}
        geoJsonPZ={PZ}
        geoJsonCarreras={CARRETERAS}
        geoJsonRios={RIOS}
        geoJsonDistritos={DISTRITOS}
        geoJsonPoblados={POBLADOS}
        mapRef={mapRef}
      />
      <ZoomButtons
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
      />
    </View>
  )
}

export default App
