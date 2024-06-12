import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";

interface ConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose} >
      <DialogTitle my={2}>Confirm Deletion</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to delete this item?</DialogContentText>
      </DialogContent>
      <DialogActions sx={{m: "8px"}}> 
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="error">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
