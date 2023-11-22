import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailTodo from "./pages/DetailTodo";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Private from "./components/Private";
import CreateTask from "./pages/CreateTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
        <Route element={<Private />}>
          <Route path='/create'  element={<CreateTask />}></Route>
          <Route path="/:page" element={<HomePage />}></Route>
          <Route path="/todo/:id" element={<DetailTodo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
