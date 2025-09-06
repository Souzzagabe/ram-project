import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Main = lazy(() => import('../layout/main/Main'));
const Login = lazy(() => import('../layout/login/Login'));  
const Header = lazy(() => import('../layout/header/HeaderFixed'));  

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/Main',
    element: <Main />,
  },
  {
    path: '/Header',
    element: <Header />,
  },
  
]);


export default router;
