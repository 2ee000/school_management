import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

import AdminSignup1 from './pages/AdminSignup_page1';

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
  },
    {
      path: "/adminSignupPage1",
      element: <AdminSignup1 />,
    },
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;

// 라우터 관리