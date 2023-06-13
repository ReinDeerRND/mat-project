import { GeologyAge } from '../models/interfaces';

export const GeologyTree: GeologyAge[] = [
  {
    id: 14,
    title: 'Докембрий',
    children: [
      {
        id: 18,
        title: 'Катархей',
      },
      {
        id: 0,
        title: 'Архей',
        children: [
          { id: 1, title: 'Эорхей' },
          { id: 2, title: 'Палеоархей' },
          { id: 3, title: 'Мезоархей' },
          { id: 4, title: 'Неоархей' },
        ],
      },
      {
        id: 5,
        title: 'Протерозой',
        children: [
          {
            id: 10,
            title: 'Палеопротерозой',
            children: [
              { id: 6, title: 'Сидерий' },
              { id: 7, title: 'Рясий' },
              { id: 8, title: 'Орозирий' },
              { id: 9, title: 'Статерий' },
            ],
          },
          {
            id: 11,
            title: 'Мезопротерозой',
            children: [
              { id: 12, title: 'Калимий' },
              { id: 13, title: 'Экстазий' },
              { id: 19, title: 'Стений' },
            ],
          },
          
        ],
      },
    ],
  },
  {
    id: 15,
    title: 'Фанерозой',
    children: [
      {
        id: 16,
        title: 'Палеозой',
      },
      {
        id: 17,
        title: 'Мезозой',
      },
      {
        id: 20,
        title: 'Кайнозой',
      },
    ],
  },
];
