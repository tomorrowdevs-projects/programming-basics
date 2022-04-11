import argparse
from lotto.lottogame import LottoGame


def main(num_of_tickets):
    if n_tickets <= 0:
        return 0
    elif n_tickets > 5:
        print("Max printable tickets is 5")
        return -1
    else:
        LottoGame(num_of_tickets)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Italian Lotto ticket generator")
    parser.add_argument("-n", "-num_ticket", help="Number of tickets", type=int)
    args = parser.parse_args()
    n_tickets = args.n
    main(n_tickets)
