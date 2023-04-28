import { Link } from "react-router-dom";

function Header({ urlName }) {
  let blur = urlName === "/" ? "" : "bar";

  return (
    <header className={`hd ${blur}`}>
      <div className="hdInner mw">
        <Link to="/" className="logo">
          <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo" />
        </Link>
        <button className="btnSearch">검색하기</button>
      </div>
    </header>
  );
}

export default Header;
