import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Login from '@/views/login/index';
import Layout from '@/layouts';
import { RouteObject } from 'react-router-dom';
import Dashboard from '@/views/dashboard';

const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Layout></Layout>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
];

const Router = () => {
  const router = useRoutes(rootRouter);
  return router;
};

export default Router;
