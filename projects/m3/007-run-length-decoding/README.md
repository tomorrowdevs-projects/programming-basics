# Run-Length Decoding

Run-length encoding is a simple data compression technique that can be effec- tive when repeated values occur at adjacent positions within a list. 

Compression is achieved by replacing groups of repeated values with one copy of the value, fol- lowed by the number of times that it should be repeated. For example, the list `["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B","B","A","A","A","A","A","A","B"]`would be compressed as `["A",12,"B",4,"A",6,"B",1]`. 

Decompression is performed by repli-
cating each value in the list the number of times indicated.

Write a recursive function that decompresses a run-length encoded list. Your recursive function will take a run-length compressed list as its only argument. It will return the decompressed list as its only result. 

Create a main program that displays a run-length encoded list and the result of decoding it.
		 
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
