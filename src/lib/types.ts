import { z } from "zod";
import { registerSchema } from "@/schemas/authSchemas";
export type RegisterFormDataTypes = z.infer<typeof registerSchema>;
