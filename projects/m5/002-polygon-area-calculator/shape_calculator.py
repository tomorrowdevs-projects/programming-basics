import math

class Rectangle:

    def __init__(self, width, height):
        self.width = width
        self.height = height

    def __str__(self):
        return f"Rectangle(width={self.width}, height={self.height})"
        
    def set_width(self, width):
        self.width = width
    
    def set_height(self, height):
        self.height = height

    def get_area(self):
        area = self.width * self.height
        return area
    
    def get_perimeter(self):
        perimeter =  2 * self.width + 2 * self.height
        return perimeter
    
    def get_diagonal(self):
        diagonal = math.sqrt((self.width ** 2 + self.height ** 2))
        return diagonal 
    
    def get_picture(self):
        picture = ''
        if self.width > 50 or self.height > 50:
            return 'Too big for picture.'
        else:
            for unit in range(self.height):
                picture += f"{'*' * self.width}\n"
        return picture
    
    def get_amount_inside(self, shape):
        x = self.width // shape.width
        y = self.height // shape.height
        amount = x * y
        return amount

class Square(Rectangle):
    def __init__(self, width, height=None):
        self.width = width
        if height is None:
            height = self.width
        super().__init__(width, height)

    def __str__(self):
        return f"Square(side={self.width})"

    def set_side(self, width, height=None):
        self.width = width
        if height is None:
            self.height = self.width

    def set_width(self, width, height=None):
        self.width = width
        if height is None:
            self.height = self.width
        
    def set_height(self, height, width=None):
        self.height = height
        if width is None:
            self.width = self.height
