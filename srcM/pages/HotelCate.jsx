import { Link } from "react-router-dom";

import CardSlide from "./CardSlide";

function HotelCate({ selectedCityData }) {
  // console.log(selectedCityData);
  let HotelData = selectedCityData.filter(
    (item) => item.resultList.partName === "숙박"
  );
  return (
    <section className="cateSec hotelCateSec mw">
      <div className="topCon">
        <div className="secTitle">
          <div className="dogIcon">
            <img
              src={`${process.env.PUBLIC_URL}/img/dogIcon3.png `}
              alt="dogIcon3"
            />
          </div>
          <span>숙박</span>
        </div>
        <Link to="#" className="viewMoreBtn">
          <span>모두보기</span>
        </Link>
      </div>
      <div className="slideCon">
        <CardSlide data={HotelData}></CardSlide>
      </div>
      <div className="sideDogImg">
        <img
          src={`${process.env.PUBLIC_URL}/img/sideDog3.png `}
          alt="sideDog3"
        />
      </div>
    </section>
  );
}

export default HotelCate;
