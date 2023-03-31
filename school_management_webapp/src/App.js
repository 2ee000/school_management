import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Students_NoData from './pages/Students_NoData';

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
    },
    {
      path: "/studentsNoData",
      element: <Students_NoData />
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;

// 라우터 관리