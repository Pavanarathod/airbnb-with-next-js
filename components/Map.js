import getCenter from "geolib/es/getCenter";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = ({ results }) => {
  const [location, setLocation] = useState({});
  const cordinates = results.map((res) => ({
    latitude: res.lat,
    longitude: res.long,
  }));

  const center = getCenter(cordinates);

  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/dasbot/cks2yhghb3p6w17p774i5xx8u"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewPort}
      onViewportChange={(event) => setViewPort(event)}
    >
      {results.map((res) => (
        <div key={res.long}>
          <Marker
            latitude={res.lat}
            longitude={res.long}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setLocation(res)}
              className="cursor-pointer animate-bounce text-2xl"
            >
              📌
            </p>
          </Marker>

          {location.long === res.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setLocation({})}
              latitude={res.lat}
              longitude={res.long}
            >
              {res.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
