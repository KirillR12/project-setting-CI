import App from 'app/App'
import { ErrorBoundary } from 'app/providers/ErrorBaundary'
import { AboutPageAsync } from 'pages/AboutPage/AboutPageAsync'
import { MainPageAsync } from 'pages/MainPage/MainPageAsync'
import { RouteObject } from 'react-router-dom'
import { PageError } from 'widgets/PageError/PageError'

export const AppRouter: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        errorElement: <PageError />,
        children: [
            {
                path: 'AboutPage',
                element: <AboutPageAsync />,
            },
            {
                path: 'MainPage',
                element: <MainPageAsync />,
            },
            {
                path: '*',
                element: <PageError />,
            },
        ],
    },
]
