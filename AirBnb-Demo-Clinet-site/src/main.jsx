import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:""
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(

    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>

);
