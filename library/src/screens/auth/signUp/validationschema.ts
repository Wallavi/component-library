import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("El Email es requerido"),
  password: Yup.string()
    .min(8, "La contraseña debe ser de al menos 8 caracteres")
    .required("La contraseña es requerida"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Las contraseñas deben coincidir")
    .min(8, "La contraseña debe ser de al menos 8 caracteres")
    .required("La contraseña es requerida"),
  agree_to_terms: Yup.boolean().oneOf(
    [true],
    "Debes Aceptar los términos y condiciones"
  ),
});

export default validationSchema;
