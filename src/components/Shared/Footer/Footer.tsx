import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/icons/facebook.png";
import instagramIcon from "@/assets/icons/instagram.png";
import twitterIcon from "@/assets/icons/twitter.png";
import linkedIcon from "@/assets/icons/linkedin.png";

const Footer = () => {
  return (
    <Box bgcolor="lightBlue" py={5}>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={4}
          justifyContent="center"
          alignItems="center"
          textAlign={{ xs: "center", sm: "left" }}
        >
          <Typography>Home</Typography>
          <Typography>Donor</Typography>
          <Typography>Admin</Typography>
          <Typography>General</Typography>
        </Stack>

        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          <Image src={instagramIcon} width={30} height={30} alt="instagram" />
          <Image src={twitterIcon} width={30} height={30} alt="twitter" />
          <Image src={linkedIcon} width={30} height={30} alt="linkedin" />
        </Stack>

        <Box
          sx={{
            border: "1px dashed black",
            mt: 3,
            mb: 3,
          }}
        ></Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          textAlign={{ xs: "center", sm: "left" }}
        >
          <Typography component="p">
            &copy;2024.BlOOD CARE.All Rights Reserved
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
              <Box component="span" color="red">
               BlOOD 
              </Box>
              {" "} CARE
          </Typography>
          <Typography component="p">
            Privacy Policy!! Terms && Conditions...
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
