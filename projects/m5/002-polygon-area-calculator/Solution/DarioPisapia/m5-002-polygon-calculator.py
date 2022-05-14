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
        return self.width * self.height

    def get_perimeter(self):
        return self.width * 2 + self.height * 2

    def get_diagonal(self):
        return (self.width ** 2 + self.height ** 2) **0.5
    
    def get_picture(self):
        if self.width > 50 or self.height > 50:
            return "Too big for picture."
        else:
            return ("*"*self.width+"\n")*self.height
 
    def get_amount_inside(self, shape):
        shape_w = shape.width
        shape_h = shape.height
        num_w = self.width//shape_w
        num_h = self.height//shape_h
        return num_w * num_h
    

class Square(Rectangle):
    def __init__(self, side):
        super().__init__(width=side, height=side)
        self.side = side
    
    def __str__(self):
        return f"Square(side={self.side})"
        
    def set_width(self, width):
        self.side = width
        self.width = width
        self.height = width

    def set_height(self, height):
        self.side = height
        self.width = height
        self.height = height

    def set_side(self, side):
        self.side = side
        self.width = side
        self.height = side
