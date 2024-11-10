import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginSchema } from "../components/schema";

const app = new Hono().post("/login/:userId", zValidator("json", loginSchema), (c) => {
  return c.json({ success: "123" });
});

export default app;
