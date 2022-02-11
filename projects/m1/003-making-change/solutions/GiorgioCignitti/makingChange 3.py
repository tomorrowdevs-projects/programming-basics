amount=int(input("amount in cents:  "))

def calcCoins(cents):
  toonie=cents//200
  cents=cents%200

  loonie=cents//100
  cents=cents%100

  quarter=cents//25
  cents=cents%25

  dime=cents%10
  cents=cents%10

  nickel=cents//5
  cents=cents%5

  penny=cents//1

  return  f"tonnie={toonie} loonie={loonie} quarter={quarter} dime={dime} nickel={nickel} penny={penny}" 

print(calcCoins(amount))