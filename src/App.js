import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import DarkMode from "./contexts/DarkMode";
import injectContext from "./store/AppContext";
import Blog from "./views/blog";
import Home from "./views/home";
import NotFound from "./views/NotFound";

const App = () => {
    return (
        <DarkMode>
            <BrowserRouter>
                <main className="flex-shrink-0">
                    {/* Navigation*/}
                    <Navbar />
                    <Switch>
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/" component={Home} />
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </main>
                {/* Footer*/}
                <Footer />
            </BrowserRouter>
        </DarkMode>
    )
}

export default injectContext(App);