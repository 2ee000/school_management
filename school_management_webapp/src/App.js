import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Students_NoData from './pages/Students_NoData';
import Students_AddData from './pages/Students_AddData';
import Students_List from './pages/Students_List';

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
    },
    {
      path: "/studentsNoData",
      element: <Students_NoData />
    },
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