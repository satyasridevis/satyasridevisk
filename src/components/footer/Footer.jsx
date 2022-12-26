import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"


import './footer.css'


const Footer = () => {
    return (
        <footer className="footer-section">

            <a href="https://github.com/satyasridevis" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} size="3x" /></a>
            <a href="https://www.linkedin.com/in/satya-sridevi-84b3651b5/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
            <a href="https://www.instagram.com/satyasridevik" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faInstagram} size="3x" /></a>
            <a href="https://www.youtube.com/@satyasridevi851" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faYoutube} size="3x" /></a>
            <a href="https://twitter.com/SatyaSridevi7" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faTwitter} size="3x" /></a>













        </footer >
    )
}

export default Footer