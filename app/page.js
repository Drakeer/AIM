'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import styles from './page.module.css';
import {
  TbGauge,
  TbFlask2,
  TbTool,
  TbBuildingFactory2,

  TbWind,
  TbAdjustments,
  TbWaveSine,
  TbAnchor,
} from 'react-icons/tb';

const ICON_SIZE = 36;

const services = [
  {
    icon: <TbGauge size={ICON_SIZE} />,
    title: 'Custody Transfer Liquid Meter Proving',
    desc: 'Precise calibration and proving of custody transfer meters to ensure accurate measurement and compliance.',
  },
  {
    icon: <TbFlask2 size={ICON_SIZE} />,
    title: 'Grind Outs / Shake Outs',
    desc: 'Centrifuge method testing for accurate BS&W determination and quality assurance.',
  },
  {
    icon: <TbTool size={ICON_SIZE} />,
    title: 'LACT Maintenance & Repair',
    desc: 'Comprehensive maintenance and repair services for Lease Automatic Custody Transfer units.',
  },
  {
    icon: <TbBuildingFactory2 size={ICON_SIZE} />,
    title: 'Terminal Maintenance & Repair',
    desc: 'Full-service terminal maintenance ensuring operational efficiency and regulatory compliance.',
  },

  {
    icon: <TbWind size={ICON_SIZE} />,
    title: 'Gas Measurement',
    desc: 'Accurate gas measurement solutions for production and transportation applications.',
  },
  {
    icon: <TbAdjustments size={ICON_SIZE} />,
    title: 'Master Meter Proving',
    desc: 'High-accuracy master meter proving services using reference-grade meters for field and facility calibrations.',
  },
  {
    icon: <TbWaveSine size={ICON_SIZE} />,
    title: 'Ultrasonic Meter Proving',
    desc: 'Specialized proving services for ultrasonic flow meters ensuring precision in custody transfer applications.',
  },
  {
    icon: <TbAnchor size={ICON_SIZE} />,
    title: 'Offshore Measurement',
    desc: 'Comprehensive measurement solutions for offshore platforms and subsea production operations.',
  },
];

export default function Home() {
  return (
    <>
      <Hero
        label="Precision Measurement Solutions"
        title="Trusted Oilfield Measurement Services"
        subtitle="Providing the safest and most cost effective liquid measurement solutions for the U.S. Upstream, Midstream and Refined Products market segments."
        cta="Get a Quote"
        ctaHref="/contact"
        ctaSecondary="Our Services"
        ctaSecondaryHref="/services"
      />

      {/* Services Overview */}
      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <h2 className="sectionTitle">What We Do</h2>
          <p className="sectionSubtitle" style={{ margin: '0 auto 48px' }}>
            Comprehensive liquid measurement and oilfield services delivered with precision and safety.
          </p>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <div key={i} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.stats}>
        <div className={styles.statsInner}>
          <div className={styles.statItem}>
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div className={styles.statItem}>
            <h3>2</h3>
            <p>States Served</p>
          </div>
          <div className={styles.statItem}>
            <h3>8</h3>
            <p>Core Services</p>
          </div>
          <div className={styles.statItem}>
            <h3>100%</h3>
            <p>Safety Focused</p>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className={styles.aboutTeaser}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutImage} role="img" aria-label="Oilfield equipment" />
          <div className={styles.aboutContent}>
            <h2>About AIM Oilfield Services</h2>
            <p>
              AIM Oilfield Services is a Liquid Measurement services contractor focused on
              the U.S. Upstream, Midstream and Refined Products market segments.
            </p>
            <p>
              We are committed to providing the{' '}
              <span className={styles.highlight}>safest and most cost effective solutions</span>{' '}
              possible, all while maintaining the highest level of quality and efficiency.
            </p>
            <p>
              Our equipment is state-of-the-art and up-to-date on all certifications.
              We currently offer services in Texas and New Mexico.
            </p>
            <Link href="/about" className="btn btnDark" style={{ marginTop: '16px' }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>Ready to Get Started?</h2>
          <p>
            Contact us today for a quote on our liquid measurement and oilfield services.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className="btn btnDark">
              Contact Us
            </Link>
            <a href="tel:+18886815638" className="btn btnOutline">
              Call +1 888 681 5638
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
