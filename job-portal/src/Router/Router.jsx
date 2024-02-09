import {
    createBrowserRouter,
  } from "react-router-dom";
  import App from '../App'
  import Home from "../Pages/Home"
import About from "../Pages/About";
import CreateJobs from "../Pages/CreateJobs";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJobs from "../Pages/UpdateJobs";
import Login from "../components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post-job", element: <CreateJobs /> },
      { path: "/my-jobs", element: <MyJobs /> },
      { path: "/salary", element: <SalaryPage /> },
      {
        path: "/edit-job/:id",
        element: <UpdateJobs />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-jobs/${params.id}`),
      }
    ],
  },
  { path: "/Login", element: <Login /> },
]);

  export default router;