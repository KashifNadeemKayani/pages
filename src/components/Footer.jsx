import React from 'react';
import styles from './Footer.module.css';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Footer() {
  return (
    <div className={styles.container}>
    <footer className={styles.footer}>
      <p>© 2024 The Little Stationer. All rights reserved.</p>
      <a href="https://chat.whatsapp.com/GTAnqUA0zPgHCkp63sgCJf" className={`text-white mx-3 ${styles.anker}`} target="_blank" rel="noopener noreferrer" >
      <FontAwesomeIcon icon={faWhatsapp} size="2x"/> &nbsp; <u>Join Whatsapp</u></a>
    </footer>
    </div>
  );
}

export default Footer;
  