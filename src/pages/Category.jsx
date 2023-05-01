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
      (categoryName === "food"
        ? item.resultList.partName === "식음료"
        : categoryName === "hotel"
        ? item.resultList.partName === "숙박"
        : categoryName === "experience"
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
            <select
              name="selectCity"
              id="selectCity"
              defaultValue={
                selectedCateCity === "춘천"
                  ? "0"
                  : selectedCateCity === "화천"
                  ? "1"
                  : selectedCateCity === "양구"
                  ? "2"
                  : selectedCateCity === "고성"
                  ? "3"
                  : selectedCateCity === "속초"
                  ? "4"
                  : selectedCateCity === "인제"
                  ? "5"
                  : selectedCateCity === "철원"
                  ? "6"
                  : selectedCateCity === "홍천"
                  ? "7"
                  : selectedCateCity === "양양"
                  ? "8"
                  : selectedCateCity === "강릉"
                  ? "9"
                  : selectedCateCity === "평창"
                  ? "10"
                  : selectedCateCity === "횡성"
                  ? "11"
                  : selectedCateCity === "원주"
                  ? "12"
                  : selectedCateCity === "영월"
                  ? "13"
                  : selectedCateCity === "정선"
                  ? "14"
                  : selectedCateCity === "동해"
                  ? "15"
                  : selectedCateCity === "삼척"
                  ? "16"
                  : selectedCateCity === "태백"
                  ? "17"
                  : ""
              }
              onChange={(e) => {
                setSelectedCateCity(
                  e.target.options[e.target.selectedIndex].text
                );
                // selectedCity가 바뀌어서 영문명 변경
              }}
            >
              <option value="0">춘천</option>
              <option value="1">화천</option>
              <option value="2">양구</option>
              <option value="3">고성</option>
              <option value="4">속초</option>
              <option value="5">인제</option>
              <option value="6">철원</option>
              <option value="7">홍천</option>
              <option value="8">양양</option>
              <option value="9">강릉</option>
              <option value="10">평창</option>
              <option value="11">횡성</option>
              <option value="12">원주</option>
              <option value="13">영월</option>
              <option value="14">정선</option>
              <option value="15">동해</option>
              <option value="16">삼척</option>
              <option value="17">태백</option>
            </select>
            <select
              name="selectCate"
              id="selectCate"
              defaultValue={
                categoryName === "food"
                  ? "food"
                  : categoryName === "experience"
                  ? "experience"
                  : categoryName === "hotel"
                  ? "hotel"
                  : ""
              }
              onChange={(e) => {
                setCategoryName(e.target.value);
                // categoryName가 바뀌어서 배경 이미지 변경
              }}
            >
              <option value="food">식음료</option>
              <option value="experience">관광&체험</option>
              <option value="hotel">숙박</option>
            </select>
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
