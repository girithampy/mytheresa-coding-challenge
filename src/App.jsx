import Header from "./components/Header";
import image from './images/user_placeholder.png'

import "./App.scss";

const App = () => {
    return (
        <div>
            <Header />
            <img src={image}/>
            <h1 className="title">Hello from React! 123</h1>
        </div>
    );
}
export default App;