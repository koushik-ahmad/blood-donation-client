import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import blood from "@/assets/images/blood.jpg";
import bloodImg from "@/assets/images/blood9.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${blood.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
      }}
    >
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          py: 16,
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            position: "relative",
            zIndex: 1,
            py: 6,
          }}
        >
          <Box
            sx={{
              fontSize: {
                xs: "24px",
                sm: "24px",
                md: "32px",
                lg: "40px",
              },
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              fontWeight={700}
              color="white"
              sx={{
                mb: 2,
                fontSize: {
                  xs: "24px",
                  sm: "24px",
                  md: "32px",
                  lg: "40px",
                },
              }}
            >
              Donate Blood,
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              fontWeight={700}
              color="red"
              sx={{
                mb: 2,
                fontSize: {
                  xs: "24px",
                  sm: "24px",
                  md: "32px",
                  lg: "40px",
                },
              }}
            >
              Save Lives.
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              fontWeight={700}
              color="primary.main"
              sx={{
                mb: 4,
                fontSize: {
                  xs: "24px",
                  sm: "24px",
                  md: "32px",
                  lg: "40px",
                },
              }}
            >
              Be a Hero Today
            </Typography>
          </Box>
          <Typography variant="body1" color="white" sx={{ mb: 4 }}>
           Donating blood is a simple act of kindness that can save lives. Your donation can help patients undergoing surgeries, 
           cancer treatments, and those with chronic illnesses. By giving blood, you making a significant impact on someone life and health.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: {
                xs: "center",
                md: "flex-start",
                color: "white",
              },
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
              },
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
              },
            }}
          >
            <Link href="/donors" passHref>
              <Button variant="contained" >
                Donate Now
              </Button>
            </Link>
            <Link href="/about" passHref>
              <Button variant="outlined" >
                Learn More
              </Button>
            </Link>
          </Box>
        </Box>

        <Box sx={{ display: { sm: "block", xs: "none" } }}>
            <Image src={bloodImg} width={700} alt='hero' className='banner-image' />
        </Box>

      </Container>
    </Box>
  );
};

export default HeroSection;
