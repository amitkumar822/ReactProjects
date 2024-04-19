import React from "react";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router";
import Courses from "./components/courses/Courses";
import Signup from "./components/Signup";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App;
