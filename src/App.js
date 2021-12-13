import Header from "./components/Header";
import Main from "./components/Main";
import MainBoxes from "./components/MainBoxes";
import FooterX from "./components/FooterX";
import Mainb from "./components/Mainb";
import SpecialBox from "./components/SpecialBox";

function App() {
  return (
    <div className="App">
      <div className="hero">
        <Header />
        <Main />
        <Mainb />
      </div>
      <div className="nano">
        <MainBoxes />
        <SpecialBox />
        <FooterX />
      </div>
    </div>
  );
}

export default App;
