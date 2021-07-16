export interface TodoProps {
  id: number;
  completed?: boolean;
  value: string;
}
export interface EditProps {
  todo: TodoProps;
  onEdit: (newId: number, newValue: string) => void;
}

export interface AddTodoProps {
  handleClickAdd: (value: string) => void;
}

export interface SearchTodoProps {
  handleClickSearch: (value: string) => void;
}
