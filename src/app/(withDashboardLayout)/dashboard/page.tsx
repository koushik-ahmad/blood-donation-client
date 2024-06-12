import { Box, Typography } from "@mui/material";

const DashboardHomePage = () => {
  return (
    <Box>
      <Typography variant='h4' mt={5} sx={{ textAlign: "center", }}>
        Dashboard analytics coming soon...
      </Typography>
      <Typography variant='h5' mt={2} sx={{ textAlign: "center", color: "red" }}>
        Developer is working...
      </Typography>
    </Box>
  );
};

export default DashboardHomePage;
