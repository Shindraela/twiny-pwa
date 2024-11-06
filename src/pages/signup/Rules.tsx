import styles from './Signup.module.scss'

export const Rules = () => {
  return (
    <div className={styles.rules}>
      <h2 className={styles.SignupStepTitle}>Bienvenue sur Twiny</h2>
      <p className={styles.signupStepSubtitle}>
        Veuillez respecter le règlement.
      </p>

      <dl className={styles.rulesDescription}>
        <dt className={styles.rulesDescriptionTitle}>Restez toi-même.</dt>
        <dd className={styles.rulesDescriptionSubtitle}>
          Veilles à ce que tes photos, ton âge et ta biographie correspondent à
          ce que tu es.
        </dd>

        <dt className={styles.rulesDescriptionTitle}>Sois prudent.</dt>
        <dd className={styles.rulesDescriptionSubtitle}>
          Ne donne pas trop vite tes informations personnelles.
        </dd>

        <dt className={styles.rulesDescriptionTitle}>Joues-la cool.</dt>
        <dd className={styles.rulesDescriptionSubtitle}>
          Respectes les autres et traites-les comme tu aimerais être traité.
        </dd>

        <dt className={styles.rulesDescriptionTitle}>Sois proactif.</dt>
        <dd className={styles.rulesDescriptionSubtitle}>
          Signale toujours les mauvais comportements.
        </dd>
      </dl>
    </div>
  )
}
