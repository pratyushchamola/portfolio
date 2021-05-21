import React from "react";
import instagram from '../images/insta-signup2.jpg';
import Fitbit from '../images/FS-exercise_tracker-1.jpg';
import Ecommercejs from '../images/commerce1.jpg';
import ChatApp from '../images/FS-chat_app-2.jpg';
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {
    const openPopupboxInstagram = () => {
        const content = (
          <>
            <img className="portfolio-image-popupbox" src={instagram} alt="Instagram Clone Project..." />
            <p>Instagram clone, comprising of its basic features.Made using Reactjs, Tailwinds CSS, and firebase as database.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/pratyushchamola/instagram-clone")}>https://github.com/pratyushchamola/instagram-clone</a>
          </>
        )
        PopupboxManager.open({ content })
      }
    
      const popupboxConfigInstagram = {
        titleBar: {
          enable: true,
          text: "Portfolio"
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    
      // Fitbit App
      const openPopupboxFitbit = () => {
        const content = (
          <>
            <img className="portfolio-image-popupbox" src={Fitbit} alt="Fitbit Project..." />
            <p>Fitbit a full-stack web app, where user(s) are keep a log of their exercises. Build using MERN stack.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/pratyushchamola/fitbit", "_blank")}>https://github.com/pratyushchamola/fitbit</a>
          </>
        )
        PopupboxManager.open({ content })
      }
    
      const popupboxConfigFitbit = {
        titleBar: {
          enable: true,
          text: "Portfolio"
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    
      // E-commercejs Project
      const openPopupboxEcommercejs = () => {
        const content = (
          <>
            <img className="portfolio-image-popupbox" src={Ecommercejs} alt="Ecommercejs Project..." />
            <p>Ecommercejs is an e-commerce web service made with the help of ecommercejs.com api, which handles the backend.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/pratyushchamola/ecommercejs", "_blank")}>https://github.com/pratyushchamola/ecommercejs</a>
          </>
        )
        PopupboxManager.open({ content })
      }
    
      const popupboxConfigEcommercejs = {
        titleBar: {
          enable: true,
          text: "Portfolio"
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    
      // Chat-app Project
      const openPopupboxChatApp = () => {
        const content = (
          <>
            <img className="portfolio-image-popupbox" src={ChatApp} alt="ChatApp Project..." />
            <p>A chat app project made using <b>chatengine.io</b> api, has all the features of a chat app.</p>
            <b>GitHub:</b> <a className="hyper-link gitlink" onClick={() => window.open("https://github.com/pratyushchamola/charcha-the-chat-app", "_blank")}>https://github.com/pratyushchamola/charcha-the-chat-app</a>
          </>
        )
        PopupboxManager.open({ content })
      }
    
      const popupboxConfigChatApp = {
        titleBar: {
          enable: true,
          text: "Portfolio"
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    
    
      return (
        <div className="portfolio-wrapper" id="portfolio">
          <div className="container">
            <h1 className="text-uppercase text-center py-5">portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">
              <div className="portfolio-image-box col" onClick={openPopupboxInstagram}>
              <div className="control-overflow">
                  <img className="portfolio-image" src={instagram} alt="Instagram Clone Project..." />
                  <div className="overflow"></div>
                  <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              </div>
              </div>
              {/* - */}
              <div className="portfolio-image-box col" onClick={openPopupboxFitbit}>
              <div className="control-overflow">
                <img className="portfolio-image" src={Fitbit} alt="Fitbit Project..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              </div>
              </div>
              {/* - */}
              <div className="portfolio-image-box col" onClick={openPopupboxEcommercejs}>
              <div className="control-overflow">
                <img className="portfolio-image" src={Ecommercejs} alt="Ecommerce Project using ecommercejs api Project..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              </div>
              </div>
              {/* - */}
              <div className="portfolio-image-box col" onClick={openPopupboxChatApp}>
              <div className="control-overflow">
                  <img className="portfolio-image" src={ChatApp} alt="Chatapp project using chatengine api..." />
                  <div className="overflow"></div>
                  <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              </div>
              </div>
  
            </div>

            <div className="row justify-content-center manyMore">
              <a href="https://github.com/pratyushchamola/" target="_blank"><p>...and many more here</p></a>
            </div>
          </div>
          <PopupboxContainer {...popupboxConfigInstagram} />
          <PopupboxContainer {...popupboxConfigFitbit} />
          <PopupboxContainer {...popupboxConfigEcommercejs} />
          <PopupboxContainer {...popupboxConfigChatApp} />
        </div>
      )
    }
    
    export default Portfolio;
        