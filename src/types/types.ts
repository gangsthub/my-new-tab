export type ProtoToDo = {
  text: string;
  completed: boolean;
  editing: boolean;
};

export type ToDo = ProtoToDo & {
  id: string;
};

export type ToDoList = ToDo[];
