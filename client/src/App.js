import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Header from "./components/nav/Header";
import CompleteReg from "./pages/auth/CompleteReg";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={CompleteReg} />
      </Switch>
    </div>
  );
}

export default App;
