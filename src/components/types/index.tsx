export interface TodoProps {
  id: number;
  completed?: boolean;
  value: string;
}
export interface EditProps {
  todo: TodoProps;
  onEdit: (newId: number, newValue: string) => void;
}