# Cell Phone Bill

A particular cell phone plan includes for € 15.00 a month: 
- 50 minutes of air time 
- 50 text messages    
- Each additional minute of air time costs € 0.25
- Each additional text messages cost € 0.15  
- All cell phone bills include an additional charge of € 0.44 to support 911 call centers

The entire bill (including the 911 charge) is subject to **5 percent sales tax**.  

Write a program that **reads the number of minutes and text messages used in a month** from the user.  
Display:
- Base charge,
- Extra minutes charge (if any),
- Extra text message charge (if any),
- 911 fee, 
- Tax,
- Total bill amount.   

Only display the additional minute and text message charges if the user incurred costs in these categories. 
Ensure that all the charges are displayed **using 2 decimal places**.

Example:   
Input minutes: 500  
Input messages: 55  

Output:  
Base charge: 15.00€  
Extra minutes charge: 112.50€
Extra messages charge: 0.75€
911 fee: 0.44€
Tax: 6.43€
Total bill amount: 135.12€


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
python -m unittest python/test_cell_phone_bill.py
```

or run the command from the terminal  
`python -m unittest projects/m1/014-cell-phone-bill/python/test_cell_phone_bill.py`


# Deadline

This project requires to be completed in a maximum of **2 hours**
