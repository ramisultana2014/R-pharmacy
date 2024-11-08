import { StatusCodes } from "http-status-codes";

// instead of return res.status(400).json, will create error catch by express-async-errors in server.js and send it down to app.use((err, req, res, next)

export class BadRequestError extends Error {
  // 400 BAD_REQUEST Bad Request
  constructor(message) {
    super(message);
    this.StatusCodes = StatusCodes.BAD_REQUEST;
  }
}
// instead of return res.status(401).json, will create error catch by express-async-errors in server.js and send it down to app.use((err, req, res, next)
export class UnauthenticatedError extends Error {
  // 401 UNAUTHORIZED Unauthorized
  constructor(message) {
    super(message);
    this.StatusCodes = StatusCodes.UNAUTHORIZED;
  }
}
