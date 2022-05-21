
#allows you to choose the type of bet,
#typing values ​​from 1 to 5

class Type_bill :
  played = []
  amount_played = 0

  def __init__(self):
        self.choices = ['ambata', 'ambo', 'terno', 'quaterna', 'cinquina']   

        
  #type controls the range of choice for the type of game
  def type(self): 
    
    while True:
            choice = Type_bill.str_type(self)
            if  choice > 0 and choice <= 5:
               break
             
            print('Try again value not accepted')
    wheel=  self.choices[choice-1]        
    print(f'You chose : {wheel}')
      
    return wheel

#str_type is only for receiving input from the user 


  def str_type(self):
               print('What game do you want to play for this ticket? ')
               choice = int(input(' 1 : ambata \n 2 : ambo \n 3 : terno \n 4 : quaterna \n 5 : cinquina \nEnter the number please?\n'))
               self.played.append(choice)
               return choice
               
       
  #to receive input for the amount to be played     
  def amount_bet(self):
      while True:
         try : 
             print()
             print('Choose the amount you want to play, please - use a comma\nexample: 0.12, 0.25, 2, 1.25, 15.23....')
             print()
             amount_tk = float(input('Indicate the amount you want to play...\n'))
             amount_tk = round(amount_tk, 2)
             Type_bill.amount_played = amount_tk

             break
         except ValueError:
             print('maybe you used a period, use comma to separate decimals please')
      return amount_tk

