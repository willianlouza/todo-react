import api from "@/api/api";
import { TodoContext } from "@/context/todo";
import Todo from "@/interfaces/todo";
import { useContext, useState } from "react";
import { IoMdTrash } from "react-icons/io";

type Props = {
  todo: Todo;
};
export default function TodoItem(props: Props) {
  const { description, checked, _id } = props.todo;
  const { update } = useContext(TodoContext);

  const checkTodo = async () => {
    api.put("/todo", { checked: !checked }, { params: { id: _id } }).then(async () => {
      await update();
    });
  };
  const deleteTodo = async () => {
    api
      .delete("/todo", {
        params: {
          id: _id,
        },
      })
      .then(async () => {
        await update();
      });
  };
  return (
    <tr className="bg-gray-100 dark:bg-neutral-800 flex gap-4">
      <td className="p-2 flex items-center shadow-md h-16 flex-1">
        <button
          onClick={() => checkTodo()}
          className={`w-4 h-4 rounded-full ${checked ? "bg-green-500" : "bg-white shadow-inner shadow-gray-500"}`}
        ></button>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap max-w-[13rem]">
          <h1 className="p-4">{description}</h1>
        </span>
      </td>
      <td className="text-center shadow-md h-16 w-16">
        <button className="w-full p-5 text-red-500 hover:text-red-600" onClick={() => deleteTodo()}>
          <IoMdTrash className="w-full h-full" />
        </button>
      </td>
    </tr>
  );
}
