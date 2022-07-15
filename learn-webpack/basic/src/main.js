import count from "./js/count"
import "./css/index.css"
import "./less/index.less"
import "./sass/index.scss"

document.getElementById("btn").onclick = () => {
  const sub = import(/* webpackChunkName: "sub" */ "./js/sub")
  sub
    .then((res) =>
      console.log("sub module loading success", res.default(12, 8))
    )
    .catch((err) => console.log("sub module loading failed", err))
}
console.log(count(1, 2, 3, 4, 5, 6))

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}
