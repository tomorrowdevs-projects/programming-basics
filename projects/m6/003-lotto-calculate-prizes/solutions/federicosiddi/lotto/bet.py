class BetTypes:
    """
    Class used to store bet types as "Terno", "Cinquina" and includes methods to validate user bet choice and
    numbers to generate choice and print infos about user choices
    """
    TYPES = ["Ambata", "Ambo", "Terno", "Quaterna", "Cinquina"]

    @staticmethod
    def bet_choice_info():
        """
        Prints info about how bet type choice has to be made
        """
        print("Type the corresponding number to select the bill type:")
        for x in range(5):
            print(BetTypes.TYPES[x], end=" " + "(" + str(x + 1) + ")" + "   ")
        print("")

    @staticmethod
    def numbers_choice_info(choice):
        """
        Prints info about how many numbers user can generate based on previous bet type choice

        :param choice: type int, previous bet type choice that will be used to constrain numbers to generate choice
        """
        print(f"How many numbers do you want to generate? Min:{choice} Max:10 ")

    @staticmethod
    def is_type_valid():
        """
        Function used to acquire and validate bet type choice
        """
        while True:
            try:
                type_choice = int(input("Enter value here-->: "))
                while type_choice > 5 or type_choice < 1:
                    print("Please insert a valid choice!")
                    type_choice = int(input("Enter value here-->: "))
                return type_choice
            except ValueError as err:
                print(f"Error: {err}")
                print("Please insert a valid choice!")

    @staticmethod
    def is_bet_valid(type_choice):
        """
        Function used to acquire and validate the amount of numbers to generate based on bet type choice
        """
        while True:
            try:
                numbers_amount = int(input("Enter value here-->: "))
                while numbers_amount < type_choice or numbers_amount > 10:
                    print("Please insert a valid number amount!")
                    numbers_amount = int(input("Enter value here-->: "))
                return numbers_amount
            except ValueError as err:
                print(f"Error: {err}")
                print("Please insert a valid choice!")
