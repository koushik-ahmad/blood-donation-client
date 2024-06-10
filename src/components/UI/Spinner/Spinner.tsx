import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

const Spinner = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
      }}
    >
      <Box sx={{ display: "block" }}>
        <Box sx={{ display: "flex", padding: "10px" }}>
          <CircularProgress />
        </Box>
        <Typography>Please wait..</Typography>
      </Box>
    </Container>
  );
};

export default Spinner;
