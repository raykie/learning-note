// This is an industrial-grade general-purpose greeter function:

type UserInputSanitizedString = string;
 
function sanitizeInput(str: string): UserInputSanitizedString {
  return str;
}

let userInput = sanitizeInput("ok");
const constStr = "const"

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

let hello = "hello"

greet("Maddison", new Date());
