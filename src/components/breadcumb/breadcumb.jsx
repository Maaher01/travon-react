import { useEffect } from "react";
import { Link } from "react-router-dom";

const BreadCumb = ({ title, location }) => {
  useEffect(() => {
    const elementsWithDataBgSrc = document.querySelectorAll("[data-bg-src]");

    elementsWithDataBgSrc.forEach((element) => {
      const src = element.getAttribute("data-bg-src");
      element.style.backgroundImage = `url(${src})`;
      element.removeAttribute("data-bg-src");
      element.classList.add("background-image");
    });
  }, []);
  return (
    <>
      <div
        className="breadcumb-wrapper "
        //data-bg-src="/src/assets/img/bg/breadcumb-bg.jpg"
        data-bg-src="https://wallpapercave.com/wp/wp4069431.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{title}</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{location}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCumb;
