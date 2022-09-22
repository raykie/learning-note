import Rayact from "./Rayact";

function Counter() {
  const [state, setState] = Rayact.useState(1);
  return <h1 onClick={() => setState((c) => c + 1)}>Count: {state}</h1>;
}

const element = <Counter />;
const container = document.getElementById("root");
Rayact.render(element, container);
