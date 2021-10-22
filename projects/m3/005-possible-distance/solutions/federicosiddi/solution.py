from functools import lru_cache


@lru_cache
def possible_change(total, num_of_coins, results=False):
    # Base case
    # if we have found a result return True
    if results:
        return results
    # if initial num_of_coins * the largest coin (.25) is lower than total, then isn't possible to obtain the total
    if num_of_coins * 25 < total:
        return results
    if total == 0 and num_of_coins == 0:
        # if we have 0 coins and 0 total it means that we have found a combination
        # True will be appended to the results list
        results = True
        return results

    # Recursive Case
    # Each time we call the function we decrement the coin from the total and n°1 coin from the num_of_coins
    if num_of_coins * 25 <= total and num_of_coins > 0:
        # if total is a multiple of 25 we decrement 25 from the total
        results = possible_change(total - 25, num_of_coins - 1, results)
    if num_of_coins * 10 <= total and num_of_coins > 0:
        # if total is a multiple of 10 we decrement 10 from the total
        results = possible_change(total - 10, num_of_coins - 1, results)
    if num_of_coins * 5 <= total and num_of_coins > 0:
        # if total is a multiple of 5 we decrement 5 from the total
        results = possible_change(total - 5, num_of_coins - 1, results)
    if num_of_coins <= total and num_of_coins > 0:
        results = possible_change(total - 1, num_of_coins - 1, results)
    return results


def main():
    dollar_amount = float(input("Enter the dollar amount: "))
    num_of_coins = int(input("Enter the number of coins: "))
    amount = int(dollar_amount * 100)
    results = possible_change(amount, num_of_coins)
    if results:
        print(f"Yes, is possible to make the amount of: {dollar_amount}$ with {num_of_coins} coins")
    else:
        print(f"No, is not possible to make the amount of: {dollar_amount}$ with {num_of_coins} coins")

if __name__ == "__main__":
    main()