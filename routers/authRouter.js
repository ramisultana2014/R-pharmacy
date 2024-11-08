import { Router } from "express";
const router = Router();
import {
  login,
  logout,
  register,
  protectedRoutesInClientSide,
} from "../controller/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";
router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.post("/logout", logout);
router.get(
  "/validate-for-protectedRoutesInClientSide",
  protectedRoutesInClientSide
);
export default router;
// the req will first arrive to validateRegisterInput or validateLoginInput they will look for the body and the actulal error will come from withValidationErrors with the message we provide coming from validateRegisterInput or validateLoginInput . that error   catch by express-async-errors in server.js and send it down to app.use((err, req, res, next)
