import { Link } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
function Footer() {
  const { language } = useLanguage();
  return (
    <div>
      <div className="footers">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              {language === "en" && (
                <div className="footerlist">
                  <h6>START A PROJECT</h6>
                  <p>
                    We are ready for the challenge info@munissakareservices.com
                  </p>
                </div>
              )}
              {language === "hindi" && (
                <div className="footerlist">
                  <h6>परियोजना शुरू करें</h6>
                  <p>हम चुनौती के लिए तैयार हैं info@munissakareservices.com</p>
                </div>
              )}
            </div>
            <div className="col-sm-4">
              <div className="footerlist">
                {language == "en" && <h6>SAY HELLO</h6>}
                {language == "hindi" && <h6>नमस्ते कहें</h6>}
                <ul>
                  {language === "en" && (
                    <li>
                      <LuMapPin /> Office #12, 1 College Yard, 56 Winchester
                      Avenue,London NW67UA
                    </li>
                  )}
                  {language === "hindi" && (
                    <li>
                      <LuMapPin /> कार्यालय #12, 1 कॉलेज यार्ड, 56 विनचेस्टर
                      एवेन्यू, लंदन NW67UA
                    </li>
                  )}
                  <li>
                    <MdOutlinePhone />{" "}
                    <Link to="tel:02086292777">0208-6292777</Link>
                    <li>
                      <MdOutlinePhone />{" "}
                      <Link to="tel:07951404949">0795-1404949</Link>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              {language === "en" && (
                <div className="footerlist">
                  <h6>Jobs</h6>
                  <p>
                    We are always looking for talent
                    info@munissakareservices.com
                  </p>
                </div>
              )}
              {language === "hindi" && (
                <div className="footerlist">
                  <h6>नौकरियां</h6>
                  <p>
                    हमें हमेशा प्रतिभा की तलाश है info@munissakareservices.com
                  </p>
                </div>
              )}{" "}
              <div className="socialicon">
                <div className="footerlist">
                  {language == "en" && <h6>Social links</h6>}
                  {language == "hindi" && <h6>सामाजिक संपर्क</h6>}
                </div>
                <ul>
                  <li>
                    <Link to="/">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        all &#169;copy right reserved by munissa care services
      </div>
    </div>
  );
}

export default Footer;
