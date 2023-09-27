import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("El Email es requerido"),
});

export default validationSchema;
