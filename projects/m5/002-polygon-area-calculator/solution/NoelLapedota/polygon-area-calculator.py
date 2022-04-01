class Rectangle :
    
    def __init__(self, width, heigth):
            self.width = width
            self.heigth = heigth

    def set_width(self, width):
        self.width = width
        return f'Rectangle(width={width}, height={self.heigth})'

    def set_heigth (self, height):
         self.height = height
         return f'Rectangle(width={self.width}, height={height})'

    def get_area(self):
        area = f"{self.width * self.heigth}"
        return  area

    def get_perimeter(self):
        return (2 * self.width) + (2 * self.heigth)

    def get_diagonal(self):
        return  ((self.width ** 2 + self.heigth ** 2) ** .5)

    def get_picture(self):
        if self.width > 50 or self.height > 50:
           print("Too big for the picture")
        n_simbol = '*' * self.width
        for count in range (self.height):
            return n_simbol

    def get_amount_inside(self, shape):
        res = (self.width // shape.width) * (self.height // shape.height)
        return res

    def __str__(self):
        return f'width: {self.width}\nheigth: {self.heigth}'



class Square(Rectangle):
    
    def __init__(self, width):
            self.width = width
            self.heigth = width

    def set_side(self, width):
         return f' Square(side={width}'
            
    def set_width(self, width):
        self.width = width
        return width

    def set_heigth (self, height):
         self.height = height
         return height
        
    def __str__(self):
        return f'width: {self.width}\nheigth: {self.heigth}'