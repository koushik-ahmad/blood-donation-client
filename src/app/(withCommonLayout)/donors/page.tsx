/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  TextField,
  Typography,
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useGetAllDonorsQuery } from "@/redux/api/donorApi";
import React, { useState, useEffect } from "react";
import DonorCard from "@/components/UI/Donor/DonorCard";
import { IDonor } from "@/types";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const BloodDonors: React.FC = () => {
  const [filteredDonors, setFilteredDonors] = useState<IDonor[]>([]);
  const [defaultLocation, setDefaultLocation] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [name, setName] = useState("");

  // pagination
  const [page, setPage] = useState(1);
  const [pageSize] = useState(8); 
  const { data, isLoading, error } = useGetAllDonorsQuery({});

  useEffect(() => {
    if (data && data?.donors) {
      filterDonors(defaultLocation, bloodType, name);
    }
  }, [data, defaultLocation, bloodType, name]);

  const filterDonors = (location: string, bloodType: string, name: string) => {
    const filtered = data?.donors?.filter((donor: any) => {
      const matchesLocation = donor.location
        .toLowerCase()
        .includes(location.toLowerCase());
      const matchesBloodType = bloodType ? donor.bloodType === bloodType : true;
      const matchesName = name
        ? donor.name.toLowerCase().includes(name.toLowerCase())
        : true;
      return matchesLocation && matchesBloodType && matchesName;
    });
    setFilteredDonors(filtered || []);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

 const startIndex = (page - 1) * pageSize;
 const endIndex = startIndex + pageSize;
 const paginatedDonors = filteredDonors.slice(startIndex, endIndex);
 const totalPages = Math.ceil(filteredDonors.length / pageSize);

 
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        backgroundImage: "#ffffff)",
        pb: 5,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          color={"black"}
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
          Blood Donors
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            margin: "0 auto",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
            },
            width: {
              xs: "100%",
              sm: "100%",
              md: "96%",
              lg: "96%",
            },
            gap: "10px",
          }}
        >
          <TextField
            type="text"
            label="Search Donor Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
              },
              marginBottom: 2,
            }}
          />
          <TextField
            type="text"
            label="Enter location"
            variant="outlined"
            onChange={(e) => setDefaultLocation(e.target.value)}
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "30%",
                lg: "30%",
              },
              marginBottom: 2,
            }}
          />
          <FormControl
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "30%",
                lg: "30%",
              },
              marginBottom: 2,
            }}
          >
            <InputLabel>Blood Type</InputLabel>
            <Select
              value={bloodType}
              label="Blood Type"
              onChange={(e) => setBloodType(e.target.value)}
            >
              <MenuItem value="">Any Type</MenuItem>
              <MenuItem value={"A_POSITIVE"}>A+ POSITIVE</MenuItem>
              <MenuItem value={"A_NEGATIVE"}>A- NEGATIVE</MenuItem>
              <MenuItem value={"B_POSITIVE"}>B+ POSITIVE</MenuItem>
              <MenuItem value={"B_NEGATIVE"}>B- NEGATIVE</MenuItem>
              <MenuItem value={"AB_POSITIVE"}>AB+ POSITIVE</MenuItem>
              <MenuItem value={"AB_NEGATIVE"}>AB- NEGATIVE</MenuItem>
              <MenuItem value={"O_POSITIVE"}>O+ POSITIVE</MenuItem>
              <MenuItem value={"O_NEGATIVE"}>O- NEGATIVE</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              xs: "repeat(auto-fill, minmax(250px, 1fr))",
              sm: "repeat(auto-fill, minmax(300px, 1fr))",
              md: "repeat(auto-fill, minmax(300px, 1fr))",
            },
            margin: "0 auto",
            padding: 2,
            borderRadius: 8,
          }}
        >
          {paginatedDonors?.map((donor) => (
            <DonorCard key={donor.id} donor={donor} />
          ))}
        </Box>
        {paginatedDonors?.length === 0 && (
          <Box sx={{ textAlign: "center", my: 10, color: "red" }}>
            <Typography variant="h5">No Donors Found.</Typography>
            <Typography>Please, try again!</Typography>
          </Box>
        )}
        <Box
          my={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <Button
            variant="outlined"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            <ArrowBackIosIcon />
          </Button>
          {[...Array(totalPages)].map((_, index) => (
            <Button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              variant={index + 1 === page ? "outlined" : "outlined"}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            variant="outlined"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BloodDonors;
