### BUDGET APP

Budget management console app, save your budget data in budget.json file.

////////////////////////////////////////
*** Currency *** => moneyChooseMenu()
At startup you can set your currency:

------------------- BUDGET APP -------------------

Choose your currency (example: $, €, ¥, £, etc ...)


Currency > 

/////////////////////////////////////////////////////////////////////////////////

*** Set your categories *** => modifyCategoryMenu()
there are already 5 preset that you can modify by renaming, deleting or adding them : 

Current categories are:

------------------------------------------------
Food <> Clothing <> Entertainment <> Home <> Car
------------------------------------------------

Do you want to change or add them?

1) Rename category
2) Add more categories
3) Delete category
4) That's okay

> 
________________________________________________________________________________
--- 1) Rename --- Choose the category you want to rename and write the new name:

Which one do you want to rename?

1) Food
2) Clothing
3) Entertainment
4) Home
5) Car
Rename > 3
New name > 
__________________________________________________________________
--- 2) Add more categories --- write the name of the new category:

Write the name of the category you want to add

Add > 

__________________________________________________________
--- 3) Delete --- Choose the category you want to delete:

Which one do you want to delete?

1) Food
2) Clothing
3) Entertainment
4) Home
5) Car
Delete > 

___________________________________________________________________________________
--- 4) That's okay --- when you have set your categories continue to the next menu

/////////////////////////////////////////////////////////////////////////////////

*** Set initial Balance *** => setInitAmountMenu()
set an initial money value for your categories:

All categories start with € 0, do you want to set an initial value?

1) Yes, I set an equal value for all
2) I want to choose the value for each one
3) no, they are all good for € 0

> 

__________________________________________________________________________________
--- 1) Yes, I set an equal value for all --- write a value that will be set on all categories:

Set the starting value for all categories

€ 

__________________________________________________________________________________
--- 2) I want to choose the value for each one --- choose how much to set for each category (if you press enter without writing a digit it will be set to 0):

Set the starting value for single categories


Food

€ 300

Clothing

€ 500

Entertainment

€ 200

Home

€ 700

Car

€ 100

___________________________________________________________________
--- 3) no, they are all good for € 0 --- they will all be set to 0:

/////////////////////////////////////////////////////////////////////////////////////

* These initial settings will be saved in the JSON file and will not be asked again until the file is deleted
* From now on when starting the app you will be directed to the main menu

//////////////////////////////////////////////////////////////////////////////////////
*** Main Menu *** => principalMenu()

1) Choose category
2) Search operation
3) Shows the graph of percentage spent
4) Print movements of all categories
5) Show total balance

reset) Delete all and Reset

x) Exit

> 

_______________________________________________________________________________________
--- 1) Choose category --- choose a category to be able to perform operations on it see below 'Choose category menu', or press 'b' to return to the previous menu.

1) Food
2) Clothing
3) Entertainment
4) Home
5) Car

b) Go to main menu

> 

________________________________________________________________________________________
--- 2) Search operation --- Search for the word typed in all the descriptions of the operations performed, you can also write the incomplete word, the uppercase and lowercase letters will not be considered, write at least 3 characters:

Write a keyword to search for in the operations you performed

SEARCH > Lea
        _______________________________________________________
        they will be shown divided by category, example result:

        All search results with the word "LEA"


        -----Home-----

        date : 7/11/2022
        amount : € -456.45
        description : lease

_________________________________________________________________________________________
--- 3) Shows the graph of percentage spent --- View a graph where in the X axis there are all the categories and the amount of expenses only for each category (the total expenses will be shown in the title above the graph).
in the Y axis there is the percentage of the single ones on the total expenditure, the percentage is rounded to the nearest ten:

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

________________________________________________________________________________________
--- 4) Print movements of all categories --- it prints all the operations of all the categories, showing also the totals of each and the total of all

******************* FOOD ********************
7/11/2022 initial balance          €   300.00

                          TOTAL :  €   300.00

***************** CLOTHING ******************
7/11/2022 initial balance          €   500.00
7/11/2022 new nike shoes           €  -300.00

                          TOTAL :  €   200.00

*************** ENTERTAINMENT ***************
7/11/2022 initial balance          €   200.00

                          TOTAL :  €   200.00

******************* HOME ********************
7/11/2022 initial balance          €   700.00
7/11/2022 energy bills             €  -150.00
7/11/2022 lease                    €  -456.45

                          TOTAL :  €    93.55

******************** CAR ********************
7/11/2022 initial balance          €   100.00

                          TOTAL :  €   100.00

-----------------------
TOTAL BALANCE € 893.55
-----------------------

____________________________________________________________________________
--- 5) Show total balance --- it only shows the total balance for 3 seconds

_________________________________________________________________________________________
--- reset) Delete all and Reset --- Delete the json file and reset the app, then all your settings and operations will be cleared. asks for an agreement, you will have to write entirely 'reset' and then 'yes', you will be redirected to the currency selection menu to start all over again

! budget.json file will be deleted,
! all settings and data will be lost.

Are you sure?

yes or no > 

_______________________________________________________________
--- x) Exit --- exits the app and returns to the command prompt

///////////////////////////////////////////////////////////////////////////////////////

*** Choose category menu *** => chooseCategoryMenu()
choose a category to be able to perform operations:

1) Food
2) Clothing
3) Entertainment
4) Home
5) Car

b) Go to main menu

> 

////////////////////////////////////////////////////////////////////////////////////////

*** Category menu *** => categoryMenu()
you can carry out operations such as a deposit, a withdrawal, a transfer to another category, print the operations of this category, quickly show the remaining balance or cancel the last operation

1) Deposit
2) Withdraw
3) Transfer
4) Print
5) Show Balance

del) Delete last operation

b)Choose other category

FOOD > 

_______________________________________________________________________________________
--- 1) Deposit  or 2) Withdraw  => operationMenu() --- write the amount and description, you can insert or remove a maximum of 9999.99 for each operation (maximum 7 characters), in the case of a withdrawal, it will be checked whether there are the necessary funds

Deposit amount € 300
Deposit description > salary

_______________________________________________________________________________________
--- 3) Transfer --- you can transfer money from one category to another, only if there are sufficient funds, write the amount and choose the destination category

Transfer amount € 200

2) Clothing
3) Entertainment
4) Home
5) Car

Transfer from FOOD to > 5

_______________________________________________________________________________________
--- 4) Print --- print the list of operations carried out for this category in this format: date description and amount. the description will be shown with a maximum of 23 characters, at the end the total balance will be shown

******************* FOOD ********************
7/11/2022 initial balance          €   300.00
7/11/2022 salary                   €   300.00
7/11/2022 restaurant "Da Dante"    €   -80.00
7/11/2022 shopping at Lidl         €  -120.45
7/11/2022 Transfer to Entertainme  €  -150.00

                          TOTAL :  €   249.55

_____________________________________________________________
--- 5) Show balance --- shows the total balance for 3 seconds

_________________________________________________________________________________________
--- del) Delete last operation --- delete the last operation carried out, displays it and asks for confirmation, in the case of a transfer, it checks whether there are necessary funds also in the other category, if some operations have been carried out after the transfer and there were not enough money, the deletion is deleted and both would remain unchanged

The last operation will be canceled:

date : 7/11/2022
amount : € -150.00
description : Transfer to Entertainment

Are you sure ?

yes or no > 

_________________________________________________________________________________________
