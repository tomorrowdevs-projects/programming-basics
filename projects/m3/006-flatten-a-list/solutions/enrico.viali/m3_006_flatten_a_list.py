"""
Flatten a List
Lists can contain other lists. When one list occurs inside another the inner list is said to be nested inside the outer list.

Each of the inner lists nested within the outer list may also contain nested lists, and those lists may contain additional nested lists to any depth.

For example, the following list includes elements that are nested at several different depths: [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]].

Lists that contain multiple levels of nesting can be useful when describing com- plex relationships between values, but such lists can also make performing some operations on those values difficult because the values are nested at different levels.

Flattening a list is the process of converting a list that may contain multiple levels of nested lists into a list that contains all of the same elements without any nesting. For example, flattening the list from the previous paragraph results in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

The following recursive algorithm can be used to flatten a list named data:

If data is empty then Return the empty list
If the first element in data is a list then
    Set l1 to the result of flattening the first element in data
    Set l2 to the result of flattening all of the elements in data, except the first
    Return the concatenation of l1 and l2
If the first element in data is not a list then
    Set l1 to a list containing only the first element in data
    Set l2 to the result of flattening all of the elements in data, except the first Return the concatenation of l1 and l2
Write a function that implements the recursive flattening algorithm described previously.

Your function will take one argument, which is the list to flatten, and it will return one result, which is the flattened list.

Include a main program that demonstrates that your function successfully flattens the list shown earlier in this problem, as well as several others.

Documentation
For this project solution you may use:

Recursion
Lists
Objects (Dictionaries in Python)
Functions
Conditionals
Repetitions
Additional contents:

Python: RECURSION Explained (video)
Recursion for Beginners: A Beginner's Guide to Recursion (video)
Recursion, the Fibonacci Sequence and Memoization (video)
Deadline
This project requires to be completed in a maximum of 2 hours
.
"""


liste = [
  [0, 1, [2,3],4,5, 6],
  [10, 11, [12, [13,["paperino", ["qui", "quo", "qua"]],14], 15], 16]
]

depth = 0
indent = 4


def flatten_list(l):

  global depth

  flattened_list  = []
  depth += 1
  spacing_curl = " "*(depth*indent-2)
  spacing = " "*depth*indent

  print(spacing_curl, "{")
  for e in l:
    if  isinstance(e, list):
        flatten_list(e)
    else:
      flattened_list.append(e)
      print(f"{spacing}{e}, ")
  print(spacing_curl, "}")

  depth -= 1

  return flattened_list

if __name__ == "__main__":

  for l in liste:
    print("="*20)
    print(flatten_list(l))