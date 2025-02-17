### Budget App

///////////////////////////////////////////////////
///////////// Create category class ///////////////
///////////////////////////////////////////////////

`Category` class in `utils.js`. It should be able to instantiate objects based on different budget categories like *food*, *clothing*, and *entertainment*. When objects are created, they are passed in the allCategory array in the global object. The class should have an instance private variable called  `balance` , `categotyName`, `date` and `ledger` that is a list. The class should also contain the following methods:

* A `deposit` method that accepts an amount and description. If no description is given, it should default to an empty string. The method should append an object to the ledger list in the form of `{"date", "amount": amount, "description": description}`.
* A `withdraw` method that is similar to the `deposit` method, but the amount passed in should be stored in the ledger as a negative number. If there are not enough funds, nothing should be added to the ledger. This method should return `True` if the withdrawal took place, and `False` otherwise.
* A `transfer` method that accepts an amount and another budget category as arguments. The method should add a withdrawal with the amount and the description "Transfer to [Destination Budget Category]". The method should then add a deposit to the other budget category with the amount and the description "Transfer from [Source Budget Category]". If there are not enough funds, nothing should be added to either ledgers. This method should return `True` if the transfer took place, and `False` otherwise.
* A `check_funds` private method that accepts an amount as an argument. It returns `False` if the amount is greater than the balance of the budget category and returns `True` otherwise. This method should be used by both the `withdraw` method and `transfer` method.
* A `check_input` private method check if the input is a number and if the amount is less than 10000 (to keep a maximum of 7 characters including 2 decimals)
* A `deleteLast` method that accepts the index parameter and cancels the operation performed. the index parameter is set by default to -1 to cancel the last operation
* A `getters` and `setters` for instance variables apart from the date, for reading and modifying them

* A `print` method When the budget object is printed it should display:
* A title line of 45 characters where the name of the category is centered in a line of `*` characters, keeping an empty space in front of and behind the name.
* A list of the items in the ledger. Each line should show the date, description and amount. The first 23 characters of the description should be displayed, then the amount. The amount should be right aligned, contain two decimal places, and display a maximum of 7 characters.
* A line displaying the category total.

Here is an example of the output:
```
******************* FOOD ********************
7/11/2022 initial balance          €   300.00
7/11/2022 salary                   €   300.00
7/11/2022 restaurant "Da Dante"    €   -80.00
7/11/2022 shopping at Lidl         €  -120.45
7/11/2022 Transfer to Entertainme  €  -150.00

                          TOTAL :  €   249.55
```
///////////////////////////////////////////////////
//////////////////// global ///////////////////////
///////////////////////////////////////////////////

* the `global` object contains all the data to be passed to the JSON file for saving: 
- allCategory = all instances of the Category class, 
- allCategoryName = array of category names, 
- money = string of the chosen currency 
and will have 2 methods: 
- moneyInput = setter to change currency 
- reset = reset all variables to the initial preset value, it is called when the budget is reset and the JSON file is deleted

///////////////////////////////////////////////////
/////// Load, Save and Delete the JSON File ///////
///////////////////////////////////////////////////

* the `load` function checks whether the budget.json file exists or not. If the budget.json file exists, it reads it, passes all data to the globals and calls funct1, otherwise it launches funct2
accept funct1 e funct2 as parameters, funct1 the function that will pass if the file was there and funct2 the one that passes otherwise.

* the `save` function creates and writes busget.json file with all globals object

* the `deleteFile` function delete the json file and reset the global object.

///////////////////////////////////////////////////
/// Creating instances and set initial balance ////
///////////////////////////////////////////////////

* the `createInstances` function Create instances, if parameter 'value' is an array it sets a value of initial balance for each instance, if it is a number it sets the same for all.
It cycles the allCategoryName array and creates all the instances by assigning each one the name of the category, its initial budget value, saving them in allCategory.

///////////////////////////////////////////////////
/////////////// Input and Check ///////////////////
///////////////////////////////////////////////////

* the `check` function accepts 2 parameters: 
- possibleInput = what type of input we want to be allowed: 
    - 'number': accepts only numbers less than 10000, returns a number with 2 decimals 
    - 'text': accepts any string with at least 3 characters, returns the string 
    - 'currency': accepts only currency symbols eg. €, $, £, returns the string 
    - an Array where elements will be the only choice, returns a string.
- input = il valore da controllare 
if the input is not accepted, it returns false

* the `inputAndCheck` function prompts the user for the prompt, checks it with the `check` function and if it returns a value it passes the input, otherwise it recursively calls itself until a valid input is typed
takes 2 parameters: 
- possibleinput which passes it to check 
- inputString = a string that will be displayed in the prompt

///////////////////////////////////////////////////
///////// Rename, Add or Delete Category //////////
///////////////////////////////////////////////////

* the `renOrDelCategory` function Rename or delete a category name from the allCategoryName array
takes 3 parameters:
- renameOrDelete : 
    - 'ren' asks which category index and the new name and rename it
    - 'del' asks which category index and delete the category only if there are more than 1,
if there is only one category return true.

*the `addCategory`function adds a category in allCategoryName at the bottom only if it doesn't already exist also recognizes with case insensitive, return name of category

