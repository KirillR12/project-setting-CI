import { render } from 'react-dom'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/AppRouter'
import 'shared/config/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBaundary'
import { useTranslation } from 'react-i18next'

const router = createBrowserRouter(AppRouter)

const { t } = useTranslation()

render(
    <Suspense fallback={<div>{t('...Loader')}</div>}>
        <ErrorBoundary>
            <ThemeProvider>
                <RouterProvider router={router} />
            </ThemeProvider>
        </ErrorBoundary>
    </Suspense>,
    document.getElementById('root'),
)
