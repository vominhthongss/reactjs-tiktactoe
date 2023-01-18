import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { hideNestedModal } from "../store/actions/displayNestedModal";
import { Button } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const NestedModal = (props) => {
  const open = useSelector((state) => state.displayNestedModal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideNestedModal());
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">THÔNG BÁO</h2>

          <p id="parent-modal-description">
            {props.user
              ? "Vui lòng nhập tên người chơi " + props.user + " nha bạn !"
              : "Kết thúc !!!!"}
          </p>
          <Button
            onClick={() => handleClose()}
            variant="contained"
            color="success"
          >
            OK
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
export default NestedModal;
