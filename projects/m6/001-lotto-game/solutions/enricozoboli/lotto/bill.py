import typing


class Bill:
    """Represent a bill object"""
    def __init__(
            self, bill_number: int,
            bill_type: str,
            city: str,
            numbers: typing.List[int]) -> None:

        self.bill_number = bill_number
        self.bill_type = bill_type.capitalize()
        self.city = city.capitalize()
        self.numbers = numbers

    def __str__(self) -> str:
        return f"Bill number {self.bill_number + 1}"\
                f"|city: {self.city}"\
                f"|type: {self.bill_type}"\
                f"|numbers: {self.numbers}."





