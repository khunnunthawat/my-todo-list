import { atom } from 'recoil';
import { TodoProps } from '@/components/types/index';

export const nameState = atom({
  key: 'nameState',
  default: '',
});

export const todoState = atom<TodoProps[]>({
  key: 'todo',
  default: []
});

export const editState = atom({
  key: 'edit',
  default: false,
});