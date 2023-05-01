import MainBanner from "./MainBanner";
import MainMap from "./MainMap";
import KeywordRecommend from "./KeywordRecommend";
import HospitalSec from "./HospitalSec";

function Main({ list }) {
  return (
    <section className="main">
      <MainBanner></MainBanner>
      <MainMap list={list}></MainMap>
      <KeywordRecommend list={list}></KeywordRecommend>
      <HospitalSec></HospitalSec>
    </section>
  );
}

export default Main;
