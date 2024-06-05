import { Link } from 'react-router-dom';
import './PageFooter.scss';
import Credit from './credit/Credit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const PageFooter = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer-links'>
          <div className='footer-links-div'>
            <h4>Business</h4>
            <Link to='about-farhad'>Join us</Link>
            <Link to='2'>Promote ads</Link>
            <Link to='3'>Send an email</Link>
          </div>

          <div className='footer-links-div'>
            <h4>Resoures</h4>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='x'>Privacy</Link>
          </div>

          <div className='footer-links-div'>
            <h4>Get in touch</h4>
            <div className='social-media'>
              <a to='https://www.google.com'>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a to=''>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a to=''>
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <p> Blog Web @{new Date().getFullYear()}</p>

          <div className='footer-bottom-links'>
            <Link to='x'>Terms & Conditions</Link>
            <Link to='x'>Privacy & Cookies</Link>
            <Link to='x'>Privacy Options</Link>
          </div>
        </div>
      </div>
      <Credit />
    </>
  );
};

export default PageFooter;
