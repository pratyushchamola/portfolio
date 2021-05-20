import React from 'react';
import author from '../images/avatars/home__title.png';

const AboutMe = () => {
    return (
        <div className="container py-5" id="about">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>

                <div className="col-lg-6 col-xm-12 p">
                    <h1 className="about-heading">about me</h1>
                    <p className="about-me-para">
                        Hello! I am Pratyush, Delhi based Engineering Student.
                        I'm a Full-Stack Web Developer, using MERN stack, and
                        currently getting better with python Django.
                        I create cross-platform, responsive web applications.
                        I am fond of backend.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
