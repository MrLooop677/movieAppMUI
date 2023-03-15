import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import MovieInfo from "../pages/movie-info/MovieInfo";

export const routes = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <MovieInfo />,
        path: "movie",
      },
      {
        element: <Home />,
        path: "",
      },
      {
        element: <MovieInfo />,
        path: "movie/:id",
      },
    ],
  },
]);
