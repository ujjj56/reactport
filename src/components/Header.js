import React from "react";
import { Link } from "react-router-dom";

function Header({ info }) {
  return (
    <header>
        <nav class="foot_menu">
            <ul>
                <li class="menu active">
                    <Link to="/about" class="page__click">ABOUT</Link>
                    <span>*</span>
                </li>
                <li class="menu">
                    <Link to="/portfolio" class="page__click">PORTFOLIO</Link>
                    <span>*</span>
                </li>
                <li class="menu">
                    <Link to="/animation" class="page__click">ANIMATION</Link>
                    <span>*</span>
                </li>
                <li class="menu">
                    <Link to="/contact" class="page__click">CONTACT</Link>
                    <span>*</span>
                </li>
            </ul>
        </nav>
        <nav class="mid_menu mid_fff">
            <Link to="/main" class="menu_btn">
                <svg width="71" height="68" viewBox="0 0 71 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.5 0L40.6891 22.0017L60.6023 9.95837L48.0276 29.0301L71 34L48.0276 38.9698L60.6023 58.0416L40.6891 45.9983L35.5 68L30.3109 45.9983L10.3977 58.0416L22.9724 38.9698L0 34L22.9724 29.0301L10.3977 9.95837L30.3109 22.0017L35.5 0Z" fill="#1052FA"/>
                    </svg>                           
            </Link>
            <Link to="http://ujjj.dothome.co.kr/port/index3.html" class="site_btn_a">
                <div class="site_btn">
                <span>other site</span>
                </div>
            </Link>
        </nav>
    </header>
  );
}
export default Header;