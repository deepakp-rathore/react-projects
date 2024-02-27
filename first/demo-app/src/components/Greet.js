import { useState } from "react"



// function Greet() {
//     return <h1>Hello World</h1>
// }

// export default Greet;

export const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroname}{" "}
      </h1>
      <h1>{props.children}</h1>
    </div>
  );
};



