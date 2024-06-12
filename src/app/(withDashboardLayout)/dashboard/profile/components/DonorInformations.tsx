import { 
  Box, 
  Container,
  Grid, 
  Typography 
} from "@mui/material";
import Image from "next/image";

const DonorInformation = ({ data }: any) => {
  // console.log(data);
  return (
    <>
      <Box sx={{ pt: "15px" }}>
        <Container
          maxWidth="md"
          sx={{
            backgroundColor: "#f5f5f5",
            height: "50%",
            borderRadius: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">Name</Typography>
              <Typography variant="body1">{data?.name}</Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">Email</Typography>
              <Typography variant="body1">{data?.email}</Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">Blood Type</Typography>
              <Typography variant="body1">{data?.bloodType}</Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">Total Donates</Typography>
              <Typography variant="body1">
                {data?.totalDonations || "N/A"} times
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">Location</Typography>
              <Typography variant="body1">{data?.location}</Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">Age</Typography>
              <Typography variant="body1">{data?.userProfile?.age} Years</Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">Availability</Typography>
              <Typography variant="body1">
                {data?.status || "false"}
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">Last Donation Date</Typography>
              <Typography variant="body1">
                {data?.userProfile?.lastDonationDate}
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">Current Status</Typography>
              <Typography variant="body1">
                {data?.status || "Active"}
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">Contact Number</Typography>
              <Typography variant="body1"> {data?.userProfile?.contactNumber || "Not set"}</Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">Bio</Typography>
              <Typography variant="body1"> {data?.userProfile?.bio || "Not Set"}</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default DonorInformation;
