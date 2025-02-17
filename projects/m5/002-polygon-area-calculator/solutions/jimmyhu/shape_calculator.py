class Rectangle:
    def __init__(self,  width: int, height: int):

        #verification
        assert isinstance(width, int), f"The Type of the Width is not valid"
        assert isinstance(height, int), f"The Type of the height is not valid"
        assert width >= 0, f"The value for Width must be Greater than 0"
        assert height >= 0, f"The value for Width must be Greater than 0"

        #Assign to self object
        self.__width = width
        self.__height = height

    #getter and setter of width
    @property
    def width(self):
        return self.__width

    def set_width(self, new_width: int):
        if new_width < 0:
            raise Exception("The width value must be greater than 0")
        self.__width = new_width

    #getter and setter of height
    @property
    def height(self):
        return self.__height


    def set_height(self, new_height: int):
        if new_height < 0:
            raise Exception("The height value must be greater than 0")
        self.__height = new_height
    
    def get_area(self):
        return self.__width * self.__height

    def get_perimeter(self):
        return (2 * self.__width) + (2 * self.__height)
    
    def get_diagonal(self):
        return ((self.__width ** 2) + (self.__height ** 2)) ** .5

    def get_picture(self):
        if self.__width > 50 or self.__height > 50:
            return 'Too big for picture.'
        else:
            box = ''
            for i in range(self.__height):
                box += '*'*self.__width + '\n'
            return box
    
    def get_amount_inside(self, other_shape):
        if isinstance(other_shape, Rectangle) or isinstance(other_shape, Square):
            if other_shape.width > self.__width or other_shape.height > self.__height:
                return 0
            else:
                return int(self.get_area() / other_shape.get_area())
        else:
            raise Exception('The other shape must be a class rectangle or square')
    
    def __repr__(self):
        return f"Rectangle(width={self.__width}, height={self.__height})"


class Square(Rectangle):
    def __init__(self, side: int) :
        super().__init__(side,side)

        # verification
        assert isinstance(side, int), f"The Type of the Width is not valid"
        assert side >= 0, f"The value for Width must be Greater than 0"

        #Assign to self object
        self.__width = super().width
        self.__height = super().height
        self.__side = side

    def set_side(self, new_side: int):
        if new_side > 0:
            self.__side = new_side
            super().set_width(new_side)
            super().set_height(new_side)
        else:
            raise Exception('The new side must be grater than 0')
    
    def set_width(self, new_side: int):
        self.set_side(new_side)
    
    def set_height(self, new_side: int):
        self.set_side(new_side)

    def __repr__(self):
        return f"Square(side={self.__side})"
    


def main():
    
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

if __name__ == '__main__':
    main()