import math

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def __str__(self):
        return f"Rectangle(width={self.width}, height={self.height})"

    def set_width(self, w):
        self.width = w

    def set_height(self, h):
        self.height = h

    def get_area(self):
        return self.width * self.height

    def get_perimeter(self):
        return self.width * 2 + self.height * 2

    def get_diagonal(self):
        return math.sqrt(self.width**2+self.height**2)

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
        self.side = s
        Rectangle.set_width(self, s)
        Rectangle.set_height(self, s)

    def set_width(self, w):
        self.side = w
        Rectangle.set_width(self, w)
        Rectangle.set_height(self, w)

    def set_height(self, h):
        self.side = h
        Rectangle.set_width(self, h)
        Rectangle.set_height(self, h)