import { Auth } from "aws-amplify";

type SignUpParameters = {
  username: string;
  password: string;
};

export async function signUpHelper({ username, password }: SignUpParameters) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email: username,
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
    console.log(user);
  } catch (error) {
    console.log("error signing up:", error);
  }
}
