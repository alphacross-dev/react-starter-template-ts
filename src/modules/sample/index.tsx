import React from 'react';

export const samplePagesConfig = [
  {
    auth: ['user'],
    routes: [
      {
        path: '/sample/page-1',
        component: React.lazy(() => import('./Pages/PageOne')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/sample/page-2',
        component: React.lazy(() => import('./Pages/PageTwo')),
      },
    ],
  },
];
