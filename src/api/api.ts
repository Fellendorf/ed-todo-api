import { Router } from "express";

const router = Router();

router.all("/", (req, res, next) => {
  console.log("Authentication check");
  next();
});

router.get("/", (req, res, next) => {
  res.send({
    test: "test",
  });
});

export default router;
