import { z } from "zod";
//اعتبارسنجی
export const CheckoutSchema = z.object({
  firstName: z.string().min(3, "First name must be at least 3 characters"),
  lastName: z.string().min(3, "Last name must be at least 3 characters"),
  email: z.email("invalid email"),
  phone: z.string().min(11, "First name must be at least 3 characters"),
  address: z.string().min(5, "Address is required"),
});

export type CheckoutFormData = z.infer<typeof CheckoutSchema>;
