class Prize:
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

    @staticmethod
    def calculate_prize(winning_bills):
        bills_with_prizes = []
        for bill in winning_bills:
            numbers_amount = len(bill["Numbers"])
            print(f"{numbers_amount} numbers_amount")
            bet_type = bill["Bet"] - 1
            print(f"{bet_type} bet_type")
            combinations = Prize.COMBINATIONS[numbers_amount][bet_type]
            print(f"{combinations} combinations")
            bill_prize = Prize.PRIZES[numbers_amount][bet_type]
            print(f"{bill_prize} bill_prize")
            gross_win = round((bill_prize / combinations), 2)
            if bill["City"] == "Tutte":
                gross_win = (gross_win / 10)
            bills_with_prizes.append((bill["BillNum"], gross_win))
        return bills_with_prizes
