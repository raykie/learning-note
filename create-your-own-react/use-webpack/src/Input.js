/** @jsxRuntime classic */
import Rayact from "./Rayact";

export default function Input() {
  const [state, setState] = Rayact.useState("world");

  /** @jsx Rayact.createElement */
  return (
    <div>
      <input onInput={(e) => {
        console.log('trigger onChange')
        setState(c => e.target.value)
      }} value={state}></input>
      <p>hello {state}</p>
      test
    </div>
  );
}
