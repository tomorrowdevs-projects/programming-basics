class BetTypes:
    """
    Class used to store bet types as "Terno", "Cinquina" and includes methods to validate user bet choice and
    numbers to generate choice
    """
    TYPES = ["Ambata", "Ambo", "Terno", "Quaterna", "Cinquina"]

    @staticmethod
    def is_type_valid():
        type_choice = int(input("Enter value here-->: "))
        while type_choice > 5 or type_choice < 1:
            print("Please insert a valid choice!")
            type_choice = int(input("Enter value here-->: "))
        return type_choice

    @staticmethod
    def is_bet_valid(type_choice):
        numbers_amount = int(input("Enter value here-->: "))
        while numbers_amount < type_choice or numbers_amount > 10:
            print("Please insert a valid number amount!")
            numbers_amount = int(input("Enter value here-->: "))
        return numbers_amount
