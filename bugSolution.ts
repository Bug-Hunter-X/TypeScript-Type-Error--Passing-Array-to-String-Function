function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterImproved(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(' ');
  }
}

let user = ["Jane", "Doe"];
console.log(greeterImproved(user)); // This now works correctly
let user2 = "Jane Doe";
console.log(greeterImproved(user2)); //This works correctly as well

//Type checking example
function greeterTypeCheck(person: string): string {
    if (typeof person !== 'string') {
        throw new Error("Expected a string");
    }
    return "Hello, " + person;
}

//This will throw an error
//console.log(greeterTypeCheck(user)); 