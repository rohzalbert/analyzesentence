function analyzeSentence(sentence) {
  // Initialize counters
  let characterCount = 0;
  let wordCount = 0;
  let vowelCount = 0;
  let inWord = false;

  // Check if the sentence ends with a point
  if (sentence[sentence.length - 1] !== '.') {
      console.log("Sentence must end with a point.");
      return;
  }

  // Read characters one by one, excluding the final point
  for (let i = 0; i < sentence.length - 1; i++) {
      let ch = sentence[i];

      // Increment character count
      characterCount++;

      // Check if the character is a vowel
      if ('aeiouAEIOU'.includes(ch)) {
          vowelCount++;
      }

      // Check if the character is part of a word
      if (isLetterOrDigit(ch)) {
          if (!inWord) {
              inWord = true;
              wordCount++;
          }
      } else {
          inWord = false;
      }
  }

  // Output results
  console.log("Total characters (excluding the point): " + characterCount);
  console.log("Total words: " + wordCount);
  console.log("Total vowels: " + vowelCount);
}

function isLetterOrDigit(ch) {
  return /[a-zA-Z0-9]/.test(ch);
}

// Example:
analyzeSentence("Hey there, this is a test sentence 458 thinking.");
