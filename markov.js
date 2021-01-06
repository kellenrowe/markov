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
    let markovObj = {};
    let keySet = new Set(words);
    console.log("keySet = ", keySet);

    for (let key in keySet){
      markovObj[key] = [];
    }
    console.log("markovObj = ", markovObj);

    // value = array containing words that come after each key
    // iterate over words with for loop
    for (let i = 0; i < words.length; i++) {
      let key = words[i];
      let nextWord = words[i + 1] || null;
      markovObj[key].push(nextWord);
    }
    console.log("markovObj = ", markovObj);
  }
    //   console.log('i = ', i);
    //   console.log('words[i] = ', words[i]);
    //   console.log('markovObj[words[i]] = ', markovObj[words[i]]);
    //   let key = words[i];
    //   let objItem = markovObj[key];
    //   let nextWord = words[i + 1];
    //   let val = [] || markovObj[key];

    //   if (!objItem) {
    //     if (nextWord) {
    //       val.push(nextWord);
    //     } else {
    //       val.push(null);
    //     }
    //     objItem = val;
    //     console.log('objItem = ', objItem);
    //   } else {
    //     let val = objItem;

    //     if (nextWord) {
    //       val.push(nextWord);
    //     } else {
    //       val.push(null);
    //     }
    //     objItem = val;
    //     console.log('objItem = ', objItem);
    //   }
    // }
    // console.log('markovObj =', markovObj);
  // }
  


  /** return random text from chains */

  getText(numWords = 100) {
    // MORE CODE HERE
  }
}
