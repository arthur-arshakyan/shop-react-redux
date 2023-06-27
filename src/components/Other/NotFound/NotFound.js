import React from 'react'
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
        <div className={styles.container}>
            <h1>Oops! <span>It seems like you've encountered an Error 404 - Page Not Found.</span> </h1>
            <h2>We apologize for the inconvenience, but the page you were looking for could not be found. It may have been moved, deleted, or never existed in the first place. Here are a few possible reasons for this error:</h2>
            <ul>
                <li>The URL you entered may be mistyped or incomplete. Please double-check the web address to ensure it is spelled correctly and matches the intended page.</li>
                <li>The page you are trying to access may have been removed or relocated. We constantly update our website to provide the best experience for our users, which sometimes involves making changes to the site structure.</li>
                <li>It is also possible that there is a temporary issue with our server or network, causing the page to be temporarily unavailable. We apologize for any inconvenience this may have caused and assure you that we are working to resolve the issue promptly.</li>
            </ul>
            <p>Thank you for your understanding, and we apologize for any inconvenience caused by this error.</p>
        </div>
    </div>
  )
}

export default NotFound