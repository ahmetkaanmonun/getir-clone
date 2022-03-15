import React from "react";
import "./Banner.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Banner() {
  const images = [
    { url: "assets/images/getir-mainpage-1.jpg" },
    { url: "assets/images/getir-mainpage-4.jpg" },
    { url: "assets/images/getir-mainpage-2.jpg" },
    { url: "assets/images/getir-mainpage-3.jpg" },
  ];

  return (
    <div className="banner ">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={1000}
        bullets={false}
        buttons={false}
        className="banner__slider"
      >
        {images.map((image) => (
          <div data-src={image.url} />
        ))}
      </AutoplaySlider>
      <div className="banner-left-content">
        <div className="banner-left-image">
          <img
            className="banner-left-logo"
            src="/assets/images/bimutluluk.svg"
          ></img>
        </div>
        <h1 className="text-light">
          Dakikalar içinde <br />
          kapınızda
        </h1>
      </div>
      <div className="banner-right-content border rounded">
        <div className="d-flex flex-column align-items-center banner-right-content-box">
          <h5 className="banner-right-text">Giriş yap veya kayıt ol</h5>
          <form className="d-flex mt-4">
            <div className="mr-2">
              <input type="tel" className="phone-input"></input>
            </div>
            <div>
              <input type="tel" className="phone--input"></input>
            </div>
          </form>
          <div
            className="btn-warning btn-phone border rounded mt-5 text-center"
            type="submit"
          >
            <p>Telefon numarası ile devam et</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
