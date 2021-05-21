import React from 'react';
import { Link } from 'react-scroll';
import {
	FaGithub,
	FaLinkedin,
	FaInstagram,
	FaTwitter
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row inner-wrapper">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className='d-flex'>
                            <p>GTB Nagar</p>
                        </div>
                        <div className='d-flex'>
                            <p>New Delhi, India</p>
                        </div>
                        
                        <div className='d-flex'>
                            <a href='mailto:pratyushchamola@gmail.com'>
                                pratyushchamola@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-2 col-sm-6'>
						<div className='row'>
							<div className='col'>
								<Link smooth={true} to='home'  className="footer-nav" href="#">home <span className="sr-only">(current)</span></Link>
								<br />
								<Link smooth={true} to='about' offset={-110} className="footer-nav" href="#">about</Link>
								<br />
								<Link smooth={true} to='services' offset={-110} className="footer-nav" href="#">skills</Link>
							</div>
							<div className='col'>
							<Link smooth={true} to='experience' offset={-110} className="footer-nav" href="#">academics</Link>
								<br />
								<Link smooth={true} to='portfolio' offset={-110} className="footer-nav" href="#">portfolio</Link>
								<br />
								<Link smooth={true} to='contact' offset={-110} className="footer-nav" href="#">contact</Link>
							</div>
						</div>
					</div>



					<div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
						<div className='d-flex justify-content-center'>
							
							<a href="https://github.com/pratyushchamola"><FaGithub className="mx-3" /></a>
							
							<a href="https://www.linkedin.com/in/pratyush-chamola-72b104202"><FaLinkedin className="mx-3" /></a>
							
							<a href="https://twitter.com/savinay_nivedan"><FaTwitter className="mx-3" /></a>
							
							<a href="https://www.instagram.com/pratyushchamola_"><FaInstagram className="mx-3" /></a>
						</div>
						<p className='pt-3 text-center'>
							Copyright&copy;
							{new Date().getFullYear()}&nbsp;<br/>pratyushchamola_
						</p>
					</div>

                </div>
            </div>
        </div>
    )
}

export default Footer
