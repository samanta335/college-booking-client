import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import CardDetail from "../Pages/Home/CollegeCard/CardDetail";
import AddBooking from "../Pages/AddBooking/AddBooking";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Admission from "../Pages/Admission/Admission";
import AllCollege from "../Pages/AllCollege/AllCollege";
import Error from "../Pages/Home/Error/Error";
import DetailCollege from "../Pages/AllCollege/DetailCollege";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "collegeCard/:id",
        element: (
          <PrivateRoute>
            <CardDetail></CardDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/collegeCard/${params.id}`
          ),
      },
      {
        path: "/college",
        element: <AllCollege></AllCollege>,
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <DetailCollege></DetailCollege>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/allCollege/${params.id}`
          ),
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/booking",
        element: <AddBooking></AddBooking>,
      },
      {
        path: "/myCollege",
        element: (
          <PrivateRoute>
            <MyCollege></MyCollege>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/admission/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
