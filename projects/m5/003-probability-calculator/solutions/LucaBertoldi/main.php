<?php
require "prob_calculator.php";

$hat = new Hat(red:2, green:1, yellow:3);

echo "Probability:" . experiment(hat:$hat, expected_balls:'{"red":2, "green":1}', num_balls_drawn:5, num_experiments:100);

?>