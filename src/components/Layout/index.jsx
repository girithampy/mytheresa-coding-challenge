import { lazy, memo } from 'react';
// Styles
import "./style.scss";
// Lazy loaded Components
const Header = lazy(() => import("../Header"));
const Sidebar = lazy(() => import("../Sidebar"));

const Layout = ({ children }) => {
    return (
        <section className="page-layout">
            <Header />
            <main className="page-layout__main-container">
                <Sidebar />
                <section className="page-layout__content-container">
                    {children}
                </section>
            </main>
        </section>
    );
}

export default memo(Layout);