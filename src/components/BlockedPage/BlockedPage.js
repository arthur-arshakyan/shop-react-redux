import React from 'react'
import styles from './BlockedPage.module.css'

const BlockedPage = () => {
  return (
    <div className={styles.parentContainer}>
        <div className={styles.container}>
            <h1>We're sorry, but it appears that your access to this webpage has been restricted.</h1>
            <p>You have been blocked from accessing certain features or content on this website for violating our community guidelines or terms of service. We take the safety and well-being of our users seriously, and as a result, your access has been temporarily limited.</p>
            <p>We place great importance on maintaining a respectful and inclusive online environment, where users can engage in a meaningful and productive manner. Unfortunately, your actions have breached the established guidelines that govern user behavior within our community. These guidelines are in place to foster a sense of fairness, prevent harassment, and maintain the overall integrity of our platform.</p>
            <h2>Restricted Access: Understanding the Reasons Behind Your Block</h2>
            <p>Possible reasons for your block may include engaging in disruptive behavior, posting inappropriate content, spamming, harassment, or any other violation of our policies. We encourage you to review our guidelines to understand the specific reasons for your restriction.</p>
        </div>
    </div>
  )
}

export default BlockedPage