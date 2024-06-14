"use client";

import {
  useGetMYProfileQuery,
  useUpdateProfilePictureMutation,
} from "@/redux/api/myProfile";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { toast } from "sonner";
import avatar from "@/assets/images/avatar.png";
import ProfileUpdateModal from "./ProfileUpdateModal";
import DonorInformation from "./DonorInformations";
import MyDonationRequests from "./MyDonationRequests";
import DonationRequestsMadeByMe from "./DonationRequestsMadeByMe";
import Divider from '@mui/material/Divider';
import Spinner from "@/components/UI/Spinner/Spinner";

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, refetch } = useGetMYProfileQuery(undefined);

  // console.log(data);

  const [updateProfilePicture, { isLoading: updating }] = useUpdateProfilePictureMutation();

  const fileUploadHandler = (file: File) => {
    const imgBBLink = "7b9639cdc6a2cd14a6d5cbbaaf7a0c5c";
    const formData = new FormData();
    formData.append("image", file);
    const url = `https://api.imgbb.com/1/upload?key=${imgBBLink}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          // console.log("image:", image);

          const profileUpdate = {
            id: data?.id,
            profilePicture: image,
          };
          
          updateProfilePicture(profileUpdate)
            .then((resolvedValue) => {
              toast.success("Picture uploaded successfully");
              refetch();
            })
            .catch((error) => {
              console.log(error);
              toast.error("Failed to upload the picture!");
            });
        }
      });
  };


  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <Grid container spacing={2} sx={{ paddingY: "1rem" }}>
      <ProfileUpdateModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        id={data?.id}
      />
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          backgroundColor: "#f5f5f5",
          padding: "1rem",
          height: "100%",
          borderRadius: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: 500,
            width: "100%",
            overflow: "hidden",
            borderRadius: 1,
          }}
        >
          <Image
            height={100}
            width={200}
            src={data?.profilePicture ? data?.profilePicture : avatar}
            alt="User Photo"
            style={{ borderRadius: "50%",  border: "4px solid red" }}
          />

          <Box gap={2} sx={{ marginTop: "1rem", textAlign: "center" }}>
            {updating ? (
              <Typography>Uploading...</Typography>
            ) : (
              <AutoFileUploader
                name="file"
                label="Upload Photo"
                icon={<CloudUploadIcon />}
                onFileUpload={fileUploadHandler}
                variant="text"
              />
            )}
            <Button
              endIcon={<ModeEditIcon />}
              onClick={() => setIsModalOpen(true)}
            >
              Edit Profile
            </Button>
          </Box>
        </Box>

        {/* profile information here  */}
        <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
          <Grid item xs={12}>
            <DonorInformation data={data} />
          </Grid>
        </Grid>
      </Grid>

      {/* Donar request here */}
      <Grid item xs={12} md={8} >
        <Grid item xs={12} mb={4}>
          <MyDonationRequests />
        </Grid>

         <Divider/>
        <Grid item xs={12}>
          <DonationRequestsMadeByMe />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
