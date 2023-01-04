import React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { createStation } from "../../services/user.service";
import useCreateApi from "../../hooks/useCreateApi";

function AddStationModal({ isModalOpen, setIsModalOpen }) {
  const [station, setStation] = React.useState({
    station_name: "",
    max_time: 0,
    statuses: ["string"], // TODO
  });

  const createStationApi = useCreateApi(createStation);
  const { request, loading, message, error } = createStationApi;

  const handleChange = (e) => {
    setStation({
      ...station,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    request(station);
  };

  return (
    <div>
      <Dialog
        open={isModalOpen}
        onClose={handleClose}
      >
        <DialogTitle
          sx={{
            backgroundColor: "secondary.main",
            py: 1,
            color: "white",
          }}
        >
          Add new station
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Station Name"
            type="text"
            fullWidth
            variant="standard"
            sx={{ my: 5 }}
            value={station["station_name"]}
            name="station_name"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            id="name"
            label="Maximum time (minutes)"
            type="number"
            fullWidth
            variant="standard"
            InputProps={{ type: "number", inputProps: { min: 0 } }}
            value={station["max_time"]}
            onChange={handleChange}
            name="max_time"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddStationModal;
