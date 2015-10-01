'use strict';

var paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.';

// The paragraph split into a list
var words = paragraph.split(/\s+/);

// The word list normalized (all lower case with punctuation removed)
var normalizedWords = [];

for (var i = 0; i < words.length; i++) {
  normalizedWords[i] = words[i] .replace(/[^\w']+/, '').toLowerCase();
}

// The words stored as keys of a dictionary
var uniqueWordsAsKeys = {};

for (var j = 0; j < normalizedWords.length; j++) {

  uniqueWordsAsKeys[normalizedWords[j]] = true;
}

// The keys pulled out into a list
var uniqueWords = []

var k = 0;

for (var word in uniqueWordsAsKeys) {
  uniqueWords[k++] = word;
}

// The words as keys and the values the count of each word
var wordFrequencies = {};

for (var l = 0; l < normalizedWords.length; l++) {
  var normalWord = normalizedWords[l];
  if (!wordFrequencies[normalWord]) {
    wordFrequencies[normalWord] = 0;
  }
  wordFrequencies[normalWord] += 1;
}

console.log(wordFrequencies);

module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  wordFrequencies: wordFrequencies
};
