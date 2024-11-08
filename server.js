import "express-async-errors";
//express-async-errors handle the catch in try catch in controller and send it to app.use((err, req, res, next) below
import { StatusCodes } from "http-status-codes"; //A library for HTTP status codes
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
// routers
import authRouter from "./routers/authRouter.js";
import productRouter from "./routers/productRouter.js";
// security

//step 1 to read public folder
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
// middleware

//step 2:  because we are using es6 we dont have access to __dirname so we do it like this
const __dirname = dirname(fileURLToPath(import.meta.url));
//app.use(express.static(path.resolve(__dirname, "./public")));

//morgan
if (process.env.NODE_ENV === "development") {
  // just console our req url like POST / 200 67.568 ms - 40
  app.use(morgan("dev"));
}
app.use(cookieParser()); // read the req.cookies
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "blob:", "https://www.binsina.ae"], // Allow images from binsina.ae
    },
  })
);

//app.use(express.json()); //TODO: let us use read date from body into the req  Object (req.body) ( parse data from body)
//TODO:limiter is middleware fun , allow 100 request per 1 hour
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP,please try again in an hour",
});
app.use("/api", limiter);

app.use(express.json({ limit: "10kb" })); //TODO: let us use read date from body into the req  Object (req.body) ( parse data from body)
//limit: '10kb' not accept body larger than 10 kb
//TODO:cookieParser(parse data from cookie /req.cookies.jwt)/)
//app.use(express.json()); //let us read req.body

app.use(express.urlencoded({ extended: true, limit: "10kb" }));
//express.urlencoded let us read date sent from form in html page when we dont use api and dont use Js to read data from form
//TODO:Data sanitization against NoSQL query injection, mean attack with just knowing password and write "email":{"$gt":""},
app.use(mongoSanitize()); //it remove all the $
//TODO:Data sanitization against xxs(cross site)

app.use(express.static(path.join(__dirname, "client", "dist")));
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/product", productRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist", "index.html"));
});
app.use("*", (req, res) => {
  //catch error for unknown routes
  res.status(404).json({ msg: "not route was found" });
});
app.use((err, req, res, next) => {
  //catch error coming from our controller send by express-async-errors , its check if the error created by functions inside customErrors.js or provide custom message
  //console.log(err); // the error we created have message and statuscode
  const statusCode = err.StatusCodes || StatusCodes.INTERNAL_SERVER_ERROR; //mean 500
  const msg = err.message || "something went wrong, try again later";
  res.status(statusCode).json({ msg });
});
const port = process.env.PORT || 5100;
try {
  await mongoose.connect(process.env.DATABASE);
  app.listen(port, () => {
    console.log(`server running on port ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
