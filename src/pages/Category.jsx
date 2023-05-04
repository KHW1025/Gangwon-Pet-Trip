import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import CateList from "./CateList";

import Pagination from "./Pagination";

function Category({ list }) {
  const { areaName, category } = useParams();
  let [selectedCateCity, setSelectedCateCity] = useState(areaName);
  let [categoryName, setCategoryName] = useState(category);

  console.log(category);
  // useParams로 받아온 category에 따라 categoryName가 변해서
  // 배경이미지를 변경한다.
  let categoryUrl =
    categoryName === "food"
      ? `${process.env.PUBLIC_URL}/img/categoryBg1.jpg`
      : categoryName === "experience"
      ? `${process.env.PUBLIC_URL}/img/categoryBg2.jpg`
      : categoryName === "hotel"
      ? `${process.env.PUBLIC_URL}/img/categoryBg3.jpg`
      : "";

  let BannerTitle = styled.section`
    background-image: url(${categoryUrl});
  `;

  // ul로 지역과 카테고리를 선택
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

  let prevPageCate =
    category === "food"
      ? "식음료"
      : category === "experience"
      ? "관광&체험"
      : category === "hotel"
      ? "숙박"
      : "";

  let [selectedCateName, setSelectedCateName] = useState(prevPageCate);

  const cateNames = ["식음료", "관광&체험", "숙박"];
  const cateNamesEn = ["food", "experience", "hotel"];

  // useParams로 받아온 areaName에 selectedCity가 따라
  // 영문명으로 호출
  const cateBannerTitle =
    selectedCateCity === "인제"
      ? "Inje"
      : selectedCateCity === "속초"
      ? "Sokcho"
      : selectedCateCity === "고성"
      ? "Goseong"
      : selectedCateCity === "양양"
      ? "Yangyang"
      : selectedCateCity === "강릉"
      ? "Gangneung"
      : selectedCateCity === "동해"
      ? "Donghae"
      : selectedCateCity === "삼척"
      ? "Samcheok"
      : selectedCateCity === "양구"
      ? "Yanggu"
      : selectedCateCity === "철원"
      ? "Cheorwon"
      : selectedCateCity === "태백"
      ? "Taebaek"
      : selectedCateCity === "화천"
      ? "Hwacheon"
      : selectedCateCity === "춘천"
      ? "Chuncheon"
      : selectedCateCity === "홍천"
      ? "Hongcheon"
      : selectedCateCity === "평창"
      ? "Pyeongchang"
      : selectedCateCity === "횡성"
      ? "Hoengseong"
      : selectedCateCity === "원주"
      ? "Wonju"
      : selectedCateCity === "정선"
      ? "Jeongseon"
      : selectedCateCity === "영월"
      ? "Yeongwol"
      : "";

  // select요소에서 지역과 카테고리를 변경할때마다 주소 url이 바뀐다.
  useEffect(() => {
    window.history.replaceState(
      "",
      "",
      `/city/${selectedCateCity}/cate/${categoryName}`
    );
  }, [selectedCateCity, categoryName]);

  // 바뀌는 지역명과 카테고리에 따라 데이터가 필터링된다.
  // CateList로 넘긴다.
  const CateData = list.filter(
    (item) =>
      !(item.resultList.partName === "동물병원") &&
      item.resultList.areaName.includes(selectedCateCity) &&
      (selectedCateName === "식음료"
        ? item.resultList.partName === "식음료"
        : selectedCateName === "숙박"
        ? item.resultList.partName === "숙박"
        : selectedCateName === "관광&체험"
        ? item.resultList.partName === "관광지" ||
          item.resultList.partName === "체험"
        : "")
  );
  // console.log(CateData);

  // pagination ---> 부트스트랩 사용
  let [currentPage, setCurrentPage] = useState(1);
  // 한 페이지에서 보여줄 갯수 : 16
  let [itemsPerPage] = useState(16);

  // 마지막 아이템 번호
  const indexOfLastItem = currentPage * itemsPerPage;
  // 마지막 아이템 번호 - 보여줄 갯수(16)
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // 데이터 끊어서 보여주기 초기값
  const currentData = CateData.slice(indexOfFirstItem, indexOfLastItem);

  // page 숫자(pageNumber)를 누르면 currentData가 바뀌게
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(CateData.length);
  return (
    <>
      <BannerTitle className="cateBanner">
        <div className="cateBannerInner mw">
          <span className="bannerTitle">{cateBannerTitle}</span>
          <div className="selectCon">
            <ul className="selectCityMenu">
              <li>
                <p>
                  {selectedCateCity}
                  <i class="fa-solid fa-caret-down"></i>
                </p>
                <ul className="selectCitySub">
                  {areaNames.map((item, i) => (
                    <li
                      key={i}
                      className="cityList"
                      onClick={() => {
                        setSelectedCateCity(item);
                      }}
                    >
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>

            <ul className="selectCateMenu">
              <li>
                <p>
                  {selectedCateName}
                  <i class="fa-solid fa-caret-down"></i>
                </p>
                <ul className="selectCateSub">
                  {cateNames.map((item, i) => (
                    <li
                      key={i}
                      className="cateList"
                      onClick={() => {
                        setSelectedCateName(item);
                        // categoryName가 바뀌어서 배경 이미지 변경
                        setCategoryName(cateNamesEn[i]);
                      }}
                    >
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </BannerTitle>
      {CateData.length === 0 ? (
        <div className="noDataBox mw">
          <div className="loadingDogImg">
            <img
              src={`${process.env.PUBLIC_URL}/img/loadingDog.gif`}
              alt="loadingImg"
            />
            <span className="loadingComment">준비중입니다!</span>
          </div>
        </div>
      ) : (
        <CateList list={currentData}></CateList>
      )}

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={CateData.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      ></Pagination>
    </>
  );
}

export default Category;
