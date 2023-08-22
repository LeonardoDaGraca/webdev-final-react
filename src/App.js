import AppBar from "./components/appbar/AppBar";
import Home from "./screens/home/Home";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import Settings from "./screens/settings/Settings";
import Single from "./screens/single/Single";
import Write from "./screens/write/Write";
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Live from "./screens/live/Live";

function App() {
  const { user } = useContext(Context);
  return (
  <BrowserRouter>
    <AppBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/register" element={user ? <Home/> : <Register/>}></Route>
      <Route path="/login" element={user ? <Home/> : <Login/>}></Route>
      <Route path="/write" element={user ? <Write/> : <Register/>}></Route>
      <Route path="/live" element={<RedirectToLive/>}></Route>
      <Route path="/transfers" element={<RedirectToTransfers/>}></Route>
      <Route path="/settings" element={user ? <Settings/> : <Register/>}></Route>
      <Route path="/post/:postId" element={<Single/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

function RedirectToLive(){
  window.location.href = "/live.html";
  return null;
}

function RedirectToTransfers(){
  window.location.href = "/transfers.html";
  return null;
}

export default App;
