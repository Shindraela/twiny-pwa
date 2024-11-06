import styles from './Signup.module.scss'
import privacy from '/img/privacy.svg'

export const Privacy = () => {
  return (
    <div className={styles.privacy}>
      <img
        className={styles.privacyIcon}
        src={privacy}
        alt="Vie privée d'abord"
        width={79}
        height={79}
      />

      <h2 className={styles.SignupStepTitle}>Vie privée d'abord</h2>

      <p className={styles.privacyText}>
        En continuant, je consens à ce que Twiny traite toutes les données que
        je fournis par le biais de cette application, y compris les données
        sensibles telles que les informations sur la santé, afin que Twiny
        puisse me fournir des services. En outre, en vous inscrivant, vous
        acceptez nos Conditions générales et notre Politique de confidentialité,
        qui vous expliquent également comment nous utilisons vos données. Nous
        ne les publions jamais sur Facebook.
      </p>
    </div>
  )
}
