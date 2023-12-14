import React, { useState } from "react";
import { useFormik } from "formik";
import AuthLayout from "../authLayout";
import validationSchema from "./validationSchema";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { useThemeContext } from "../../../theme/wrapper";
import { ThemeProvider } from "@mui/material/styles";

interface NewPasswordProps {
  logo: string;
  title: string;
  onClickBackButton?: () => void;
  handleResetPassword: (values: { newPassword: string }) => void;
  resetPasswordError?: string | null;
  setResetPasswordError?: (value: null) => void;
}

const NewPassword = ({
  logo,
  title,
  onClickBackButton,
  handleResetPassword,
  resetPasswordError,
  setResetPasswordError,
}: NewPasswordProps) => {
  const { theme } = useThemeContext();
  const [showPassword, setShowPassword] = useState({
    password: false,
    repeatPassword: false,
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      repeatPassword: "",
    },
    validationSchema: validationSchema, // Use the Yup validation schema
    onSubmit: (values) => {
      // Handle form submission here
      handleResetPassword({ newPassword: values.password });
    },
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    formik.handleChange(e);
    if (setResetPasswordError) {
      setResetPasswordError(null);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword({ ...showPassword, password: !showPassword.password });
  };

  const handleToggleRepeatPasswordVisibility = () => {
    setShowPassword({
      ...showPassword,
      repeatPassword: !showPassword.repeatPassword,
    });
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
            label={"Nueva contraseña"}
            type={showPassword.password ? "text" : "password"}
            id="password"
            name="password"
            value={formik.values.password}
            onChange={handleOnChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
                          showPassword.password
                            ? theme.palette.primary.main
                            : theme.palette.grey[400],
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              borderRadius: 8,
              minHeight: 74,
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: (theme) => theme.palette.grey[200],
              },
            }}
          />
          <TextField
            label={"Repetir contraseña"}
            type={showPassword.repeatPassword ? "text" : "password"}
            id="repeatPassword"
            name="repeatPassword"
            value={formik.values.repeatPassword}
            onChange={handleOnChange}
            error={
              formik.touched.repeatPassword &&
              Boolean(formik.errors.repeatPassword)
            }
            helperText={
              formik.touched.repeatPassword && formik.errors.repeatPassword
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleToggleRepeatPasswordVisibility}
                    edge="end"
                  >
                    <RemoveRedEyeIcon
                      sx={{
                        color: (theme) =>
                          showPassword.repeatPassword
                            ? theme.palette.primary.main
                            : theme.palette.grey[400],
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              borderRadius: 8,
              minHeight: 74,
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: (theme) => theme.palette.grey[200],
              },
            }}
          />
          <FormHelperText sx={{ height: 16 }} error>
            {resetPasswordError}
          </FormHelperText>
          <Button type="submit" variant="contained" sx={{ height: 45 }}>
            Iniciar Sesión
          </Button>
        </Stack>
      </AuthLayout>
    </ThemeProvider>
  );
};

export default NewPassword;
