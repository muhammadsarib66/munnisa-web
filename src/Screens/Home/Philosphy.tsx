import Images from "../../images/Images";
import { useLanguage } from "../../context/LanguageContext";
function Philosphy() {
  const { language } = useLanguage();
  return (
    <div className="philosphy">
      <div className="container">
        <div className="row  rows">
          <div className="col-sm-6">
            {language === "en" && (
              <div data-aos="fade-right" className="Philosphy-details">
                <div className="headings">
                  <h2>Our Philosophy of care.</h2>
                </div>
                <p>
                  It's the aim of Munissa Kare to deliver a service of personal
                  care and associated domestic services to meet the needs of
                  dependent Service User in their own home environment. All
                  individuals supported by, who work as an employee offer
                  skilled care to enable people supported by us to achieve their
                  optimum state of health and well-being. Individual choice and
                  personal decision-making are the right of all Service Users
                  and will be supported by all the people who work for Munissa
                  Kare. The right of independence will be respected and
                  encouraged for all Service Users. The individual uniqueness of
                  the Service Users, staff and visitors will be recognised and
                  these people will be treated with dignity and respect at all
                  times. The individual requirement for privacy will be
                  respected at all times and all information relating to
                  individuals will be treated in a confidential manner. We very
                  much recognise the individual need for personal fulfilment and
                  aim to offer individualised programmes of meaningful activity
                  to satisfy that needs of our Service Users and staff of
                  Munissa Kare.
                </p>
                <h5>
                  Munissa Kare Services is based on the Principle and Values
                  that:
                </h5>
                <h5>
                  Privacy:{" "}
                  <span>
                    Your care worker recognises your right to be left
                    alone,undisturbed and free from intrusion and public
                    attention.
                  </span>
                </h5>
              </div>
            )}
            {language === "hindi" && (
              <div data-aos="fade-right" className="Philosphy-details">
                <div className="headings">
                  <h2>हमारी देखभाल का सिद्धांत।</h2>
                </div>
                <p>
                  Munissa Kare का लक्ष्य है कि वह व्यक्तिगत देखभाल और संबंधित
                  घरेलू सेवाएं प्रदान करे ताकि विशेषज्ञ सेवा प्रयोगकर्ता की
                  आवश्यकताओं को उनके खुद के घर के वातावरण में पूरा कर सके। जो
                  लोग हमारे साथ कर्मचारी के रूप में काम करते हैं, वे सभी क़दर की
                  देखभाल प्रदान करते हैं ताकि हमारे द्वारा समर्थित लोग अपने
                  सर्वोत्तम स्वास्थ्य और भलाइ की स्थिति तक पहुँच सकें। सभी सेवा
                  प्रयोगकर्ताओं का अधिकार है व्यक्तिगत चयन और व्यक्तिगत निर्णय
                  लेने का, और यह सभी Munissa Kare के लोगों द्वारा समर्थित किया
                  जाएगा। सभी सेवा प्रयोगकर्ताओं के लिए स्वतंत्रता का अधिकार
                  समर्थन किया जाएगा और उनको प्रोत्साहित किया जाएगा। सेवा
                  प्रयोगकर्ताओं, कर्मचारियों और परिदृश्यकर्ताओं की व्यक्तिगत
                  अद्वितीयता को मान्यता दी जाएगी और इन लोगों के साथ सभी समय
                  गरिमा और आदर से व्यवहार किया जाएगा। व्यक्तिगत गोपनीयता की
                  आवश्यकता का समय के साथ समर्थन किया जाएगा और व्यक्तिगतों से
                  संबंधित सभी जानकारी को एक गोपनीय तरीके से व्यवस्थित किया
                  जाएगा। हम बहुत अच्छी तरह से स्वीकृत करते हैं व्यक्तिगत पूर्ति
                  की आवश्यकता को और उसे पूर्ण करने के लिए हमारे सेवा
                  प्रयोगकर्ताओं और Munissa Kare के कर्मचारियों की आवश्यकताओं को
                  संतुष्ट करने के लिए व्यक्तिगतीकृत कार्यक्रम प्रदान करने का
                  लक्ष्य है।
                </p>
                <h5>
                  Munissa Kare सेवाएं इस सिद्धांत और मूल्यों पर आधारित हैं जो
                  हैं:
                </h5>
                <h5>
                  गोपनीयता:{" "}
                  <span>
                    आपका देखभाल कार्यकर्ता आपको अकेले, अबाधित और उत्कृष्टता और
                    सार्वजनिक ध्यान से मुक्त रहने का अधिकार स्वीकार करता है।
                  </span>
                </h5>
              </div>
            )}
          </div>
          <div data-aos="fade-left" className="col-sm-6">
            <img src={Images.games} alt="game" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Philosphy;
