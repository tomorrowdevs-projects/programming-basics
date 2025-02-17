class Rectangle:
    """
    Represents a rectangle.
    
    ...

    Attributes
    ----------
    width: int, float
        Width of the rectangle
    height: int, float
        Height of the rectangle
    
    Methods
    -------
    set_width(width):
        Set the width of the rectangle.
    set_height(height):
        Set the height of the rectangle.
    get_area():
        Get the area of the rectangle.
    get_perimeter():
        Get the perimeter of the rectangle.
    get_diagonal():
        Get the diagonal of the rectangle.
    get_picture():
        Returns a string that represents the rectangle using lines of "*"
    get_amount_inside():
        Returns the number of times the passed in shape could fit inside the shape (with no rotations).
    """
    def __init__(self, width, height):
        """
        Constructs all necessary attributes for the rectangle object.
        
        Parameters
        ----------
        width: int, float
            Width of the rectangle.
        height: int, float
            Height of the rectangle.        
        """
        self.width = width
        self.height = height

    def set_width(self, width):
        """
        Set the width of the rectangle.
        
        Parameters
        ----------
        width: int, float
            Width of the rectangle.
        
        Returns
        -------
        None

        Raises
        ------
        TypeError
            If width is not an int or a float.
        """
        if isinstance(width, (int, float)):
            self.width = width
        else:
            raise TypeError("The width attribute can be an int or a float.")
    
    def set_height(self, height):
        """
        Set the height of the rectangle.

        Parameters
        ----------
        height: int, float
            Height of the rectangle.
        
        Returns
        -------
        None

        Raises
        ------
        TypeError
            If height is not an int or a float.
        """
        if isinstance(height, (int, float)):
            self.height = height
        else:
            raise TypeError("The height attribute can be an int or a float.")              

    def get_area(self):
        """
        Get the area of the rectangle/square.

        Returns
        -------
        int, float
            Area of the rectangle/square
        """
        area = self.width * self.height
        return area
    
    def get_perimeter(self):
        """
        Get the perimeter of the rectangle/square.

        Returns
        -------
        int, float
            Perimeter of the rectangle/square.
        """
        perimeter = 2 * self.width + 2 * self.height
        return perimeter

    def get_diagonal(self):
        """
        Get the diagonal of the rectangle/square.
        
        Returns
        -------
        int, float
            Diagonal of the rectangle/square.
        """
        diagonal = (self.width**2+self.height**2)**(1/2)
        return diagonal

    def get_picture(self):
        """
        Returns a string that represents the shape using lines of "*".

        Returns
        -------
        str
            String that represents the shape. If the width or height is greater than 50, return the string: "Too big for picture.".
        """
        if self.width <= 50 and self.height <= 50:
            picture = ("*" * self.width + "\n") * self.height
            return picture
        return "Too big for picture."
    
    def get_amount_inside(self, another_shape):
        """
        Returns the number of times the passed in shape could fit inside the shape (with no rotations).

        Parameters
        ----------
        another_shape: Rectangle, Square
            Another shape which can be a rectangle or a square.
            
        Returns
        -------
        int
            The number of times the passed in shape could fit inside the shape.
        """
        amount = self.get_area() // another_shape.get_area()
        return amount
    
    def __str__(self):
        return "Rectangle(width={}, height={})".format(self.width, self.height)


class Square(Rectangle):
    """
    Represents a square.

    ...

    Attributes
    ----------
    width: int, float
        Width of the square
    height: int, float
        Height of the square
    
    Methods
    -------
    set_width(width):
        Set the width of the square, therefore also the height.
    set_height(height):
        Set the height of the square, therefore also the width.
    set_side(side):
        Set the side of the square, so both width and height.
    get_area():
        Get the area of the square.
    get_perimeter():
        Get the perimeter of the square.
    get_diagonal():
        Get the diagonal of the square.
    get_picture():
        Returns a string that represents the square using lines of "*"
    get_amount_inside():
        Returns the number of times the passed in shape could fit inside the shape (with no rotations).
    """
    def __init__(self, side):
        """
        Constructs all necessary attributes for the square object.

        Parameters
        ----------
        side: int, float
            Side lenght of the square.
        """
        super().__init__(width = side, height = side)
    
    def set_side(self, side):
        """
        Set the side of the square, so both width and height.

        Parameters
        ----------
        side: int, float
            Side lenght of the square.
        
        Returns
        -------
        None

        Raises
        ------
        TypeError
            If side is not an int or a float.
        """
        if isinstance(side, (int, float)):
            self.width, self.height = side, side
        else:
            raise TypeError("The lenght of the side can be an int or a float.")
    
    def set_width(self, width):
        """
        Set the width of the square, therefore also the height.

        Parameters
        ----------
        width: int, float
            Width of the square.
        
        Returns
        -------
        None
        
        Raises
        ------
        TypeError
            If width is not an int or a float.
        """
        if isinstance(width, (int, float)):
            self.width, self.height = width, width
        else:
            raise TypeError("The width can be an int or a float.")
    
    def set_height(self, height):
        """
        Set the height of the square, therefore also the width.

        Parameters
        ----------
        height: int, float
            Height of the square.
        
        Returns
        -------
        None

        Raises
        ------
        TypeError
            If height is not an int or a float.
        """
        if isinstance(height, (int, float)):
            self.width, self.height = height, height
        else:
            raise TypeError("The height can be an int or a float.")

    def __str__(self):
        return "Square(side={})".format(self.width)