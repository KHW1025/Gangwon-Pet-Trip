import MainBanner from "./MainBanner";
import MainMap from "./MainMap";
import KeywordRecommend from "./KeywordRecommend";
import Hospital from "./Hospital";

function Main({ list }) {
  return (
    <section className="main">
      <MainBanner></MainBanner>
      <MainMap list={list}></MainMap>
      <KeywordRecommend list={list}></KeywordRecommend>
      <Hospital></Hospital>
    </section>
  );
}

export default Main;
