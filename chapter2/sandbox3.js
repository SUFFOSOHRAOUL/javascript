const title = "best reads of 2019";
const author = "mario";
const likes = 30;

// concatenation way
let results =
  "the blog called " + title + " by " + author + " has " + likes + " likes";

console.log(results);
//template string way
let result =
  `the blog called ${title} by ${author} has ${likes} likes`;

  console.log(result);
//creating html templates
