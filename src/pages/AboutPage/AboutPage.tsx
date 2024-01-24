import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

const AboutPage = () => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div className={styles.AboutPage}>
            {t('About')}
            <button type="button" onClick={toggle}>{t('Click')}</button>
        </div>
    )
}

export default AboutPage
