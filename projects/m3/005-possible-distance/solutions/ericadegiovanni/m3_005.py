from itertools import combinations_with_replacement

def change_coins(tot, num_coins, combinations):

  '''
  Create a program that determines whether or not it is possible to construct a particular total
  using a specific number of coins. 
  tot: total dollar amount
  num_coins: number of coins to create the total
  combinations: list with all the combinations of coins
  return True if the entered dollar amount can be formed using the number of coins indicated
  else return False
  '''
  # base case
  if combinations == []:
    return False
  else:      
      if sum(combinations[0]) == tot:
          return True
      else:
          return change_coins(tot, num_coins, combinations[1:])
    

def main():
  coins = [25, 10, 5, 1]
  
  # read the dollar amount and the number of coins from the user. 
  tot = float(input('Enter a dollar amount: ')) * 100
  num_coins = int(input('Enter the number of coins for the change: '))

  # create a list with all the combinations
  combinations = list(combinations_with_replacement(coins, num_coins))

  # display result
  if change_coins(tot,num_coins, combinations):
     print(f'The entered amount can be formed using {num_coins} coins.')
  else:
    print(f'You can\'t form the entered amount using {num_coins} coins. ')

if __name__ == '__main__':
    main()