import { useParams } from "react-router-dom";
import { useState } from "react";

import FoodCate from "./FoodCate";
import ExperienceCate from "./ExperienceCate";
import HotelCate from "./HotelCate";
import { useEffect } from "react";

function City({ list }) {
  let { areaName } = useParams();

  let [selectedCity, setSelectedCity] = useState(areaName);

  const cityMessage = [
    "강원도의 중심지로, 반려동물과 함께 즐길 수 있는 맛있는 음식과 자연 경관이 매력적입니다.",
    "넓은 호수와 계곡을 감싸는 아름다운 자연경관에서 반려동물과 함께하는 즐거운 시간을 보낼 수 있습니다.",
    "반려동물과 함께 강원도 최대의 인공호수인 청초호에서 산책을 즐길 수 있습니다.",
    "해돋이와 일몰이 아름다운 장소로 유명합니다. 반려동물과 함께 이용할 수 있는 카페와 숙박 시설도 다양하게 있습니다.",
    "바다와 산을 모두 즐길 수 있는 아름다운 자연경관과 다양한 반려동물 체험 프로그램으로 유명합니다.",
    "자연 경관이 아름다운 지역입니다. 반려동물과 함께 산책하기 좋은 장소로는 인제 대둔산 자연휴양림과 솔향기공원이 있습니다.",
    "강원도 북부에 위치한 도시로, 조용하고 아름다운 자연경관에서 반려동물과 함께 힐링을 즐길 수 있는 관광지입니다.",
    "반려동물과 함께 즐길 수 있는 수상레저 스포츠, 산책로, 그리고 숙박시설 등 다양한 공간과 시설이 있습니다.",
    "강원도 동해안에 위치한 지역으로, 청정 자연환경과 아름다운 해변, 그리고 다양한 수산물로 유명합니다.",
    "아름다운 바다와 자연 경관에서 반려동물과 함께 즐길 수 있는 다양한 액티비티와 체험 프로그램이 준비되어 있습니다.",
    "평창은 자연경관과 문화유산, 스포츠시설 등 다양한 즐길거리가 있어, 반려동물과 함께하는 여행에 좋은 지역입니다.",
    "강원도 동부에 위치한 지역으로, 청정한 자연환경과 농촌 경관, 그리고 맛있는 식음료로 유명합니다.",
    "반려동물과 함께 즐길 수 있는 공원과 산책로가 많아, 지역 주민뿐만 아니라 관광객들도 즐겨찾는 지역 중 하나입니다.",
    "반려동물과 함께 즐길 수 있는 야외 활동과 체험 프로그램이 많아서, 반려동물과 함께하는 힐링 여행을 즐기기에 좋은 지역입니다.",
    "반려동물과 함께 하이킹이나 자전거 타기, 계곡에서 물놀이를 즐길 수 있는 코스들이 인기가 있습니다.",
    "반려동물과 함께 강원도 동해안을 따라 달리기 산책을 즐기는 것이 좋으며, 동해 바다에서의 수영, 서핑 등 해양 레저 활동도 인기가 있습니다.",
    "삼척 강변공원에서는 반려동물과 함께 산책을 즐길 수 있으며, 산이 울창한 산림욕장에서의 산책이나 자전거 타기도 좋습니다.",
    "반려동물과 함께 산책하기 좋은 태백산 국립공원과 맑은 물이 흐르는 구문천 등 자연 경관이 풍부합니다.",
  ];

  let [message, setMessage] = useState(cityMessage[0]);

  let selectedCityData = list.filter(
    (item) =>
      item.resultList.areaName.includes(selectedCity) &&
      !(item.resultList.partName === "동물병원")
  );
  // console.log(selectedCityData);

  // select요소에서 지역을 변경할때마다 주소 url이 바뀐다.
  useEffect(() => {
    window.history.replaceState("", "", `/city/${selectedCity}`);
  }, [selectedCity]);

  return (
    <>
      <section className="cityBannerSec">
        <div className="cityBannerInner mw">
          <div className="innerInfo">
            <select
              name="selectCity"
              id="selectCity"
              defaultValue={
                areaName === "춘천"
                  ? "0"
                  : areaName === "화천"
                  ? "1"
                  : areaName === "양구"
                  ? "2"
                  : areaName === "고성"
                  ? "3"
                  : areaName === "속초"
                  ? "4"
                  : areaName === "인제"
                  ? "5"
                  : areaName === "철원"
                  ? "6"
                  : areaName === "홍천"
                  ? "7"
                  : areaName === "양양"
                  ? "8"
                  : areaName === "강릉"
                  ? "9"
                  : areaName === "평창"
                  ? "10"
                  : areaName === "횡성"
                  ? "11"
                  : areaName === "원주"
                  ? "12"
                  : areaName === "영월"
                  ? "13"
                  : areaName === "정선"
                  ? "14"
                  : areaName === "동해"
                  ? "15"
                  : areaName === "삼척"
                  ? "16"
                  : areaName === "태백"
                  ? "17"
                  : ""
              }
              onChange={(e) => {
                setSelectedCity(e.target.options[e.target.selectedIndex].text);
                setMessage(cityMessage[e.target.value]);
                // console.log(e.target.value);
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
            <span className="cityMessage">{message}</span>
          </div>
        </div>
      </section>
      <FoodCate
        selectedCityData={selectedCityData}
        selectedCity={selectedCity}
      ></FoodCate>
      <ExperienceCate
        selectedCityData={selectedCityData}
        selectedCity={selectedCity}
      ></ExperienceCate>
      <HotelCate
        selectedCityData={selectedCityData}
        selectedCity={selectedCity}
      ></HotelCate>
    </>
  );
}

export default City;
