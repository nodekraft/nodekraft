import React from 'react';
import classNames from 'classnames';
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

// Social media links for footer section
const FooterSocial = ({
  className,
  ...props
}) => {

  const facebook = <i class="fab fa-facebook"></i>

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
       

        {/* GitHub Icon */}
        <li>
          <a href="https://github.com/nodekraft">
            <svg
              width="24"
              height="24"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <title>GitHub</title>
              <FaGithub />
            </svg>
          </a>
        </li>

        {/* Instagram Icon */}
        <li>
          <a href="https://instagram.com/nodekraft">
            <svg
              width="24"
              height="24"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <title>Instagram</title>
              <FaInstagram />
            </svg>
          </a>
        </li>

        {/* UpWork Icon */}
        <li>
          <a href="https://www.upwork.com/freelancers/~01a7a442c3be487f34">
            <svg
              width="24"
              height="24"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <title>UpWork</title>
              <SiUpwork />
            </svg>
          </a>
        </li>    
      </ul>
    </div>
  );
}

export default FooterSocial;