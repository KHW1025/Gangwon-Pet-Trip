function DetailCaution({ detailData }) {
  const detailCautionText = detailData[0].resultList.policyCautions
    .split(/[-*]/)
    .map((item) => item.trim())
    .filter((item) => item !== "");

  return (
    <section className="detailCaution mw">
      <div className="detailTitleBox">
        <div className="dogIcon">
          <img
            src={`${process.env.PUBLIC_URL}/img/dogIcon4.png `}
            alt="dogIcon4"
          />
        </div>
        <span>주의사항</span>
      </div>
      <div className="detailCautionText">
        {detailCautionText.map((item, i) => (
          <p key={i}>
            <span>- </span>
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

export default DetailCaution;
