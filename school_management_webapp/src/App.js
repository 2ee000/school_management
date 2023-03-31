import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
//import AdminSignupInformation from './pages/AdminSignup_Information';
//import AdminSignupPassword from './pages/AdminSignup_Password';
//import AdminSignupSuccess from './pages/AdminSignup_Success';
import AdminLogin from './pages/AdminLogin';
import Login from './pages/Login';
//import Dashboard from './pages/Dashboard';
//import TeacherNoData from './pages/Teacher_nodata';

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
    },
    /*{
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
    },*/
    {
      path: "/adminLogin",
      element: <AdminLogin />,
    },
    {
      path: "/login",
      element: <Login />,
    },/*
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/teachernodata",
      element: <TeacherNoData />,
    },*/
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;

// 라우터 관리