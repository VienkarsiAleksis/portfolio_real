import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import Header from '../Components/Header/index.js';
import me from '../Images/me.jpg';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/index.js';
import { FaPhp } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

export const MainPage = () => {
    const form = useRef();
    const [formErrors, setFormErrors] = useState({});
    const [formValues, setFormValues] = useState({
        from_name: '',
        user_email: '',
        message: ''
    });
    const [emailStatus, setEmailStatus] = useState('');

    // Function to check if an element is in viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Function to handle scroll events
    const handleScroll = () => {
        const elements = document.querySelectorAll('.main h1, .main p, .main img');
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    };

    // Listen for scroll events
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to handle form submission
    const sendEmail = (e) => {
        e.preventDefault();
        if (validateForm()) {
            emailjs
                .sendForm('service_p25bsnb', 'template_l9rkseu', form.current, {
                    publicKey: 'gK9BIDV6QbW4_3ReV',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        setFormValues({ from_name: '', user_email: '', message: '' }); // Reset form values
                        setFormErrors({}); // Reset form errors
                        setEmailStatus('Email sent successfully!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setEmailStatus('Failed to send email. Please try again later.');
                    },
                );
        }
    };

    // Function to handle form value changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // Function to validate form inputs
    const validateForm = () => {
        let errors = {};

        if (!formValues.from_name) {
            errors.from_name = 'Name is required';
        }

        if (!formValues.user_email) {
            errors.user_email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.user_email)) {
            errors.user_email = 'Email address is invalid';
        }

        if (!formValues.message) {
            errors.message = 'Message is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    return (
        <>
            <div className="main">
                <Header />
                <div className="welcome" id="about">
                    <div className="main-border">
                        <div className="about">
                            <h1>Full-stack developer.</h1>
                            <p>I like to craft simple, modern and easy to navigate website products.</p>
                            <p>Aleksis Ošiņš, Latvia/Cēsis, 19 years old.</p>
                            <p>Can do backflip and lot more :D</p>
                        </div>
                        <div className="picture">
                            <img src={me} alt="" />
                        </div>
                    </div>
                </div>
                <div className="website" id="web">
                    <div className="left">
                        <h1>Design</h1>
                        <p>I excel in creating sophisticated and intuitive homepage designs, meticulously focusing on typography, including font sizes and styles, as well as the overall layout. My approach ensures a harmonious and visually appealing user experience.</p>
                    </div>
                    <div className="right">
                        <h1>Skills</h1>
                        <p>I possess advanced proficiency in JavaScript, PHP, and the Laravel framework. Additionally, I am highly skilled in React for front-end development and CSS for styling. My expertise extends to database management with MySQL, and I have foundational knowledge in C++ programming.</p>
                        <div className="images">
                            <FaPhp size={48} />
                            <FaCss3Alt size={48}/>
                            <FaReact size={48}/>
                            <FaLaravel size={48}/>
                            <SiMysql size={48}/>
                        </div>
                    </div>
                </div>
                <div className="exp" id="exp">
                    <div className="text">
                        <h1>Over the years, </h1>
                        <p>Currently, I have no work experience as a programmer, but I am looking to be programmer as a front-end developer, looking at other work experiences, I do my work with quality and I do it with seriousness</p>
                        <p>I am currently studying at the <a href="https://www.vtdt.lv/">Vidzeme Technology and Design Vocational school</a> as a programmer in the 3rd course with excellent results</p>
                        <p>At the vocational school we are taught PHP, C++, MySQL, React and Laravel and it was difficult for me at the beginning, but with time I learned it all.</p>
                    </div>
                    <div className="picture1">
                        <img src="https://scontent.frix3-1.fna.fbcdn.net/v/t39.30808-6/375179296_844593020518054_2310059935846251665_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gTN5d59pexEQ7kNvgEf_eIv&_nc_ht=scontent.frix3-1.fna&oh=00_AYABg1z13m-ozKLSk1xXjezVXZQ9Er1qrGi0FpnPMyXEtQ&oe=6670CDF0" alt="" />
                    </div>
                </div>
                <div className="work" id="work">
                    <div className="work-border">
                        <div className="work-link">
                            <h1>I build & design stuff</h1>
                            <p>Open source projects, web apps and experimentals.</p>
                            <a href="/work">See my work <span className="material-symbols-outlined">arrow_right_alt</span></a>
                        </div>
                        <div className="review-link">
                            <h1>What people think about me?</h1>
                            <p>Open reviews about me.</p>
                            <a href="/review">See review <span className="material-symbols-outlined">arrow_right_alt</span></a>
                        </div>
                    </div>
                </div>
                <div className="email" id="email">
                    <h1>Send me a message!</h1>
                    <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
                    {emailStatus && <p className="status-message">{emailStatus}</p>}
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="name-input">
                            <label>Name</label>
                            <input type="text" name="from_name" placeholder='Enter your name' value={formValues.from_name} onChange={handleChange} />
                            {formErrors.from_name && <span className="error">{formErrors.from_name}</span>}
                        </div>
                        <div className="email-input">
                            <label>Email</label>
                            <input type="email" name="user_email" placeholder='Enter your email' value={formValues.user_email} onChange={handleChange} />
                            {formErrors.user_email && <span className="error">{formErrors.user_email}</span>}
                        </div>
                        <div className="message-input">
                            <label>Message</label>
                            <textarea name="message" placeholder='Hi! love your websites, keep it up!' value={formValues.message} onChange={handleChange} />
                            {formErrors.message && <span className="error">{formErrors.message}</span>}
                            {emailStatus && <span className="success">{emailStatus}</span>}
                            
                        </div>
                        <input type="submit" value="Send" className='button' />
                    </form>
                </div>
                {/* Navigation buttons */}
                <div className="navigation-buttons">
                    <a href="#about" className="nav-button"></a>
                    <a href="#web" className="nav-button"></a>
                    <a href="#exp" className="nav-button"></a>
                    <a href="#work" className="nav-button"></a>
                    <a href="#email" className="nav-button"></a>
                </div>
            </div>
        </>
    );
};

export default MainPage;
