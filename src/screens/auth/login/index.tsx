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
  handleRecoveryPassword: () => void;
  handleSignUp: () => void;
  handleLogin: (values: { username: string; password: string }) => void;
}

const Login = ({
  logo,
  title,
  handleRecoveryPassword,
  handleSignUp,
  handleLogin,
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
      handleLogin({ username: values.email, password: values.password });
    },
  });

  return (
    <AuthLayout logo={logo} title={title}>
      <Stack
        component="form"
        spacing={1.5}
        autoComplete="off"
        sx={{
          ".MuiButton-root": { marginTop: 1 },
          ".MuiButton-contained": { marginTop: 2, marginBottom: 1.5 },
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
        <TextField
          label={"Contraseña"}
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ minHeight: 74 }}
        />
        <Button type="submit" variant="contained" sx={{ height: 45 }}>
          Iniciar sesión
        </Button>
        <Button onClick={handleRecoveryPassword} sx={{ width: "fit-content" }}>
          ¿Olvidaste tu Contraseña?
        </Button>
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

export default Login;
