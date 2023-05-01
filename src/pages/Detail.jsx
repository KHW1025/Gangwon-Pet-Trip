import { useParams } from "react-router-dom";
import DetailInfoList from "./DetailInfoList";

function Detail({ list }) {
  let { id } = useParams();
  let detailData = list.filter(
    (item) => item.resultList.contentSeq === Number(id)
  );

  return (
    <>
      <section className="detailBanner">
        <div className="detailBannerInner mw">
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
