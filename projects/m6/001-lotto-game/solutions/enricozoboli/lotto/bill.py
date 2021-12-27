import typing


class Bill:
    """Represent a bill object"""
    def __init__(
            self, bill_number: int,
            bill_type: str,
            city: str,
            numbers: typing.List[int]) -> None:

        self.bill_number = bill_number
        self.bill_type = bill_type
        self.city = city
        self.numbers = numbers

    def __str__(self) -> str:
        return f"Bill number {self.bill_number}| city: {self.city}| "\
            f"type: {self.bill_type}| numbers: {self.numbers}."



