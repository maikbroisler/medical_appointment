import expres from "express";
import { userRouter } from "./routes/user.routes";
const app = expres();
const port = 3333;

app.use(expres.json());
app.use(userRouter);

app.listen(port, () => console.log(`Server is running on port: ${port} 🚀🚀`));
