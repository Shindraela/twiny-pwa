import splashscreen from '/img/onboarding_screen.webp'
import right_arrow from '/img/right_arrow.svg'
import styles from './app.module.scss'

export const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={splashscreen} className={styles.appLogo} alt="logo" />

        <div className={styles.appText}>
          <h2 className={styles.appTitle}>Bienvenue sur Twiny</h2>
          <p className={styles.appSubtitle}>
            Une safe space où tu pourras créer de nouvelles amitiés !
          </p>
        </div>

        <a className={styles.appButton} href="/">
          <img
            src={right_arrow}
            alt="Bouton suivant"
            className={styles.appButtonArrow}
          />
        </a>
      </header>
    </div>
  )
}
