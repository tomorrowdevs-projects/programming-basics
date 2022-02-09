
class Rectangle:

    def __init__(self, width, height):

        self.width = width
        self.height = height
        

    def set_width(self, new_width):
        self.width = new_width

    def set_height(self, new_height):
        self.height = new_height

    def get_area(self):
        return self.width * self.height

    def get_perimeter(self):
        return 2 * self.width + 2 * self.height
    
    def get_diagonal(self):
        return (self.width ** 2 + self.height ** 2) ** .5

    def get_picture(self):
        if self.width <= 50 and self.height <= 50:
            line = '*' * self.width + '\n'
            return line * self.height
        else:
            return 'Too big for picture.'

    def get_amount_inside(self, shape):
        amount = self.get_area() // shape.get_area()
        return amount

    def __str__(self):
        return f'{self.__class__.__name__}(width={self.width}, height={self.height})'


class Square(Rectangle):

    def __init__(self, side):
        self.side = side
        super().__init__(width = side, height = side)
    
    def set_side(self, new_side):
        self.side = new_side
        self.height = new_side
        self.width = new_side

    def set_height(self, new_side):
        self.side = new_side
        self.height = new_side
        self.width = new_side
          
    def set_width(self, new_side):
        self.side = new_side
        self.height = new_side
        self.width = new_side
        
    def __str__(self):
        return f'{self.__class__.__name__}(side={self.side})'