/*
MADLIBS

Madlibs is a simple game where you create a story template with "blanks" for words. 
You, or another player, then construct a list of words and place them into the story, 
creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, 
and injects them into a story that you create.

Algo:
1. Write the sentences with blanks
2. Replace the blanks with corresponding nouns, verbs, adjectives, and adverbs
3. Take the user input for all the nouns, verbs, adjectives and adverbs

Example:

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.
*/

/*
function promptMessage(speech) {
  console.log(`Enter ${speech}: `);
}
*/

function madlibs() {
  const rlSync = require('readline-sync');

  //promptMessage(noun);
  let noun = rlSync.question("Enter a noun: ");

  //promptMessage(verb);
  let verb = rlSync.question("Enter a verb: ");

  //promptMessage(adjective);
  let adjective = rlSync.question("Enter an adjective: ");

  //promptMessage(adverb);
  let adverb = rlSync.question("Enter an adverb: ");

  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
  The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.
  The ${noun} ${adverb} walks up ${adjective} Joe's turtle.`);
}

madlibs();