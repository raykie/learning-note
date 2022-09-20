import Rayact from "./Rayact";

export default function Input() {
  const [state, setState] = Rayact.useState("world");

  return (
    <div>
      <input onChange={(e)=>setState(e.target.value)}value={state}></input>
      <p>hello {state}</p>
      test
    </div>
  );
}
