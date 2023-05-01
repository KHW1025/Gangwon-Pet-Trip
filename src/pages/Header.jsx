import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

function Header({ urlName, list }) {
  let data = list.filter((item) => !(item.resultList.partName === "동물병원"));
  // console.log(data);

  // 모달 키고 닫을때 on클래스
  let [modal, setModal] = useState();

  const modalKeyword = [
    "해변",
    "자연",
    "숙박",
    "카페",
    "산책",
    "감성",
    "바다",
    "회",
    "해수욕장",
    "전망",
  ];

  let [searchKeyword, setSearchKeyword] = useState(modalKeyword[0]);

  // 모달 검색 데이터
  let [searchData, setSearchData] = useState(
    data.filter((item) => item.resultList.keyword.includes(searchKeyword))
  );

  // 모달을 켰을 때 body의 스크롤 방지
  const noScroll = () => {
    document.body.style.overflow = "hidden";
  };
  const yesScroll = () => {
    document.body.style.overflow = "unset";
  };

  return (
    // <header className={`hd ${blur}`}>
    <>
      <header className="hd">
        <div className="hdInner mw">
          <Link to="/" className="logo">
            <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo" />
          </Link>
          <button
            className="btnSearch"
            onClick={() => {
              setModal("on");
              noScroll();
            }}
          >
            검색하기
          </button>
        </div>
      </header>

      <div className={`searchModalWrap ${modal === "on" ? "on" : ""}`}>
        <div className="searchModal mw">
          <button
            className="closeBtn"
            onClick={() => {
              setModal();
              yesScroll();
            }}
          >
            <i class="fa-solid fa-xmark fa-3x"></i>
          </button>
          <div className="modalTitle">우리 어디로 떠나볼까요?</div>
          <div className="searchInputBox">
            <div className="boxInner">
              <input
                type="text"
                className="searchInput"
                required
                onChange={(e) => {
                  setSearchData(
                    data.filter(
                      (item) =>
                        item.resultList.partName.includes(e.target.value) ||
                        item.resultList.title.includes(e.target.value) ||
                        item.resultList.areaName.includes(e.target.value)
                    )
                  );
                }}
              />
              <label className="inputInfo">지역, 타이틀, 키워드 검색</label>
              <span></span>
            </div>
          </div>

          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={5}
            spaceBetween={30}
            className="mySwiper keywordCon"
          >
            {modalKeyword.map((item, i) => (
              <SwiperSlide className="keywordItem">
                <button
                  className={`searchKeyword ${
                    searchKeyword === item ? "on" : ""
                  }`}
                  key={i}
                  onClick={() => {
                    setSearchKeyword(item);
                    setSearchData(
                      data.filter((a) => a.resultList.keyword.includes(item))
                    );
                  }}
                >
                  # {item}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="searchResult">
            {searchData.map((item, i) => (
              <div className="resultItem">
                <Link
                  to={`/detail/${item.resultList.contentSeq}`}
                  key={i}
                  onClick={() => {
                    setModal();
                    yesScroll();
                  }}
                >
                  <div className="resultImg">
                    <img
                      src={
                        !item.resultList.imageList
                          ? `${process.env.PUBLIC_URL}/img/noImage.jpg`
                          : item.resultList.imageList[0].image
                      }
                      alt={item.resultList.title}
                    />
                  </div>
                  <div className="resultDetail">
                    <span className="resultTitle">{item.resultList.title}</span>
                    <span className="resultAd">{item.resultList.address}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
