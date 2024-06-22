import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import Header from '../Components/Header/index.js';

export const ReviewPage = () => {
   
    return (
        <>
            <div className="reviewPage">
                <Header />
                <div className="reviews">
                    <div className="example-review">
                        <div className="name"><p>John Doe</p></div>
                        <div className="desc"><p>Working with Aleksis was an absolute pleasure. His attention to detail and commitment to delivering high-quality work is commendable. He has a deep understanding of both frontend and backend technologies, making him a versatile developer. I highly recommend him for any web development project!</p></div>
                    </div>
                    <div className="example-review">
                        <div className="name"><p>Jane Smith</p></div>
                        <div className="desc"><p>Aleksis is a highly skilled developer with a knack for creating intuitive and visually appealing designs. His proficiency in React and Laravel is impressive, and he always ensures that the final product meets the client's expectations. He's a great asset to any development team.</p></div>
                    </div>
                    <div className="example-review">
                        <div className="name"><p>Michael Johnson</p></div>
                        <div className="desc"><p>Aleksis has a unique ability to turn complex requirements into simple, elegant solutions. His work on our project was outstanding, and he delivered everything on time and within budget. His expertise in JavaScript and PHP is top-notch, and he's always willing to go the extra mile to ensure client satisfaction.</p></div>
                    </div>
                    <div className="example-review">
                        <div className="name"><p>Emily Davis</p></div>
                        <div className="desc"><p>Aleksis's dedication to his craft is evident in the quality of his work. He is thorough, communicative, and always open to feedback. His designs are modern and user-friendly, and his coding skills are exceptional. I look forward to working with him again in the future.</p></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewPage;
