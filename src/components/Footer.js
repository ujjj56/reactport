import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div class="footer_title">
                <p>I AM FRONTEND DEVELOPER CHO YOO JUNG.</p>
                <h2>THANK YOU FOR COMING BY.</h2>
            </div>
            <div class="footer_line"></div>
            <div class="container">
                <ul>
                    <li>CHO YOO JUNG</li>
                    <li>+82 10 9342 0506</li>
                    <li>ujjj56@naver.com</li>
                    <li><Link to="">github</Link></li>
                    <li><Link to="">study</Link></li>
                </ul>
            </div>
            <address>COPYRIGHT © 2021 CHO YOO JUNG. WEBSITE MADE BY ME.</address>
        </footer>
    );
}

export default Footer;