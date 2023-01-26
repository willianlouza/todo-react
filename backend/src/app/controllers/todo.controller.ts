import { Request, Response } from "express";
import Todo from "../models/todo";

export async function createTODO(req: Request<{}, {}, { description: string }, {}>, res: Response) {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ message: "Dê uma descrição para a tarefa." });
  }
  try {
    const todo = new Todo({
      description,
    });

    await todo.save();
    return res.status(201).json({ todo });
  } catch (err) {
    return res.status(500).json({ message: "Impossível criar a tarefa." });
  }
}
export async function getAllTODOs(req: Request, res: Response) {
  try {
    const todos = await Todo.find({});
    return res.status(200).json(todos);
  } catch (err) {
    return res.status(500).json({ message: "Impossível localizar as tarefas." });
  }
}
export async function getTODO(req: Request<{}, {}, {}, { id: string }>, res: Response) {
  const id = req.query.id;
  if (!id) return res.status(400).json({ message: "ID é necessário." });

  try {
    const todo = await Todo.findById(id);
    if (todo) return res.status(200).json(todo);
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: "Impossível localizar a tarefa." });
  }
}
export async function updateTODO(
  req: Request<{}, {}, { description: string; checked: boolean }, { id: string }>,
  res: Response
) {
  const id = req.query.id;
  if (!id) return res.status(400).json({ message: "ID é necessário." });

  const { description, checked } = req.body;
  if (!description || !checked) {
    return res.status(400).json({ message: "Informe a descrição e o estado da tarefa." });
  }

  try {
    const update = await Todo.findOneAndUpdate({ _id: id }, { description, checked });
    return res.status(200).json({ message: "Tarefa atualizada" });
  } catch (err) {
    return res.status(500).json({ message: "Impossível atualizar a tarefa" });
  }
}
export async function deleteTODO(req: Request<{}, {}, {}, { id: string }>, res: Response) {
  const id = req.query.id;
  if (!id) return res.status(400).json({ message: "ID é necessário." });

  try {
    const del = await Todo.findOneAndDelete({ _id: id });
    return res.status(200).json({ message: "Tarefa removida", del });
  } catch (err) {
    return res.status(500).json({ message: "Impossível remover a tarefa" });
  }
}
