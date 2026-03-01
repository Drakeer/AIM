import Hero from '@/components/Hero';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us | AIM Oilfield Services',
  description: 'Contact AIM Oilfield Services for liquid measurement services, meter proving, and oilfield maintenance. Call +1 888 681 5638.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        small
        title="Contact Us"
        subtitle="Get in touch with our team for a quote or to learn more about our services."
      />

      <section className={styles.contactSection}>
        <div className={styles.contactInner}>
          <div className={styles.contactGrid}>
            {/* Contact Info Sidebar */}
            <div className={styles.contactInfo}>
              <h2>Get In Touch</h2>
              <p>
                We would love to hear from you. Reach out to discuss your liquid
                measurement needs and get a customized quote.
              </p>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>&#9742;</div>
                <div className={styles.contactItemContent}>
                  <h4>Phone</h4>
                  <p>+1 888 681 5638</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>&#9993;</div>
                <div className={styles.contactItemContent}>
                  <h4>Email</h4>
                  <p>info@aimoilfieldservices.com</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>&#9900;</div>
                <div className={styles.contactItemContent}>
                  <h4>Office</h4>
                  <p>
                    2640 East Broadway St. Suite 106
                    <br />
                    Pearland, TX 77581
                  </p>
                </div>
              </div>

              <div className={styles.socialSection}>
                <h4>Follow Us</h4>
                <div className={styles.socialLinks}>
                  <a
                    href="https://www.linkedin.com/company/aim-oilfield-services-llc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.facebook.com/AIM-Oilfield-Services-LLC-110934600677600/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2>Request a Quote</h2>
              <form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" placeholder="John" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="john@example.com" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" name="service">
                    <option value="">Select a service...</option>
                    <option value="meter-proving">Custody Transfer Liquid Meter Proving</option>
                    <option value="grind-outs">Grind Outs / Shake Outs</option>
                    <option value="lact">LACT Maintenance & Repair</option>
                    <option value="terminal">Terminal Maintenance & Repair</option>

                    <option value="gas">Gas Measurement</option>
                    <option value="master-meter">Master Meter Proving</option>
                    <option value="ultrasonic">Ultrasonic Meter Proving</option>
                    <option value="offshore">Offshore Measurement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.mapPlaceholder}>
          2640 East Broadway St. Suite 106, Pearland, TX 77581
        </div>
      </section>
    </>
  );
}
