import unittest
import shape_calculator

class UnitTests(unittest.TestCase):
    def setUp(self):
        self.rect = shape_calculator.Rectangle(10,5)
        self.sq = shape_calculator.Square(9)
    
    def test_subclass(self):
        actual = issubclass(shape_calculator.Square, shape_calculator.Rectangle)
        expected = True
        self.assertEqual(actual, expected, "Expected Square class to be a subclass of the Rectangle class.")
    
    def test_set_width_rectangle(self):
        self.rect.set_width(16)
        actual = self.rect.width
        expected = 16
        self.assertEqual(actual, expected, "Expected the width of the rectange to be 16.")
        self.rect.set_width(10.75)
        actual = self.rect.width
        expected = 10.75
        self.assertEqual(actual, expected, "Expected the width of the rectange to be 10.75")
    
    def test_set_height_rectangle(self):
        self.rect.set_height(3)
        actual = self.rect.height
        expected = 3
        self.assertEqual(actual, expected, "Expected the height of the rectangle to be 3.")
        self.rect.set_height(5.5)
        actual = self.rect.height
        expected = 5.5
        self.assertEqual(actual, expected, "Expected the height of the rectangle to be 5.5.")
    
    def test_set_width_square(self):
        self.sq.set_width(10)
        actual_width = self.sq.width
        expected_width = 10
        actual_height = self.sq.height
        expected_height = 10
        self.assertEqual(actual_width, expected_width, "Expected the width of the square to be 10.")
        self.assertEqual(actual_height, expected_height, "Expected the height of the square to be 10.")
        self.sq.set_width(8.4)
        actual_width = self.sq.width
        expected_width = 8.4
        actual_height = self.sq.height
        expected_height = 8.4
        self.assertEqual(actual_width, expected_width, "Expected the width of the square to be 8.4.")
        self.assertEqual(actual_height, expected_height, "Expected the height of the square to be 8.4.")   

    
    def test_set_height_square(self):
        self.sq.set_height(6)
        actual_height = self.sq.height
        expected_height = 6
        actual_width = self.sq.width
        expected_width = 6
        self.assertEqual(actual_height, expected_height, "Expected the height of the square to be 6.")
        self.assertEqual(actual_width, expected_width, "Expected the width of the square to be 6.")
        self.sq.set_height(6.5)
        actual_height = self.sq.height
        expected_height = 6.5
        actual_width = self.sq.width
        expected_width = 6.5
        self.assertEqual(actual_height, expected_height, "Expected the height of the square to be 6.5.")
        self.assertEqual(actual_width, expected_width, "Expected the width of the square to be 6.5.")
    
    def test_set_side(self):
        self.sq.set_side(5)
        actual_width = self.sq.width
        expected_width = 5
        actual_height = self.sq.height
        expected_height = 5        
        self.assertEqual(actual_width, expected_width, "Expected the width of the square to be 5.")
        self.assertEqual(actual_height, expected_height, "Expected the height of the square to be 5.")
        self.sq.set_side(4.12)
        actual_width = self.sq.width
        expected_width = 4.12
        actual_height = self.sq.height
        expected_height = 4.12        
        self.assertEqual(actual_width, expected_width, "Expected the width of the square to be 4.12.")
        self.assertEqual(actual_height, expected_height, "Expected the height of the square to be 4.12.")

    def test_get_area_rectangle(self):
        actual = self.rect.get_area()
        expected = 50
        self.assertEqual(actual, expected, "Expected the area of the rectangle to be 50.")

    def test_get_area_square(self):
        actual = self.sq.get_area()
        expected = 81
        self.assertEqual(actual, expected, "Expected the area of the square to be 81.")

    def test_get_perimeter_rectangle(self):
        actual = self.rect.get_perimeter()
        expected = 30
        self.assertEqual(actual, expected, "Expected the perimeter of the rectangle to be 30.")

    def test_get_perimeter_square(self):
        actual = self.sq.get_perimeter()
        expected = 36
        self.assertEqual(actual, expected, "Expected the perimeter of the square to be 36.")
    
    def get_diagonal_rectangle(self):
        actual = self.rect.get_diagonal()
        expected = 11.180339887498949
        self.assertEqual(actual, expected, "Expected the diagonal of the rectangle to be 11.180339887498949.")

    def get_diagonal_square(self):
        actual = self.sq.get_diagonal()
        expected = 12.727922061357855
        self.assertEqual(actual, expected, "Expected the diagonal of the square to be 12.727922061357855.")
    
    def test_get_picture_rectangle(self):
        actual = self.rect.get_picture()
        expected = "**********\n**********\n**********\n**********\n**********\n"
        self.assertEqual(actual, expected, "Expected different representation of the rectangle.")
        self.rect.set_width(51)
        actual = self.rect.get_picture()
        expected = "Too big for picture."
        self.assertEqual(actual, expected, "Expect the get_picture method to return the string 'Too big for the picture'.")
        self.rect.set_width(10)
        self.rect.set_height(51)
        actual = self.rect.get_picture()
        expected = "Too big for picture."
        self.assertEqual(actual, expected, "Expect the get_picture method to return the string 'Too big for the picture'.")

    def test_get_picture_square(self):
        actual = self.sq.get_picture()
        expected = "*********\n*********\n*********\n*********\n*********\n*********\n*********\n*********\n*********\n"
        self.assertEqual(actual, expected, "Expected different representation of the square.")
        self.sq.set_side(51)
        actual = self.sq.get_picture()
        expected = "Too big for picture."
        self.assertEqual(actual, expected, "Expect the get_picture method to return the string 'Too big for the picture'.")

    def test_get_amount_inside(self):
        self.rect.set_width(16)
        self.rect.set_height(8)
        self.sq.set_side(9)
        actual = self.rect.get_amount_inside(self.sq)
        expected = 1
        self.assertEqual(actual, expected, "Expected get_amount_inside to return 1.")
        sq2 = shape_calculator.Square(35)
        rect2 = shape_calculator.Rectangle(8,3)
        actual = sq2.get_amount_inside(rect2)
        expected = 51
        self.assertEqual(actual, expected, "Expected get_amount_inside to return 51.")

    def test_string_rectangle(self):
        actual = str(self.rect)
        expected = "Rectangle(width=10, height=5)"
        self.assertEqual(actual, expected, "Expected different string representation of the rectangle.")
    
    def test_string_square(self):
        actual = str(self.sq)
        expected = "Square(side=9)"
        self.assertEqual(actual, expected, "Expected different string representation of the square.")
    
if __name__ == "__main__":
    unittest.main()