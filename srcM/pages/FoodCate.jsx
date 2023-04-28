import { Link } from "react-router-dom";

import CardSlide from "./CardSlide";

function FoodCate({ selectedCityData }) {
  // console.log(selectedCityData);
  let FoodData = selectedCityData.filter(
    (item) => item.resultList.partName === "식음료"
  );
  return (
    <section className="cateSec foodCateSec mw">
      <div className="topCon">
        <div className="secTitle">
          <div className="dogIcon">
            <img
              src={`${process.env.PUBLIC_URL}/img/dogIcon1.png `}
              alt="dogIcon1"
            />
          </div>
          <span>식음료</span>
        </div>
        <Link to="#" className="viewMoreBtn">
          <span>모두보기</span>
        </Link>
      </div>
      <div className="slideCon">
        <CardSlide data={FoodData}></CardSlide>
      </div>
      <div className="sideDogImg">
        <img
          src={`${process.env.PUBLIC_URL}/img/sideDog1.png `}
          alt="sideDog1"
        />
      </div>
    </section>
  );
}

export default FoodCate;
