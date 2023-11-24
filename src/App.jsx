import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailTodo from "./pages/DetailTodo";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Private from "./components/Private";
import CreateTask from "./pages/CreateTask";
import { useState } from "react";

function App() {
  const [isReRender,setIsRenRender] = useState(false)

  const handleReRender = () => {
    setIsRenRender(!isReRender)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
        <Route element={<Private handleReRender={handleReRender} />}>
          <Route path='/create'  element={<CreateTask />}></Route>
          <Route path="/:page" element={<HomePage handleReRender={handleReRender} isReRender={isReRender} />}></Route>
          <Route path="/todo/:id" element={<DetailTodo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
