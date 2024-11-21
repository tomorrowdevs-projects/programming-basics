<?php
require "shape_calculator.php";

$rec = new Rectangle(5,10);

echo $rec->get_picture();
echo  "<br/>";
echo "Area:" . $rec->get_area();
echo  "<br/>";
$rec->set_width(3);
echo  "<br/>";
echo "Perimeter:" . $rec->get_perimeter();
echo  "<br/>";
echo $rec;

$square = new Square(9);
echo  "<br/>";
echo "Area:" . $square->get_area();
echo  "<br/>";
$square->set_side(4);
echo  "<br/>";
echo "Diagonal:" . $square->get_diagonal();
echo  "<br/>";
echo $square;

?>