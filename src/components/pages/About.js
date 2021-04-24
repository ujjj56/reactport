import React from 'react';
import Header from "../Header";
import Layout from '../Layout';
import Footer from '../Footer';


function About() {
  return (
    
    <body>
        <Header/>
        <div id="loader"></div>
        <Layout name="about">
            <div className="repeat_title">
                <h1 className="repeat">ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION</h1>
                <h1 className="repeat_reverse">CSS JAVASCRIPT CSS JAVASCRIPT CSS JAVASCRIPT CSS JAVASCRIPT CSS JAVASCRIPT CSS JAVASCRIPT CSS JAVASCRIPT CSS JAVASCRIPT CSS JAVASCRIPT CSS JAVASCRIPT CSS JAVASCRIPT CSS JAVASCRIPT CSS JAVASCRIPT CSS JAVASCRIPT CSS JAVASCRIPT CSS JAVASCRIPT CSS JAVASCRIPT CSS JAVASCRIPT</h1>
            </div>
        </Layout>
        <Footer />
    </body>
  );
}

export default About;