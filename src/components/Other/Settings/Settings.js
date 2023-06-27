import React from 'react'
import styles from './Settings.module.css'

const Settings = () => {
  return (
    <div className={styles.settings}>
        <h1>Settings</h1>
        <h2>Welcome to the Settings page! This is where you can customize your experience and tailor the platform to suit your preferences. Take a moment to explore the different settings available to you:</h2>
        <ul>
            <li>Profile Settings: Update your profile information, including your name, profile picture, bio, and other relevant details. Showcase your personality and make a lasting impression on other users.</li>
            <li>Privacy Settings: Safeguard your privacy by choosing who can view your profile, control the visibility of your activity, and manage your data sharing preferences. Rest assured that your personal information remains secure.</li>
            <li>Notification Settings: Tailor your notification preferences to ensure you stay informed without being overwhelmed. Customize the types of notifications you receive, the frequency, and the preferred communication channels.</li>
            <li>Account Security: Strengthen the security of your account by managing your password, enabling two-factor authentication, and reviewing recent login activity. We prioritize the protection of your account to provide you with peace of mind.</li>
        </ul>
    </div>
  )
}

export default Settings