import React, { useState } from "react";
import { useFormik } from "formik";
import validationSchema from "./validationschema";

import Box from "@mui/material/Box";
import AuthLayout from "../authLayout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { useThemeContext } from "../../../theme/wrapper";
import { ThemeProvider } from "@mui/material/styles";

export interface SignUpInputProps {
  email: string;
  password: string;
  confirm_password: string;
  agree_to_terms: boolean;
}

interface SignUpProps {
  logo: string;
  title: string;
  onClickBackButton?: () => void;
  handleLogin: () => void;
  handleSignUp: (value: SignUpInputProps) => void;
  signUpError?: string | null;
  setSignUpError?: (values: string | null) => void;
}

const SignUp = ({
  logo,
  title,
  onClickBackButton,
  handleLogin,
  handleSignUp,
  signUpError,
  setSignUpError,
}: SignUpProps) => {
  const { theme } = useThemeContext();
  const [showPassword, setShowPassword] = useState({
    password: false,
    repeatPassword: false,
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
      agree_to_terms: false,
    },
    validationSchema: validationSchema, // Use the Yup validation schema
    onSubmit: (values) => {
      // Handle form submission here
      handleSignUp(values);
    },
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    formik.handleChange(e);
    if (setSignUpError) {
      setSignUpError(null);
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
          spacing={1.5}
          autoComplete="off"
          sx={{
            ".MuiButton-root": { marginTop: 1 },
            ".MuiButton-contained": { marginTop: 2, marginBottom: 1.5 },
            fieldset: {
              ".MuiFormHelperText-root": { marginTop: 0, marginLeft: 1.5 },
              marginTop: 0.5,
              ".MuiFormControlLabel-root": { marginLeft: 0 },
            },
            ".MuiFormHelperText-root": { marginTop: 0, marginLeft: 0.5 },
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
            label={"Confirmar contraseña"}
            type={showPassword.repeatPassword ? "text" : "password"}
            id="confirm_password"
            name="confirm_password"
            value={formik.values.confirm_password}
            onChange={handleOnChange}
            error={
              formik.touched.confirm_password &&
              Boolean(formik.errors.confirm_password)
            }
            helperText={
              formik.touched.confirm_password && formik.errors.confirm_password
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
          <FormControl
            required
            error={
              formik.touched.agree_to_terms &&
              Boolean(formik.errors.agree_to_terms)
            }
            component="fieldset"
            sx={{ minHeight: 60 }}
            variant="standard"
          >
            <FormControlLabel
              control={
                <Checkbox
                  name="agree_to_terms"
                  id="agree_to_terms"
                  checked={formik.values.agree_to_terms}
                  onChange={handleOnChange}
                />
              }
              label="Acepto términos y condiciones"
            />
            {formik.touched.agree_to_terms &&
              Boolean(formik.errors.agree_to_terms) && (
                <FormHelperText>{formik.errors.agree_to_terms}</FormHelperText>
              )}
          </FormControl>
          <FormHelperText sx={{ height: 16 }} error>
            {signUpError}
          </FormHelperText>
          <Button type="submit" variant="contained" sx={{ height: 45 }}>
            Registrarme
          </Button>
          <Button onClick={handleLogin} sx={{ width: "fit-content" }}>
            <Box
              component={"span"}
              sx={{
                marginRight: 0.5,
                color: (theme) => theme.palette.grey[800],
              }}
            >
              ¿Ya tienes una cuenta?
            </Box>
            Inicia Sesión
          </Button>
        </Stack>
      </AuthLayout>
    </ThemeProvider>
  );
};

export default SignUp;
