import React, { useState, useEffect } from "react";
import { Amplify, Auth } from "aws-amplify";
import { amplifyConfiguration } from "./aws-exports";

import Login from "./login";
import SimpleCarousel from "./carousel";
import Profile from "./profile";
import PasswordRecovery from "./passwordRecovery";
import SignUp, { SignUpInputProps } from "./signUp";
import { signUpHelper } from "./signUp/_utils";
import EmailVerification, {
  EmailVerificationInputProps,
} from "./emailVerification";

import Box from "@mui/material/Box";

Amplify.configure(amplifyConfiguration);

const Authentication = () => {
  const [showScreen, setShowScreen] = useState("login");
  const [user, setUser] = useState(null);
  const [emailUsername, setEmailUsername] = useState("");
  const [emailVerificationError, setEmailVerificationError] = useState<
    null | string
  >(null);

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
    } catch (error) {
      console.log("error signing in", error.code);
      if (error.code === "UserNotConfirmedException") {
        setEmailUsername(username);
        setShowScreen("emailVerification");
      }
    }
  };

  const handleSignUp = ({ email, password }: SignUpInputProps) => {
    signUpHelper({ username: email, password: password })
      .then(() => {
        console.log("Sign-up successful");
        setEmailUsername(email);
        setShowScreen("emailVerification");
      })
      .catch((error) => {
        console.error("Error signing up:", error.code);
      });
  };

  const handleConfirmSignUp = async ({
    email,
    code,
  }: EmailVerificationInputProps) => {
    try {
      await Auth.confirmSignUp(email, code);
      try {
        setEmailVerificationError(null);
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch (err) {
        console.error("Error getting current user:", err);
      }
    } catch (error) {
      console.log("error confirming sign up", error.code);
      if (error.code === "CodeMismatchException") {
        setEmailVerificationError("Código Invalido");
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

    fetchData(); // Call the async function
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
              />
            ) : showScreen === "password-recovery" ? (
              <PasswordRecovery
                title={"Recuperación de contraseña"}
                logo={
                  "https://goho.vercel.app/_next/static/media/logo.14efb6e2.svg"
                }
                handleCancel={() => setShowScreen("login")}
                handleSignUp={() => setShowScreen("signup")}
              />
            ) : showScreen === "signup" ? (
              <SignUp
                title={"Regístrate"}
                logo={
                  "https://goho.vercel.app/_next/static/media/logo.14efb6e2.svg"
                }
                handleLogin={() => setShowScreen("login")}
                handleSignUp={handleSignUp}
              />
            ) : showScreen === "emailVerification" ? (
              <EmailVerification
                title={"Por favor, verifica tu correo electrónico"}
                logo={
                  "https://goho.vercel.app/_next/static/media/logo.14efb6e2.svg"
                }
                confirmEmail={emailUsername}
                handleConfirmSignUp={handleConfirmSignUp}
                handleResendCode={handleResendCode}
                emailVerificationError={emailVerificationError}
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
