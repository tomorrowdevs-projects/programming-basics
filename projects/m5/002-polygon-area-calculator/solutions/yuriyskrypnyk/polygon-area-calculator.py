class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def __str__(self):
        return f'Rectangle(width={self.width}, height={self.height})'

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
        if self.width >= 50 or self.height >= 50:
            return 'Too big for picture.'
        else:
            output = ''
            for _ in range(self.height):
                output += '*' * self.width + '\n'
            return output

    def get_amount_inside(self, shape):
        result = (self.height * self.width) / (shape.width * shape.height)
        if result < 1:
            return 0
        else:
            return int(result)


class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)
        self.side = side

    def __str__(self):
        return f'Square(side={self.width})'

    def set_side(self, side):
        self.width = side
        self.height = side
        self.side = side
