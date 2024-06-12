"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Box, Container, Typography } from "@mui/material";
import { Cities } from "@/constants";
import { useEffect } from "react";

const CoverageArea = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });
    }
  }, []);

return (
 <Container>
     <Box sx={{ height: "700px", width: "100%", my: "20px",}}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Support Locations
      </Typography>
      <MapContainer
        center={[23.8103, 90.4125]}
        zoom={7}
        style={{ height: "90%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {Cities?.map((loc, index) => (
          <Marker key={index} position={[loc.latitude, loc.longitude]}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
 </Container>
  );
};

export default CoverageArea;
