import DonorCard from "../../Donor/DonorCard";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const TopDonors = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/donor-list`
  );

  const { data } = await res.json();

  // console.log(data);

  return (
    <Container>
      <Typography
        variant="h3"
        textAlign={"center"}
        sx={{
          textAlign: "center",
          margin: "20px auto",
          fontSize: {
            xs: "32px",
            sm: "32px",
            md: "32px",
            lg: "40px",
          },
        }}
      >
        Top Donors
      </Typography>

      <Box
        sx={{
          mt: 2,
          padding: 2,
          bgcolor: {
            xs: "background.default",
            sm: "background.default",
            md: "background.default",
            lg: "background.paper",
          },
          mx: "auto",
          width: "100%",
          maxWidth: "unset",
        }}
      >
        <Grid container spacing={3}>
          {data?.slice(2, 5).map((donor: any, index: number) => (
            <Grid item xs={12} sm={6} md={4} key={donor.id}>
              <DonorCard donor={donor} />
            </Grid>
          ))}
        </Grid>

        {data.length === 0 && (
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography>No Donors Found</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default TopDonors;
