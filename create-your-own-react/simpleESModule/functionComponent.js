import Rayact from "./Rayact";

function App(props) {
  return <h1>Hi {props.name}</h1>;
}
const element = <App name="foo" />;
const container = document.getElementById("root");

Rayact.render(element, container);
