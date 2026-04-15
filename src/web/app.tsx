import { Route, Switch } from "wouter";
import Index from "./pages/index";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import { Provider } from "./components/provider";
import { AgentFeedback } from "@runablehq/website-runtime";

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      {import.meta.env.DEV && <AgentFeedback />}
    </Provider>
  );
}

export default App;
