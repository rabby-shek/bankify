import { z } from "zod";
export const registerSchema = z.object({
  first_name: z.string().min(3, "First name must be at least 3 character."),
  last_name: z.string().min(1, "First name must be at least 3 character."),
  email: z.string().email("Invalid email"),
  address: z.string().min(1, "Address is required."),
  state: z.string().min(1, "State is required."),
  postal_code: z.string(),
  date_of_birth: z.string().refine(
    (val) => {
      const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
      if (!dateRegex.test(val)) return false;

      // Parse day, month, year
      const [day, month, year] = val.split("-").map(Number);

      // Check if valid date components
      const date = new Date(year, month - 1, day);
      if (date.getFullYear() !== year) return false;
      if (date.getMonth() !== month - 1) return false;
      if (date.getDate() !== day) return false;

      return true;
    },
    {
      message: "Invalid date of birth.",
    }
  ),
  ssn: z.string(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
