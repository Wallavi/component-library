import React, { useState } from "react";
import { useFormik } from "formik";
import validationSchema from "./validationSchema";

import Box from "@mui/material/Box";
import AuthLayout from "../authLayout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { useThemeContext } from "../../../theme/wrapper";
import { ThemeProvider } from "@mui/material/styles";

interface LoginProps {
  logo: string;
  title: string;
  onClickBackButton?: () => void;
  handleRecoveryPassword: () => void;
  handleSignUp: () => void;
  handleLogin: (values: { username: string; password: string }) => void;
  loginError?: null | string;
  setLoginError?: (values: string | null) => void;
}

const Login = ({
  logo,
  title,
  onClickBackButton,
  handleRecoveryPassword,
  handleSignUp,
  handleLogin,
  loginError,
  setLoginError,
}: LoginProps) => {
  const { theme } = useThemeContext();
  console.log("theme", theme);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema, // Use the Yup validation schema
    onSubmit: (values) => {
      // Handle form submission here
      handleLogin({ username: values.email, password: values.password });
    },
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    formik.handleChange(e);
    if (setLoginError) {
      setLoginError(null);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthLayout
        logo={logo}
        title={title}
        onClickBackButton={onClickBackButton}
      >
        <Stack
          component="form"
          spacing={1.5}
          autoComplete="off"
          sx={{
            ".MuiButton-root": { marginTop: 1 },
            ".MuiButton-contained": { marginTop: 2, marginBottom: 1.5 },
            ".MuiFormHelperText-root": { marginTop: 0.25, marginLeft: 0.5 },
          }}
          onSubmit={formik.handleSubmit}
        >
          <TextField
            label={"Correo"}
            id="email"
            name="email"
            value={formik.values.email}
            onChange={handleOnChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{
              borderRadius: 8,
              minHeight: 74,
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: (theme) => theme.palette.grey[200],
              },
            }}
          />
          <TextField
            label={"Contraseña"}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formik.values.password}
            onChange={handleOnChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{
              borderRadius: 8,
              minHeight: 74,
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: (theme) => theme.palette.grey[200],
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    <RemoveRedEyeIcon
                      sx={{
                        color: (theme) =>
                          showPassword
                            ? theme.palette.primary.main
                            : theme.palette.grey[400],
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormHelperText sx={{ height: 16 }} error>
            {loginError}
          </FormHelperText>
          <Button type="submit" variant="contained" sx={{ height: 45 }}>
            Iniciar sesión
          </Button>
          <Button
            onClick={handleRecoveryPassword}
            sx={{ width: "fit-content" }}
          >
            ¿Olvidaste tu Contraseña?
          </Button>
          <Button onClick={handleSignUp} sx={{ width: "fit-content" }}>
            <Box
              component={"span"}
              sx={{
                marginRight: 0.5,
                color: (theme) => theme.palette.grey[800],
              }}
            >
              ¿No tienes una cuenta?
            </Box>
            Regístrate aquí
          </Button>
        </Stack>
      </AuthLayout>
    </ThemeProvider>
  );
};

export default Login;
