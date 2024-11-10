import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const auth = new Hono().post(
  "/login",
  zValidator("json", loginSchema), // Use zod validation
  async (c) => {
    const { email, password } = c.req.valid("json");
    console.log("Login request received:", { email, password });

    // Here, you would authenticate the user (e.g., check email/password in database)

    return c.json({ message: "Login successful", email }); // Response to frontend
  }
);

export default auth;
