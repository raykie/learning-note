import Rayact from "./Rayact.js";

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }
  requestIdleCallback(workLoop);
}

function performUnitOfWork(nextUnitOfWork) {
  // TODO
}

requestIdleCallback(workLoop);

const element = Rayact.createElement(
  "div",
  { id: "foo" },
  Rayact.createElement("a", null, "bar"),
  Rayact.createElement("b")
);

const root = document.getElementById("root");
Rayact.render(element, root);

Rayact.render(
  <div>
    <h1>
      <p></p>
      <a></a>
    </h1>
    <h2></h2>
  </div>,
  container
);
