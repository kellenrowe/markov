"use strict";
/** Textual markov chain generator */
const text = "the cat in the hat is in the hat";

// const fsP = require("fs/promises");
// const path = `./${process.argv[2]}`;

// /** Function takes in one argument, path
//  *  Read the file with that path, and
//  *  Print the contents of that file. */
// async function cat(path){
//   try {
//     let contents = await fsP.readFile(path, "utf8");
//     console.log("file contents", contents);
//   } catch(err){
//     console.error(err);
//     process.exit(1);
//   }
// }

// cat(path);

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    let markovChain = this.makeChains(words);
    this.words = words;
    this.markovChain = markovChain;
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let markovObj = {};
    let keySet = new Set(this.words);
    // console.log("keySet = ", keySet);

    for (let key of keySet){
      markovObj[key] = [];
    }
    // console.log("markovObj = ", markovObj);

    for (let i = 0; i < this.words.length; i++) {
      let key = this.words[i];
      let nextWord = this.words[i + 1] || null;
      markovObj[key].push(nextWord);
    }
    // console.log("markovObj = ", markovObj);

    return markovObj;
  }
  
  /** Helper function to generate a random number
   *  Takes in object 
   *  Returns a random number between 1 and length of object passed in
   */
  _getRandomNum(array){
    // console.log("array = ", array);
    return Math.floor(Math.random() * Math.floor(array.length));
  }

  /** return random text from chains */

  getText(numWords = 100) {
    const objKeys = Object.keys(this.markovChain);
    // console.log("objKeys = ", objKeys);
    let chosenWord;
    let currNumWords = text.length;
    let randomKeyIdx = this._getRandomNum(objKeys);
    let key = objKeys[randomKeyIdx];
    let text = [];

    while (chosenWord !== null && currNumWords <= numWords) {
      console.log("key = ", key);
      let wordList = this.markovChain[key];
      console.log("wordlist = ", wordList);
      let randomWordIdx = this._getRandomNum(wordList);

      if (wordList.length === 1) chosenWord = wordList[0];
  
      chosenWord = wordList[randomWordIdx];
      // console.log("chosenWord = ", chosenWord);
      
      key = chosenWord;
      text.push(chosenWord);
      currNumWords = text.length;
    }
    console.log("text = ", text.join(' '));
    return text.join(' ');
  }
}

let mm = new MarkovMachine("the cat in the hat");
// console.log("mm = ", mm);
// console.log("mm.words = ", mm.words);
console.log("mm.markovChain = ", mm.markovChain);
mm.getText();