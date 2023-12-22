import React, { useState, useEffect } from "react";
import { Amplify, Auth } from "aws-amplify";
import { amplifyConfiguration } from "./aws-exports";

import {
  Login,
  SimpleCarousel,
  PasswordRecovery,
  SignUp,
  EmailVerification,
  NewPassword,
  SignUpInputProps,
  EmailVerificationInputProps
} from "@wallavi/component-library";
import Profile from "./profile";

import Box from "@mui/material/Box";

Amplify.configure(amplifyConfiguration);

const Authentication = () => {
  const [showScreen, setShowScreen] = useState("login");
  const [user, setUser] = useState(null);
  const [emailUsername, setEmailUsername] = useState("");
  const [emailVerificationError, setEmailVerificationError] = useState<
    null | string
  >(null);
  const [resetPasswordVerificationError, setResetPasswordVerificationError] =
    useState<null | string>(null);
  const [resetPasswordError, setResetPasswordError] = useState<null | string>(
    null
  );
  const [loginError, setLoginError] = useState<null | string>(null);
  const [signUpError, setSignUpError] = useState<null | string>(null);
  const [passwordRecoveryError, setPasswordRecoveryError] = useState<
    null | string
  >(null);
  const [confirmPassword, setConfirmPassword] = useState<{
    email: string;
    code: string;
  }>({ email: "", code: "" });

  const sliders = [
    {
      id: "1",
      image:
        "https://media.architecturaldigest.com/photos/5af3192d99371749a05b24db/4:3/w_2844,h_2133,c_limit/Metropol%20Parasol.jpg",
      title:
        "La eficiencia en la administración de nuestras propiedades ha aumentado en un 200% desde que empezamos a utilizar la tecnología de Goho.",
      name: "Ulises Alegría",
      job_title: "Director Operativo - Altiplano S.A de C.V",
    },
    {
      id: "2",
      image:
        "https://media.gq.com/photos/5b6b20e3a3a1320b7280f029/16:9/w_2240,c_limit/The-Brutal-Wonders-Of-The-Architecture-World-GQ-Style-Fall-2018_07.jpg",
      title:
        "lore lorem lorem lorem lorem lorem lorem lorem nuestras propiedades ha aumentado en un 200% desde que empezamos a utilizar la tecnología de Goho.",
      name: "Roberto Legorrreta",
      job_title: "Director General - Wallavi",
    },
    {
      id: "3",
      image:
        "https://images.squarespace-cdn.com/content/v1/542032d5e4b0968055ce5118/1670370005026-VNCNG9J7CYURMT1SIF4I/image-asset.jpeg?format=2500w",
      title:
        "lore lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      name: "Josias Ortiz",
      job_title: "Developer - Wallavi",
    },
  ];

  const handleLogin = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    try {
      const user = await Auth.signIn(username, password);
      setShowScreen("profile");
      setUser(user);
    } catch (error: any) {
      console.log("error signing in", error.code);
      if (error.code === "UserNotConfirmedException") {
        setEmailUsername(username);
        setShowScreen("emailVerification");
      }
      if (error.code === "NotAuthorizedException") {
        setLoginError("Email o Contraseña incorrectos");
      }
      if (error.code === "UserNotFoundException") {
        setLoginError("Email o Contraseña incorrectos");
      }
    }
  };

  const handleSignUp = async ({ email, password }: SignUpInputProps) => {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email: email,
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log(user);
      setEmailUsername(email);
      setShowScreen("emailVerification");
    } catch (error: any) {
      console.log("error signing up:", error);
      if (error.code === "UsernameExistsException") {
        setSignUpError("Este Usuario ya está registrado");
      }
    }
  };

  const handleConfirmSignUp = async ({
    email,
    code,
  }: EmailVerificationInputProps) => {
    try {
      await Auth.confirmSignUp(email, code);
      setEmailVerificationError(null);
      window.location.reload();
    } catch (error: any) {
      console.log("error confirming sign up", error.code);
      if (error.code === "CodeMismatchException") {
        setEmailVerificationError("Código Invalido");
      }
      if (error.code === "NotAuthorizedException") {
        setEmailVerificationError("Usuario no autorizado");
      }
    }
  };

  const handleResendCode = () => {
    console.log("llamado handleResendCOde");
    try {
      Auth.resendSignUp(emailUsername);
    } catch (error) {
      console.log("error resend sign up", error);
    }
  };

  const handleConfirmPassword = async ({
    email,
    code,
  }: {
    email: string;
    code: string;
  }) => {
    // Send confirmation code to user's email
    // try {
    //   await Auth.verifyCurrentUserAttributeSubmit(email, code);
    //   setConfirmPassword({ email: email, code: code });
    //   setShowScreen("resetPassword");
    // } catch (err) {
    //   console.log("failed with error", err);
    //   if (err.code === "CodeMismatchException") {
    //     setResetPasswordVerificationError("Código Invalido");
    //   }
    // }

    setConfirmPassword({ email: email, code: code });
    setShowScreen("resetPassword");
  };

  const handleResetPassword = async ({
    newPassword,
  }: {
    newPassword: string;
  }) => {
    try {
      const data = await Auth.forgotPasswordSubmit(
        confirmPassword.email,
        confirmPassword.code,
        newPassword
      );
      console.log(data);
      setShowScreen("login");
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch (err) {
        console.error("Error getting current user:", err);
      }
    } catch (err: any) {
      console.log(err);
      if (err.code === "CodeMismatchException") {
        setResetPasswordError("Código Invalido");
        setResetPasswordVerificationError("Código Invalido");
      }
    }
  };

  // Collect confirmation code and new password
  const handlePasswordRecovery = async ({ email }: { email: string }) => {
    try {
      const data = await Auth.forgotPassword(email);
      setEmailUsername(email);
      setShowScreen("passwordVerification");
      console.log("handlePasswordRecovery", data);
    } catch (err: any) {
      console.log("handlePasswordRecoveryError", err.code);
      if (err.code === "UserNotFoundException") {
        setPasswordRecoveryError("Usuario no encontrado");
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch (err) {
        console.error("Error getting current user:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <Box display={"flex"}>
      {user ? (
        <Profile handleLogout={handleLogout} />
      ) : (
        <>
          <Box width={580} padding={2}>
            {showScreen === "login" ? (
              <Login
                title={"Bienvenido. Inicia sesión"}
                logo={
                  "https://goho.vercel.app/_next/static/media/logo.14efb6e2.svg"
                }
                handleRecoveryPassword={() =>
                  setShowScreen("password-recovery")
                }
                handleSignUp={() => setShowScreen("signup")}
                handleLogin={handleLogin}
                loginError={loginError}
                setLoginError={setLoginError}
              />
            ) : showScreen === "password-recovery" ? (
              <PasswordRecovery
                title={"Recuperación de contraseña"}
                logo={
                  "https://goho.vercel.app/_next/static/media/logo.14efb6e2.svg"
                }
                handleCancel={() => setShowScreen("login")}
                handleSignUp={() => setShowScreen("signup")}
                handlePasswordRecovery={handlePasswordRecovery}
                passwordRecoveryError={passwordRecoveryError}
                setPasswordRecoveryError={setPasswordRecoveryError}
                onClickBackButton={() => setShowScreen("login")}
              />
            ) : showScreen === "signup" ? (
              <SignUp
                title={"Regístrate"}
                logo={
                  "https://goho.vercel.app/_next/static/media/logo.14efb6e2.svg"
                }
                handleLogin={() => setShowScreen("login")}
                handleSignUp={handleSignUp}
                signUpError={signUpError}
                setSignUpError={setSignUpError}
                onClickBackButton={() => setShowScreen("login")}
              />
            ) : showScreen === "emailVerification" ? (
              <EmailVerification
                title={"Por favor, verifica tu correo electrónico"}
                logo={
                  "https://goho.vercel.app/_next/static/media/logo.14efb6e2.svg"
                }
                confirmEmail={emailUsername}
                handleConfirm={handleConfirmSignUp}
                handleResendCode={handleResendCode}
                emailVerificationError={emailVerificationError}
              />
            ) : showScreen === "passwordVerification" ? (
              <EmailVerification
                title={"Por favor, verifica tu correo electrónico"}
                logo={
                  "https://goho.vercel.app/_next/static/media/logo.14efb6e2.svg"
                }
                confirmEmail={emailUsername}
                handleConfirm={handleConfirmPassword}
                handleResendCode={handleResendCode}
                emailVerificationError={resetPasswordVerificationError}
              />
            ) : showScreen === "resetPassword" ? (
              <NewPassword
                title={"Por favor, verifica tu correo electrónico"}
                logo={
                  "https://goho.vercel.app/_next/static/media/logo.14efb6e2.svg"
                }
                handleResetPassword={handleResetPassword}
                resetPasswordError={resetPasswordError}
                setResetPasswordError={setResetPasswordError}
              />
            ) : null}
          </Box>
          <Box width="calc(100vw - 560px)">
            <SimpleCarousel sliders={sliders} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Authentication;
