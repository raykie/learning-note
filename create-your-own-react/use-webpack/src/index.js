/** @jsxRuntime classic */
import Rayact from "./Rayact";
import Input from "./Input";

/** @jsx Rayact.createElement */
const element = <Input />;

const container = document.getElementById("root");

Rayact.render(element, container);
