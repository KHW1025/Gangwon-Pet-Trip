import { useState } from "react";

import HospitalMapResult from "./HospitalMapResult";

function HospitalSearch({ hospitalData }) {
  // console.log(hospitalData);

  let [searchData, setSearchData] = useState(hospitalData);

  let [slideBtn, setSlideBtn] = useState();

  // 위도
  let [selectLatitude, setSelectLatitude] = useState("37.8553453860199");

  // 경도
  let [selectLongitude, setSelectLongitude] = useState("127.751658040751");

  return (
    <section className="hospitalSearch mw">
      <div className={`searchBox ${slideBtn === "on" ? "on" : ""}`}>
        <div
          className={`btnHospital ${slideBtn === "on" ? "on" : ""}`}
          onClick={() => {
            slideBtn === "on" ? setSlideBtn("") : setSlideBtn("on");
          }}
        >
          <i class="fa-solid fa-caret-right"></i>
        </div>
        <div className="inputCon">
          <label htmlFor="hospitalSearchInput">
            <i class="fa-solid fa-magnifying-glass"></i>
          </label>
          <input
            type="text"
            className="hospitalSearchInput"
            name="hospitalSearchInput"
            placeholder="지역명을 입력해주세요."
            onChange={(e) => {
              setSearchData(
                hospitalData.filter(
                  (item) =>
                    item.resultList.title.includes(e.target.value) ||
                    item.resultList.areaName.includes(e.target.value) ||
                    item.resultList.address.includes(e.target.value)
                )
              );
            }}
          />
        </div>
        <div className="resultCon">
          {searchData.map((item, i) => (
            <button
              className="resultItem"
              key={i}
              onClick={() => {
                setSelectLatitude(item.resultList.latitude);
                setSelectLongitude(item.resultList.longitude);
              }}
            >
              <p className="hospitalName">{item.resultList.title}</p>
              <p className="hospitalAd">
                <i class="fa-solid fa-location-dot"></i>
                <span>주소</span>
                <span>{item.resultList.address}</span>
              </p>
              <p className="hospitalTel">
                <i class="fa-solid fa-phone"></i>
                <span>문의</span>
                <span>{item.resultList.tel}</span>
              </p>
            </button>
          ))}
        </div>
      </div>
      <HospitalMapResult
        selectLatitude={selectLatitude}
        selectLongitude={selectLongitude}
      ></HospitalMapResult>
    </section>
  );
}

export default HospitalSearch;
