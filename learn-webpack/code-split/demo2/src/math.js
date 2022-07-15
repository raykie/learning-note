export function sum(...args) {
    return args.reduce(
      (previousValue, currentValue) => currentValue + previousValue,
      0
    )
  }
  