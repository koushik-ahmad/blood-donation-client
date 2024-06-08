import { Container, Box, Typography, Stack, Grid, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import team from "@/assets/images/blood2.png";

const AboutUsPage = () => {
  return (
    <>
      <Box sx={{ mb: 5, display: "flex", justifyContent: "center" }}>
        <Image
          src={team}
          alt="Our Team"
          layout="cover"
          width={900}
          height={700}
        />
      </Box>
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h3" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6" paragraph>
            Welcome to Blood Care, Where Every Drop Counts 
          </Typography>
           <Typography paragraph>
            Thank you for joining our community of lifesavers! Your decision to 
            donate blood is aselfless act that can make a huge difference. Here
            everything youneed to know about blood donation and how you can help 
            save lives. Why Donate Blood? Every two seconds, someone in the world
            needs blood. Blood donations are essential for surgeries, cancer
            treatments, chronic illnesses, and traumatic injuries. A single
            donation can save up to three lives. By donating blood, you are
            providing a vital resource that hospitals and patients depend on.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" gutterBottom>
            Our Mission
          </Typography>
          <Typography paragraph>
            Our mission is to facilitate blood donations to save lives. We
            connect donors with those in need and provide resources to make the
            process easy, safe, and effective.To bring volunteers and
            organizations together to share time, skills and passion to promote
            social development Donate Organization entitles to bring change in
            the fields of Blood Donation, Organ Donation, Education, Tribal
            Welfare, Youth Welfare, Livelihood & Economic Development, Poverty
            Alleviation, Gender Equality, Human Rights. We bring our steps
            forward to achieve our goals by working closely with the volunteers
            at one end and with the government & other organizations that work
            to bring change, impact on areas at the other end.
          </Typography>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Typography variant="h4" gutterBottom>
            Our Team
          </Typography>
          <Typography paragraph>
            Our dedicated team is passionate about making a difference. We are a
            group of healthcare professionals, technologists, and volunteers
            working together to ensure that blood is available whenever and
            wherever its needed.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            Contact Information :
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions or Need assistance, Feel free to reach out
            to us:
          </Typography>
          <Typography variant="body1">Email: blood@info.com</Typography>
          <Typography variant="body1">Phone: +012-456-7890</Typography>
        </Box>
      </Container>
    </>
  );
};

export default AboutUsPage;
