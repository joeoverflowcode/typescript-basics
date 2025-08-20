import "./App.css";
import UserList from "./component/UserList";
import { users } from "./data/users";
function App() {
  return (
    <div>
      <h1>Hello world!</h1>
      <UserList data={users}/>
    </div>
  );
}

export default App;
