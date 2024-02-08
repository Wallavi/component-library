import { Box, Button } from "@mui/material";
import { Switch } from "@wallavi/component-library";
import React from "react";

export default function PreviewSwitch() {
  const [checked, setChecked] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const handleChecked = (
    event: React.ChangeEvent<HTMLInputElement>,
    isChecked: boolean
  ) => {
    setChecked(isChecked);
    console.log("isSelected: ", isChecked);
  };

  const handleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
      }}
    >
      <Button variant="contained" onClick={handleDisabled}>
        {disabled ? "Habilitar" : "Deshabilitar"}
      </Button>
      <Switch
        checked={checked}
        disabled={disabled}
        handleChecked={handleChecked}
      />
    </Box>
  );
}
