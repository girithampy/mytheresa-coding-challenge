import Header from "./components/Header";
// Routes
import Routes from "./routes";

import "./App.scss";

const App = () => {
    return (
        <section className="page-wrapper">
            <Header />
            <main className="main-container">
                <Routes />
            </main>
        </section>

    );
}
export default App;