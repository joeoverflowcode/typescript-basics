import "./App.css";
import UserList from "./components/UserList";
import { users2 } from "./data/users";

function App() {
  return (
    <div>
      <h1>Hello world!</h1>
      <UserList data={users2} />
    </div>
  );
}

export default App;
