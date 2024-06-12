import unittest
import prob_calculator

prob_calculator.random.seed(10)
class UnitTests(unittest.TestCase):
    def setUp(self):
        self.hat = prob_calculator.Hat(blue=5, red=4, green=2, yellow=0)
    
    def test_contents(self):
        actual = self.hat.contents
        expected = ["blue", "blue", "blue", "blue", "blue", "red", "red", "red", "red", "green", "green"]
        self.assertCountEqual(actual, expected, "Expected instance variable 'contents' to be a list of strings containing one item for each ball of the hat.")

    def test_draw(self):
        actual = self.hat.draw(3)
        expected = ["green", "blue", "red"]
        self.assertCountEqual(actual, expected, "Expected that the draw method returns a list containing 3 random elements of contents.")
        actual = self.hat.contents
        expected = ["blue", "blue", "blue", "blue", "red", "red", "red", "green"]
        self.assertCountEqual(actual, expected, "Expected that elements drawn throgh the draw method will be removed from contents.")
    
    def test_experiment(self):
        actual = prob_calculator.experiment(hat=self.hat, expected_balls={"red": 2, "green": 1}, num_balls_drawn=4, num_experiments=2000)
        expected = 0.251
        self.assertAlmostEqual(actual, expected, delta=0.01, msg="Expected experiment method to return a different probability.")
        hat2 = prob_calculator.Hat(red=5, yellow=4)
        actual = prob_calculator.experiment(hat=hat2, expected_balls={"orange": 1}, num_balls_drawn=9, num_experiments=1)
        expected = 0
        self.assertEqual(actual, expected, "Expected experiment method to return a different probability.")
        actual = prob_calculator.experiment(hat=hat2, expected_balls={"red": 5, "yellow": 4}, num_balls_drawn=9, num_experiments=1)
        expected = 1.0
        self.assertEqual(actual, expected, "Expected experiment method to return a different probability.")

if __name__ == "__main__":
    unittest.main()
