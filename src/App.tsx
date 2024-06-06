/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { useTransition, animated } from '@react-spring/web'
import splashscreen from '/img/onboarding_screen.webp'
import right_arrow from '/img/right_arrow.svg'
import styles from './app.module.scss'

export const App = () => {
  const [page, setPage] = useState(1)

  const transitions = useTransition(page, {
    key: page,
    initial: { opacity: 1 },
    from: {
      opacity: 0,
      transform: 'translate3d(100%,0,0)',
      position: 'absolute' as const,
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0%,0,0)',
      position: 'relative' as const,
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(-50%,0,0)',
      position: 'absolute' as const,
    },
    exitBeforeEnter: true,
  })

  const login = () => console.log('login')
  const createAccount = () => console.log('createAccount')
  const loginIssues = () => console.log('loginIssues')

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <div className={styles.appTopContent}>
          <img
            src={splashscreen}
            className={styles.appLogo}
            alt="Splashscreen Twiny"
          />

          <div className={styles.appText}>
            <h2 className={styles.appTitle}>Bienvenue sur Twiny</h2>
            <p className={styles.appSubtitle}>
              Une safe space où tu pourras créer de nouvelles amitiés !
            </p>
          </div>
        </div>

        <div className={styles.appBottomContent}>
          {transitions((style, item) => {
            return item === 1 ? (
              <animated.div style={style}>
                <a
                  className={styles.appButton}
                  role="button"
                  onClick={() => setPage(2)}
                >
                  <img
                    src={right_arrow}
                    className={styles.appButtonArrow}
                    alt="Bouton suivant"
                  />
                </a>
              </animated.div>
            ) : (
              <animated.div style={style} className={styles.appButtonControls}>
                <button
                  className={styles.appButtonCreateAccount}
                  onClick={createAccount}
                >
                  Créer un compte
                </button>

                <button
                  className={styles.appButtonAccountAlreadyExists}
                  onClick={login}
                >
                  Déjà un compte ? Se connecter
                </button>

                <div className={styles.appButtonLinks}>
                  <a
                    className={styles.appButtonLink}
                    role="button"
                    onClick={() => setPage(1)}
                  >
                    Retour
                  </a>

                  <a
                    className={styles.appButtonLink}
                    role="button"
                    onClick={loginIssues}
                  >
                    Des problèmes pour se connecter ?
                  </a>
                </div>
              </animated.div>
            )
          })}
        </div>
      </header>
    </div>
  )
}
