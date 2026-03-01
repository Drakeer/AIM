'use client';

import { GiGearHammer, GiTestTubes } from 'react-icons/gi';
import { TbGauge, TbFlask2 } from 'react-icons/tb';
import styles from './page.module.css';

/* ── Custom SVG line icons ─────────────────────────────── */

function SvgMeterProving() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Gauge body */}
      <circle cx="16" cy="17" r="11" />
      {/* Gauge face arc */}
      <path d="M9 12a9 9 0 0 1 14 0" />
      {/* Needle */}
      <line x1="16" y1="17" x2="21" y2="11" />
      {/* Center dot */}
      <circle cx="16" cy="17" r="1.5" fill="currentColor" stroke="none" />
      {/* Tick marks */}
      <line x1="8" y1="17" x2="10" y2="17" />
      <line x1="22" y1="17" x2="24" y2="17" />
      <line x1="16" y1="9" x2="16" y2="11" />
    </svg>
  );
}

function SvgGrindOuts() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Flask body */}
      <path d="M12 4h8v8l5 12a2 2 0 0 1-1.85 2.76H8.85A2 2 0 0 1 7 24l5-12V4z" />
      {/* Flask top rim */}
      <line x1="10" y1="4" x2="22" y2="4" />
      {/* Liquid level */}
      <path d="M9.5 20h13" />
      {/* Bubbles */}
      <circle cx="14" cy="22" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="17" cy="21" r="0.6" fill="currentColor" stroke="none" />
      {/* Centrifuge arrows */}
      <path d="M26 10l2 2-2 2" />
      <path d="M6 10l-2 2 2 2" />
    </svg>
  );
}

/* ── Service data ──────────────────────────────────────── */

const services = [
  {
    title: 'Custody Transfer Liquid Meter Proving',
    desc: 'Precise calibration and proving of custody transfer meters to ensure accurate measurement and compliance.',
  },
  {
    title: 'Grind Outs / Shake Outs',
    desc: 'Centrifuge method testing for accurate BS&W determination and quality assurance.',
  },
];

export default function ComparePage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.pageTitle}>Icon Style Comparison</h1>
        <p className={styles.pageSubtitle}>
          Showing the top two services with two different icon approaches.
        </p>

        {/* ── Option A: Custom SVG Line Icons ────────── */}
        <div className={styles.sectionHeader}>
          <span className={`${styles.badge} ${styles.badgeA}`}>Option A</span>
          <span className={styles.sectionLabel}>Custom SVG Line Icons</span>
        </div>
        <p className={styles.sectionDesc}>
          Hand-crafted inline SVGs. Zero dependencies, teal stroke style, lightweight and fast. Matches the clean SPL Labs aesthetic.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <SvgMeterProving />
            </div>
            <h3>{services[0].title}</h3>
            <p>{services[0].desc}</p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <SvgGrindOuts />
            </div>
            <h3>{services[1].title}</h3>
            <p>{services[1].desc}</p>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* ── Option B: React Icons ──────────────────── */}
        <div className={styles.sectionHeader}>
          <span className={`${styles.badge} ${styles.badgeB}`}>Option B</span>
          <span className={styles.sectionLabel}>React Icons (Game Icons + Tabler)</span>
        </div>
        <p className={styles.sectionDesc}>
          Open-source library icons. Huge selection, consistent style, easy to swap. Slightly heavier bundle but very polished.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <TbGauge size={30} />
            </div>
            <h3>{services[0].title}</h3>
            <p>{services[0].desc}</p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <TbFlask2 size={30} />
            </div>
            <h3>{services[1].title}</h3>
            <p>{services[1].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
