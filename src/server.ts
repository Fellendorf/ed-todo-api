import express from "express";
import api from "./api/api";

const app = express();
const PORT = process.env.PORT || 433;

app.use(express.json());

app.use("/api/v1", api);

app.listen(PORT, () => console.log(`Server is running on the ${PORT} port!!!`));
