/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { useTransition, animated } from '@react-spring/web'
import splashscreen from '/img/onboarding_screen.webp'
import right_arrow from '/img/right_arrow.svg'
import styles from './Onboarding.module.scss'
import { useNavigate } from 'react-router'

export const Onboarding = () => {
  const [page, setPage] = useState(1)
  const navigate = useNavigate()

  const transitions = useTransition(page, {
    key: page,
    initial: { opacity: 1 },
    from: {
      opacity: 0,
      transform: 'translate3d(100%, 0, 0)',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0%, 0, 0)',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(-50%, 0, 0)',
    },
    exitBeforeEnter: true,
  })

  const login = () => navigate('/login')
  const createAccount = () => navigate('/signup')
  const loginIssues = () => console.log('loginIssues')

  return (
    <div className={styles.Onboarding}>
      <header className={styles.OnboardingHeader}>
        <div className={styles.OnboardingTopContent}>
          <img
            src={splashscreen}
            className={styles.OnboardingLogo}
            alt="Splashscreen Twiny"
          />

          <div className={styles.OnboardingText}>
            <h2 className={styles.OnboardingTitle}>Bienvenue sur Twiny</h2>
            <p className={styles.OnboardingSubtitle}>
              Une safe space où tu pourras créer de nouvelles amitiés !
            </p>
          </div>
        </div>

        <div className={styles.OnboardingBottomContent}>
          {transitions((style, item) => {
            return item === 1 ? (
              <animated.div style={style}>
                <a
                  className={styles.OnboardingButton}
                  role="button"
                  onClick={() => setPage(2)}
                >
                  <img
                    src={right_arrow}
                    className={styles.OnboardingButtonArrow}
                    alt="Bouton suivant"
                  />
                </a>
              </animated.div>
            ) : (
              <animated.div
                style={style}
                className={styles.OnboardingButtonControls}
              >
                <button
                  className={styles.OnboardingButtonCreateAccount}
                  onClick={createAccount}
                >
                  Créer un compte
                </button>

                <button
                  className={styles.OnboardingButtonAccountAlreadyExists}
                  onClick={login}
                >
                  Déjà un compte ? Se connecter
                </button>

                <div className={styles.OnboardingButtonLinks}>
                  <a
                    className={styles.OnboardingButtonLink}
                    role="button"
                    onClick={() => setPage(1)}
                  >
                    Retour
                  </a>

                  <a
                    className={styles.OnboardingButtonLink}
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
