

"""
Num. ambata	 ambo	terno	quaterna	cinquina
1	 11,23	-	      -	       -	       -
2	 5,61	250       -	       -	       -
3	 3,74	83,33	4.500	   -	       -
4	 2,80	41,66	1.125	120.000	       -
5	 2,24	25	    450	    24.000    	6.000.000
6	 1,87	16,66	225	    8.000	    1.000.000
7	 1,60	11,90	128,57	3.428,57	285.714,28
8	 1,40	8,92	80,35	1.714,28	107.142,85
9	 1,24	6,94	53,57	952,38	    47.619,04
10	 1,12	5,55	37,50	571,42	    23.809,52
"""


class Prizes:

    bets = {"ambata": 1, "ambo": 2, "terno": 3, "quaterna": 4, "cinquina": 5}
    tax = 0.8
    prize_tutte = 10 # if city == tutte the prize is divided by 10

    prizes = [[11.23, 0, 0, 0, 0],
              [5.61, 250, 0, 0, 0],
              [3.74, 83.33, 4500, 0, 0],
              [2.80, 41.66, 1125, 120000, 0],
              [2.24, 25, 450, 24000, 6000000],
              [1.87, 16.66, 225, 8000, 1000000],
              [1.60, 11.90, 128.57, 3428.57, 285714.28],
              [1.40, 8.92, 80.35, 1714.28, 107142.85],
              [1.24, 6.94, 53.57, 952.38, 47619.04],
              [1.12, 5.55, 37.50, 571.42, 23809.52]]

    
    def calc_prize(tk):

        """Calculate the gross prize for a ticket"""

        prize = 0 # prize counter
        num = len(tk.nums)  # amount of numbers played
        
        for victory in tk.victory:

            for b in tk.bets_list:
                if victory == b.bet_type:
                    prize += b.money * tk.victory[victory] * Prizes.prizes[num - 1][Prizes.bets[victory] - 1] # prize = moneyPlayed * betWon * table[numbersPlayed][betType]

        if tk.city == 'tutte':
            prize /= Prizes.prize_tutte

        return prize

    def calc_net_prize(prize):
        taxes = prize * 0.08
    
        return prize - taxes