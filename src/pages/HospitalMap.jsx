import HospitalSearch from "./HospitalSearch";

function HospitalMap({ list }) {
  // 동물병원만 있는 데이터로 가공
  const hospitalData = list.filter(
    (item) => item.resultList.partName === "동물병원"
  );
  // console.log(hospitalData);

  return (
    <>
      <section className="hospitalBanner">
        <div className="bannerInner mw">
          <div className="sickDogImg1">
            <img
              src={`${process.env.PUBLIC_URL}/img/sickDog1.png`}
              alt="sick dog"
            />
          </div>
          <div className="bannerText">
            <span className="bannerTitle">강원도 병원 위치 검색하기</span>
            <span className="bannerInfo">
              여행중 반려견이 아프다면 가까운 병원을 찾아보세요!
            </span>
          </div>
          <div className="sickDogImg2">
            <img
              src={`${process.env.PUBLIC_URL}/img/sickDog2.png`}
              alt="sick dog"
            />
          </div>
        </div>
      </section>
      <HospitalSearch hospitalData={hospitalData}></HospitalSearch>
    </>
  );
}

export default HospitalMap;
