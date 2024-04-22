# analyzesentence
Algorithm: AnalyzeSentence
Input: A string sentence that ends with a period.

Output: The length of the sentence, the number of words, the number of vowels

Steps:
Initialize Counters:
  Set characterCount to 0 (to count the number of characters).
  Set wordCount to 0 (to count the number of words).
  Set vowelCount to 0 (to count the number of vowels).
  Set inWord to false (a Boolean to track whether the current character is part of a word).

  Validate Sentence:
  If the last character of sentence is not a period ('.'), print an error message "Sentence must end with a point." and terminate the algorithm.

  Process Each Character in the Sentence (Excluding the Final Period):
  For each character ch in sentence up to but not including the last character:
    Increment characterCount by 1.
  If ch is a vowel ('a', 'e', 'i', 'o', 'u' and their uppercase versions):
    Increment vowelCount by 1.
  If ch is a letter or a digit:
  If inWord is false:
  Set inWord to true (indicating the start of a new word).
  Increment wordCount by 1.
  If ch is a space or other punctuation:
  Set inWord to false.

Output Results:
Print "Total characters (excluding the point): ", characterCount.
Print "Total words: ", wordCount.
Print "Total vowels: ", vowelCount.
End of Algorithm.
