import React from "react";
import Header from "../Header";
import Layout from '../Layout';
import Footer from '../Footer';

function Main() {
  return (
    <body>
        <Header />
        <div id="loader"></div>
        <Layout name="main" className="content__item content__item--home">
            <h6 className="top_title split">CHO YOO JUNG</h6>
            <div className="container">    
                <div className="main_title">
                    <div className="main_1st">
                        <img src="img/symbol-1-blue.png" alt="main_symbol_eye" />
                        <h1>FRONTEND</h1>
                    </div>
                    <div class="main_2nd">
                        <img src="img/symbol-2-blue.png" alt="main_symbol_frame" />
                        <h1>U&nbsp;&nbsp;JUNG'S</h1>
                        <span><img src="img/symbol-3-blue.png" alt="main_symbol_finger" /></span>
                    </div>
                    <div class="main_3rd">
                        <img src="img/symbol-4-blue.png" alt="main_symbol_arrow" />
                        <h1>REACT <span>SITE</span></h1>
                    </div>
                </div>
            </div>
        </Layout>
        <section id="intro">
            <div className="repeat_title">
                <h1 className="repeat">HTML  CSS  JAVASCRIPT HTML  CSS  JAVASCRIPT HTML  CSS HTML  CSS  JAVASCRIPT HTML  CSS  JAVASCRIPT HTML  CSS HTML  CSS  JAVASCRIPT HTML  CSS  JAVASCRIPT HTML  CSS HTML  CSS  JAVASCRIPT HTML  CSS  JAVASCRIPT HTML  CSS HTML  CSS  JAVASCRIPT HTML  CSS  JAVASCRIPT HTML  CSS HTML  CSS  JAVASCRIPT HTML  CSS  JAVASCRIPT HTML  CSS HTML  CSS  JAVASCRIPT HTML  CSS  JAVASCRIPT HTML  CSS HTML  CSS  JAVASCRIPT HTML  CSS  JAVASCRIPT HTML  CSS HTML  CSS  JAVASCRIPT HTML  CSS  JAVASCRIPT HTML  CSS HTML  CSS  JAVASCRIPT HTML  CSS  JAVASCRIPT</h1>
                <h1 className="repeat_reverse">PHP  REACT  PHOTOSHOP  ILLUSTRATION PHP  REACT  PHOTOSHOP  ILLUSTRATION PHP  REACT  PHOTOSHOP  ILLUSTRATION PHP  REACT  PHOTOSHOP  ILLUSTRATION PHP  REACT  PHOTOSHOP  ILLUSTRATION PHP  REACT  PHOTOSHOP  ILLUSTRATION PHP  REACT  PHOTOSHOP  ILLUSTRATION PHP  REACT  PHOTOSHOP  ILLUSTRATION</h1>
            </div>
            <div className="container">
                <div className="intro_circle circle">
                    <span>AND MORE...</span>
                </div>

                <div className="next_container">
                    <a href="../pages/about.html" className="next page__click2">
                    <span>NEXT</span>
                    <div className="next_line"></div>
                    <div className="next_wrap">
                        <h2 className="next_title">ABOUT</h2>
                        <img src="../assets/img/symbol-4-fff.png" alt="next_symbol"/>
                    </div>
                    </a>
                </div>
            </div>
        </section>
        <Footer />
    </body>
  );
}

export default Main;