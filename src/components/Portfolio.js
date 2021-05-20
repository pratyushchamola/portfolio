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



const Pofrfolio = () => {
    const openPopupboxInstagram = () => {
        const content = (
          <>
            <img className="portfolio-image-popupbox" src={instagram} alt="Instagram Clone Project..." />
            <p>Instagram clone, comprising of its basic features.Made using Reactjs, Tailwinds CSS, and firebase as database.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project")}>https://github.com/8020Coding/netflix-project</a>
          </>
        )
        PopupboxManager.open({ content })
      }
    
      const popupboxConfigInstagram = {
        titleBar: {
          enable: true,
          text: "Instagram clone project."
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
            <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://city-guide-app-project.herokuapp.com/", "_blank")}>https://city-guide-app-project.herokuapp.com/</a>
            <br />
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/city-guide-app", "_blank")}>https://github.com/8020Coding/city-guide-app</a>
          </>
        )
        PopupboxManager.open({ content })
      }
    
      const popupboxConfigFitbit = {
        titleBar: {
          enable: true,
          text: "Fitbit - exercise tracker project."
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
            {/* <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://portfolio-rea-and-material-ui.herokuapp.com/", "_blank")}>https://portfolio-rea-and-material-ui.herokuapp.com/</a>
            <br /> */}
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/portfilio", "_blank")}>https://github.com/8020Coding/portfilio</a>
          </>
        )
        PopupboxManager.open({ content })
      }
    
      const popupboxConfigEcommercejs = {
        titleBar: {
          enable: true,
          text: "Ecommercejs api project."
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
            <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://react-redux-task-manager.herokuapp.com/", "_blank")}>https://react-redux-task-manager.herokuapp.com/</a>
            <br />
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/task-manager", "_blank")}>https://github.com/8020Coding/task-manager</a>
          </>
        )
        PopupboxManager.open({ content })
      }
    
      const popupboxConfigChatApp = {
        titleBar: {
          enable: true,
          text: "ChatApp project using chatengine.io api."
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
          </div>
          <PopupboxContainer {...popupboxConfigInstagram} />
          <PopupboxContainer {...popupboxConfigFitbit} />
          <PopupboxContainer {...popupboxConfigEcommercejs} />
          <PopupboxContainer {...popupboxConfigChatApp} />
        </div>
      )
    }
    
    export default Pofrfolio;
        