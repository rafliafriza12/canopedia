// components/footer/footer.tsx

import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <h3>About.</h3>
          <p>Lorem</p>
          <p>Lorem.</p>
          <p>Lorem.</p>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <div className={styles.contactUs}>
            <h3>Contact Us</h3>
            <p>+1 (999) 888-77-66</p>
            <p>atharrayyan@gmail.com</p>
          </div>

          <div className={styles.location}>
            <h3>Location</h3>
            <p>483920, Banda Aceh,</p>
            <p>Lambhuk, sampang rumah maudy</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}></div>
    </footer>
  );
};

export default Footer;