import { useParams } from "react-router-dom";
import DetailInfoList from "./DetailInfoList";

import { Link } from "react-router-dom";

function Detail({ list }) {
  let { id } = useParams();
  let detailData = list.filter(
    (item) => item.resultList.contentSeq === Number(id)
  );

  const areaNames = [
    "인제",
    "속초",
    "고성",
    "양양",
    "강릉",
    "동해",
    "삼척",
    "양구",
    "철원",
    "태백",
    "화천",
    "춘천",
    "홍천",
    "평창",
    "횡성",
    "원주",
    "정선",
    "영월",
  ];

  // const test = detailData[0].resultList.areaName.includes("춘천");
  // const test2 = areaNames.filter((item) =>
  //   detailData[0].resultList.areaName.includes(item)
  // );
  // const test = areaNames.filter((item) =>
  //   detailData[0].resultList.areaName.includes(item.resultList.areaName)
  // );

  // console.log(test);
  // console.log(test2);

  return (
    <>
      <section className="detailBanner">
        <div className="detailBannerInner mw">
          <ul className="breadCrumbsCon">
            <li>
              <Link
                to={`/city/${areaNames.filter((item) =>
                  detailData[0].resultList.areaName.includes(item)
                )}`}
              >
                {detailData[0].resultList.areaName}
              </Link>
            </li>
            <li>
              <Link
                to={`/city/${areaNames.filter((item) =>
                  detailData[0].resultList.areaName.includes(item)
                )}/cate/${
                  detailData[0].resultList.partName === "식음료"
                    ? "food"
                    : detailData[0].resultList.partName === "관광지"
                    ? "experience"
                    : detailData[0].resultList.partName === "체험"
                    ? "experience"
                    : "hotel"
                }`}
              >
                {detailData[0].resultList.partName}
              </Link>
            </li>
            <li>{detailData[0].resultList.title}</li>
          </ul>
          <div className="detailInfo">
            <div className="detailImg">
              <img
                src={
                  !detailData[0].resultList.imageList
                    ? `${process.env.PUBLIC_URL}/img/noImage.jpg`
                    : detailData[0].resultList.imageList[0].image
                }
                alt={`${detailData[0].resultList.title}`}
              />
            </div>
            <div className="detailTextBox">
              <div className="detailTitle">
                <span>{detailData[0].resultList.title}</span>
                <span>{detailData[0].resultList.partName}</span>
              </div>
              <div className="detailList">
                <div className="detailAd">
                  <i class="fa-solid fa-location-dot"></i>{" "}
                  <span>{detailData[0].resultList.address}</span>
                </div>
                <div className="detailTel">
                  <i class="fa-solid fa-phone"></i>
                  <span>{detailData[0].resultList.tel}</span>
                </div>
                <div className="detailTime">
                  <i class="fa-solid fa-clock"></i>
                  <span>{detailData[0].resultList.usedTime}</span>
                </div>
                <div className="detailUrl">
                  <i class="fa-solid fa-globe"></i>
                  <span>{detailData[0].resultList.homePage}</span>
                </div>
                <div className="detailKeyword">
                  <i class="fa-solid fa-pen-to-square"></i>
                  <span># {detailData[0].resultList.keyword}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DetailInfoList detailData={detailData} list={list}></DetailInfoList>
      <section className="infoList"></section>
    </>
  );
}

export default Detail;
