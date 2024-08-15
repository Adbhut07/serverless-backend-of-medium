import { Hono } from "hono";
import { sign, verify } from 'hono/jwt'
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";

// const app = new Hono()

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string; //we are initialising Bindings to get right type of the env variables
    JWT_SECRET: string,
  };
}>();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);


app.get("/", (c) => {
  // c stands for context
  return c.text("Hello Hono!");
});



export default app;
