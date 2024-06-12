/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import PHForm from "@/components/Forms/PHForm";
import { FieldValues } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import PHSelectField from "@/components/Forms/PHSelectField";
import { RequestStatus } from "@/types";
import { z } from "zod";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { useUpdateRequestStatusMutation } from "@/redux/api/requestApi";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const validationSchema = z.object({
  status: z.string(),
});

const UpdateRequestStatusModal = ({ open, setOpen, id }: TProps) => {
  const [updateRequest, { isLoading: updating }] =
    useUpdateRequestStatusMutation();

  const submitHandler = async (values: FieldValues) => {
    const payload = {
      id: id,
      ...values,
    };
    try {
      const res = await updateRequest(payload);
      setOpen(false);
      toast.success("Status updated successfully")
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!")
    }
  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Update Request Status">
      <PHForm onSubmit={submitHandler} resolver={zodResolver(validationSchema)}>
        <Grid container spacing={1} sx={{ my: 4 }}>
          <Grid item xs={12} sm={12} md={12}>
            <PHSelectField
              items={RequestStatus}
              name="status"
              label="Request Status"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
        </Grid>

        <Button type="submit" fullWidth disabled={updating}>
          Update Request
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default UpdateRequestStatusModal;
