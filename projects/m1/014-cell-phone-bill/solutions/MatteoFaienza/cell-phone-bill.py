# This program is used to calculate the cost of a telephone plan

minutes=int(input('Enter the number of minutes of calls made '))
mex=int(input('Enter the number of messages sent '))

telephoneRate = 15.00
fee911 = 0.44
print(f'The basic telephone rate charge is       {telephoneRate:.2f} €')

if  minutes > 50:
    minutes = (minutes-50)*0.25
    print(f'The cost for the additional minutes is   {minutes:.2f} €')
else :
    minutes = 0

if mex > 50:
    mex = (mex-50)*0.15
    print(f'The cost for the additional messages is  {mex:.2f} €')
else :
    mex = 0

print(f'911 call center support fee is            {fee911:.2f} €')

totalFee=((telephoneRate+minutes+mex+fee911)/100)*5
print(f'The total cost of taxes is                {totalFee:.2f} €')

totalExpense=telephoneRate+fee911+minutes+mex+totalFee
print(f'The total cost of the phone plan is      {totalExpense:.2f} €')