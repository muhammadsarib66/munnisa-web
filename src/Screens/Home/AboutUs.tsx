import Images from "../../images/Images";
import { useLanguage } from "../../context/LanguageContext";

function AboutUs() {
  const { language } = useLanguage();
  return (
    <div className="philosphy">
      <div className="container">
        <div className="headings text-center">
          {language == "en" && <h2>About us</h2>}
          {language == "hindi" && <h2>हमारे बारे में</h2>}
        </div>

        <div className="row   rows">
          <div data-aos="fade-right" className="col-sm-6">
            <img src={Images.About} alt="game" />
          </div>
          <div className="col-sm-6">
            {language == "en" && (
              <div data-aos="fade-left" className="Philosphy-details">
                <div className="headings">
                  <h3>Our Team</h3>
                </div>
                <p>
                  Munissa Kare is a private family-owned organisation that has
                  developed and designed to enhance and promote independence to
                  our services user in the community. We provide a quality
                  domiciliary and special care services. Our organisation is
                  dedicated to supporting people whatever their age, gender
                  ,ethnicity, religion and level of care needed on a one to one
                  basis within the sanctity of their own home environment. Our
                  team is highly trained, experienced staff are commited to the
                  highest level of quality service to meet the needs of each
                  individual recieving our specialist support.
                </p>
              </div>
            )}
            {language == "hindi" && (
              <div data-aos="fade-left" className="Philosphy-details">
                <div className="headings">
                  <h3>हमारी टीम</h3>
                </div>
                <p>
                  Munissa Kare एक निजी परिवार स्वामित्व वाली संगठन है जो समुदाय
                  में हमारे सेवा प्रयोगकर्ता की स्वतंत्रता को बढ़ाने और प्रचारित
                  करने के लिए विकसित और डिज़ाइन किया गया है। हम गुणवत्ता युक्त
                  और विशेष देखभाल सेवाएं प्रदान करते हैं। हमारा संगठन हर उम्र,
                  लिंग, जाति, धर्म और देखभाल की आवश्यकता के स्तर पर एक से एक
                  मिलाकर उनके खुद के घर के वातावरण की शरण में व्यक्ति की समर्थन
                  करने के लिए समर्पित है। हमारी टीम उच्च प्रशिक्षित, अनुभवी
                  कर्मचारी हैं जो हर विशेषज्ञ समर्थन प्राप्त करने वाले व्यक्ति
                  की आवश्यकताओं को पूरा करने के लिए सर्वोच्च सेवा गुणस्तर की
                  कमीटेड हैं।
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
