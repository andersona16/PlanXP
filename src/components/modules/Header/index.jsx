import React, { useState } from "react";
import Styles from "./styled";
import mainLogo from "../../../assets/img/mainLogo.png";

import arrowRight from "../../../assets/img/arrow.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, settoggle] = useState(true);
  const navOpen = () => {
    settoggle(!toggle);
  };

  return (
    <Styles toggle={toggle}>
      <aside>
        <img className="logo" src={mainLogo} alt="Logo Plan XP" />
        <div className="navBar" onClick={navOpen}>
          <div>&times;</div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={navOpen}>
                /Quem somos
              </Link>
              <span>01.</span>
            </li>
            <li>
              <Link to="/" onClick={navOpen}>
                /o que fazemos
              </Link>
              <span>02.</span>
            </li>
            <li>
              <Link to="/news" onClick={navOpen}>
                /plan news
              </Link>
              <span>03.</span>
            </li>
            <li>
              <Link to="/" onClick={navOpen}>
                /nossos clientes
              </Link>
              <span>04.</span>
            </li>
            <li>
              <Link to="/contact" onClick={navOpen}>
                /contato
              </Link>
              <span>05.</span>
            </li>
          </ul>

          <div className="bottomLink">
            <p>
              <Link to="/">Que tal inovar com a gente?</Link>
            </p>
            <span> ;) </span>
            <img src={arrowRight} alt="Seta" />
          </div>
        </nav>
      </aside>
    </Styles>
  );
};

export default Header;
