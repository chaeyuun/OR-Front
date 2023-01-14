import { Routes, Route } from "react-router-dom";
import Login from "../components/auth/auth";
import Home from "../components/home/home";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default Router;
