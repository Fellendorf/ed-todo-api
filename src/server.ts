import express, { NextFunction, Response, Request } from "express";
import api from "./api/api";

const app = express();
const PORT = process.env.PORT || 433;

app.use(express.json());

app.use("/api/v1/todo", api);

// Error Handler:
app.use(
  "/",
  (err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.log(err.stack);
    res.status(500).send({
      error: err,
    });
  }
);

app.listen(PORT, () => console.log(`Server is running on the ${PORT} port!!!`));
