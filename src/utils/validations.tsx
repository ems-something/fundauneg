import { z } from "zod";

const phoneRegex = new RegExp(
  /^(?:(?:00|\+)58|0)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
);

export const validationSchema = z.object({
  name: z.string({
    required_error: "Nombre es requerido.",
  }),
  lastname: z.string({
    required_error: "Apellido es requerido.",
  }),
  email: z
    .string({
      required_error: "Correo es requerido.",
    })
    .email(),
  phone: z
    .string({
      required_error: "Teléfono es requerido.",
    })
    .regex(phoneRegex, "¡Número invalido!"),
  message: z.string({
    required_error: "Mensaje es requerido.",
  }),
});
