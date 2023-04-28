import React, { useState } from "react";
import { Link } from "react-router-dom";

function RecommendPlace({ detailData, list }) {
  let detailPlace = detailData[0].resultList.areaName;
  let recommendPlaceData = list.filter(
    (item) =>
      item.resultList.areaName === detailPlace &&
      !(item.resultList.partName === "동물병원")
  );

  let [randomRecommend] = useState([]);

  while (randomRecommend.length < 4) {
    let randomIndex = Math.floor(Math.random() * recommendPlaceData.length);
    if (!randomRecommend.includes(recommendPlaceData[randomIndex])) {
      randomRecommend.push(recommendPlaceData[randomIndex]);
    }
  }
  // console.log(randomRecommend);

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
          <Link to={`/detail/${item.resultList.contentSeq}`}>
            <div className="recommendList">
              <div className="recommendImg">
                <img
                  src={
                    !item.resultList.imageList
                      ? `${item.resultList.imageList[0].image}`
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
