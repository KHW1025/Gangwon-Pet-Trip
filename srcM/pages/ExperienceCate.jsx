import { Link } from "react-router-dom";

import CardSlide from "./CardSlide";

function ExperienceCate({ selectedCityData }) {
  // console.log(selectedCityData);
  let ExperienceData = selectedCityData.filter(
    (item) =>
      item.resultList.partName === "관광지" ||
      item.resultList.partName === "체험"
  );
  console.log(ExperienceData);
  return (
    <section className="cateSec experienceCateSec mw">
      <div className="topCon">
        <div className="secTitle">
          <div className="dogIcon">
            <img
              src={`${process.env.PUBLIC_URL}/img/dogIcon2.png `}
              alt="dogIcon2"
            />
          </div>
          <span>관광&체험</span>
        </div>
        <Link to="#" className="viewMoreBtn">
          <span>모두보기</span>
        </Link>
      </div>

      <div className="sideDogImg">
        <img
          src={`${process.env.PUBLIC_URL}/img/sideDog2.png `}
          alt="sideDog2"
        />
      </div>
      <div className="slideCon">
        <CardSlide data={ExperienceData}></CardSlide>
      </div>
    </section>
  );
}

export default ExperienceCate;
