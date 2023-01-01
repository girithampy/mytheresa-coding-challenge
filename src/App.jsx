// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// Routes
import Routes from "./routes";
// Styles
import "./App.scss";

const App = () => {
    return (
        <section className="page-wrapper">
            <Header />
            <main className="main-container">
                <Sidebar />
                <section className="route-container">
                    <Routes />
                </section>
            </main>
        </section>

    );
}
export default App;