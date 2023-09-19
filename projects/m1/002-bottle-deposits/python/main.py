""" In many jurisdictions a small deposit is added to drink containers to encourage people to recycle them.  
In one particular jurisdiction, drink containers holding one liter or less have a $0.10 deposit,
and drink containers holding more than one liter have a $0.25 deposit.  
Write a program that reads the number of containers of each size from the user.
Your program should continue by computing and displaying the refund that will be received for returning those containers.
Format the output so that it includes a dollar sign and two digits to the right of the decimal point. """

# deposit
oneLiterDeposit = 0.10;
multiLiterDeposit = 0.25;

# container 
oneLiterContainer = int(input("\nPlease insert how many one liter containers do you have: "));
multipleLiterContainer = int(input("Please insert how many multiple liters containers do you have: "));

refund = (oneLiterContainer * oneLiterDeposit) + (multiLiterDeposit * multipleLiterContainer);

print("\nThis is your refund: %.2f $" %refund);
