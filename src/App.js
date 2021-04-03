import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./logo.png";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import CreateSurvey from "./components/CreateSurvey";
import Publish from "./components/Publish";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  return (
    <div className="container">
      <div className="col-md-12 text-center">
        <Router>
          <Link to="/">
            <img
              src={logo}
              className="col-md-8 col-offset-2"
              alt="Survey Tiger"
              style={{ width: "100%" }}
            />
          </Link>
          <Switch>
            <Route path="/" component={Menu} exact />
            <Route path="/create" exact>
              <CreateSurvey questions={questions} setQuestions={setQuestions} />
            </Route>
            <Route path="/publish" exact>
              <Publish questions={questions} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
