import './FooterColumnRRSS.scss'

const FooterColumnRRSS = () => {
    return (
      <div>
        
          <div className="footer__language">Lenguaje</div>
          <div className="footer__text">
            <div className="footer__text-rrss">Siguenos</div>
            <div className="footer__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-rrss"
                alt="facebook-icon"
              >
                IMAGEN FACEBOOK
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-rrss"
                alt="instagram-icon"
              >
                IMAGEN INSTAGRAM
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-rrss"
                alt="twitter-icon"
              >
                IMAGEN TWITTER
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-rrss"
                alt="linkedin-icon"
              >
                IMAGEN LINKEDIN
              </a>
            </div>
          </div>
        
        <div className="footer-copyright">
          <div className="body-s">© 2023 E-LOAD</div>
        </div>
      </div>
    );
}

export default FooterColumnRRSS