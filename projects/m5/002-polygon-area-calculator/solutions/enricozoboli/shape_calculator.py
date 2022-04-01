from __future__ import annotations


class Rectangle:
    def __init__(self, width: int | float, height: int | float) -> None:
        self.width = width
        self.height = height

    def __str__(self) -> str:
        return f"{self.__class__.__name__}(width={self.width},"\
               f" height={self.height})"

    def set_width(self, new_width: int | float) -> None:
        self.width = new_width

    def set_height(self, new_height: int | float) -> None:
        self.height = new_height

    def get_area(self) -> int | float:
        return self.width * self.height

    def get_perimeter(self) -> int | float:
        return 2 * self.width + 2 * self.height

    def get_diagonal(self) -> int | float:
        return (self.width ** 2 + self.height ** 2) ** 0.5

    def get_picture(self) -> str:
        output_pic = ""
        # without int casting the typechecker throw an incompatibility error.
        line_range = int(self.height)
        if self.width <= 50 and self.height <= 50:
            for line in range(line_range):
                output_pic += '*' * int(self.width) + '\n'
        else:
            output_pic += "Too big for picture."
        return output_pic

    def get_amount_inside(self, shape: Rectangle) -> int:
        height_fit = self.height // shape.height
        width_fit = self.width // shape.width
        return int(height_fit) * int(width_fit)


class Square(Rectangle):
    def __init__(self, side: int | float) -> None:
        super().__init__(side, side)
        self.side = side

    def __str__(self) -> str:
        return f"{self.__class__.__name__}(side={self.side})"

    def set_side(self, new_side: int | float) -> None:
        self.side = new_side
        Rectangle.set_width(self, new_side)
        Rectangle.set_height(self, new_side)

    def set_width(self, new_width: int | float) -> None:
        self.side = new_width

    def set_height(self, new_height: int | float) -> None:
        self.side = new_height

