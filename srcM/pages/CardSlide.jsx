import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";

function CardSlide({ data }) {
  console.log(data.length);

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
                  <div className="card">
                    <div className="cardImg">
                      <img
                        src={
                          !item.resultList.imageList
                            ? `${process.env.PUBLIC_URL}/img/noImage.jpg`
                            : item.resultList.imageList[0].image
                        }
                        alt={`${item.resultList.title}`}
                      />
                    </div>
                    <div className="infoCon">
                      <div className="cardInfo1">
                        <span className="cardTitle">
                          {item.resultList.title}
                        </span>
                        <span className="cardCate">
                          {item.resultList.partName}
                        </span>
                      </div>
                      <div className="cardInfo2">
                        <p className="cardAd">
                          <i class="fa-solid fa-location-dot"></i>
                          <span>{item.resultList.address}</span>
                        </p>
                        <p className="cardTel">
                          <i class="fa-solid fa-phone"></i>
                          <span>{item.resultList.tel}</span>
                        </p>
                      </div>
                    </div>
                  </div>
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
