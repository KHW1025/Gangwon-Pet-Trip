import React, { useRef, useState, useEffect } from "react";

import CardSlide from "./CardSlide";

function KeywordRecommend({ list }) {
  // console.log(list);

  const keywords = [
    "카페",
    "오션뷰",
    "수영장",
    "루프탑",
    "자연",
    "해변",
    "산책",
    "공원",
    "힐링",
  ];

  // 랜덤 함수를 만들고 keywords함수에서 5개 랜덤추출해서 random에 넣음
  let [random] = useState([]);
  while (random.length < 5) {
    const randomIndex = Math.floor(Math.random() * keywords.length);
    if (!random.includes(keywords[randomIndex])) {
      random.push(keywords[randomIndex]);
    }
  }
  // console.log(random);

  // 클릭 함수를 만들고 버튼에 onClick으로 해당 값이 selectedKeyword이 담기게함.
  let [selectedKeyword, setSelectedKeyword] = useState(random[0]);
  const clickKeyword = (e) => setSelectedKeyword(e);
  // console.log(selectedKeyword);

  // useEffect(() => {
  //   // console.log(keywordRefs.current);
  // }, [clickKeyword]);

  // 키워드를 포함하고 있는 데이터로 가공
  const keywordData = list.filter((item) =>
    item.resultList.keyword.includes(selectedKeyword)
  );
  // console.log(keywordData);

  let [selectedBtn, setSelectedBtn] = useState(random[0]);

  return (
    <section className="keywordSec">
      <div className="keywordSecInner mw">
        <div className="topCon">
          <div className="secTitle">
            <div className="dogPawImg">
              <img
                src={`${process.env.PUBLIC_URL}/img/dogPaw.png `}
                alt="dogPaw"
              />
            </div>
            <span>키워드 추천 장소</span>
          </div>
          <div className="keywordCon">
            {random.map((btn, i) => (
              <button
                className={`keywordBtn ${
                  selectedBtn === random[i] ? "on" : ""
                }`}
                onClick={() => {
                  clickKeyword(random[i]);
                  setSelectedBtn(random[i]);
                  // console.log(selectedBtn);
                }}
              >
                # {random[i]}
              </button>
            ))}
          </div>
        </div>
        <div className="cardListCon">
          <CardSlide data={keywordData}></CardSlide>
        </div>
      </div>
    </section>
  );
}

export default KeywordRecommend;
