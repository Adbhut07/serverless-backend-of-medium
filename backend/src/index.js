import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
// const app = new Hono()
const app = new Hono();
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);
app.get("/", (c) => {
    // c stands for context
    return c.text("Hello hi Hono!");
});
export default app;
