import mongoose from "mongoose";

//  while referencig just make sure the name given while referencig is same whcih we had passed while creating in that particular file

const todoModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  { timeStamps: true }
);

export const Todo = mongoose.model("Todo", todoModel);
