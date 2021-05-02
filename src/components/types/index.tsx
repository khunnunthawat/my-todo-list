export interface TodoProps {
  id: number;
  status: boolean;
  value: string;
}

export interface EditProps {
  todo: TodoProps;
  onEdit: (newId: number, newValue: string) => void;
}
