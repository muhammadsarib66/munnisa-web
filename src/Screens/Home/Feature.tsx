import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from "../../Data/DummyData";
import { Data2 } from "../../Data/DummyData";
import { useLanguage } from "../../context/LanguageContext";
function Feature() {
  const { language } = useLanguage();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="row space">
        <div className="headings">
          {language === "en" && <h2>Our Featured Services!</h2>}
          {language === "hindi" && <h2>हमारी विशिष्ट सेवाएँ!</h2>}
        </div>
        <div className="MySlider ">
          {language === "en" && (
            <Slider {...settings}>
              {Data.map((item) => (
                <div className="col-sm-4">
                  <div className="sliders">
                    <img src={item?.images} alt="Slide" />
                    <h6>{item?.title}</h6>
                  </div>
                </div>
              ))}
            </Slider>
          )}
          {language === "hindi" && (
            <Slider {...settings}>
              {Data2?.map((item) => (
                <div className="col-sm-4">
                  <div className="sliders">
                    <img src={item?.images} alt="Slide" />
                    <h6>{item?.title}</h6>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
}

export default Feature;
