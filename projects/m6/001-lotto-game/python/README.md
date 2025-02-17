# Lotto Game
Project divided into 3 learning paths, based on the lottery game.
## Learning Path 1
In this learning path the software allow the user to generate lottery bills.
### To start the program:
Run the file lotto_game.py.
### The “lotto” folder contains the modules with the classes used in the program:
* game.py  
Contains the Game class and therefore information on the lottery game, such as the minimum and maximum number of bills that can be generated:

  * generate_bills  
generate bills by asking the user for the bet-type, how many numbers to generate and the city

* bill.py  
Contains the Bill class and therefore also the methods that assist in the generation of the bill:

  *	choose_bet_type  
  asks the user to choose the type of bet
  *	choose_number  
  asks the user to choose how many numbers to generate
  *	choose_city  
  asks the user to choose which city to play on
  *	generate_numbers  
  goes to randomly generate the numbers of a bill

* bet_type.py  
Contains the Bet_type class and therefore information on the types of bets available in the game:

  * is_a_valid_type  
  check that a bet type is available in the game
  * is_a_valid_bet  
  check that it is possible to generate a bet by comparing the bet-type with the numbers to be generated
  * bet_table  
  returns a summary table of the bet-types available in the game

* city.py  
Contains the City class and therefore information about the available cities:

  * is_a_valid_city  
  check that a city is available in the game
  * city_table  
  returns a table containing the cities available in the game
  
