import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Teachers_nodata from './pages/Teachers_nodata';
import Teachers_adddata from './pages/Teachers_adddata';
import Teachers_list from './pages/Teachers_list';
import Teachers_information from './pages/Teachers_information';
//import Teachers_addanother from './pages/Teachers_addanother';

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
      path: "/teachersNoData",
      element: <Teachers_nodata />,
    },
    {
      path: "/teachersAddData",
      element: <Teachers_adddata />,
    },
    {
      path: "/teachersList",
      element: <Teachers_list />,
    },
    {
      path: "/teachersInformation",
      element: <Teachers_information />,
    },
    /*{
      path: "/teachersAddAnother",
      element: <Teachers_addanother />,
    },*/
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;

// 라우터 관리