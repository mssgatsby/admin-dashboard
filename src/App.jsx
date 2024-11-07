import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/navbar";
import AllPosts from "./pages/allPosts";
import SinglePost from "./pages/singlePost";
import EditPost from "./pages/editPost";
import UsersPage from "./pages/users";

import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allposts" element={<AllPosts />} />
        <Route path="/singlepost/:id" element={<SinglePost />} />
        <Route path="/editpost/:id" element={<EditPost />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </>
  );
}
