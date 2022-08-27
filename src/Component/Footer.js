import React from "react";
import Playstore from "./Images/playStore.svg";
import Applestore from "./Images/appleStore.svg";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import twitter from './Images/twitter.svg';
const Footer = () => {
  return (
    <div className="footer">
      <div className="subFooter">
        <div className="firstSectionFooter">
          <div>
            <ul>
              <li>Company</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Support</li>
              <li>Help Center</li>
              <li>Safety Center</li>
            </ul>
          </div>
        </div>
        <div className="secondSectionFooter">
          <div>
            <ul>
              <li>Legal</li>
              <li>Cookies Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Dispute resolution</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Install App</li>
              <li>
                <img src={Playstore} alt="playstore" />
              </li>
              <li>
                <img src={Applestore} alt="playstore" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="lastSubFooter">
        <div>
          <p>&#169; 2021 SIMEON, All rights reserved</p>
        
        </div>
        <div className="socials">
          <div>
            <FaInstagram  className="icons"/>
          </div>
          <div><FaYoutube />
          </div>
          <div>
            <img src={twitter} alt='twitter'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
