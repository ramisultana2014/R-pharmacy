import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";
//return res.status(401).json({ msg: `.... ` });
//instead above we create error with customErrors.js
//   throw new UnauthenticatedError(`....`);which create error with statuscode 401 and message we provided then that error catch by express-async-errors in server.js then to

//app.use((err, req, res, next) => {

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";
  const hashed = await hashPassword(req.body.password);

  req.body.password = hashed;

  //req.body.passwordConfirm = undefined;
  await User.create(req.body);
  //   statusCodes.CREATED === 201
  res.status(StatusCodes.CREATED).json({
    msg: "user created ",
  });
};
export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email }).select(
    "+password"
  );
  //401 not authorized
  if (!user) throw new UnauthenticatedError("invalid credential");
  const isPasswordCorrect = await comparePassword(
    req.body.password,
    user.password
  );
  //401 not authorized
  if (!isPasswordCorrect) throw new UnauthenticatedError("invalid credentials");
  const token = await jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
  // cookie and token prefer have the same expire time
  res.cookie("rPharmacy", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    secure: process.env.NODE_ENV === "production",
  });
  user.password = undefined;

  res.status(StatusCodes.OK).json({
    msg: `${user.name} logged in`,
    user,
  });
};
export const logout = (req, res) => {
  res.cookie("rPharmacy", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: " logged out!" });
};
export const protectedRoutesInClientSide = async (req, res) => {
  const rPharmacyCookie = req.cookies.rPharmacy;
  //console.log("rPharmacyCookie", rPharmacyCookie);
  if (!rPharmacyCookie)
    throw new UnauthenticatedError("You don't have permission");

  const decoded = jwt.verify(rPharmacyCookie, process.env.JWT_SECRET);
  // { id: '66b238fa3ce7d0dd2caeef57', iat: 1723631928 }
  const user = await User.findById(decoded.id);
  //401 not authorized
  if (!user) throw new UnauthenticatedError("invalid credential");
  res.status(200).json({ msg: "success" });
};

export const protectRoutesInServer = async (req, res, next) => {
  const rPharmacyCookie = req.cookies.rPharmacy;
  //console.log(rPharmacyCookie);
  if (!rPharmacyCookie)
    //401 not authorized
    throw new UnauthenticatedError("You don't have permission");
  try {
    const testUserID = "671a1978e744a556ead85a43";
    const decoded = jwt.verify(rPharmacyCookie, process.env.JWT_SECRET);
    //console.log(decoded);
    // const user = await User.findById(decoded.id);
    // console.log(user);
    // if (!user) throw new UnauthenticatedError("invalid credential");
    req.user = { testUserID, role: decoded.role, userID: decoded.id };
    next();
  } catch (error) {
    //401 not authorized
    throw new UnauthenticatedError("authentication failed");
  }
};
