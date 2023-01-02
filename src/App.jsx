import { lazy, Suspense } from 'react';
// Styles
import "./App.scss";
// Lazy loaded Layout Components
const Layout = lazy(() => import("./components/Layout"));
// Lazy loaded Routes
const Routes = lazy(() => import("./routes"));

const App = () => {
    return (
        <Suspense fallback={<section />/** Loader component comes here*/}>
            <Layout>
                <Routes />
            </Layout>
        </Suspense>
    );
}
export default App;