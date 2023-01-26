import api from "@/api/api";
import { TodoContext } from "@/context/todo";
import { useContext } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  description: string;
};
export default function AddTodoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const { update } = useContext(TodoContext);
  const onSubmit = async (data: FormValues) => {
    const res = await api.post("/todo", {
      description: data.description
    });
    reset();
    await update();
  };
  return (
    <div>
      <form
        className="w-80 lg:w-96 flex flex-col p-2 gap-2 bg-gray-200 dark:bg-neutral-800"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-semibold text-gray-600 dark:text-gray-300">Adicionar Tarefa</h1>
        <input
          {...register("description", { required: "A tarefa precisa de descrição" })}
          name="description"
          id="description"
          type="text"
          placeholder='Ex: "Levar o cachorro no pet shop"'
          className="dark:bg-neutral-600 py-2 px-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        {errors["description"] && <p className="text-red-500">{errors["description"].message}</p>}

        <button className="shadow-md bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-2" type="submit">
          Adicionar
        </button>
      </form>
    </div>
  );
}
