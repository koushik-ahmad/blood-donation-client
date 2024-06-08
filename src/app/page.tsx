import { Button } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};

export default HomePage;
