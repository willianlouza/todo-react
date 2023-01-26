import AddTodoForm from "@/components/add-todo";
import MainLayout from "@/components/layout/main";
import TodoTable from "@/components/todo-table";
import { TodoContext } from "@/context/todo";
import { useContext } from "react";

export default function Home() {
  const { todos } = useContext(TodoContext);

  return (
    <MainLayout>
      <AddTodoForm />
      <TodoTable todos={todos || []} />
    </MainLayout>
  );
}

