import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import data from "./pages/allData";

import Header from "./pages/Header";
import Main from "./pages/Main";
import SelectedCity from "./pages/SelectedCity";
import Footer from "./pages/Footer";

function App() {
  let urlName = useLocation().pathname;
  // console.log(urlName);

  let [list] = useState(data);
  // console.log(list);

  return (
    <div className="App">
      <Header urlName={urlName}></Header>
      <Routes>
        <Route path="/" element={<Main list={list}></Main>}></Route>
        <Route
          path="/city/:areaName"
          element={<SelectedCity list={list}></SelectedCity>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
