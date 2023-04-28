import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="ft">
      <div className="footerInner mw">
        <Link to="/" className="logo">
          <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo" />
        </Link>
        <p>
          공공 API를 활용하여 반려동물 동반 관광정보를 제공하는 사이트입니다.
        </p>
        <div className="githubLink">
          <div className="githubImg">
            <img
              src={`${process.env.PUBLIC_URL}/img/github.png`}
              alt="github"
            />
          </div>
          <Link to="https://github.com/KHW1025" className="linkUrl">
            <span>https://github.com/KHW1025</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
