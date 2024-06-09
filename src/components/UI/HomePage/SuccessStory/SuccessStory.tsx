"use client";
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  Avatar,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    id: "12",
    name: "Kim John",
    email: "donor@ph.com",
    phone: "+8801253455",
    bloodType: "O_NEGATIVE",
    location: "Dhaka",
    message:
      "I am forever grateful for the blood donation I received. It saved my life.",
  },
  {
    id: "13",
    name: "Rohit Ali",
    email: "donor@ph.com",
    phone: "+8801253455",
    bloodType: "A_NEGATIVE",
    location: "Rajshahi",
    message:
      "The donation process was seamless and the support was incredible.",
  },
  {
    id: "14",
    name: "Jone Smith",
    email: "user@ph.com",
    phone: "+8801253455",
    bloodType: "B_POSITIVE",
    location: "Dhaka",
    message:
      "Thank you for the timely donation. It was crucial for my treatment.",
  },
  {
    id: "15",
    name: "John doe",
    email: "user@gmail.com",
    phone: "+8801253455",
    bloodType: "B_POSITIVE",
    location: "Khulna",
    message: "Your blood donation saved my life. Thank you so much!",
  },
];

const SuccessStroy = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box bgcolor="#eeeeee">
    <Container  sx={{
        pb: 3,
    }}>
    <Box
      sx={{
        width: "100%",
        padding: { xs: "10px", md: "20px" },
        backgroundColor: "#eeeeee",
        mt: 2,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Success Stories
      </Typography>
      <Slider {...settings}>
        {testimonialsData.map((testimonial) => (
          <Box key={testimonial.id} sx={{ padding: "0 10px" }}>
            <Card
              sx={{
                margin: "0 auto",
                maxWidth: 600,
                borderRadius: "15px",
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <Avatar
                    sx={{
                      marginRight: "15px",
                      width: 56,
                      height: 56,
                      backgroundColor: "red",
                      color: "#fff",
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {testimonial.location}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ fontStyle: "italic", marginBottom: "15px" }}
                >
                  &quot;{testimonial.message}&quot;
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ marginBottom: "5px" }}
                >
                  Blood Type: <strong>{testimonial.bloodType}</strong>
                </Typography>
                 <Typography variant="body2" color="textSecondary">
                  Phone: <strong>{testimonial.phone}</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Email: <strong>{testimonial.email}</strong>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
    </Container>
    </Box>
  );
};

export default SuccessStroy;
