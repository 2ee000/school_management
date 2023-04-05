import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import AdminSignup from './pages/AdminSignup';
//import AdminSignupInformation from './pages/AdminSignup_Information';
//import AdminSignupPassword from './pages/AdminSignup_Password';
//import AdminSignupSuccess from './pages/AdminSignup_Success';

import AdminLogin from './pages/AdminLogin';
import Login from './pages/Login';

import Dashboard from './pages/Dashboard';
//import Teachers_NoData from './pages/Teachers_NoData';
import Teachers_AddData from './pages/Teachers_AddData';
import Teachers_List from './pages/Teachers_List';
import Teachers_Information from './pages/Teachers_Information';
//import Teachers_addanother from './pages/Teachers_addanother';

//import Students_NoData from './pages/Students_NoData';
import Students_AddData from './pages/Students_AddData';
import Students_List from './pages/Students_List';

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
    },

    {
      path: "/adminSignup",
      element: <AdminSignup />,
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
    },
    
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    /*{
      path: "/teachersNoData",
      element: <Teachers_NoData />,
    },*/
    {
      path: "/teachersAddData",
      element: <Teachers_AddData />,
    },
    {
      path: "/teachersList",
      element: <Teachers_List />,
    },
    {
      path: "/teachersInformation",
      element: <Teachers_Information />,
    },
    /*{
      path: "/teachersAddAnother",
      element: <Teachers_addanother />,
    },*/
    
    /*{
      path: "/studentsNoData",
      element: <Students_NoData />
    },*/
    {
      path: "/studentsAddData",
      element: <Students_AddData />
    },
    {
      path: "/studentsList",
      element: <Students_List />
    },
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;

// 라우터 관리