import { z } from 'zod';

export const registerSchema = z.object({
  first_name: z.string().min(3, "First name must be at least 3 character."),
  last_name: z.string(),
  email: z.string().email("Invalid email"),
  address: z.string(),
  state: z.string(),
  postal_code: z.string(),
  date_of_birth: z.string(),
  ssn: z.string(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});