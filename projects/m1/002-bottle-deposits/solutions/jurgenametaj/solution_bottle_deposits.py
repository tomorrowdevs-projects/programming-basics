# Reads the number of containers of each size from the user and displays the refund

def input_number_of_containers(size):
    while True:
      try:
          x = int(input('Enter the number of '+size+': '))
          if x<0:
              print('I need a positive number, try again')
          else:
              return x
      except:
          print('I need a naturnal number, try again')

small_output = 'small containers (1L or less)'
big_output = 'big containers (bigger than 1L)'

small_deposit = 0.10
big_deposit = 0.25
print('This program will help you to find out how much your refound will be.')
print('Remember, small containers are worth $0.10 each and big containers are worth $0.25 each.')
refound = round(input_number_of_containers(small_output)*small_deposit+input_number_of_containers(big_output)*big_deposit,2)
print('Your refound should be: $'+str(refound))