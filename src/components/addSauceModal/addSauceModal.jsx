import React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { createStation } from "../../services/user.service";
import useCreateApi from "../../hooks/useCreateApi";
import SelectOptionInput from "../selectOptionInput/selectOptionInput";
import { createSauce, getStations } from "../../services/user.service";

function AddSauceModal({ isModalOpen, setIsModalOpen }) {
  const [station, setStation] = React.useState({
    sauce_name: "",
    station_id: "",
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
    setIsModalOpen(false);
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
          Add new sauce
        </DialogTitle>
        <DialogContent
          sx={{
            overflowX: "hidden",
          }}
        >
          <TextField
            autoFocus
            id="name"
            label="Sauce Name"
            type="text"
            fullWidth
            variant="standard"
            sx={{ my: 5 }}
            value={station["sauce_name"]}
            name="station_name"
            onChange={handleChange}
          />
          <SelectOptionInput
            name="station_id"
            label="Station"
            keyName="station_name"
            func={() => getStations(0, 100)}
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

export default AddSauceModal;
