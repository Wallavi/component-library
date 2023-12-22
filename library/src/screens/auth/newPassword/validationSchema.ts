import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "La contraseña debe ser de al menos 8 caracteres")
    .required("La contraseña es requerida"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Las contraseñas deben coincidir")
    .min(8, "La contraseña debe ser de al menos 8 caracteres")
    .required("La contraseña es requerida"),
});

export default validationSchema;
