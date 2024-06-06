
import Home from './pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Tracking from './pages/Tracking';
import Error from './pages/Error';

function App() {
 
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/tracking",
          element: <Tracking/>,
        },
        {
          path: "/error",
          element: <Error/>,
        }
       
      ],
    },
   
  ]);

  return    <RouterProvider router={router} />
}

export default App
