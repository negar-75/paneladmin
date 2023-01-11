import * as React from "react";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import useGetApi from "../../hooks/useGetApi";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function SelectOptionInput({
  label,
  func,
  keyName,
  name,
  onChange,
}) {
  const getDropDownMenuItems = useGetApi(func, keyName);
  const { selectOptionItems, request } = getDropDownMenuItems;

  const [itemName, setItemName] = React.useState();
  React.useEffect(() => {
    request();
  }, []);

  return (
    <div>
      <FormControl sx={{ width: 400 }}>
        <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          value={itemName}
          name={name}
          defaultValue=""
          onChange={(event, obj) => onChange(event, obj)}
          sx={{
            width: {
              xs: " 250px",
              sm: " 250px",
              md: "400px",
            },
          }}
          input={
            <OutlinedInput
              sx={{ height: 50 }}
              id="select-multiple-chip"
              label="Chip"
            />
          }
          renderValue={(selected) => {
            return (
              <Chip
                key={selected}
                label={selected}
                sx={{ backgroundColor: "secondary.main", color: "white" }}
              />
            );
          }}
          MenuProps={MenuProps}
        >
          {selectOptionItems?.map((item) => {
            return (
              <MenuItem
                id={item.id}
                value={item.name}
              >
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
