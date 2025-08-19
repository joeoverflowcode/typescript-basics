import "./App.css";
import { users } from "./data/users";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <h1>Hello world!</h1>
      <UserList data={users}/>
    </div>
  );
}

export default App;
