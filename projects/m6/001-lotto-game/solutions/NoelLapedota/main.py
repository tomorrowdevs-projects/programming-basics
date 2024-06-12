import argparse
from random import choices

from lotto.lotto_manager import Lotto

'''
with the argparse module we will ask the user for the number of 
bills and this info will be passed to the bussiness logic
 '''

def main():

 parser = argparse.ArgumentParser(description = 'Generetor of bills',
                                  epilog='How many bills you want to generate (min: 1, max: 5, 0: exit)?'
                                 )
 parser.add_argument('-n', type=int, help='Permitted operations', choices=[1, 2, 3, 4, 5, 0], default=0)
 parser.add_argument('-v', '--verbose', help='Verbose output', action='store_true')
 args = parser.parse_args()

 number_bill =  args.n

 if args.verbose:
     print('the rules of the game are here: \n')
     print('https://www.sisal.it/lotto/come-si-gioca')
     print('https://www.servizitelevideo.rai.it/televideo/pub/pagina.jsp?p=786&s=0&r=Nazionale&idmenumain=0')
     
# the various possibilities:
 if number_bill == 0:
     print('Bye Bye')
 elif number_bill <= 5 and  number_bill >= 1:
     print('Very good!! \nThe fortune favors the brave') 
     Lotto(number_bill)
 else:
     print('Only 5 bills, sorry')       


if __name__ == '__main__':
    main()



