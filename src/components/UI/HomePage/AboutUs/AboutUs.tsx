import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import about from "@/assets/images/blood3.png";
import Divider from '@mui/material/Divider';

const AboutUs = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 6,
          mb: 5,
          margin: "0 auto",
        }}
        maxWidth={"lg"}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={7} gap={5}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "0", sm: "300px", md: "480px" },
                position: "relative",
              }}
            >
              <Image
                src={about}
                layout="fill"
                objectFit="cover"
                alt="hero"
                className="banner-image"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={5} padding="10px">
            <Typography variant="h3" component="h2" gutterBottom>
              About us
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Our mission is to save lives and improve health through the
              power of blood donation. We believe that every drop of blood
              counts and that a small act of kindness can make a significant
              difference in someone’s life. Our goal is to create a safe and
              reliable blood supply that supports hospitals and medical centers
              in their efforts to treat patients in need.
            </Typography>
            <Box mt={4}>
              <Button
                variant="contained"
                color="primary"
                href="/about"
                sx={{ mr: 2 }}
              >
                Details
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider/>
    </>
  );
};

export default AboutUs;
