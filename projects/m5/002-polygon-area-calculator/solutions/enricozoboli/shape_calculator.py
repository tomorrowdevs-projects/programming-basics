class Rectangle:
    def __init__(self, width: int | float, height: int | float) -> None:
        self.width = width
        self.height = height

    def __str__(self) -> None:
        pass

    def set_width(self, width: int | float) -> int | float:
        pass

    def set_height(self, height: int | float) -> int | float:
        pass

    def get_area(self) -> int | float:
        pass

    def get_perimeter(self) -> int | float:
        pass

    def get_diagonal(self) -> int | float:
        pass

    def get_picture(self) -> str:
        pass

    def get_amount_inside(self) -> int:
        pass


class Square(Rectangle):
    def __init__(self, width: int | float) -> None:
        super().__init__(width, width)

    def set_side(self, side: int | float) -> None:
        pass
