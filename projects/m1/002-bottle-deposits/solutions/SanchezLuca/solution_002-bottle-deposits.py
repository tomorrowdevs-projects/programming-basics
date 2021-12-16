print('--Hello! Please insert below the number of the bottle for each size for calculate your refund.--')

Small = int(input ('Number of bottles up to 1L included --> '))
Big = int(input ('Number of bottles above 1L --> '))

Deposit_small = (Small * 0.1)
Deposit_big = (Big * 0.25)
Tot_deposit = (Deposit_small + Deposit_big)

print('The ammount of your refund is -->',Tot_deposit,'$')