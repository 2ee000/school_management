import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Teacher_nodata from './pages/Teacher_nodata';
import Teacher_adddata from './pages/Teacher_adddata';
import Teacher_list from './pages/Teacher_list';
import Teacher_information from './pages/Teacher_information';
import Teacher_addanother from './pages/Teacher_addanother';

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/teacherNoData",
      element: <Teacher_nodata />,
    },
    {
      path: "/teacherAddData",
      element: <Teacher_adddata />,
    },
    {
      path: "/teacherList",
      element: <Teacher_list />,
    },
    {
      path: "/teacherInformation",
      element: <Teacher_information />,
    },
    {
      path: "/teacherAddAnother",
      element: <Teacher_addanother />,
    },
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;

// 라우터 관리