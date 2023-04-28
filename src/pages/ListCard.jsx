import { Link } from "react-router-dom";

function ListCard({ item }) {
  return (
    <div className="listCard">
      <Link to={`/detail/${item.resultList.contentSeq}`}>
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
            <span className="cardTitle">{item.resultList.title}</span>
            <span className="cardCate">{item.resultList.partName}</span>
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
      </Link>
    </div>
  );
}

export default ListCard;
