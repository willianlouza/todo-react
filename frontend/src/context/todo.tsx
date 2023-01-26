import api from "@/api/api";
import Todo from "@/interfaces/todo";
import React, { createContext, useEffect, useState } from "react";

type Data = {
  todos: Todo[] | null;
  update: () => Promise<void>;
};
export const TodoContext = createContext({} as Data);

export default function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[] | null>(null);

  const update = async () => {
    const res = await api.get("/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    api.get("/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);

  return <TodoContext.Provider value={{ todos, update }}>{children}</TodoContext.Provider>;
}
