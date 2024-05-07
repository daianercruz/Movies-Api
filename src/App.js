import { Header } from "./components/Header";
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./Views/Home";
import { About } from "./Views/About";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { MovieDetail } from "./Views/MovieDetail";
function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Switch>
        <Route path="/about">
            <About />
          </Route>

          <Route path="/movie/:id">
            <MovieDetail />
          </Route>

          <Route path="/">
            <Home />
          </Route>

          </Switch>
      </Router>
</div>
  );
}

export default App;
