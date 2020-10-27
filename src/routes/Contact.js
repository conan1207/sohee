import React from "react";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Contact.scss";
import face from "../img/about_face_on.png";

const Contact = () => {
  return (
    <section className="contact">
      <img src={face} alt="얼굴" className="face" />
      <div>
        <p>
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" color="#24292E" />
          <a href="https://github.com/conan1207" target="_blank" rel="noopener noreferrer" title="깃허브 새 창 열림">https://github.com/conan1207</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x" color="#BC5447" />
          ksohee1207@gmail.com
        </p>
      </div>
    </section>
  );
};

export default Contact;
