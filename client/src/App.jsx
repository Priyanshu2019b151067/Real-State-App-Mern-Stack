import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import About from "./pages/About";

import { BrowserRouter,Routes,Route, Router} from "react-router-dom";
import Header from "./components/Header";
function App() {
  return<BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='about/' element={<About/>} ></Route>
    <Route path='signup/' element={<Signup/>} ></Route>
    <Route path='signin/' element={<Signin/>} ></Route>
    <Route path='profile/' element={<Profile/>} ></Route>
  </Routes>
  </BrowserRouter>
}
export default App; 