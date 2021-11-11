class LottoGame:
    def start(self):
        n_of_bills = int(input("How many bills do you want to generate? min:1 max:5 or press 0 to exit: "))
        if n_of_bills == 0:
            print("Bye Bye!")
            return 0
        return n_of_bills

    def finish(self):
        print("Thank you! See you soon!")