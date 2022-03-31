<?php
require "budget.php";

$food = new Categories("Food");

$food->deposit(10000, "initial deposit");
$food->withdraw(2002.23, "bananas");
$food->withdraw(200, "fruit");


$clothing = new Categories("Clothing");
$food->transfer(200, $clothing);
$clothing->withdraw(23.55);
$clothing->withdraw(40);
$clothing->withdraw(50);
echo $food;
echo $clothing;
echo create_spend_chart([$food, $clothing]);



