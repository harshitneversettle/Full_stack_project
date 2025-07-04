import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map22 = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 28.6139, // Example: Delhi
    lng: 77.209,
  };
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyAXXunGE80J38ff7ylLN_DcK9gVAH9CBoI">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map22;
