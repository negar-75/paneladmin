import React from "react";
import Switch from "@mui/material/Switch";
import useDidMountEffect from "../../hooks/useDidMountEffect";
import FormControlLabel from "@mui/material/FormControlLabel";

function StatusSwitch({ status, elementId, apiFunc }) {
  const [toggleMode, setToggleMode] = React.useState({
    status: status,
  });

  const toggleChange = (e) => {
    setToggleMode((pre) => ({ ...pre, status: e.target.checked }));
  };

  const fetch = async () => {
    const res = await apiFunc(elementId, toggleMode);
    console.log(res);
  };

  useDidMountEffect(fetch, toggleMode);

  return (
    <div className="status-switch">
      <FormControlLabel
        control={
          <Switch
            size="medium"
            value={toggleMode.status}
            checked={toggleMode.status}
            onChange={toggleChange}
          />
        }
        label={toggleMode.status ? "Enable" : "Disable"}
        labelPlacement="bottom"
      />
    </div>
  );
}

export default StatusSwitch;
