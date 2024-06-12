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
        if self.width > 50 or self.height > 50:
            return "Too big for picture."
        else:
            s = ""
            for h in range(self.height):
                s += self.width * "*" + "\n"
            return s

    def get_amount_inside(self, other_shape):
        n_width = self.width // other_shape.width
        n_height = self.height // other_shape.height
        return n_width * n_height
        

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
        self.set_side(w)

    def set_height(self, h):
        self.set_side(h)