import { users } from "./data/users";
import { ThemeProvider } from "./components/theme-provider";
import NavBar from "./components/NavBar";
import MemberList from "./components/MemberList";
import UserDirectory from "./components/UserDirectory";
import CoachList from "./components/CoachList";
import AdminList from "./components/AdminList";
function App() {
  return (
    <div className="">
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar/>
      <UserDirectory data={users}/>
      <MemberList data={users}/>
      <CoachList data={users}/>
      <AdminList data={users}/>
    </ThemeProvider>
    </div>
  );
}
export default App;
