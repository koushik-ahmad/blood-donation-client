import { Box, Button, Modal, Typography } from "@mui/material";

interface ConfirmDeleteModalProps {
  open: boolean;
  handleClose: () => void;
  handleConfirm: (id: string) => void;
  id: string | null;
}

const ConfirmDeleteModal = ({ open, handleClose, handleConfirm, id }: ConfirmDeleteModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="confirm-delete-title"
      aria-describedby="confirm-delete-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: "4px",
          p: 4,
        }}
      >
        <Typography id="confirm-delete-title" variant="h6" component="h2">
          Confirm Deletion
        </Typography>
        <Typography id="confirm-delete-description" sx={{ mt: 4 }}>
          Are you sure you want to delete this request?
        </Typography>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: "8px"}}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={() => handleConfirm(id!)}>
            Confirm
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmDeleteModal;
