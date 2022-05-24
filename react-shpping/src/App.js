import "./App.css";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

function App() {
  return (
    <Switch>
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/" component={Products} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
}

export default App;
