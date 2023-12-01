import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/material";

interface AuthProps {
  logo: string;
  title: string;
  children: React.ReactNode;
  sx?: SxProps;
}

const AuthLayout = ({ title, logo, children, sx }: AuthProps) => {
  return (
    <Box sx={sx}>
      <Box>
        <img src={logo} alt="Logo" />
      </Box>
      <Box className="auth-title" marginTop={12} marginBottom={8}>
        <Typography sx={{ fontWeight: 500, color: 'grey.800' }} variant="h4" >
          {title}
        </Typography>
      </Box>
      {children}
    </Box>
  );
};

export default AuthLayout;
