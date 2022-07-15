import { sum } from "./math"

console.log(`hello main ${sum(1, 2, 3, 4)}`)
document.getElementById("btn").onclick = () => {
  import("./count")
    .then((res) => console.log("module loading success", res.default(10, 4)))
    .catch((err) => console.log("module loading failed", err))
}

document.getElementById("btn").onclick = () => {
    import("./js/sub")
      .then((res) =>
        console.log("sub module loading success", res.default(12 - 8))
      )
      .catch((err) => console.log("sub module loading failed", err))
  }
