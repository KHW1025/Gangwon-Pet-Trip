import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Grid, Pagination } from "swiper";
import { Navigation } from "swiper";

import Map from "./Map";

function MainMap({ list }) {
  const areaNames = [
    "인제",
    "속초",
    "고성",
    "양양",
    "강릉",
    "동해",
    "삼척",
    "양구",
    "철원",
    "태백",
    "화천",
    "춘천",
    "홍천",
    "평창",
    "횡성",
    "원주",
    "정선",
    "영월",
  ];
  const areaClass = [
    "Inje",
    "Sokcho",
    "Goseong",
    "Yangyang",
    "Gangneung",
    "Donghae",
    "Samcheok",
    "Yanggu",
    "Cheorwon",
    "Taebaek",
    "Hwacheon",
    "Chuncheon",
    "Hongcheon",
    "Pyeongchang",
    "Hoengseong",
    "Wonju",
    "Jeongseon",
    "Yeongwol",
  ];

  // 첫 화면에 12번째인 춘천으로 기본값으로 지정
  let [selectedAreaLink, setSelectedAreaLink] = useState(areaNames[11]);

  // 데이터의 지역명에 selectedAreaLink가 속하고 있는지
  // 평창군 -> 평창 -> 데이터에 평창 데이터만 가공
  // 병원이 아닌 데이터로 필터

  const MapData = list.filter(
    (item) =>
      item.resultList.areaName.includes(selectedAreaLink) &&
      !(item.resultList.partName === "동물병원")
  );

  // console.log(Hospital);

  // svg path에 on 클래스 추가
  // 선택된 지역명이 areaNames 배열에 몇번째 있는지
  // Map 컴포넌트에 보내서 'selectAreaNum'번째 path에게 on클래스 추가
  const selectedAreaNum = areaNames.indexOf(selectedAreaLink);
  // console.log(selectAreaNum);

  // 탭 on클래스 추가
  const tabName = ["전체", "숙박", "식음료", "관광&체험"];
  let [selectedTab, setSelectedTab] = useState(tabName[0]);

  // 탭메뉴 데이터
  let [tabData, setTabData] = useState(MapData);

  useEffect(() => {
    setSelectedTab(tabName[0]);
    setTabData(MapData);
  }, [selectedAreaNum]);

  // 탭을 클릭했을때 그에 맞는 데이터로 필터링
  // 관광&체험은 "관광지" or "체험"
  const tabClickData = (a) =>
    tabName[a] === "전체"
      ? setTabData(MapData)
      : setTabData(
          MapData.filter((item) =>
            a === 3
              ? item.resultList.partName === "관광지" ||
                item.resultList.partName === "체험"
              : // console.log("관광&체험 선택함")
                item.resultList.partName === tabName[a]
          )
        );

  // console.log(selectedAreaLink);
  // const Area138 = list.filter((item) => item.resultList.contentSeq === 138);

  // console.log(Area138);
  // console.log(tabData[0].resultList.imageList[0].image);

  // 목록보기, 지도보기 버튼
  // 누르면 버튼에 on 클래스, .selectDetail에 on
  // 다시누르면 on 삭제

  return (
    <>
      <section className="mainMapWrapper">
        <button className="sideBtn">
          <div>
            <span>목</span>
            <span>록</span>
            <span>보</span>
            <span>기</span>
          </div>
          <div>
            <span>지</span>
            <span>도</span>
            <span>보</span>
            <span>기</span>
          </div>
        </button>
        <div className="mainMap mw">
          <div className="mapCon">
            <div className="secTitle">
              <div className="dogPawImg">
                <img
                  src={`${process.env.PUBLIC_URL}/img/dogPaw.png `}
                  alt="dogPaw"
                />
              </div>
              <span>지역별 장소</span>
            </div>
            <div className="mapImg">
              {/* svg 위에 떠 있는 Link */}
              {areaNames.map((name, i) => (
                <Link
                  to="#"
                  key={i}
                  className={`${areaClass[i]} ${
                    selectedAreaLink === areaNames[i] ? "on" : ""
                  }`}
                  onClick={() => {
                    setSelectedAreaLink(areaNames[i]);
                  }}
                >
                  <i className="fa-solid fa-location-dot mapPin"></i>
                  <span>{name}</span>
                </Link>
              ))}
              {/* svg 파일 */}
              <Map selectedAreaNum={selectedAreaNum}></Map>
            </div>
          </div>
          <div className="selectDetail">
            <div className="nameCon">
              <Link to={`/city/${selectedAreaLink}`} className="selectLocation">
                {selectedAreaLink}
              </Link>
              <Link to={`/city/${selectedAreaLink}`} className="btnViewMore">
                <span>{selectedAreaLink}</span>
                <span>더 알아보기</span>
                <i class="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="detailCon">
              <ul className="tabMenu">
                {tabName.map((item, i) => (
                  <li
                    className={`tabBtn ${
                      selectedTab === tabName[i] ? "on" : ""
                    }`}
                    key={i}
                    onClick={() => {
                      setSelectedTab(tabName[i]);
                      tabClickData(i);
                      console.log(
                        [...MapData].filter(
                          (item) => item.resultList.partName === tabName[i]
                        )
                      );
                    }}
                  >
                    {tabName[i]}
                  </li>
                ))}
              </ul>
              <Swiper
                slidesPerView={1}
                grid={{
                  rows: 3,
                  fill: "row",
                }}
                spaceBetween={51}
                pagination={{
                  type: "fraction",
                }}
                navigation={true}
                modules={[Grid, Pagination, Navigation]}
                className="mySwiper mapGridSlide"
              >
                {tabData.map((item, i) => {
                  return (
                    <SwiperSlide key={i} className="mapSlideList">
                      <Link to={`/detail/${item.resultList.contentSeq}`}>
                        <div className="mapSlideImg">
                          <img
                            src={
                              !item.resultList.imageList
                                ? `${process.env.PUBLIC_URL}/img/noImage.jpg`
                                : item.resultList.imageList[0].image
                            }
                            alt={item.resultList.title}
                          />
                        </div>
                        <div className="mapSlideInfo">
                          <p className="mapSlideTitle">
                            <span>{item.resultList.title}</span>
                          </p>
                          <p className="mapSlideAd">
                            <i class="fa-solid fa-location-dot"></i>
                            <span>{item.resultList.address}</span>
                          </p>
                          <p className="mapSlideTel">
                            <i class="fa-solid fa-phone"></i>
                            <span>{item.resultList.tel}</span>
                          </p>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="bottomDog bottomDog1">
            <img
              src={`${process.env.PUBLIC_URL}/img/bottomDog1.png `}
              alt="bottom dog1"
            />
          </div>
          <div className="bottomDog bottomDog2">
            <img
              src={`${process.env.PUBLIC_URL}/img/bottomDog2.png `}
              alt="bottom dog2"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default MainMap;
