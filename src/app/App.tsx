import './styles/index.scss'
import { Outlet } from 'react-router-dom'
import { Navbar } from 'widgets/Navbar/Navbar'
import { Sidebar } from 'widgets/Sidebar/Sidebar'
import { classNames } from 'shared/lib'
import { useEffect } from 'react'
import { useTheme } from './providers/ThemeProvider'

function App() {
    const { theme } = useTheme()

    useEffect(() => {
        if (Math.random() > 0.5) {
            throw new Error()
        }
    }, [])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="page-wrapper">
                <Sidebar />
                <button type="button">Cliiic</button>
                <div className="page-halper">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default App
