"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import avatar from "@/assets/images/avatar.png";
import useUserInfo from "@/hooks/useUserInfo";
import DonorRequestModal from "@/app/(withCommonLayout)/components/DonorRequestModal";

const DonorDetailsCard = ({ donor }: any) => {
  const userInfo = useUserInfo();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Popup */}
      <DonorRequestModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        id={donor?.id}
      />
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
          <Box component="label" my={4}>
            <Typography variant="h5" fontWeight={500} textAlign="center">
              Donor Profile Details
            </Typography>
          </Box>

          <Box
            sx={{
              width: 200,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={donor?.profilePicture ? donor?.profilePicture : avatar}
              alt="profile Image"
              width={150}
              height={200}
              style={{ borderRadius: "50%", border: "4px solid red" }}
            />
          </Box>

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
              <Typography variant="body1">Full Name</Typography>
              <Typography variant="body1">{donor?.name}</Typography>
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
              <Typography variant="body1">{donor?.email}</Typography>
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
              <Typography variant="body1">{donor?.bloodType}</Typography>
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
                {donor?.totalDonations} times
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
              <Typography variant="body1">{donor?.location}</Typography>
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
              <Typography variant="body1">{donor?.userProfile?.age}</Typography>
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
                {donor?.status || "Inactive"}
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
                {donor?.userProfile?.lastDonationDate}
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
              <Typography variant="body1">Bio</Typography>
              <Typography variant="body1">{donor?.userProfile?.bio}</Typography>
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {userInfo?.userId ? (
              <>
                <Button
                   sx={{ maxWidth: 300, my: 5 }}
                   onClick={() => setIsModalOpen(true)}
                  // component={Link}
                  // href={`/donors/${donor?.id}/request`}
                >
                  Request for Blood
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  href="/login"
                  sx={{ mt: 2 }}
                >
                  Login
                </Button>
                <Typography color="error" fontWeight="bold" sx={{ my: 2 }}>
                  You need to login before blood request.
                </Typography>
              </>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default DonorDetailsCard;
