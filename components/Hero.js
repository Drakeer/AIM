import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero({ label, title, subtitle, small, cta, ctaHref, ctaSecondary, ctaSecondaryHref }) {
  return (
    <section className={`${styles.hero} ${small ? styles.heroSmall : ''}`}>
      <div
        className={styles.heroBg}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80')`,
        }}
      />
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        {label && <span className={styles.heroLabel}>{label}</span>}
        <h1 className={styles.heroTitle}>{title}</h1>
        {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
        {(cta || ctaSecondary) && (
          <div className={styles.heroActions}>
            {cta && (
              <Link href={ctaHref || '/contact'} className="btn btnPrimary">
                {cta}
              </Link>
            )}
            {ctaSecondary && (
              <Link href={ctaSecondaryHref || '/services'} className="btn btnOutline">
                {ctaSecondary}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
