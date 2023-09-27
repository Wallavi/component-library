import React, { useRef } from "react";
import { useFormik } from "formik";
import validationSchema, { verificationEmailInputs } from "./validationSchema";
import AuthLayout from "../authLayout";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormHelperText from "@mui/material/FormHelperText";

export interface EmailVerificationInputProps {
  code: string;
  email: string;
}

interface EmailVerificationProps {
  logo: string;
  title: string;
  confirmEmail: string;
  handleConfirmSignUp: (value: EmailVerificationInputProps) => void;
  handleResendCode: () => void;
  emailVerificationError?: string | null;
}

interface FormikInitialValuesProps {
  number1: string;
  number2: string;
  number3: string;
  number4: string;
  number5: string;
  number6: string;
}

const EmailVerification = ({
  logo,
  title,
  confirmEmail,
  handleConfirmSignUp,
  handleResendCode,
  emailVerificationError,
}: EmailVerificationProps) => {
  const initialValues: FormikInitialValuesProps =
    verificationEmailInputs.reduce(
      (acc, input) => ({
        ...acc,
        [input.name]: "",
      }),
      {} as FormikInitialValuesProps
    );

  const inputRefs = {
    number1: useRef<HTMLInputElement | null>(null),
    number2: useRef<HTMLInputElement | null>(null),
    number3: useRef<HTMLInputElement | null>(null),
    number4: useRef<HTMLInputElement | null>(null),
    number5: useRef<HTMLInputElement | null>(null),
    number6: useRef<HTMLInputElement | null>(null),
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema, // Use the Yup validation schema
    onSubmit: (values) => {
      // Handle form submission here
      console.log("Form values:", values);
      handleConfirmSignUp({
        code: `${values.number1}${values.number2}${values.number3}${values.number4}${values.number5}${values.number6}`,
        email: confirmEmail,
      });
    },
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any,
    fieldName: string
  ) => {
    const { value } = event.target;

    if (value.length === 0 || value.length === 1) {
      formik.handleChange(event);
    }

    if (value.length === 1 && event.key !== "Backspace") {
      const currentInput = verificationEmailInputs.find(
        (input) => input.name === fieldName
      );

      if (currentInput && currentInput.name !== "number6") {
        const nextInput = verificationEmailInputs.find(
          (input) =>
            input.name === `number${parseInt(currentInput.name.slice(-1)) + 1}`
        );

        if (nextInput) {
          const nextFieldRef = inputRefs[nextInput.name];
          nextFieldRef.current?.focus();
        }
      }
    }

    if (event.key === "Backspace" && value.length === 0) {
      const currentInput = verificationEmailInputs.find(
        (input) => input.name === fieldName
      );

      if (currentInput && currentInput.name !== "number1") {
        const prevInput = verificationEmailInputs.find(
          (input) =>
            input.name === `number${parseInt(currentInput.name.slice(-1)) - 1}`
        );

        if (prevInput) {
          const prevFieldRef = inputRefs[prevInput.name];
          prevFieldRef.current?.focus();
        }
      }
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    const clipboardData = event.clipboardData.getData("text/plain");
    const updatedValues = clipboardData.split("").slice(0, 6); // Limit to the first 6 characters

    updatedValues.forEach((value: string, index: number) => {
      const fieldName = `number${index + 1}`;
      formik.setFieldValue(fieldName, value, false);
    });

    const lastInputRef =
      inputRefs[`number${updatedValues.length as 1 | 2 | 3 | 4 | 5 | 6}`];
    if (lastInputRef && lastInputRef.current) {
      lastInputRef.current.focus();
    }

    formik.validateForm().then((errors) => {
      // Handle validation errors here, if any
      console.log("Validation errors after paste:", errors);
    });
  };

  return (
    <AuthLayout
      logo={logo}
      title={title}
      sx={{ ".auth-title": { marginBottom: 1 } }}
    >
      <Stack
        component="form"
        spacing={1}
        autoComplete="off"
        sx={{
          ".MuiButton-root": { marginTop: 1 },
          ".MuiButton-contained": { marginTop: 4, marginBottom: 1 },
        }}
        onSubmit={formik.handleSubmit}
      >
        <Button
          onClick={() => {}}
          sx={{ width: 300, display: "block", textAlign: "initial" }}
        >
          <Box
            component={"span"}
            sx={{ marginRight: 0.5, color: (theme) => theme.palette.grey[800] }}
          >
            Enviamos un código de verificación al correo
          </Box>
          {confirmEmail}
        </Button>
        <Box display={"flex"} justifyContent={"space-between"}>
          {verificationEmailInputs.map((inputValue) => (
            <TextField
              onPaste={(event) => {
                handlePaste(event);
              }}
              key={inputValue.name}
              id={inputValue.name}
              name={inputValue.name}
              value={formik.values[inputValue.name]}
              onChange={(event) => {
                handleInputChange(event, inputValue.name);
              }}
              inputRef={inputRefs[inputValue.name]}
              error={
                formik.touched[inputValue.name] &&
                Boolean(formik.errors[inputValue.name])
              }
              onKeyDown={(event) => {
                // @ts-ignore
                handleInputChange(event, inputValue.name);
              }}
              sx={{
                ".MuiOutlinedInput-root": {
                  minHeight: 122,
                  input: { textAlign: "center" },
                },
                width: 80,
                input: { fontSize: 72, paddingX: 1 },
              }}
            />
          ))}
        </Box>
        <Box height={18}>
          {emailVerificationError ? (
            <FormHelperText error>{emailVerificationError}</FormHelperText>
          ) : (
            (Boolean(formik.errors.number1) ||
              Boolean(formik.errors.number2) ||
              Boolean(formik.errors.number3) ||
              Boolean(formik.errors.number4) ||
              Boolean(formik.errors.number5) ||
              Boolean(formik.errors.number6)) && (
              <FormHelperText error>
                El código de verificación no es correcto
              </FormHelperText>
            )
          )}
        </Box>
        <Button type="submit" variant="contained" sx={{ height: 45 }}>
          Confirmar cuenta
        </Button>
        <Button onClick={handleResendCode} sx={{ width: "fit-content" }}>
          <Box
            component={"span"}
            sx={{ marginRight: 0.5, color: (theme) => theme.palette.grey[800] }}
          >
            ¿No recibiste ningún código?
          </Box>
          Enviar nuevamente
        </Button>
      </Stack>
    </AuthLayout>
  );
};

export default EmailVerification;
