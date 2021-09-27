# String Edit Distance

The edit distance between two strings is a measure of their similarity. 

The smaller the edit distance, the more similar the strings are with regard to the minimum number of insert, delete and substitute operations needed to transform one string into the other. Consider the strings kitten and sitting. 

The first string can be transformed into the second string with the following operations: Substitute the k with an s, substitute the e with an i, and insert a g at the end of the string. This is the smallest number of operations that can be performed to transform kitten into sitting.


As a result, the edit distance is 3.


Write a recursive function that computes the edit distance between two strings.

Use the following algorithm:

    Let s and t be the strings 

        If the length of s is 0 then
            Return the length of t

        Else if the length of t is 0 then
            Return the length of s 

        Else 
        Set cost to 0

        If the last character in s does not equal the last character in t then

            Set cost to 1
            Set d1 equal to the edit distance between all characters except the last one
    in s, and all characters in t, plus 1
            Set d2 equal to the edit distance between all characters in s, and all
    characters except the last one in t, plus 1
            Set d3 equal to the edit distance between all characters except the last one
    in s, and all characters except the last one in t, plus cost Return the minimum of d1, d2 and d3



Use your recursive function to write a program that reads two strings from the user and displays the edit distance between them.
		 
# Documentation

For this project solution you may use:

- Recursion
- Lists
- Objects (Dictionaries in Python)
- Functions
- Conditionals
- Repetitions

Additional contents:

- [Python: RECURSION Explained (video)](https://www.youtube.com/watch?v=wMNrSM5RFMc)
- [Recursion for Beginners: A Beginner's Guide to Recursion (video)](https://www.youtube.com/watch?v=AfBqVVKg4GE)
- [Recursion, the Fibonacci Sequence and Memoization (video)](https://www.youtube.com/watch?v=Qk0zUZW-U_M)

# Deadline

This project requires to be completed in a maximum of **2 hours**
