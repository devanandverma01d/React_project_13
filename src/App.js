//1. import area
//1.1 import {} something from  somelibrary/SomeLocation
//1.2 import from somelocation/ somelibrary

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

//2. Component(Functional) definition area.
let App = () => {
  // There are 3 members of functional component-
  //1.State/Variable
  //2. Function 
  //3. Return statement
  // Every function return something
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}
//3. Export area
//3.1 Default export
//3.2 Named Export
export default App;
