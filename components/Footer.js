import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <h3>
              <span className={styles.accent}>AIM</span> Oilfield Services
            </h3>
            <p>
              A Liquid Measurement services contractor focused on the U.S.
              Upstream, Midstream and Refined Products market segments.
            </p>
          </div>

          <div>
            <h4 className={styles.footerHeading}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/safety">Safety</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.footerHeading}>Services</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/services">Custody Transfer Proving</Link></li>
              <li><Link href="/services">Gas Measurement</Link></li>
              <li><Link href="/services">LACT Maintenance</Link></li>
              <li><Link href="/services">Master Meter Proving</Link></li>
              <li><Link href="/services">Offshore Measurement</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.footerHeading}>Contact Us</h4>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>&#9742;</span>
              <span>+1 888 681 5638</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>&#9993;</span>
              <span>info@aimoilfieldservices.com</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>&#9900;</span>
              <span>2640 East Broadway St. Suite 106<br />Pearland, TX 77581</span>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Aim Oilfield Services, LLC. All rights reserved.</p>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/company/aim-oilfield-services-llc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://www.facebook.com/AIM-Oilfield-Services-LLC-110934600677600/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
