import { Link } from "react-router-dom";

import CateCardSlide from "./CateCardSlide";

function HotelCate({ selectedCityData, selectedCity }) {
  // console.log(selectedCityData);
  let HotelData = selectedCityData.filter(
    (item) => item.resultList.partName === "숙박"
  );
  return (
    <section className="cateSec hotelCateSec mwSlide2">
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
        <Link to={`/city/${selectedCity}/cate/hotel`} className="viewMoreBtn">
          <span>모두보기</span>
        </Link>
      </div>
      <div className="slideCon">
        <CateCardSlide data={HotelData}></CateCardSlide>
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
