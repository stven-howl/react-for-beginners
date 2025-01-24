import Button from "./Button";
import styles from "./App.module.css";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`} element={Home}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
