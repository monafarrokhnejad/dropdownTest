import { useState } from "react";
import DGXLogo from "./components/DGXLogo";
import DGXContainer from "./components/DGXContainer";
import "./App.css";
import "./fonts/font.css";
import MainDGXDropdown from "./components/MainDGXDropdown";
import data from './mock/drop-items.json'
import dItem from './mock/form-data.json'

function App() {
  const [main, setMain] = useState({});
  
  return (
    <div
      id="app"
      className="flex"
      style={{ backgroundImage: 'url("/assets/pixel-arts/pixel-wall.png")' }}
    >
      <DGXContainer className="top">
        <DGXLogo className="flex" />
        <div className="mt">
          <MainDGXDropdown data={data} main={main} setMain={setMain} defaultVal={dItem?.dropdown} />
        </div>
        <div className="result">{main.name}</div>
      </DGXContainer>
    </div>
  );
}

export default App;
// mohammad.abedi@digikala.com
// mohammad.abedi@digikala.com