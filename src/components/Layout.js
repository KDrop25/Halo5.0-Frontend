import { Outlet } from "react-router-dom"
import { Navbar, Footer } from './';

const Layout = () => {
    return (
        <main className="App">
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Layout