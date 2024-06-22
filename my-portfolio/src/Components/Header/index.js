import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="header">
                <a href="/"><h1>Excel</h1></a>
                <button onClick={toggleSidebar}>
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>

            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSidebar}>X</button>
                <a href="#" onClick={() => navigate('/')}>Home</a>
                <a href="#" onClick={() => navigate('/work')}>My work</a>
                <a href="#" onClick={() => navigate('/review')}>My review</a>
                <div className="social">
                    <a href="">Instagram</a>
                    <a href="">Facebook</a>
                </div>
            </div>
            {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
        </>
    );
}
