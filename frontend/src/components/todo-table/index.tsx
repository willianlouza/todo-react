import Todo from "@/interfaces/todo";
import TodoItem from "../todo-item";

type Props = {
  todos: Todo[];
};
export default function TodoTable(props: Props) {
  const { todos } = props;

  return (
    <div className="rounded-md max-w-full">
      <table className="table-auto w-80 md:w-96">
        <tbody>
          {todos.map((todo, index) => (
            <TodoItem todo={todo} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
