import argparse
from lotto.lottogame import LottoGame


def main():
    parser = argparse.ArgumentParser(description="Italian Lotto ticket generator")
    parser.add_argument("-n", "-num_ticket", help="Number of tickets", type=int)
    args = parser.parse_args()
    n_tickets = args.n
    if n_tickets <= 0:
        return 0
    elif n_tickets > 5:
        print("Max printable tickets is 5")
        return -1
    else:
        game = LottoGame(n_tickets)

if __name__ == "__main__":
    main()
