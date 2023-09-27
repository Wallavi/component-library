import * as Yup from "yup";

export interface VerificationEmail {
  name: "number1" | "number2" | "number3" | "number4" | "number5" | "number6";
}

export const verificationEmailInputs: VerificationEmail[] = [
  { name: "number1" },
  { name: "number2" },
  { name: "number3" },
  { name: "number4" },
  { name: "number5" },
  { name: "number6" },
];

const schemaObject: Record<string, Yup.StringSchema<string>> = {};

verificationEmailInputs.forEach((input) => {
  schemaObject[input.name] = Yup.string().max(1).required();
});

const validationSchema = Yup.object().shape(schemaObject);

export default validationSchema;
