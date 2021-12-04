import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  maxWidth: "1000px",
  height: "500px",
  margin: "0 auto",
  borderRadius: "0.25rem",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

const Access: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={17}
      ></GoogleMap>
    </LoadScript>
  );
};

export default Access;
