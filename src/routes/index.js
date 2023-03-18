import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import MovieInfo from "../components/movie-info/MovieInfo";
import FavPage from "../pages/FavPage";

export const routes = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "",
      },
      {
        element: <MovieInfo />,
        path: "movie/:id",
      },
      {
        element: <FavPage />,
        path: "favpage",
      }
    ],
  },
]);
