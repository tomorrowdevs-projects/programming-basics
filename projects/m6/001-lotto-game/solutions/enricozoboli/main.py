# Entry point of the program
import argparse
from lotto.lotto import Lotto  # type: ignore


def main():
    parser = argparse.ArgumentParser(description="Lotto bill generator")
    parser.add_argument("-n", "-bills_num",
                        help="Desired number of bills from 1 to 5(max)",
                        type=int,
                        choices=range(1, 6)
                        )
    args = parser.parse_args()
    Lotto(args.n)


if __name__ == "__main__":
    main()

