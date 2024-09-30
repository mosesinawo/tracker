import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Tracking from "./pages/Tracking";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import Success from "./pages/Success";

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
          element: (
            <ProtectedRoute>
              <Tracking />
            </ProtectedRoute>
          ),
        },
        {
          path: "/error",
          element: <Error />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
