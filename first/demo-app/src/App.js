import "./App.css";
import { Greet } from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Deepak" heroname="Hanuman" />
      <Greet name="rathore" heroname="Mahadev" />
      <Greet name="ranjeet" heroname="Shree ram" />
      <Greet name="bulla" heroname="Shree krishna" >
        <p >This is children props</p>
        
      </Greet>
    </div>
  );
}

export default App;
