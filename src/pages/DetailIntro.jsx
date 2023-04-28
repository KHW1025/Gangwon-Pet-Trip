function DetailIntro({ detailData }) {
  return (
    <section className="detailIntro mw">
      <div className="detailTitleBox">
        <div className="dogIcon">
          <img
            src={`${process.env.PUBLIC_URL}/img/dogIcon4.png `}
            alt="dogIcon4"
          />
        </div>
        <span>소개</span>
      </div>
      <div className="detailIntroText">{detailData[0].resultList.content}</div>
    </section>
  );
}

export default DetailIntro;
