import React from "react";
import myLogo from "./img/logo.png";
import discordlogo from "./img/discord.png";
import Ikelogo from "./img/logo-S.png";
import Telegramlogo from "./img/telegram.png";
import twitterlogo from "./img/twitter.png";

function FooterX() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-section1">
          <div className="logo-container">
            <img className="footer-imglogo" src={myLogo} alt="logo"></img>
            <p className="footer-textlogo">IketSwap</p>
          </div>
          <div className="footer-section1-text">
            <p className="footer-text">
              Our community is building a comprehensive, decentralized trading
              platform for the future of finance. Join us!
            </p>
          </div>
        </div>
        <div className="footer-section2">
          <p className="footer-text2">SUPPORT</p>
          <div className="footer-linksbox">
            <div className="linksbox1">
              <div className="telegram">
                <img
                  className="telegramlogo"
                  src={Telegramlogo}
                  alt="logo"
                ></img>
                <a href="https://t.me/iketokenlaunch">Telegram</a>
              </div>
              <div className="twitter">
                <img className="twitterlogo" src={twitterlogo} alt="logo"></img>
                <a
                  href="https://mobile.twitter.com/IkeToken"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>
            </div>
            <div className="linksbox2">
              <div className="Ike">
                <img className="Ikelogo" src={Ikelogo} alt="logo"></img>
                <a
                  href="https://www.iketoken.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IkeToken
                </a>
              </div>
              <div className="discord">
                <img className="discordlogo" src={discordlogo} alt="logo"></img>
                <a href="https://discord.com/">Discord</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterX;
