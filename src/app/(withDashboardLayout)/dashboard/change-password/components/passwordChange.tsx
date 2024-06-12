"use client"

import { useRouter } from "next/navigation";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import { logoutUser } from "@/services/actions/logoutUser";
import Image from "next/image";
import logo from "@/assets/icons/logo2.png";

const validationSchema = z.object({
  oldPassword: z.string().min(6, "Must be at least 6 characters long"),
  newPassword: z.string().min(6, "Must be at least 6 characters long"),
  confirmPassword: z.string().min(6, "Must be at least 6 characters long"),
});

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const router = useRouter();

  const onSubmit = async (values: FieldValues) => {
    if (values.newPassword === values.confirmPassword) {
      try {
        const res = await changePassword(values);

        if ("data" in res && res.data.status === 200) {
          logoutUser(router);
          toast.success("Password Changed Successfully");
        } else {
          throw new Error("Incorrect Old Password");
        }
      } catch (error) {
        toast.success("Incorrect Old Password");
        console.log(error);
      }
    } else {
      toast.error("Password doesn't match!");
    }
  };

  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        maxWidth: 600,
        width: "100%",
        boxShadow: 1,
        borderRadius: 1,
        mx: "auto",
        mt: {
          xs: 2,
          md: 5,
        },
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Box
          sx={{
            "& svg": {
              width: 100,
              height: 100,
            },
          }}
        >
          <Image src={logo} width={50} height={50} alt="logo" />
        </Box>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mt: 2 }}>
          Change password
        </Typography>
      </Stack>
      <PHForm
        onSubmit={onSubmit}
        defaultValues={{ oldPassword: "", newPassword: "" }}
        resolver={zodResolver(validationSchema)}
      >
        <Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PHInput
              name="oldPassword"
              type="password"
              label="Old Password"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PHInput
              name="newPassword"
              type="password"
              label="New Password"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <PHInput
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Button type="submit" sx={{ width: "100%", my: 2 }}>
          change Password
        </Button>
      </PHForm>
    </Box>
  );
};

export default ChangePassword;