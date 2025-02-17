class Rectangle:
    '''
    Represents a rectangle

    attributes: width, height
    '''

    def __init__(self, width:float, height:float):
        self.width = width
        self.height = height

    def __str__(self) -> str:
        return f"Rectangle(width={self.width}, height={self.height})"
    
    def set_width(self,width):
        self.width = width

    def set_height(self,height):
        self.height = height


    def get_area(self) -> float:
        '''
        Returns area (`width * height`)
        '''
        return (self.width)*(self.height)

    def get_perimeter(self) -> float:
        '''
        Returns perimeter (`2 * width + 2 * height`)
        '''
        return (2*self.width)+(2*self.height)

    def get_diagonal(self) -> float:
        '''
        Returns diagonal (`(width ** 2 + height ** 2) ** .5`)
        '''
        return (self.width**2 + self.height**2)**0.5

    def get_picture(self):
        '''
        Returns a string that represents the shape using lines of "\*". 
        The number of lines should be equal to the height and the number of "\*" in each line should be equal to the width. 
        There should be a new line (`\n`) at the end of each line. 
        If the width or height is larger than 50, this should return the string: "Too big for picture. '''
        picture=""
        if self.width > 50 or self.height > 50:
            picture = "Too big for picture."
        else:                
            for h in range(0,self.height):
                for w in range(0,self.width):
                    picture += "*"
                picture += "\n"

        return picture
        


    def get_amount_inside(self,other): 
        '''
        Takes another shape (square or rectangle) as an argument. 
        Returns the number of times the passed in shape could fit inside the shape (with no rotations). 
        For instance, a rectangle with a width of 4 and a height of 8 could fit in two squares with sides of 4.

        QUANTE VOLTE OTHER ENTRA IN SELF
        '''
        area1 = self.get_area()
        area2 = other.get_area()
        return area1 // area2


class Square(Rectangle):
    '''
    Represents a square, so with height = width
    '''
    
    def __init__(self, side:float):
        super().__init__(side, side)

    def __str__(self) -> str:
        return f"Square(side={self.width})"
    
    def set_side(self,side:float):
        self.set_height(side)
        self.set_width(side)
