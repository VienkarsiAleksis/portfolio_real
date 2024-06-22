import React from 'react';
import './index.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <h2>About Me</h2>
                    <p>I'm Aleksis Ošiņš, a passionate full-stack developer from Cēsis, Latvia. I enjoy creating simple, modern, and easy-to-navigate web applications.</p>
                </div>
                <div className="footer-social">
                    <h2>Follow Me</h2>
                    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i> Instagram
                    </a>
                    <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i> Facebook
                    </a>
                </div>
            </div>
        </footer>
    );
}
