import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { SxProps } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface AuthProps {
  logo: string;
  title: string;
  children: React.ReactNode;
  onClickBackButton?: () => void;
  sx?: SxProps;
}

const AuthLayout = ({
  title,
  logo,
  children,
  sx,
  onClickBackButton,
}: AuthProps) => {
  return (
    <Box sx={sx}>
      <Box>
        {onClickBackButton ? (
          <IconButton
            sx={{ marginRight: 1, marginTop: -1.5 }}
            onClick={onClickBackButton}
          >
            <ArrowBackIcon color="primary" fontSize="large" />
          </IconButton>
        ) : null}
        <img src={logo} alt="Logo" />
      </Box>
      <Box className="auth-title" marginTop={12} marginBottom={8}>
        <Typography sx={{ fontWeight: 500, color: "grey.800" }} variant="h4">
          {title}
        </Typography>
      </Box>
      {children}
    </Box>
  );
};

export default AuthLayout;
