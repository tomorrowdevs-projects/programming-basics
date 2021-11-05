# Display the Tail of a File

Unix-based operating systems also typically include a tool named tail. 

It displays the last 10 lines of a file whose name is provided as a command line argument. Write a Python program that provides the same behavior. 

Display an appropriate error message if the file requested by the user does not exist, or if the command line
argument is omitted.


There are several different approaches that can be taken to solve this problem.

One option is to load the entire contents of the file into a list and then display its last 10 elements.

 Another option is to read the contents of the file twice, once to count the lines, and a second time to display its last 10 lines. 
 
 However, both of these solutions are undesirable when working with large files. Another solution exists that only requires you to read the file once, and only requires you to store 10 lines from the file at one time. For an added challenge, develop such a solution.
		 
# Documentation

For this project solution you may use:

- Files and Exceptions

# Deadline

This project requires to be completed in a maximum of **2 hours**
