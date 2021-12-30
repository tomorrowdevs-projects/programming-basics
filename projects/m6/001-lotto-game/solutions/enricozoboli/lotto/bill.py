import typing


class Bill:
    """
    A class representing a bill object.
    :parameter: bill_number, number of the bill
    :parameter: bet_type, type of bet defined in bet_type class
    :parameter: city, the city defined in city class
    :parameter: numbers, the numbers generated in NumbersGenerator
    """
    def __init__(
            self, bill_number: int,
            bet_type: str,
            city: str,
            numbers: typing.List[int]) -> None:

        self.bill_number = bill_number
        self.bet_type = bet_type.capitalize()
        self.city = city.capitalize()
        self.numbers = numbers

    def __str__(self) -> str:
        return f"Bill number {self.bill_number + 1}"\
                f"|city: {self.city}"\
                f"|type: {self.bet_type}"\
                f"|numbers: {self.numbers}."





