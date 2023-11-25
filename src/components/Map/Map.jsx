import React from 'react'
import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet'
import L, { divIcon } from 'leaflet'
import View from '../Wrappers/View/View'
import * as turf from '@turf/turf'
import 'leaflet/dist/leaflet.css'
import './Map.styles.css'

const Map = ({
  latitude,
  longitude,
  zoom,
  geoJsonPZ,
  geoJsonCarreras,
  geoJsonRios,
  geoJsonDistritos,
  geoJsonPoblados,
  mapRef
}) => {

  const customMarkerIcon = (name) =>
    divIcon({
      html: name,
      className: "icon"
    })

  const setIconPoblado = ({ properties }, latlng) => {
    return L.marker(latlng, { icon: customMarkerIcon('Poblado: ' + properties.NOMBRE) })
  }

  const setIconDistrito = ({ properties }, latlng) => {
    return L.marker(latlng, { icon: customMarkerIcon('Distrito: ' + properties.NDISTRITO) })
  }


  const convertPolygonsToPoints = (geoJsonPolygons) => {
    const points = turf.points([]);

    geoJsonPolygons.features.forEach((polygon) => {
      const centroid = turf.centerOfMass(polygon)
      centroid.properties = { ...polygon.properties }
      points.features.push(centroid)
    });

    return points;
  };


  console.log(convertPolygonsToPoints(geoJsonDistritos))

  return (
    <View>
      <MapContainer
        center={[latitude, longitude]}
        zoom={zoom}
        ref={mapRef}
        zoomControl={false}
        scrollWheelZoom={false}
        maxBoundsViscosity={1.0}
        touchZoom={false}
        doubleClickZoom={false}
        boxZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON 
          data={geoJsonPZ}
        />
        {
          zoom > 9 && 
            <GeoJSON 
              data={geoJsonCarreras}
            />
        }
        {
          zoom > 10 && 
            <GeoJSON 
              data={geoJsonRios}
            />
        }
        {
          zoom > 11 && 
            <View>
              <GeoJSON 
                data={geoJsonDistritos}
              />
              <GeoJSON 
                data={convertPolygonsToPoints(geoJsonDistritos)}
                pointToLayer={setIconDistrito}
              />
            </View>
        }
        {
          zoom > 12 && 
            <GeoJSON 
              data={geoJsonPoblados}
              pointToLayer={setIconPoblado}
            />
        }
      </MapContainer>
    </View>
  )
}

export default Map;
