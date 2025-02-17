class ChooseNumber:
    """ The class that asks the user to choose the number of numbers to generate """
    @staticmethod
    def choose_of_number(type_of_bill):
        choose_number = 0
        bill = {'ambata': 1, 'ambo': 2, 'terno': 3, 'quaterna': 4, 'cinquina': 5}
        while True:
            number_bill = int(input(f"Chose the number, max 10!\n"))
            if bill[type_of_bill] > number_bill:
                print("You cannot choose the number to generate less than type of bill. Try again!")
            elif 0 < number_bill < 11:
                choose_number += number_bill
                break
            else:
                print("The number is not from 0 to 10! Try again.\n")
        return choose_number

