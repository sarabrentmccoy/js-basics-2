'use strict';

var str =
  'We the People of the United States, in Order to form a more ' +
  'perfect Union, establish Justice, insure domestic Tranquility, ' +
  'provide for the common defence, promote the general Welfare, and ' +
  'secure the Blessings of Liberty to ourselves and our Posterity, ' +
  'do ordain and establish this Constitution for the United States ' +
  'of America.';

// 1. Write a function that splits a string into an array of normalized words,
// (lowercase without punctuation).
// We give the function getNormalizedWords an argument so that we can use the function with data other than what is stored in 'paragraph' above.
var getNormalizedWords = function getNormalizedWords(str) {
  // we split the string into an array

  // then loop through the array, transforming each word into a normalized word
  var words = str.split(/\s+/);
  var normalizedWords = [i];
  for (var i = 0; i < words.length; i++){
    normalizedWords[i] = words[i].replace(/[^\w']+/, '').toLowerCase();
    }
return normalizedWords;
};

getNormalizedWords();

// 2. Write a function that takes a string and returns an array of it's unique
//    normalized words.
var getUniqueWords = function getUniqueWords(){
  var uniqueWords = {};
  for (var i = 0; i < getNormalizedWords().length; i++){
    uniqueWords[getNormalizedWords()[i]] = true;
  }

  var uniqueWordsArray = [];
  var k = 0;
  for (var word in uniqueWords){
    uniqueWordsArray[k++] = word
  }

return uniqueWordsArray;
};

getUniqueWords();

// 3. Write a function that counts how many words are in a string, providing
//    the *option* to count unique words instead of total words.
var wordCount = function wordCount(paragraph, bool) {
  var totalWords = getNormalizedWords().length
  var totalUniqueWords = getUniqueWords().length

  if(bool){
    return totalUniqueWords;
  }
  return totalWords
};

wordCount();

// Don't forget to reuse functions wherever possible!

module.exports = {
  getNormalizedWords: getNormalizedWords,
  getUniqueWords: getUniqueWords,
  wordCount: wordCount
};
