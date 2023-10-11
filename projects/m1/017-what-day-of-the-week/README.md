# What Day of the Week

The following formula can be used to determine the day of the week for January 1 in a given year:

day_of_the_week = (year + floor((year − 1) / 4) − floor((year − 1) / 100) + floor((year − 1) / 400)) % 7

The result calculated by this formula is an integer that represents the day of the week.   
Sunday is represented by 0. 
The remaining days of the week following in sequence through to Saturday, which is represented by 6.

**Use the formula** above to write a program that **reads a year from the user** 
and **reports the day of the week for January 1 of that year**.   
The output from your program **should include the full name of the day of the week**, not just the integer returned by the formula.

Example:    
Input: 2023  
Output: Sunday

# Documentation

For this project solution you may use:

- Variables, expressions, statements
- Conditionals and recursion
- Iteration
- Strings


# Test
Execute the test to validate your solution.  

**VSCODE**   
To run the test command from the README.md install the extension **runme**. 
Press Ctrl+Shift+x search and install the **runme** extension. 


**Python**

```sh
python -m unittest python/test_what_day_of_the_week.py
```

or run the command from the terminal  
`python -m unittest projects/m1/017-what-day-of-the-week/python/test_what_day_of_the_week.py`

https://spu.edu/ddowning/percal.htm

# Deadline

This project requires to be completed in a maximum of **2 hours**
