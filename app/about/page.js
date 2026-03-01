'use client';

import Hero from '@/components/Hero';
import styles from './page.module.css';
import { TbShield, TbTarget, TbHeartHandshake, TbBrandLinkedin } from 'react-icons/tb';

const ICON_SIZE = 36;

const team = [
  {
    name: 'Austin Brown',
    title: 'Owner / CEO',
    linkedin: 'https://www.linkedin.com/in/austin-brown-b5897b90/',
  },
  {
    name: 'Jude Latiolais',
    title: 'Vice President of Corporate Operations',
    linkedin: 'https://www.linkedin.com/in/jude-latiolais-6a8a8b90/',
  },
  {
    name: 'Tyler Urbina',
    title: 'Executive Vice President of Operations',
    linkedin: 'https://www.linkedin.com/in/tyler-urbina-88b03473/',
  },
  {
    name: 'Zachary Gray',
    title: 'Vice President of Measurement',
    linkedin: 'https://www.linkedin.com/in/zachary-gray-9b834a121/',
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        small
        title="About Us"
        subtitle="Committed to excellence in liquid measurement services across the U.S. energy sector."
      />

      <section className={styles.aboutSection}>
        <div className={styles.aboutInner}>
          <div className={styles.storyGrid}>
            <div className={styles.storyImage} role="img" aria-label="AIM Oilfield equipment" />
            <div className={styles.storyContent}>
              <h2>Our Story</h2>
              <p>
                AIM Oilfield Services is a Liquid Measurement services contractor
                focused on the U.S. Upstream, Midstream and Refined Products market segments.
              </p>
              <p>
                We are committed to providing the{' '}
                <span className={styles.highlight}>safest and most cost effective solutions</span>{' '}
                possible, all while maintaining the highest level of quality and efficiency.
              </p>
              <p>
                Currently operating in Texas and New Mexico, our team brings decades
                of combined experience in liquid measurement and oilfield services.
                Every project we undertake reflects our dedication to precision,
                safety, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.valuesInner}>
          <h2 className="sectionTitle">Our Core Values</h2>
          <p className="sectionSubtitle" style={{ margin: '0 auto 48px' }}>
            The principles that guide every project we undertake.
          </p>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><TbShield size={ICON_SIZE} /></div>
              <h3>Safety First</h3>
              <p>
                Safety is at the core of everything we do. We maintain rigorous safety
                protocols and ensure all team members are fully trained and certified.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><TbTarget size={ICON_SIZE} /></div>
              <h3>Precision</h3>
              <p>
                Our commitment to accuracy ensures reliable measurement data that
                our clients can trust for critical business decisions.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><TbHeartHandshake size={ICON_SIZE} /></div>
              <h3>Integrity</h3>
              <p>
                We build lasting relationships through honest communication,
                transparent pricing, and consistent delivery on our promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.teamInner}>
          <h2 className="sectionTitle">Leadership Team</h2>
          <p className="sectionSubtitle" style={{ margin: '0 auto 48px' }}>
            Our deep knowledge of custody transfer liquid measurement coupled with extensive experience in LACT and terminal services truly sets us apart.
          </p>
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.teamAvatar}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3>{member.name}</h3>
                <p className={styles.teamTitle}>{member.title}</p>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.teamLinkedin}>
                    <TbBrandLinkedin size={20} /> LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.equipment}>
        <div className={styles.equipmentInner}>
          <div className={styles.equipmentGrid}>
            <div className={styles.equipmentContent}>
              <h2>State-of-the-Art Equipment</h2>
              <p>
                Our equipment is state-of-the-art and up-to-date on all certifications.
                We invest in the latest technology to deliver the most accurate and
                reliable results for our clients.
              </p>
              <ul className={styles.equipmentList}>
                <li>Certified liquid measurement provers</li>
                <li>Advanced centrifuge testing equipment</li>
                <li>Calibrated flow measurement systems</li>
                <li>Modern LACT unit components</li>
                <li>Digital data collection systems</li>
              </ul>
            </div>
            <div className={styles.equipmentImage} role="img" aria-label="State-of-the-art oilfield equipment" />
          </div>
        </div>
      </section>
    </>
  );
}
