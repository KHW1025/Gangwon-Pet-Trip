import React, { useState } from "react";
import { Link } from "react-router-dom";

function RecommendPlace({ detailData, list }) {
  let detailPlace = detailData[0].resultList.areaName;
  let recommendPlaceData = list.filter(
    (item) =>
      item.resultList.areaName === detailPlace &&
      !(item.resultList.partName === "동물병원")
  );

  // console.log(recommendPlaceData.length);

  // 같은 지역 랜덤 4개추출. 4개보다 적을때는 그대로의 배열
  let [randomRecommend] = useState([]);
  if (recommendPlaceData.length > 4) {
    while (randomRecommend.length < 4) {
      let randomIndex = Math.floor(Math.random() * recommendPlaceData.length);
      if (!randomRecommend.includes(recommendPlaceData[randomIndex])) {
        randomRecommend.push(recommendPlaceData[randomIndex]);
      }
    }
  } else {
    randomRecommend = recommendPlaceData;
  }

  return (
    <section className="recommendPlace mw">
      <div className="detailTitleBox">
        <div className="dogIcon">
          <img
            src={`${process.env.PUBLIC_URL}/img/dogIcon4.png `}
            alt="dogIcon4"
          />
        </div>
        <span>주변 추천 장소</span>
      </div>
      <div className="recommendCon">
        {randomRecommend.map((item, i) => (
          <Link to={`/detail/${item.resultList.contentSeq}`} key={i}>
            <div className="recommendList">
              <div className="recommendImg">
                <img
                  src={
                    !item.resultList.imageList
                      ? `${process.env.PUBLIC_URL}/img/noImage.jpg`
                      : item.resultList.imageList[0].image
                  }
                  alt={`${item.resultList.title}`}
                />
              </div>
              <div className="recommendTitle">
                <span>{item.resultList.title}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RecommendPlace;
