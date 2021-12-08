class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def __str__(self):
        return f"Rectangle(width={self.width}, height={self.height})"

    def set_width(self, w):
        pass

    def set_height(self, h):
        pass

    def get_area(self):
        pass

    def get_perimeter(self):
        pass

    def get_diagonal(self):
        pass

    def get_picture(self):
        pass

    def get_amount_inside(self):
        pass

class Square(Rectangle):
    def __init__(self, side):
        self.side = side
        Rectangle.__init__(self, side, side)

    def __str__(self):
        return f"Square(side={self.side})"

    def set_side(self, s):
        pass

    def set_width(self, w):
        pass

    def set_height(self, h):
        pass
