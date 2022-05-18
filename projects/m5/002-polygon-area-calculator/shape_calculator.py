class Rectangle:
    
    def __init__(self, width, height):
        self.width= width
        self.height= height
        
    def setUp(self):
        self.rect= Rectangle
    
    def set_width(self, width):
        self.width= width
    
    def set_height(self, height):
        self.height= height

    def get_area(self):
        area= self.width * self.height
        return area
    
    def get_perimeter(self):
        perimeter=  (2 * self.width + 2 * self.height)
        return perimeter
    
    def get_diagonal(self):
        diagonal = ((self.width ** 2 + self.height ** 2) ** 0.5)
        return diagonal
    
    def get_picture(self):
        if self.width > 50 or self.height > 50:
            too_long="Too big for picture."
            return (too_long)
        
        else:
            string = ""
            for y in range(self.height):
                for x in range(self.width):
                    string+="*"
                string+="\n"    
            return(string)
                
    def __repr__(self):
        return f"Rectangle(width={self.width}, height={self.height})"
    
    def get_amount_inside(self, Square):
        self.Square = Square
        #self.area= side*side
        result= self.get_area()//self.Square.get_area()
        return result
                
#subclass             
class Square(Rectangle):
    
    def __init__(self, side):
        self.side= side
        
    def setUp(self):
        self.sq= Square
        
    def set_side(self, side):
        self.side= side

    def get_area(self):
        area= self.side * self.side
        return area
    
    def get_perimeter(self):
        perimeter=  (4 * self.side)
        return perimeter
    
    def get_diagonal(self):
        diagonal = (self.side * (2**0.5))
        return diagonal
    
    def get_picture(self):
        if self.side > 50:
            too_long="Too big for picture."
            return (too_long)
        
        else:
            string = ""
            for y in range(self.side):
                for x in range(self.side):
                    string+="*"
                string+="\n"    
            return(string)
                

    def __repr__(self):
        return f"Square(side={self.side})"
                
   