function DetailPrice({ detailData }) {
  const detailPriceText = detailData[0].resultList.usedCost
    .split(/[-*]/)
    .map((item) => item.trim())
    .filter((item) => item !== "");

  return (
    <section className="detailPrice mw">
      <div className="detailTitleBox">
        <div className="dogIcon">
          <img
            src={`${process.env.PUBLIC_URL}/img/dogIcon4.png `}
            alt="dogIcon4"
          />
        </div>
        <span>이용요금</span>
      </div>
      <div className="detailPriceText">
        {detailPriceText.map((item, i) => (
          <p key={i}>
            <span>- </span>
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

export default DetailPrice;
