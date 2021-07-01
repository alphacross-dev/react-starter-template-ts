import React from 'react';

export const todoConfig = [
  {
    auth: ['user'],
    routes: [
      {
        path: '/schedule/todo',
        component: React.lazy(() => import('./Pages/Todo')),
      },
    ],
  },
];
