import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./styles.css";
// import required modules
import { Pagination, Navigation } from "swiper";

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
    "InjeLink",
    "SokchoLink",
    "GoseongLink",
    "YangyangLink",
    "GangneungLink",
    "DonghaeLink",
    "SamcheokLink",
    "YangguLink",
    "CheorwonLink",
    "TaebaekLink",
    "HwacheonLink",
    "ChuncheonLink",
    "HongcheonLink",
    "PyeongchangLink",
    "HoengseongLink",
    "WonjuLink",
    "JeongseonLink",
    "YeongwolLink",
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
  const tabClcikData = (a) =>
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

  return (
    <section className="mainMap mw">
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
          <span className="selectLocation">{selectedAreaLink}</span>
          <Link to={`/city/${selectedAreaLink}`} className="btnViewMore">
            <span>+</span>
          </Link>
        </div>
        <div className="detailCon">
          <ul className="tabMenu">
            {tabName.map((item, i) => (
              <li
                className={`tabBtn ${selectedTab === tabName[i] ? "on" : ""}`}
                key={i}
                onClick={() => {
                  setSelectedTab(tabName[i]);
                  tabClcikData(i);
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
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mapSlide"
          >
            {/* {tabData.map((item, i) => {
              return (
                <SwiperSlide key={i} className="mapSlideList">
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
                    <span>{item.resultList.title}</span>
                    <span>{item.resultList.tel}</span>
                    <span>{item.resultList.areaName}</span>
                  </div>
                </SwiperSlide>
              );
            })} */}
            {tabData.map((item, i) => {
              const slideContent = [1, 2, 3].map((j) => {
                const index = i * 3 + (j - 1);
                // console.log(i);
                if (!tabData[index]) return null; // 마지막 슬라이드에서 데이터 부족할 때 null 반환
                return (
                  <div key={index} className="mapSlideList">
                    <div className="mapSlideImg">
                      <img
                        src={
                          !tabData[index].resultList.imageList
                            ? `${process.env.PUBLIC_URL}/img/noImage.jpg`
                            : tabData[index].resultList.imageList[0].image
                        }
                        alt={tabData[index].resultList.title}
                      />
                    </div>
                    <div className="mapSlideInfo">
                      <span>{tabData[index].resultList.title}</span>
                      <span>{tabData[index].resultList.tel}</span>
                    </div>
                  </div>
                );
              });

              return <SwiperSlide key={i}>{slideContent}</SwiperSlide>;
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
    </section>
  );
}

export default MainMap;
