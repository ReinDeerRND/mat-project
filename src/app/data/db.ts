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
          {
            id: 21,
            title: 'Неопротерозой',
            children: [
              { id: 22, title: 'Тоний' },
              { id: 23, title: 'Криогений' },
              { id: 24, title: 'Эдиакарий' },
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
        children: [
          { id: 25, title: 'Кембрий' },
          { id: 26, title: 'Ордовик' },
          { id: 27, title: 'Силур' },
          { id: 28, title: 'Девон' },
          { id: 29, title: 'Карбон' },
          { id: 30, title: 'Пермь' },
        ],
      },
      {
        id: 17,
        title: 'Мезозой',
        children: [
          { id: 31, title: 'Триас' },
          { id: 32, title: 'Юра' },
          { id: 33, title: 'Мел' },
        ],
      },
      {
        id: 20,
        title: 'Кайнозой',
        children: [
          { id: 34, title: 'Палеоген' },
          { id: 35, title: 'Неоген' },
          { id: 36, title: 'Четвертичный (антропоген)' },
        ],
      },
    ],
  },
];
