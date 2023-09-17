/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/

const str = process.argv[2];

function generateHashtag(str) {
  const string = str
    ?.replace(/\s+/g, " ")
    .replace("#", "")
    .split(" ")
    .map((a) => a?.slice(0, 1).toUpperCase() + a?.slice(1))
    .join("");
  return string && string.length < 140 ? `#${string}` : false;
}

console.log(generateHashtag(str));
