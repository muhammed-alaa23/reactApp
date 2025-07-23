import { createBrowserRouter, Navigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import About from "./about/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Portfolio from "./Portfolio/Portfolio";
import Layout from "./mainlayout/Layout";
import Notfound from "./notFound/Notfound";


export default function App() {

  const router = createBrowserRouter([
    {path:"" , element: <Layout/>, children:[
      {index:true,element:<Home/>},
      {path:"home" ,element:<Navigate to="/" />},
      {path:"about" ,element:<About/>},
      {path:"portfolio" ,element:<Portfolio/>},
      {path:"contact" ,element:<Contact/>},
      {path:"*" ,element:<Notfound/>}
    ]}
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}



