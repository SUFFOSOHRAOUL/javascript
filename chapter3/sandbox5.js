const password = "p@sswor";
//AN operator
if (password.length >= 12 && password.includes("@")) {
  console.log(" that password is might strong");
} else if (
  //OR operator
  password.length >= 8 ||
  password.includes("@")
) {
  console.log("that  password is long enough!");
} else {
  console.log("password is not long enough");
}

//logical NOT (!)

let user = false;

if (!user) {
  console.log("absent");
}

console.log(!true);
console.log(!false);
