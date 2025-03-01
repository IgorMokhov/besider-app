import styles from './Footer.module.scss';
import footerImg from '../../assets/footer-img.svg';
import { Link } from 'react-router';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_links}>
        <Link to="#">Log In</Link>
        <Link to="#">About Us</Link>
        <Link to="#">Publishers</Link>
        <Link to="#">Sitemap</Link>
      </div>
      <p>Powered by</p>
      <img className={styles.footer_img} src={footerImg} alt="footer image" />
      <p>© 2023 Besider. Inspired by Insider</p>
    </footer>
  );
};
