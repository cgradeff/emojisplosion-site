import "./App.css";
import { DemoContainer } from "./components/demo-container/demo-container";
import { HomeContainer } from "./components/home-container/home-container";
import { NavBar } from "./components/nav-bar/nav-bar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HomeContainer></HomeContainer>
      <DemoContainer></DemoContainer>
    </div>
  );
}

export default App;
