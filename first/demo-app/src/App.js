import "./App.css";
import { ClickHandlers } from "./components/ClickHandlers";
import { Greet } from "./components/Greet";
import { Message } from "./components/Message";
import { ParentComponent } from "./components/ParentCompnent";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Deepak" heroname="Hanuman" />
      <Greet name="rathore" heroname="Mahadev" />
      <Greet name="ranjeet" heroname="Shree ram" />
      <Greet name="bulla" heroname="Shree krishna" >
        <p >This is children props</p>
        
      </Greet>*/}

     
     
      {/* <Message /> */}


      {/* <ClickHandlers /> */}


      <ParentComponent />



    </div>
  );
}

export default App;
