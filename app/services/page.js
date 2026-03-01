'use client';

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
    desc: 'We provide precision calibration and proving of custody transfer meters across upstream and midstream operations. Our state-of-the-art provers ensure your meters meet industry standards for accuracy and compliance, protecting revenue and maintaining regulatory requirements.',
  },
  {
    icon: <TbFlask2 size={ICON_SIZE} />,
    title: 'Grind Outs / Shake Outs (Centrifuge Method)',
    desc: 'Our centrifuge method testing delivers accurate BS&W (Basic Sediment & Water) determination. This critical quality assurance service helps operators maintain product quality and meet pipeline specifications for crude oil and refined products.',
  },
  {
    icon: <TbTool size={ICON_SIZE} />,
    title: 'LACT Maintenance & Repair',
    desc: 'Comprehensive maintenance and repair services for Lease Automatic Custody Transfer (LACT) units. From routine maintenance to emergency repairs, our experienced technicians keep your LACT systems operating at peak performance.',
  },
  {
    icon: <TbBuildingFactory2 size={ICON_SIZE} />,
    title: 'Terminal Maintenance & Repair',
    desc: 'Full-service terminal maintenance ensuring your facility operates efficiently and safely. We handle everything from measurement equipment calibration to system upgrades, minimizing downtime and maximizing operational integrity.',
  },

  {
    icon: <TbWind size={ICON_SIZE} />,
    title: 'Gas Measurement',
    desc: 'Accurate gas measurement solutions for production, processing, and transportation applications. We ensure your gas measurement systems deliver the precision needed for custody transfer and operational reporting.',
  },
  {
    icon: <TbAdjustments size={ICON_SIZE} />,
    title: 'Master Meter Proving',
    desc: 'Our master meter proving services utilize reference-grade meters to provide high-accuracy field and facility calibrations. This portable proving method is ideal for locations where conventional provers are impractical, delivering traceable and repeatable results that meet API standards.',
  },
  {
    icon: <TbWaveSine size={ICON_SIZE} />,
    title: 'Ultrasonic Meter Proving',
    desc: 'Specialized proving services for ultrasonic flow meters used in custody transfer and fiscal measurement. Our technicians are trained on the latest ultrasonic technologies, ensuring your multipath and single-path meters achieve the accuracy required for revenue-critical applications.',
  },
  {
    icon: <TbAnchor size={ICON_SIZE} />,
    title: 'Offshore Measurement',
    desc: 'Comprehensive measurement solutions for offshore platforms, FPSOs, and subsea production systems. We deliver meter proving, calibration, and maintenance services in challenging offshore environments, ensuring measurement integrity while meeting the strict safety requirements of offshore operations.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        small
        title="Our Services"
        subtitle="Comprehensive liquid measurement and oilfield services delivered with precision, safety, and efficiency."
      />

      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}>
          <div className={styles.intro}>
            <p>
              AIM Oilfield Services provides a full range of liquid measurement services
              for the U.S. Upstream, Midstream and Refined Products market. Our equipment
              is state-of-the-art and up-to-date on all certifications.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardIcon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.coverage}>
        <div className={styles.coverageInner}>
          <h2>Service Coverage</h2>
          <p>We currently offer our full range of services across two states, with plans to expand.</p>
          <div className={styles.coverageStates}>
            <div className={styles.stateCard}>
              <h3>Texas</h3>
              <p>Full Coverage</p>
            </div>
            <div className={styles.stateCard}>
              <h3>New Mexico</h3>
              <p>Full Coverage</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
