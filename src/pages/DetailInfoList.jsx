import DetailIntro from "./DetailIntro";
import DetailPrice from "./DetailPrice";
import DetailCaution from "./DetailCaution";
import RecommendPlace from "./RecommendPlace";

function DetailInfoList({ detailData, list }) {
  return (
    <>
      <DetailIntro detailData={detailData}></DetailIntro>
      <DetailPrice detailData={detailData}></DetailPrice>
      <DetailCaution detailData={detailData}></DetailCaution>
      <RecommendPlace detailData={detailData} list={list}></RecommendPlace>
    </>
  );
}

export default DetailInfoList;
