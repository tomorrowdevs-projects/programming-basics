class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def __str__(self):
        output = f"Rectangle(width={self.width}, height={self.height})"
        return output
    
    def set_width(self, width):
        self.width = width
    
    def set_height(self, height):
        self.height = height
    
    def get_area(self):
        return self.width * self.height
    
    def get_perimeter(self):
        return 2 * self.width + 2 * self.height
    
    def get_diagonal(self):
        return (self.width ** 2 + self.height ** 2) ** .5
    
    def get_picture(self):
        if self.height > 50 or self.width > 50:
            return "Too big for picture."
        else:
            return (("*" * self.width) + "\n") * self.height
    
    def get_amount_inside(self, shape):
        res = (self.width // shape.width) * (self.height // shape.height)
        return res


class Square(Rectangle):
    def __init__(self, side):
        self.width = side
        self.height = side
    
    def __str__(self):
        output = f"Square(side={self.width})"
        return output

    def set_side(self, side):
        self.width = side
        self.height = side
    
    def set_width(self, side):
        self.set_side(side)
    
    def set_height(self, side):
        self.set_side(side)

# TEST
if __name__ == "__main__":
    rect = Rectangle(5, 10)
    print(rect.get_area())
    rect.set_width(3)
    print(rect.get_perimeter())
    print(rect)

    sq = Square(9)
    print(sq.get_area())
    sq.set_side(4)
    print(sq.get_diagonal())
    print(sq)