import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";

import ListCard from "./ListCard";

function CardSlide({ data }) {
  // console.log(data.length);

  return (
    <>
      {data.length === 0 ? (
        <div className="loadingDogImg">
          <img
            src={`${process.env.PUBLIC_URL}/img/loadingDog.gif`}
            alt="loadingImg"
          />
          <span className="loadingComment">준비중입니다!</span>
        </div>
      ) : (
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper keywordSlide"
        >
          {data.map((item, i) => {
            // console.log(item.resultList);
            return (
              <>
                <SwiperSlide className="cardSlideList">
                  <ListCard item={item}></ListCard>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      )}
    </>
  );
}

export default CardSlide;
