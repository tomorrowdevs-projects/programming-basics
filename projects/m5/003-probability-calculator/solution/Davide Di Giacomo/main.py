# This entrypoint file to be used in development. Start by reading README.md
import prob_calculator
from unittest import main

prob_calculator.random.seed(76)
hat = prob_calculator.Hat(blue=3, red=1, green=5)
probability = prob_calculator.experiment(
    hat=hat,
    true_balls={"blue": 2,
                    "red": 1},
    find_num_balls=4,
    Attempts=3000)
print("Probability:", probability)

# Run unit tests automatically
main(module='test_module', exit=False)
