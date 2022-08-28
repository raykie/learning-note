import Rayact from "./Rayact.js";

console.log(Rayact.description);

const element = Rayact.createElement(
  "div",
  { id: "foo" },
  Rayact.createElement("a", null, "bar"),
  Rayact.createElement("b")
);

console.log(element);

const root = document.getElementById("root");
Rayact.render(element, root);
