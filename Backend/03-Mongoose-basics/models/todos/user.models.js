// basic to import, create and export the model using the mongoose:

//  every model is defined and exprted like this only
// import mongoose from "mongoose";

// const userModel = new mongoose.Schema({});

// //  the model is the function which take name and the schema as the parameters,
// //  what should be the name of the model and how should it be defined
// export const User = mongoose.model("User", userModel);

// same thing
import mongoose from "mongoose";

// one way to do this
// const userModel = new mongoose.Schema({
//   userName: String,
//   email: String,
//   isActive: Boolean,
// });

// another way to do this
//  here we are passing the time stamps which include the created at and upated at inside the model
const userModel = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  { timespamps: true }
);

export const User = mongoose.model("User", userModel);
