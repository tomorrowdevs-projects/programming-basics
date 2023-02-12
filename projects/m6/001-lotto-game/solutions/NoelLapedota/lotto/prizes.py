from lotto import printer
from lotto import search_winning

#this class calculates the amount of the win, when this is there

class Prizes:
    single_win = []

  

#  Playable combinations
#  The following table shows which and how many combinations from 1 to 10 numbers can be played on a single Lotto game ticket.
      

    combinations = {1: [None, 1],
                    2: [None, 2, 1],
                    3: [None, 3, 3, 1],
                    4: [None, 4, 6, 4, 1],
                    5: [None, 5, 10, 10, 5, 1],
                    6: [None, 6, 15, 20, 15, 6],
                    7: [None, 7, 21, 35, 35, 21],
                    8: [None, 8, 28, 56, 70, 56],
                    9: [None, 9, 36, 84, 126, 126],
                   10:[None, 10, 45, 120, 210, 252]}


#The following table shows the gross amount of Lotto winnings obtained by wagering € 1 on a single wheel,
#  playing from 1 to 10 numbers with the various game options.


    prizes_table = {1: [None, 11.23],
                    2: [None, 5.61, 250],
                    3: [None, 3.74, 83.33, 4500],
                    4: [None, 2.80, 41.66, 1125, 120000],
                    5: [None, 2.24, 25, 450, 24000, 6000000],
                    6: [None, 1.87, 16.66, 225, 8000, 1000000],
                    7: [None, 1.60, 11.90, 128.57, 3428.57, 285714.28],
                    8: [None, 1.40, 8.92, 80.35, 1714.28, 107142.85],
                    9: [None, 1.24, 6.94, 53.57, 952.38, 47619.04],
                   10:[None, 1.12, 5.55, 37.50, 571.42, 23809.52]}

    def __init__ (self, amount, type_of_game, quantity_of_number):
       self.amount = amount
       self.type_of_game = type_of_game
       self.quantity_of_number = quantity_of_number

   # calculate the premium
    def payout_calculator(self):
        result = 0
        while True:
          combination = self.combinations[self.quantity_of_number][self.type_of_game]
          win = combination * self.prizes_table[self.quantity_of_number][self.type_of_game] * self.amount
          result += win
          self.type_of_game -= 1

          if self.type_of_game == 0:
              win = round(result, 2)
              self.single_win.append(win)
              break
        self.control_lenght()
        return win    
        
    # when the various winnings of the single ticket are complete, the sum starts with the total
    # winning_play is an array with the winning type, which must be > to the chosen game
    # when all winnings are processed call sum_wins
    def control_lenght(self):
         if len(search_winning.Search_winning.winning_play) == len(self.single_win):
              self.sum_wins()  

     
    # sums the various winnings that can be placed on a single ticket
    def sum_wins(self):
        sum_wins = sum(self.single_win)
        self.tax(sum_wins)
        
    

   # apply the tax if the win is higher than 500 euros
    def tax(self, sum_wins):
        if sum_wins > 500:
            sum_wins = (sum_wins * 8 ) /  100
            sum_wins = round(sum_wins, 2)
     
        printer.Printer.prize(self,sum_wins)        
