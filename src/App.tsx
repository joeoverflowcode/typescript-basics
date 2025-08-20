import UserList from "./components/UserList";
import { users } from "./data/users"

function App() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">Hello World!</h1>
      <UserList data={users}/>
    </div>
  );
}
export default App;
