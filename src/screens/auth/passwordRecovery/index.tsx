import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validationSchema";

import Box from "@mui/material/Box";
import AuthLayout from "../authLayout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormHelperText from "@mui/material/FormHelperText";

import { useThemeContext } from "../../../theme/wrapper";
import { ThemeProvider } from "@mui/material/styles";

interface LoginProps {
  logo: string;
  title: string;
  onClickBackButton?: () => void;
  handleCancel: () => void;
  handleSignUp: () => void;
  handlePasswordRecovery: (values: { email: string }) => void;
  passwordRecoveryError?: string | null;
  setPasswordRecoveryError?: (values: string | null) => void;
}

const PasswordRecovery = ({
  logo,
  title,
  onClickBackButton,
  handleCancel,
  handleSignUp,
  handlePasswordRecovery,
  passwordRecoveryError,
  setPasswordRecoveryError,
}: LoginProps) => {
  const { theme } = useThemeContext();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema, // Use the Yup validation schema
    onSubmit: (values) => {
      // Handle form submission here
      handlePasswordRecovery({ email: values.email });
    },
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    formik.handleChange(e);
    if (setPasswordRecoveryError) {
      setPasswordRecoveryError(null);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthLayout logo={logo} title={title} onClickBackButton={onClickBackButton}>
        <Stack
          component="form"
          spacing={1}
          autoComplete="off"
          sx={{
            ".MuiButton-root": { marginTop: 1 },
            ".MuiButton-contained": { marginTop: 0.5, marginBottom: 1 },
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
          <FormHelperText sx={{ height: 16 }} error>
            {passwordRecoveryError}
          </FormHelperText>
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
              sx={{
                marginRight: 0.5,
                color: (theme) => theme.palette.grey[800],
              }}
            >
              ¿No tienes una cuenta?
            </Box>
            Registrate aqui
          </Button>
        </Stack>
      </AuthLayout>
    </ThemeProvider>
  );
};

export default PasswordRecovery;
