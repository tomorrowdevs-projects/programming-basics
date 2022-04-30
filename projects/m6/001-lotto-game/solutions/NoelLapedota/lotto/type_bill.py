
#allows you to choose the type of bet,
#typing values ​​from 1 to 5

class Type_bill :
  played = []

  @staticmethod
  def type(self):  
     choices = ['ambata', 'ambo', 'terno', 'quaterna', 'cinquina']
     
     while True:
            choice = Type_bill.str_type(self)
            if  choice > 0 and choice <= 5:
               break
            print('Try again value not accepted')
     print(f'You chose : {choices[choice-1]}')
         
     return choices[choice-1]

#str_type is only for receiving input from the user 


  def str_type(self):
               print('What game do you want to play for this ticket? ')
               choice = int(input(' 1 : ambata \n 2 : ambo \n 3 : terno \n 4 : quaterna \n 5 : cinquina \nEnter the number please?\n'))
               Type_bill.played.append(choice)
               return choice
               
       

