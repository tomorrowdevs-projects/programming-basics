

'''
check if the amount of numbers chosen is equal to or greater than the type of game chosen before, within the 10 possible numbers
for example if you choose ambata  you can't only choose 1 number because at least 2 are needed,
The class represents the quantity of numbers to be played.
'''

class Choose_number :

   def __init__(self, state):
         self.state = state
         if self.state == False:
           Choose_number.number_of_game(self) 

   '''
check that the amount of numbers chosen is suitable for the type of bet chosen
  '''        
        
   @staticmethod   
   def number(quantity_of_numbers, played):  # played is type of the game
        while True:
         if  quantity_of_numbers >= (played) :
                 break
         else:
             print('The number must be equal to or greater than the previous choice .... try again')
             print()
             return False
             
        return True    

# from here you receive input
   def number_of_game(self):
          print('How many numbers do you play  for ticket ?\n- Min 1 Max 10 - ')
          print()
          choice_n = int(input('Enter the number please?\n'))
          return choice_n    




           
  
             

       
 
    



  
