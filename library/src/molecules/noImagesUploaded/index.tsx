import React from "react";

import Box from "@mui/material/Box";
import HideImageIcon from "@mui/icons-material/HideImage";
import { Typography } from "@mui/material";

const NoImagesUploaded = () => {
  return (
    <Box>
      <Box
        sx={{
          height: "125px",
          minWidth: "483px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "40px 0",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                width: "45px",
                height: "45px",
                backgroundColor: (theme) => theme.palette.grey[200],
                borderRadius: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HideImageIcon />
            </Box>
            <Box>
              <Typography>Ninguna imagen ha sido cargada</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NoImagesUploaded;
