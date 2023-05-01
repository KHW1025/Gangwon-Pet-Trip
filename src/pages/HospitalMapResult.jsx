import { useEffect } from "react";

const { kakao } = window;

function HospitalMapResult({ selectLatitude, selectLongitude }) {
  const imageSrc = `${process.env.PUBLIC_URL}/img/markerDog.png`, // 마커이미지의 주소입니다
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  const markerImage = new kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imageOption
  );

  // 마커가 표시될 위치입니다
  const markerPosition = new kakao.maps.LatLng(selectLatitude, selectLongitude);

  useEffect(() => {
    //지도를 담을 영역의 DOM 레퍼런스
    const container = document.getElementById("map");

    //지도를 생성할 때 필요한 기본 옵션
    const options = {
      center: new kakao.maps.LatLng(selectLatitude, selectLongitude), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    //지도 생성 및 객체 리턴
    const map = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치입니다
    const markerPosition = new kakao.maps.LatLng(
      selectLatitude,
      selectLongitude
    );

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage, // 마커이미지 설정
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }, [selectLatitude, selectLongitude]);

  return <div id="map" className="searchMap"></div>;
}

export default HospitalMapResult;
