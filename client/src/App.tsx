import { Switch, Route } from "wouter";
import Dashboard from "./pages/Dashboard";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  );
}

function App() {
  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <div className="flex h-screen bg-background text-foreground" style={style as React.CSSProperties}>
      <Router />
    </div>
  );
}

export default App;
