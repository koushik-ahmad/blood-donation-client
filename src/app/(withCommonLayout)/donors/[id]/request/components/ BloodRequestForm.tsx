// "use client";
// import CDatePicker from "@/components/forms/CDatePicker";
// import CForm from "@/components/forms/CForm";
// import CInput from "@/components/forms/CInput";
// import revalidateData from "@/services/actions/revalidateData";

// import { TUser } from "@/types";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Box, Button } from "@mui/material";
// import { useRouter } from "next/navigation";
// import { FieldValues, SubmitHandler } from "react-hook-form";
// import toast from "react-hot-toast";
// import { z } from "zod";

// const bloodRequestSchema = z.object({
//   phoneNumber: z
//     .string()
//     .min(10, { message: "Phone number must be at least 10 digits" })
//     .max(15, { message: "Phone number can't be longer than 15 digits" }),
//   // bloodType: z.
//   dateOfDonation: z.date(),
//   hospitalName: z.string().min(1, { message: "Hospital name is required" }),
//   hospitalAddress: z.string().min(1, { message: "Hospital address is required" }),
//   reason: z
//     .string()
//     .min(1, { message: "Reason is required" })
//     .max(500, { message: "Reason can't be longer than 500 characters" }),
// });

// type TBloodRequestFormProps = {
//   user: TUser | undefined;
//   donorId: string;
//   createBloodRequest: (data: any) => Promise<any>;
// };

// const BloodRequestForm = ({ user, donorId, createBloodRequest }: TBloodRequestFormProps) => {
//   const router = useRouter();
//   const onSubmit: SubmitHandler<FieldValues> = async (values) => {
//     const data = {
//       ...values,
//       donorId,
//     };

//     try {
//       const res = await createBloodRequest(data);
//       if (res?.success) {
//         revalidateData("profile");
//         router.push("/profile");
//         toast.success("Request sent successfully");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const defaultValues = {
//     phoneNumber: user?.phoneNumber || "",
//     dateOfDonation: new Date(),
//     hospitalName: "",
//     hospitalAddress: "",
//     reason: "",
//   };
//   return (
//     <CForm
//       onSubmit={onSubmit}
//       defaultValues={defaultValues}
//       resolver={zodResolver(bloodRequestSchema)}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: 2,
//           width: "100%",
//           maxWidth: "500px",
//           margin: "0 auto",
//         }}
//       >
//         <CInput name='phoneNumber' label='Phone Number' variant='outlined' fullWidth />
//         <CDatePicker name='date' label='Date' fullWidth disablePast />
//         <CInput name='hospitalName' label='Hospital Name' variant='outlined' fullWidth />
//         <CInput name='hospitalAddress' label='Hospital Address' variant='outlined' fullWidth />
//         <CInput name='reason' label='Reason' variant='outlined' fullWidth />
//         <Button
//           type='submit'
//           sx={{
//             marginTop: 2,
//             padding: 1.5,
//           }}
//           fullWidth
//         >
//           Submit
//         </Button>
//       </Box>
//     </CForm>
//   );
// };

// export default BloodRequestForm;