import mongoose, { Schema, model } from "mongoose";
import ITodo from "../interfaces/ITodo";

const TodoSchema = new Schema<ITodo>({
  description: { type: String, required: true },
  checked: { type: Boolean, required: false, default: false },
});

const Todo = model<ITodo>("Todo", TodoSchema);

export default Todo;
