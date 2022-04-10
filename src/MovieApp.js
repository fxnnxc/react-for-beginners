// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./routes/Home"
import Detail from "./routes/Detail";

function MovieApp() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail/>}/>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}>
        </Route>
      </Routes>
    </Router>
  ) 

}

export default MovieApp;
