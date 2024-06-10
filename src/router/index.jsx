import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "../App";
import Products from "../pages/products"
import Home from "../pages/home";
import Single from "../pages/single";
import Posts from "../pages/posts";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Products />} />
          <Route path=":id" element={<Single />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default index
