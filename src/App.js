import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import TrashTodo from "./pages/TrashTodo";


function App() {
  return (
    <Switch>
      <Route exact path="/trash" component={TrashTodo} />
      <Route exact path="/todo" component={Todo} />
      <Route exact path="/" component={Login} />
    </Switch>
  );
}

export default App;
