import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import data from "./pages/allData";

import Header from "./pages/Header";
import Main from "./pages/Main";
import City from "./pages/City";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import HospitalMap from "./pages/HospitalMap";

import Footer from "./pages/Footer";

function App() {
  let urlName = useLocation().pathname;
  // console.log(urlName);

  let [list] = useState(data);
  // console.log(list);

  return (
    <div className="App">
      <Header urlName={urlName} list={list}></Header>
      <Routes>
        <Route path="/" element={<Main list={list}></Main>}></Route>
        <Route
          path="/city/:areaName"
          element={<City list={list}></City>}
        ></Route>
        <Route
          path="/city/:areaName/cate/:category"
          element={<Category list={list}></Category>}
        ></Route>
        <Route
          path="/detail/:id"
          element={<Detail list={list}></Detail>}
        ></Route>
        <Route
          path="/hospital"
          element={<HospitalMap list={list}></HospitalMap>}
        ></Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
