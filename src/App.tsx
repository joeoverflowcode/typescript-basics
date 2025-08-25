import UserList from "./components/UserList";
import { users } from "./data/users";
import { ThemeProvider } from "./components/theme-provider";
import NavBar from "./components/NavBar";
import MemberList from "./components/MemberList";
function App() {
  return (
    <div className="">
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar/>
      <UserList data={users}/>
      <MemberList data={users}/>
    </ThemeProvider>
    </div>
  );
}
export default App;
