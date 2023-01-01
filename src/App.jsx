import { lazy, Suspense } from 'react';
// Styles
import "./App.scss";
// Lazy loaded Components
const Header = lazy(() => import("./components/Header"));
const Sidebar = lazy(() => import("./components/Sidebar"));
// Lazy loaded Routes
const Routes = lazy(() => import("./routes"));

const App = () => {
    return (
        <Suspense fallback={<section />/** Loader component comes here*/}>
            <section className="page-wrapper">
                <Header />
                <main className="main-container">
                    <Sidebar />
                    <section className="route-container">
                        <Routes />
                    </section>
                </main>
            </section>
        </Suspense>


    );
}
export default App;