function Hospital() {
  return (
    <section className="hospitalSec mw">
      <div className="hospitalDetail">
        <div className="secTitle">
          <div className="dogPawImg">
            <img
              src={`${process.env.PUBLIC_URL}/img/dogPaw.png `}
              alt="dogPaw"
            />
          </div>
          <span>동물병원 지도</span>
        </div>
        <div className="secInfo">
          <p>반려동물에게 응급상황이 발생할 시</p>
          <p>
            <span className="colorPoint">동물병원 지도</span>를 통해 바로
            알아보세요.
          </p>
        </div>
        <button className="hospitalBtn">병원 위치 검색하기</button>
      </div>
      <div className="hospitalDogImg">
        <img src={`${process.env.PUBLIC_URL}/img/hospitalDog.png `} alt="" />
      </div>
    </section>
  );
}

export default Hospital;