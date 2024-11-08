import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      select: false,
    },
    passwordConfirm: String,
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true, //that will add tow( fields created at update at)
    toJSON: { virtuals: true }, // to make virual below works
    toObject: { virtuals: true },
    // eslint-disable-next-line prettier/prettier
    // eslint-disable-next-line prettier/prettier
  }
);
UserSchema.virtual("userOrders", {
  ref: "Order", //order is the Order collection
  localField: "_id",
  foreignField: "userId", //the name of field in Order // each order have the id of the user who create it
  //so we go to Order and gather all the Orders that have the same userId, localField let us compare the localField _id in user with the id stored in Order as userId
  //then go to getUserProfile or getAllUsersByAdmin
});
UserSchema.pre("save", async function (next) {
  const user = this;
  //this point to current document = user , pre"save"" run when use user.save() in routers  patch or post, it work befor saving document to database and befor res.send
  user.passwordConfirm = undefined;

  next();
});
export default mongoose.model("User", UserSchema);
