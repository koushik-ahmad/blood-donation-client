"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logo from "@/assets/icons/logo2.png";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modityPayload";
import { registerUser } from "@/services/actions/resgisterUser";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { BloodGroups } from "@/types";
import { z } from "zod";
import defaultValues from "./page";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import PHDatePicker from "@/components/Forms/PHDatePicker";

// const registerFormSchema = z.object({
//   name: z.string({ required_error: "Name is required" }),
//   email: z.string({ required_error: "Email is required" }).email({ message: "Invalid Email" }),
//   password: z
//     .string({ required_error: "Password is required" })
//     .min(6, { message: "Password must be at least 6 characters" }),
//   confirmPassword: z
//     .string({ required_error: "Please type your password again" })
//     .min(6, "Your password should be minimum 6 characters"),
//   bloodType: z
//     .string({ required_error: "Blood type is required" })
//     .optional(),
//   location: z.string({ required_error: "Location is required" }),
//   bio: z.string({ required_error: "Bio is required" }),
//   contactNumber: z.string({ required_error: "Phone Number is required" }),
//   age: z.string({ required_error: "Age is required" }),
//   lastDonationDate: z
//     .any({ required_error: "Last donation date is required" })
//     .optional(),
// });

const RegisterPage = () => {
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  const router = useRouter();


  const handleRegister = async (values: any) => {
    // const data = modifyPayload(values);
    // console.log(values);

    const password = values.password;
    const confirmPassword = values.confirmPassword;

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match!");
    }

    const modifiedValues = {
      ...values,
      age: parseInt(values.age),
    };

    console.log(modifiedValues)

     try {
      const res = await registerUser(modifiedValues);
      console.log(res);

      if(res.success === false){
        toast.error("validation error");
      };

      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password: values.password,
          email: values.email,
        });
        if (result?.data?.token) {
          storeUserInfo({ accessToken: result?.data?.token });
          router.push("/");
        }
      }
    } catch (err: any) {
      toast.error("Validation Error!!");
      console.error(err);
    }
  };

  // const defaultValues = {
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   bloodType: "",
  //   location: "",
  //   bio: "",
  //   contactNumber: "",
  //   age: "",
  //   lastDonationDate: "",
  // };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                BLOOD CARE REGISTER
              </Typography>
            </Box>
          </Stack>

          <Box>
            <PHForm
              onSubmit={handleRegister}
              // resolver={zodResolver(registerFormSchema)}
              // defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <PHInput label="Name" fullWidth={true} name="name" />
                </Grid>
                <Grid item md={12}>
                  <PHInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="email"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    label="Confirm Password"
                    type="password"
                    fullWidth={true}
                    name="confirmPassword"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <PHSelectField
                    items={BloodGroups}
                    name="bloodType"
                    label="Blood Type"
                    sx={{ mb: 2 }}
                    fullWidth
                  />
                </Grid>

                <Grid item md={6}>
                  <PHInput label="Location" fullWidth={true} name="location" />
                </Grid>
                <Grid item md={6}>
                  <PHInput label="Bio" fullWidth={true} name="bio" />
                </Grid>
                <Grid item md={6}>
                  <PHInput label="Phone" type="tel" fullWidth={true} name="contactNumber" />
                </Grid>
                <Grid item md={6}>
                  <PHInput label="Age" fullWidth={true} name="age" />
                </Grid>
                <Grid item md={6}>
                  <PHDatePicker
                    name="lastDonationDate"
                    label="Last Donation Date"
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account? <Link href="/login">Login</Link>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
