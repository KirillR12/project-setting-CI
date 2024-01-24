import { useTranslation } from 'react-i18next'

 interface PageErrorProps {
   className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()

    return (
        <div>
            <h1>{t('Error')}</h1>
        </div>
    )
}
