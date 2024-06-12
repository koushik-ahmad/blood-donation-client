"use client";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  useDeleteDonorMutation,
  useGetAllDonorsQuery,
} from "@/redux/api/donorApi";
import { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { toast } from "sonner";
import { useDebounced } from "@/redux/hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UpdateDonorModal from "./UpdateDonorModal";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { MetaType } from "@/types";
import Spinner from "@/components/UI/Spinner/Spinner";
import ConfirmationModal from "./ConfirmationModal";

const DonorPage = () => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedDonorId, setSelectedDonorId] = useState<string>("");

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [donorToDelete, setDonorToDelete] = useState<string | null>(null);

  // Pagination state
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const query: Record<string, any> = {
    page,
    limit: pageSize,
  };

  const { data, isLoading } = useGetAllDonorsQuery({ ...query });
  const [deleteDonor] = useDeleteDonorMutation();

  const donors = data?.donors || [];
  const meta: MetaType = data?.meta || {};

  const handleDelete = async () => {
    if (!donorToDelete) return;

    try {
      const res = await deleteDonor(donorToDelete).unwrap();
      if (res?.id) {
        toast.success("Donor deleted successfully!!!");
      }
    } catch (err: any) {
      console.error(err.message);
    } finally {
      setIsConfirmationModalOpen(false);
      setDonorToDelete(null);
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "bloodType", headerName: "Blood Type", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "totalDonations", headerName: "Total Donations", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              onClick={() => {
                setDonorToDelete(row.id);
                setIsConfirmationModalOpen(true);
              }}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>

            <IconButton
              onClick={() => {
                setSelectedDonorId(row.id);
                setIsUpdateModalOpen(true);
              }}
            >
              <EditIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const renderPageNumbers = () => {
    if (!meta || !("total" in meta)) {
      return null;
    }
    const totalPages = Math.ceil(((meta?.total || 0) as number) / pageSize);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          variant={i === page ? "outlined" : "outlined"}
        >
          {i}
        </Button>
      );
    }

    return pageNumbers;
  };

  return (
    <>
      <UpdateDonorModal
        open={isUpdateModalOpen}
        setOpen={setIsUpdateModalOpen}
        id={selectedDonorId}
      />
      <ConfirmationModal
        open={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        onConfirm={handleDelete}
      />
      <Box>
        <Typography
          variant="h4"
          mt={4}
          mb={2}
          sx={{ textAlign: "center", fontSize: "30px" }}
        >
          Donor Management Dashboard
        </Typography>

        {!isLoading ? (
          <Box my={2}>
            <DataGrid rows={donors} columns={columns} hideFooter={true} />
          </Box>
        ) : (
          <Spinner />
        )}

        <Box
          mt={5}
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
          {renderPageNumbers()}
          <Button
            variant="outlined"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === Math.ceil((meta?.total as number) / pageSize)}
          >
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default DonorPage;
