import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validationSchema";

import Box from "@mui/material/Box";
import AuthLayout from "../authLayout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface LoginProps {
  logo: string;
  title: string;
  handleCancel: () => void;
  handleSignUp: () => void;
}

const PasswordRecovery = ({
  logo,
  title,
  handleCancel,
  handleSignUp,
}: LoginProps) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema, // Use the Yup validation schema
    onSubmit: (values) => {
      // Handle form submission here
      console.log("Form values:", values);
    },
  });

  return (
    <AuthLayout logo={logo} title={title}>
      <Stack
        component="form"
        spacing={1}
        autoComplete="off"
        sx={{
          ".MuiButton-root": { marginTop: 1 },
          ".MuiButton-contained": { marginTop: 1, marginBottom: 1 },
        }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          label={"Correo"}
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ minHeight: 74 }}
        />
        <Box display={"flex"} justifyContent={"space-between"}>
          <Button type="submit" variant="contained" sx={{ height: 45 }}>
            Enviar Codigo de Confirmación
          </Button>
          <Button
            variant="contained"
            sx={{
              height: 45,
              width: 260,
              backgroundColor: (theme) => theme.palette.grey[200],
              color: (theme) => theme.palette.grey[800],
              ":hover": {
                backgroundColor: (theme) => theme.palette.grey[300],
              },
            }}
            onClick={handleCancel}
          >
            Cancelar
          </Button>
        </Box>
        <Button onClick={handleSignUp} sx={{ width: "fit-content" }}>
          <Box
            component={"span"}
            sx={{ marginRight: 0.5, color: (theme) => theme.palette.grey[800] }}
          >
            ¿No tienes una cuenta?
          </Box>
          Registrate aqui
        </Button>
      </Stack>
    </AuthLayout>
  );
};

export default PasswordRecovery;
