import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Login from '@/views/login/index';

const rootRouter = [
  {
    path: '/',
    element: <Login />,
  },
];

const Router = () => {
  const router = useRoutes(rootRouter);
  return router;
};

export default Router;
