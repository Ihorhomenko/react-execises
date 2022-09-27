import { Routes, Route } from "react-router-dom";
import Landie from "./module_1/lending-page-1";
import AppBar from "./app-bar/app-bar";
import Home from "./home-page/home-page";

export const App = () => {
  return (
    <div>
      <AppBar/>
      <Routes>
        <Route path="/react-execises" element={<Home/>}/>
        <Route path="landie" element={<Landie/>}/>
      </Routes>
    </div>

  );
};
