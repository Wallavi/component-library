import React from "react";
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

export interface SignUpInputProps {
  email: string;
  password: string;
  confirm_password: string;
  agree_to_terms: boolean;
}

interface SignUpProps {
  logo: string;
  title: string;
  handleLogin: () => void;
  handleSignUp: (value: SignUpInputProps) => void;
}

const SignUp = ({ logo, title, handleLogin, handleSignUp }: SignUpProps) => {
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
      console.log("Form values:", values);
      handleSignUp(values);
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
          fieldset: {
            ".MuiFormHelperText-root": { marginTop: 0, marginLeft: 1.5 },
            marginTop: 0.5,
            ".MuiFormControlLabel-root": { marginLeft: 0 },
          },
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
        <TextField
          label={"Confirmar contraseña"}
          type="password"
          id="confirm_password"
          name="confirm_password"
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          error={
            formik.touched.confirm_password &&
            Boolean(formik.errors.confirm_password)
          }
          helperText={
            formik.touched.confirm_password && formik.errors.confirm_password
          }
          sx={{ minHeight: 74 }}
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
                onChange={formik.handleChange}
              />
            }
            label="Acepto términos y condiciones"
          />
          {formik.touched.agree_to_terms &&
            Boolean(formik.errors.agree_to_terms) && (
              <FormHelperText>{formik.errors.agree_to_terms}</FormHelperText>
            )}
        </FormControl>

        <Button type="submit" variant="contained" sx={{ height: 45 }}>
          Registrarme
        </Button>
        <Button onClick={handleLogin} sx={{ width: "fit-content" }}>
          <Box
            component={"span"}
            sx={{ marginRight: 0.5, color: (theme) => theme.palette.grey[800] }}
          >
            ¿Ya tienes una cuenta?
          </Box>
          Inicia Sesión
        </Button>
      </Stack>
    </AuthLayout>
  );
};

export default SignUp;
