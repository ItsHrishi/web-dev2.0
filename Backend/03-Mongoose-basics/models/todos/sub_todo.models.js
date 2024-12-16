import mongoose from "mongoose";

const subTodoModel = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    completed: {
      type: true,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model("SubTodo", subTodoModel);
