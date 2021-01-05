"use strict";
/** Textual markov chain generator */
const text = "the cat in the hat is in the hat"

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    // MORE CODE HERE
    this.makeChains(words);
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains(words) {
    // create object
    let markovObj = {};
    // create set
    // let keysSet = new Set(words);
    // keys = each unique word
    // value = array containing words that come after each key
    // iterate over words with for loop
    for (let i = 0; i < words.length; i++) {
      console.log(' i ', i)
      if (markovObj[words[i]]) {
        let val = markovObj[words[i]];
        console.log('val', val)
        if (words[i + 1]) {
          markovObj[words[i]] = val.push(words[i + 1]);
        } else {
          markovObj[words[i]] = null;
        }
        console.log('markOb at i', markovObj[words[i]])
      } else {
        let val = [];
        if (words[i + 1]) {
          markovObj[words[i]] = val.push(words[i + 1]);
        } else {
          markovObj[words[i]] = null;
        }
        console.log(' key ', markovObj[words[i]])
      }
    }
    console.log('markovObj', markovObj);
  }
  


  /** return random text from chains */

  getText(numWords = 100) {
    // MORE CODE HERE
  }
}
