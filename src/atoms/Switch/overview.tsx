import { Box, Button } from "@mui/material";
import React from "react";
import Switch from ".";

export default function PreviewSwitch() {
  const [selected, setSelected] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const handleSelected = (
    event: React.ChangeEvent<HTMLInputElement>,
    isSelected: boolean
  ) => {
    setSelected(isSelected);
    console.log("isSelected: ", isSelected);
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
        selected={selected}
        disabled={disabled}
        handleSelected={handleSelected}
      />
    </Box>
  );
}
