import { Link } from "react-router-dom";

import CateCardSlide from "./CateCardSlide";

function FoodCate({ selectedCityData, selectedCity }) {
  // console.log(selectedCityData);
  let FoodData = selectedCityData.filter(
    (item) => item.resultList.partName === "식음료"
  );
  return (
    <section className="cateSec foodCateSec mwSlide2">
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
        <Link to={`/city/${selectedCity}/cate/food`} className="viewMoreBtn">
          <span>모두보기</span>
        </Link>
      </div>
      <div className="slideCon">
        <CateCardSlide data={FoodData}></CateCardSlide>
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
