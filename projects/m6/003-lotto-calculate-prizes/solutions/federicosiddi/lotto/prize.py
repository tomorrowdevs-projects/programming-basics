class Prize:
    """
    This class has properties and methods used to calculate the prize for a winning bill
    """

    # This dict has amount of winning numbers as keys and possible combinations as values, the index of the list
    # represents the bet type, 0 Ambata, 1 Ambo etc
    COMBINATIONS = {1: [1],
                    2: [2, 1],
                    3: [3, 3, 1],
                    4: [4, 6, 4, 1],
                    5: [5, 10, 10, 5, 1],
                    6: [6, 15, 20, 15, 6],
                    7: [7, 21, 35, 35, 21],
                    8: [8, 28, 56, 70, 56],
                    9: [9, 36, 84, 126, 126],
                    10: [10, 45, 120, 210, 252]}

    # This dict has amount of played numbers as keys and gross prizes as values, the index of the list
    # represents the bet type, 0 Ambata, 1 Ambo etc
    PRIZES = {1: [11.23],
              2: [5.61, 250],
              3: [3.74, 83.33, 4500],
              4: [2.80, 41.66, 1125, 120000],
              5: [2.24, 25, 450, 24000, 6000000],
              6: [1.87, 16.66, 225, 8000, 1000000],
              7: [1.60, 11.90, 128.57, 3428.57, 285714.28],
              8: [1.40, 8.92, 80.35, 1714.28, 107142.85],
              9: [1.24, 6.94, 53.57, 952.38, 47619.04],
              10: [1.12, 5.55, 37.50, 571.42, 23809.52]}

    TAX = 8  # indicates % of taxes to subtract from gross win

    @staticmethod
    def calculate_prize(winning_bills):
        """
        This function calculates the prize for each winning bill, takes a winning_bills list as input and returns
        a winning_bills list with gross and net_win properties calculated

        :param winning_bills: type list, list of WinningBills used to calculate prizes for each bill
        :return winning_bills: type list, list of WinningBills with net and gross wins calculated
        """
        for w_bill in winning_bills:
            if w_bill.city == "Tutte":
                # prize is used to store the prize amount of the bill based on the numbers played and the bet type
                prize = Prize.PRIZES[len(w_bill.numbers)][(w_bill.bet_type - 1)]
                # here we calculate the combinations of wins for each city based on the winning numbers and bet type
                combinations = [Prize.COMBINATIONS[len(city_winning_nums)][w_bill.bet_type - 1] for city_winning_nums in w_bill.winning_combs.values()]
                # then we sum all the combinations in the combinations list
                combinations = sum(combinations)
                # at this point we calculate the gross win and net win for the the winning bill
                gross_win = round((prize * combinations * w_bill.bet_amount) / 10, 2)
                net_win = round(gross_win * ((100-Prize.TAX)/100), 2)
                w_bill.net_win = net_win
                w_bill.gross_win = gross_win
            else:
                # prize is used to store the prize amount of the bill based on the numbers played and the bet type
                prize = Prize.PRIZES[len(w_bill.numbers)][(w_bill.bet_type - 1)]
                # here we calculate the combinations of wins for the bill city based on the winning numbers and bet type
                city_winning_nums = [winning_nums for winning_nums in w_bill.winning_combs.values()][0]
                # here we calculate the combinations of wins based on the winning numbers and bet type
                combinations = Prize.COMBINATIONS[len(city_winning_nums)][(w_bill.bet_type - 1)]
                # at this point we calculate the gross win and net win for the the winning bill
                gross_win = prize * combinations * w_bill.bet_amount
                net_win = round(gross_win * ((100-Prize.TAX)/100), 2)
                w_bill.net_win = net_win
                w_bill.gross_win = gross_win

        return winning_bills
