class Rectangle:
    def __init__(self, width, height):
        #class object initialized with width and height attributes
        self.width = width
        self.height = height

    #methods for setting width and height to the given values
    def set_width(self, width):
        self.width = width
    def set_height(self, height):
        self.height = height

    def get_area(self):
        area = float(self.width) * float(self.height)
        return area

    def get_perimeter(self):
        perimeter = 2 * self.width + 2 * self.height
        return perimeter

    def get_diagonal(self):
        diagonal = (self.width**2 + self.height**2) **.5
        return diagonal

    #returns a string that represents the shape using lines of "*"
    def get_picture(self):
        if self.width > 50 or self.height > 50:
            return "Too big for picture."
        else:
            picture = ""
            for line in range(self.height):
                picture += "*" * self.width + "\n"
            return picture
    
    #takes another shape as an argument and returns the times that shape could fit inside the first shape
    def get_amount_inside(self, shape2):
        #with floor division i can find how many times the area of the second shape is repeated inside the first one
        width_fit = self.width // shape2.width
        height_fit = self.height // shape2.height
        fit = width_fit * height_fit
        return fit

    #if an instance of a Rectangle is represented as a string
    def __str__(self):
        return "Rectangle(width={}, height={})".format(self.width, self.height)

#Square class is a subclass of Rectangle
class Square(Rectangle):
    def __init__(self, side):
        #super() is giving access to methods of class Rectangle
        super().__init__(side, side)

    #side is both width and height
    def set_side(self, side):
        self.width = side
        self.height = side

    #if an instance of a Square is represented as a string
    def __str__(self):
        return "Square(side={})" .format(self.width)