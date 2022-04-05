class TypeBill:
    """ The class that ask a user to choose type of bill between: ambata, ambo, terno, quaterna, cinquina """
    def __init__(self, bill):
        self.bill = bill

    @staticmethod
    def type_of_bill():
        bill = ['ambata', 'ambo', 'terno', 'quaterna', 'cinquina']
        choose_bill = ''
        while True:
            type_bill = input(f"Choose type of bill between: ambata, ambo, terno, quaterna, cinquina\n")
            if type_bill in bill:
                choose_bill += type_bill
                break
            else:
                print("The type of bill is incorrect! Try again.\n")
        return choose_bill

