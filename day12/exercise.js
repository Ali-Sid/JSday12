// Exercise: Level 1

// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

const txt =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

const pattern = /\d+/g;

const matches = txt.match(pattern);

const sum = matches.reduce((total, current) => total + parseInt(current), 0);
console.log(sum); // 19500

// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

// points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
// sortedPoints = [-4, -3, -1, -1, 0, 2, 4, 8];
// distance = 12;

const points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"]; // given points in the x-axis

const sortedPoints = points.map(Number).sort((a, b) => a - b); // converting th epoints into numbers and then sorting using sort() method with a comparison funtion that substracts each element from the next.

const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0]; // finding the distance between first and last points in the sorted array

console.log(sortedPoints);

/*
[
  -4, -3, -1, -1,
   0,  2,  4,  8
]
*/

console.log(distance); // 12

// 3. Write a pattern which identify if a string is a valid JavaScript variable

/*
is_valid_variable('first_name') # True
is_valid_variable('first-name') # False
is_valid_variable('1first_name') # False
is_valid_variable('firstname') # True */

function is_valid_variable(variable_name) {
  const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return pattern.test(variable_name);
}

console.log(is_valid_variable("first_name")); // true
console.log(is_valid_variable("first-name")); // false
console.log(is_valid_variable("1first_name")); // false
console.log(is_valid_variable("firstname")); // true

// Exercise: Level 2

// 1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

// const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
/* console.log(tenMostFrequentWords(paragraph))
    [
    {word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1},
    {word:'to', count:1},
    {word:'the', count:1},
    {word:'something', count:1},
    {word:'if', count:1},
    {word:'give', count:1},
    {word:'develop',count:1},
    {word:'capabilities',count:1},
    {word:'application', count:1},
    {word:'an',count:1},
    {word:'all',count:1},
    {word:'Python',count:1},
    {word:'If',count:1}]
console.log(tenMostFrequentWords(paragraph, 10))
[{word:'love', count:6},
{word:'you', count:5},
{word:'can', count:3},
{word:'what', count:2},
{word:'teaching', count:2},
{word:'not', count:2},
{word:'else', count:2},
{word:'do', count:2},
{word:'I', count:2},
{word:'which', count:1}
]
*/

function tenMostFrequentWords(paragraph, n) {
  // convert this parameter (paragraph) into lower case and split into an array of words using regular expression
  const words = paragraph.toLowerCase().match(/\b\w+\b/g);

  //create a frequency map of words
  const freqMap = {};
  for (let word of words) {
    freqMap[word] = (freqMap[word] || 0) + 1;
  }

  // convert frequency map to an array of {word, count} objects

  const freqArr = Object.keys(freqMap).map((word) => ({
    word,
    count: freqMap[word],
  }));

  // sort array in descending order of frequency and return top 10 entries
  return freqArr.sort((a, b) => b.count - a.count).slice(0, n);
}

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

console.log(tenMostFrequentWords(paragraph));

/*
[
  { word: 'love', count: 6 },
  { word: 'you', count: 5 },
  { word: 'can', count: 3 },
  { word: 'i', count: 2 },
  { word: 'teaching', count: 2 },
  { word: 'if', count: 2 },
  { word: 'do', count: 2 },
  { word: 'not', count: 2 },
  { word: 'what', count: 2 },
  { word: 'else', count: 2 },
  { word: 'python', count: 1 },
  { word: 'something', count: 1 },
  { word: 'which', count: 1 },
  { word: 'give', count: 1 },
  { word: 'all', count: 1 },
  { word: 'the', count: 1 },
  { word: 'capabilities', count: 1 },
  { word: 'to', count: 1 },
  { word: 'develop', count: 1 },
  { word: 'an', count: 1 },
  { word: 'application', count: 1 }
]
*/

console.log(tenMostFrequentWords(paragraph, 10));

/*

[
  { word: 'love', count: 6 },
  { word: 'you', count: 5 },
  { word: 'can', count: 3 },
  { word: 'i', count: 2 },
  { word: 'teaching', count: 2 },
  { word: 'if', count: 2 },
  { word: 'do', count: 2 },
  { word: 'not', count: 2 },
  { word: 'what', count: 2 },
  { word: 'else', count: 2 }
]
*/

// Exercise: Level 3

// 1. Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
/*  sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
  console.log(cleanText(sentence))
 */

function cleanText(text) {
  // remove special characters and punctuation marks

  text = text.replace(/[^\w\s]/gi, "");

  // convert to lower case
  text = text.toLowerCase();

  // remove extra white spaces
  text = text.replace(/\s+/g, " ").trim();

  return text;
}

function countMostFrequentWords(text, count) {
  // clean the text
  text = cleanText(text);

  // split text into words
  const word = text.split(" ");

  // count frequency of each word
  const frequency = {};
  word.forEach((word) => {
    if (word in frequency) {
      frequency[word]++;
    } else {
      frequency[word] = 1;
    }
  });

  // sort the frequency object by frequency
  const sortedFrequency = Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .map((entry) => ({ word: entry[0], count: entry[1] }));

  // return the top count words
  return sortedFrequency.slice(0, count);
}

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

console.log(cleanText(sentence));

// i am a teacher and i love teaching there is nothing as more rewarding as educating and empowering people i found teaching more interesting than any other jobs does this motivate you to be a teacher

console.log(countMostFrequentWords(sentence, 3));

/*
[
  { word: 'i', count: 3 },
  { word: 'a', count: 2 },
  { word: 'teacher', count: 2 }
]
*/

// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

/*
I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
 ```
```js
console.log(mostFrequentWords(cleanedText))
[{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]*/

function mostFrequentWords(text) {
  // split the text into array of words
  const words = text.split(" ");

  // create an obj to store frequency count of each word

  const frequencyMap = {};

  // loop through each word and update its frequency count in the map
  for (let word of words) {
    if (frequencyMap[word]) {
      frequencyMap[word]++;
    } else {
      frequencyMap[word] = 1;
    }
  }

  // sort the frequency words in descending order of their frequency order
  const sortedWords = Object.keys(frequencyMap).sort(
    (a, b) => frequencyMap[b] - frequencyMap[a]
  );

  // get three most frequent words along with their counts
  const result = [];
  for (let i = 0; i < 3; i++) {
    if (sortedWords[i]) {
      result.push({
        word: sortedWords[i],
        count: frequencyMap[sortedWords[i]],
      });
    }
  }

  return result;
}

const cleanedText = cleanText(sentence);
console.log(mostFrequentWords(cleanedText));

/*
[
  { word: 'i', count: 3 },
  { word: 'a', count: 2 },
  { word: 'teacher', count: 2 }
]
*/
