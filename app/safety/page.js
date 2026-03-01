'use client';

import Hero from '@/components/Hero';
import styles from './page.module.css';
import {
  TbShieldCheck,
  TbClipboardCheck,
  TbCertificate,
  TbSearch,
  TbReportAnalytics,
  TbLeaf,
} from 'react-icons/tb';

const ICON_SIZE = 36;

export default function SafetyPage() {
  return (
    <>
      <Hero
        small
        title="Safety"
        subtitle="Safety is not just a priority — it is a core value embedded in every aspect of our operations."
      />

      <section className={styles.safetySection}>
        <div className={styles.safetyInner}>
          <div className={styles.safetyIntro}>
            <div className={styles.safetyIntroContent}>
              <h2>Our Safety Commitment</h2>
              <p>
                At AIM Oilfield Services, safety is at the foundation of our operations.
                We are committed to providing the{' '}
                <span className={styles.highlight}>safest solutions possible</span>{' '}
                while maintaining the highest level of quality and efficiency.
              </p>
              <p>
                Every team member undergoes rigorous safety training before working
                in the field. Our safety protocols exceed industry standards and
                are continuously reviewed and updated to reflect best practices.
              </p>
              <p>
                We believe that no job is so important that it cannot be done safely.
                This commitment protects our team, our clients, and the communities
                where we operate.
              </p>
            </div>
            <div className={styles.safetyImage} role="img" aria-label="Safety equipment and protocols" />
          </div>
        </div>
      </section>

      <section className={styles.practicesSection}>
        <div className={styles.practicesInner}>
          <h2 className="sectionTitle">Safety Practices</h2>
          <p className="sectionSubtitle" style={{ margin: '0 auto 48px' }}>
            Our comprehensive approach to safety covers every aspect of operations.
          </p>
          <div className={styles.practicesGrid}>
            <div className={styles.practiceCard}>
              <div className={styles.practiceIcon}><TbShieldCheck size={ICON_SIZE} /></div>
              <h3>Personal Protective Equipment</h3>
              <p>
                All personnel are equipped with proper PPE for every job site. We enforce
                strict compliance with protective equipment requirements at all times.
              </p>
            </div>
            <div className={styles.practiceCard}>
              <div className={styles.practiceIcon}><TbClipboardCheck size={ICON_SIZE} /></div>
              <h3>Job Safety Analysis</h3>
              <p>
                Every job begins with a thorough safety analysis identifying potential
                hazards and establishing mitigation measures before work begins.
              </p>
            </div>
            <div className={styles.practiceCard}>
              <div className={styles.practiceIcon}><TbCertificate size={ICON_SIZE} /></div>
              <h3>Continuous Training</h3>
              <p>
                Our team participates in ongoing safety training programs, including
                H2S awareness, first aid, CPR, and site-specific safety orientations.
              </p>
            </div>
            <div className={styles.practiceCard}>
              <div className={styles.practiceIcon}><TbSearch size={ICON_SIZE} /></div>
              <h3>Equipment Inspections</h3>
              <p>
                All equipment undergoes regular inspections and maintenance to ensure
                safe and reliable operation. Certifications are kept current at all times.
              </p>
            </div>
            <div className={styles.practiceCard}>
              <div className={styles.practiceIcon}><TbReportAnalytics size={ICON_SIZE} /></div>
              <h3>Incident Reporting</h3>
              <p>
                We maintain a transparent incident reporting system that encourages
                proactive identification of safety concerns and near-miss reporting.
              </p>
            </div>
            <div className={styles.practiceCard}>
              <div className={styles.practiceIcon}><TbLeaf size={ICON_SIZE} /></div>
              <h3>Environmental Compliance</h3>
              <p>
                Our operations adhere to environmental regulations and best practices,
                minimizing our environmental footprint at every job site.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.commitment}>
        <div className={styles.commitmentInner}>
          <h2>Zero Incident Goal</h2>
          <p>
            Our goal is zero safety incidents. We achieve this through rigorous training,
            state-of-the-art equipment, and a culture where every team member is empowered
            to stop work if they identify an unsafe condition.
          </p>
        </div>
      </section>
    </>
  );
}
