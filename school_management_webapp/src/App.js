import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import AdminSignupInformation from './pages/AdminSignup_Information';
import AdminSignupPassword from './pages/AdminSignup_Password';
import AdminSignupSuccess from './pages/AdminSignup_Success';

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
    },
    {
      path: "/adminSignupInformation",
      element: <AdminSignupInformation />,
    },
    {
      path: "/adminSignupPassword",
      element: <AdminSignupPassword />,
    },
    {
      path: "/adminSignupSuccess",
      element: <AdminSignupSuccess />,
    },
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;

// 라우터 관리