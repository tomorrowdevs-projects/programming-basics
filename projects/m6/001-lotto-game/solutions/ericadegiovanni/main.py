import argparse
from lotto.lotto import Lotto

def main():
    
    # recieve a number of ticket form user in the command line
    parser = argparse.ArgumentParser(description="Create Lotto bills")  
    parser.add_argument('-n', type=int, help="Number of bills to generate.", default=0)
    args = parser.parse_args()
    total_bills = args.n

    # if the number of ticket inserted in the command line is correct create them with the lotto class
    if total_bills and 0 < total_bills < 6:        
        Lotto(total_bills)
    else:
        print('You inserted a wrong number of bills.')
  

if __name__ == '__main__':
    main()

