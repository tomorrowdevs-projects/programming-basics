# What Day of the Week

The following formula can be used to determine the day of the week for January 1 in a given year:

day_of_the_week = (year + floor((year − 1) / 4) − floor((year − 1) / 100) + floor((year − 1) / 400)) % 7

The result calculated by this formula is an integer that represents the day of the week. 
Sunday is represented by 0. 
The remaining days of the week following in sequence through to Saturday, which is represented by 6.

Use the formula above to write a program that reads a year from the user and reports the day of the week for January 1 of that year. 
The output from your program should include the full name of the day of the week, not just the integer returned by the formula.

To better structure the source code I have created two functions.</br>
The first getDayOfWeek(year) return number day of week associating zero to Sunday.</br>
The second getDayTextName return day text of the week associating zero to Sunday


# Documentation

For this project solution you may use:

- Variables, expressions, statements
- Conditionals and recursion
- Iteration
- Strings

# Deadline

This project requires to be completed in a maximum of **2 hours**

# The run of code

Output Presentation
```
C:\Users\user\AppData\Local\Programs\Python\Python310\python.exe "C:/Users/user/Desktop
/tommorowdevs-github/Repo TD/programming-basics/projects/m1/017-what-day-of-the-week/
solutions/francescoricci/017-what-day-of-the-week.py"

Insert year : 2020
The first day of the year 2020 is Wednesday

Process finished with exit code 0
```