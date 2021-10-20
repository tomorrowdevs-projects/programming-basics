from functools import lru_cache

from functools import lru_cache


@lru_cache
def possible_change(total, num_of_coins, results=[]):
    # Base case
    if total == 0 and num_of_coins == 0:
        # if we have 0 coins and 0 total it means that we have found a combination
        # True will be appended to the results list
        results.append(True)
        return results
    elif True in results:
        return results
    # Recursive Case
    else:
        if total - 25 >= 0 and num_of_coins > 0:
            possible_change(total - 25, num_of_coins - 1)
        if total - 10 >= 0 and num_of_coins > 0:
            possible_change(total - 10, num_of_coins - 1)
        if total - 5 >= 0 and num_of_coins > 0:
            possible_change(total - 5, num_of_coins - 1)
        if total - 1 >= 0 and num_of_coins > 0:
            possible_change(total - 1, num_of_coins - 1)
        return results


def main():
    dollar_amount = float(input("Enter the dollar amount: "))
    num_of_coins = int(input("Enter the number of coins: "))
    amount = int(dollar_amount * 100)
    results = possible_change(amount, num_of_coins)
    if True in results:
        print(f"Yes, is possible to make the amount of: {dollar_amount}$ with {num_of_coins} coins")
    else:
        print(f"No, is not possible to make the amount of: {dollar_amount}$ with {num_of_coins} coins")

if __name__ == "__main__":
    main()