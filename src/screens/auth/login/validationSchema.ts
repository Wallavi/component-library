import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("El Email es requerido"),
  password: Yup.string()
    .min(8, "La contraseña debe ser de al menos 8 caracteres")
    .required("La contraseña es requerida"),
});

export default validationSchema;
