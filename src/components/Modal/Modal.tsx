import { Box, Modal as MuiModal, Typography } from "@mui/material";

interface Props {
  showModal: boolean;
  setShowModal: (value: React.SetStateAction<boolean>) => void;
  modalMessage: string;
  modalType: "success" | "error";
}

export function Modal({
  showModal,
  setShowModal,
  modalMessage,
  modalType,
}: Props) {
  return (
    <MuiModal open={showModal} onClose={() => setShowModal(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
          boxShadow: 24,
          textAlign: "center",
        }}
      >
        <img
          src={modalType === "success" ? "/modal-check.png" : "/modal-x.png"}
          alt={modalType}
          style={{ width: "50px", marginBottom: "1rem" }}
        />
        <Typography
          sx={{ fontSize: "14px", fontStyle: "italic", color: "#666" }}
        >
          {modalMessage}
        </Typography>
      </Box>
    </MuiModal>
  );
}
