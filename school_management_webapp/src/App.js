import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import Login from './pages/Login';

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
    },
    {
      path: "/adminLogin",
      element: <AdminLogin />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;

// 라우터 관리