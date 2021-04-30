import { atom } from 'recoil';

export const nameState = atom({
  key: 'nameState',
  default: '',
});

export const todoState = atom({
  key: 'todo',
  default: []
});