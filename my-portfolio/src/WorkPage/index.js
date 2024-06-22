import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import Header from '../Components/Header/index.js';

export const WorkPage = () => {
   
    return (
        <>
            <div className="workPage">
                <Header />
                <div className="works">
                    <div className="example">
                        <div className="title"><h1>News</h1></div>
                        <div className="desc"><p>Group project where we created News website using php, css, HTML <a href="https://github.com/kp2129/news">GitHub</a></p></div>
                    </div>
                    <div className="example">
                        <div className="title"><h1>DinoGame</h1></div>
                        <div className="desc"><p>Group project where we created simple endless game in GodDot <a href="https://github.com/Skrazzo/DinoGame">GitHub</a></p></div>
                    </div>
                    <div className="example">
                        <div className="title"><h1>Todo-sists</h1></div>
                        <div className="desc"><p>Group project where we created simple todo website in react and laravel <a href="https://github.com/puab/todo-sists">GitHub</a></p></div>
                    </div>
                    <div className="example">
                        <div className="title"><h1>Memory game</h1></div>
                        <div className="desc"><p>Memory game with levels and shop created by React and Laravel</p></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkPage;