///////////////////////////////////////////////////
//////////////////// Print ////////////////////////
///////////////////////////////////////////////////

* the `printCategoryInline` function returns a string with the list of categories separated by ' <> ' and a separator above and below. example: 
------------------------------------------------
Food <> Clothing <> Entertainment <> Home <> Car
------------------------------------------------

* the `printCategoryList` function print the list of categories,accept exclusion : is the index of the category not to be printed (in case of transfer), the current category is not displayed. example :

without exclusion               with exclusion 3

1) Food                             1) Food
2) Clothing                         2) Clothing
3) Entertainment                    4) Home
4) Home                             5) Car
5) Car

* the `printAll` function print all categories using the class print method and add the total of all to the end.  Example:

******************* FOOD ********************
7/11/2022 initial balance          €   300.00
7/11/2022 salary                   €   300.00
7/11/2022 restaurant "Da Dante"    €   -80.00
7/11/2022 shopping at Lidl         €  -120.45
7/11/2022 Transfer to Entertainme  €  -150.00

                          TOTAL :  €   249.55

***************** CLOTHING ******************
7/11/2022 initial balance          €   500.00
7/11/2022 new nike shoes           €  -300.00

                          TOTAL :  €   200.00

*************** ENTERTAINMENT ***************
7/11/2022 initial balance          €   200.00
7/11/2022 Transfer from Food       €   150.00

                          TOTAL :  €   350.00

******************* HOME ********************
7/11/2022 initial balance          €   700.00
7/11/2022 energy bills             €  -150.00
7/11/2022 lease                    €  -456.45

                          TOTAL :  €    93.55

******************** CAR ********************
7/11/2022 initial balance          €   100.00

                          TOTAL :  €   100.00

-----------------------
TOTAL BALANCE € 993.10
-----------------------

* the `showTotalBalance` function Show total balance for all categories. it loops all the instances adding the balance of each one, returns a string. Example:

TOTAL BALANCE € 993.10

///////////////////////////////////////////////////
/////////// Search and Delete operation ///////////
///////////////////////////////////////////////////

the `objToString` function accepts an object, returns an array with 
- [0] a string consisting of the object (input obj) key / value , example: 
        date : 7/11/2022
        amount : € -456.45
        description : lease
- [1]the value of amount in number
- [2] the description as string.

* the `deleteOperation` function cancels the last operation using deleteLast method og Category Class , in case of transfer it also cancels the operation in the target class but only if there are the necessary funds otherwise it eliminates nothing.
Accept 4 parametr:
- amount and description are the amount and description of the operation to be canceled
- thisCanName and thisCategory are the name of the category performing the operation and its instance object

* the `showResult` function show result of search operation, return a string with key/value. If there is no result, it returns! No matches!
Accept 2 parametr:
- result = the search result, objects inside an array of arrays
- word = la parola cercata.
Example:

All search results with the word "LEA"


-----Home-----

date : 7/11/2022
amount : € -456.45
description : lease

* the `searchOperation` function it cycles through all descriptions of all categories and filters those that contain the keyword, it is case insensitive.
Accept one parameters: input = is the keyword to look for.
use `showResult` to format the text being printed

///////////////////////////////////////////////////
////////////////// Spend Chart ////////////////////
///////////////////////////////////////////////////

* the `create_spend_chart` function. It should return a string that is a bar chart.

The chart should show the percentage spent in each category passed in to the function. The percentage spent should be calculated only with withdrawals and not with deposits. Down the left side and right side of the chart should be labels 0 - 100. The "bars" in the bar chart should be made out of the "o" character. 
The height of each bar should be rounded down to the nearest 10. 

The function `calculateSpentPercent` return array : [0]array of strings with total expenses formatted for the chart [1]the rounded percentages array and [2] the sum of the expenditure of all categories. 
The function`createGraphRow` return a string with the single line of the graph and drawing an 'o' comparing the element of the percentage array with the percentage of the graph
Accept input 'value': from 0 to 100 ten by ten, 'arrspentPercent': array of spending percentages for each category. 
The horizontal line below the bars should go two spaces past the final bar, they will adapt in length according to the number of categories represented. 
Below the line will be the individual expense amounts for each category. 
Each category name should be written vertically below the bar with `verticalName` function.
There should be a title at the top that says "Percentage spent by category out of a total of " and the total amount of expenses of all categories.

```
Percentage spent by category out of a total of € 906.45

100|                                        |100
 90|                                        |90
 80|                                        |80
 70|                                        |70
 60|                            o           |60
 50|                            o           |50
 40|                            o           |40
 30|            o               o           |30
 20|            o               o           |20
 10|            o               o           |10
  0|    o       o       o       o       o   |0
    ----------------------------------------
  €     0     300.00    0     606.45    0   
    ----------------------------------------
        F       C       E       H       C   
        o       l       n       o       a   
        o       o       t       m       r   
        d       t       e       e           
                h       r                   
                i       t                   
                n       a                   
                g       i                   
                        n                   
                        m                   
                        e                   
                        n                   
                        t          
```

### Testing 
The unit tests for this project are in `utils.test.js`.

### Development
menus are in `index.js`, all functions and class are in `utils.js`

